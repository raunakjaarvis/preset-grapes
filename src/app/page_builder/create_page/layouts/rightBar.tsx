'use client'

import { useState, forwardRef, ReactElement } from 'react'

// redux
import { useSelector, useDispatch } from '@/store/store'
import {
    setSections,
    setEditSectionIndex, 
    setUndoStacks
} from '@/store/projects/page_builder'
import { PageType, HistoryObject } from '@/types/page_builder'

import { Component } from "grapesjs"

// antd
import { Button, Dropdown, MenuProps, Space, Tabs, Typography, Menu } from 'antd'
const { Title, Text } = Typography

import styled from 'styled-components'

// dnd-kit module
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
    DndContext,
    closestCenter,
    MouseSensor, 
    useSensor,
    useSensors,
    DragOverlay
} from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

// icons
import { MoreOutlined } from '@ant-design/icons'
import Lock2Icon from '@/icons/page_builder/lock-icon-2.svg'
import LayoutGridThreeIcon from '@/icons/page_builder/layout-grid-three-icon.svg'
import ImageTwoIcon from '@/icons/page_builder/image-two-icon.svg'
import SpacingVerticalIcon from '@/icons/page_builder/spacing-vertical-icon.svg'
import DraggableIcon from '@/icons/page_builder/draggable.svg'

// import modal
import EditImageModal from '../modals/edit-image-modal'
import EditGalleryModal from '../modals/edit-gallery-modal'
import EditListModal from '../modals/edit-list-modal';
import EditMapModal from '../modals/edit-map-modal'
import EditVideoModal from '../modals/edit-video-modal'

// pannel
import { 
    SPText, 
    SPSectionHeader, 
    SPSelectionColor, 
    SPBackground, 
    SPSectionSizeAndPaddings, 
    SPMinHeight, 
    SPImage, 
    SPGallery, 
    SPVideoSection, 
    SPList, 
    SPListItem, 
    SPMap, 
    SPJobs, 
    SPJobCardLayout, 
    SPJobFilters, 
    SPJobGroups, 
    SPJobTabs, 
    SPQuotes, 
    SPListSettings, 
} from '../pannels';

import {
    HT_SECTION_REMOVE, 
    HT_SECTION_EDIT, 
    HT_SECTION_MOVE, 


    TT_TEXT, 
    TT_IMAGE, 
    TT_GALLERY, 
    TT_VIDEO, 
    TT_LIST, 
    TT_MAP, 
    TT_JOBS, 
    TT_QUOTES, 

    CT_VIDEO_CONTAINER, 
    CT_POSTER_CONTAINER, 
    CT_IFRAME, 

    CT_HEADER, 
    CT_CONTENT, 
    CT_BUTTON, 
    CT_IMAGE, 
    CT_GALLERY, 
    CT_VIDEO, 
    CT_VIDEO_POSTER_IMAGE, 
    CT_LIST, 
    CT_LIST_ITEM, 
    CT_MAP, 
    CT_JOB, 
    CT_JOB_CARD, 
    CT_JOB_FILTER, 
    CT_JOB_GROUP, 
    CT_QUOTE, 
    CT_LIST_SETTING, 
} from '../constants'

import {
    DI_DEFAULT, 

    SECTION_STATE_NORMAL, 
    SECTION_STATE_EDIT
} from '../constants'


const items: MenuProps['items'] = [
    {
      label: 'Edit Section',
      key: 'edit',
    },
    {
      label: 'Remove Section',
      key: 'remove',
    },
  ]


export default function RightBar() {

    const dispatch = useDispatch()
    const { editState, selectedComponentType, editingSectionType, sections, actionIsHuman, undoStackIndex, undoStacks, deviceType } = useSelector((store : any) => store.pageBuilder)


    const handleMenuItemClick = (e: any, index: number) => {
        if(e?.key === "remove") {
            const newSections = [...sections]
            const removedSection = newSections.splice(index, 1)
            dispatch(setSections(newSections))

// ============== save to history stack ========================================================
            if(actionIsHuman) {
                const newUndoStack: HistoryObject = {
                    step            : undoStackIndex + 1, 
                    sectionIndex    : index, 
                    sectionData     : removedSection, 
                    actionType      : HT_SECTION_REMOVE, 
                }

                const newStacks = [...undoStacks]

                dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
            }
// =============================================================================================


        } else if (e?.key === 'edit') {
            dispatch(setEditSectionIndex(index))

// ============== save to history stack ========================================================
            if(actionIsHuman) {
                const newUndoStack: HistoryObject = {
                    step            : undoStackIndex + 1, 
                    sectionIndex    : index, 
                    sectionData     : sections[index], 
                    actionType      : HT_SECTION_EDIT, 
                }

                const newStacks = [...undoStacks]
    
                dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
            }
// =============================================================================================

        }
    };


// ======================== Drag and Drop

    const [ activeId, setActiveId ] = useState(null);
    const [ selectItem, setSelectItem ] = useState<ReactElement>(null)

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
              distance: 10,
            },
          })
    );

    function handleDragEnd(event: any) {
        const { active, over } = event;
        if (active.id !== over.id) {
            const newSections = sections.slice()
            const oldIndex = sections.findIndex((i: PageType) => i?.id === active.id)
            const newIndex = sections.findIndex((i: PageType) => i?.id === over.id)

            const [ reorderedItem ] = newSections.splice(oldIndex, 1)
            newSections.splice(newIndex, 0, reorderedItem)

            dispatch(setSections(newSections))

// ============== save to history stack ========================================================
            if(actionIsHuman) {
                const newUndoStack: HistoryObject = {
                    step            : undoStackIndex + 1, 
                    sectionIndex    : newIndex, 
                    preSectionIndex : oldIndex, 
                    sectionData     : reorderedItem, 
                    actionType      : HT_SECTION_MOVE, 
                }

                const newStacks = [...undoStacks]

                dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
            }
// =============================================================================================
        }
        setActiveId(null);
    }

    function handleDragStart(event: any) {
        const { active } = event;
        const sectionIndex = sections.findIndex((i: PageType) => i?.id === active.id)
        const section = sections[sectionIndex]
        setSelectItem(
            <BorderSectionInDiv>
                <div className="flex items-center">
                    <DraggableIcon className="mx-1" />
                    <Space className='block'>
                        <BoldH5> {section.type} </BoldH5>
                        <Text className="text-[#666666]">Canbe edited in theme</Text>
                    </Space>
                </div>
                <Space>
                    <Dropdown menu={{items}} placement="bottomRight">
                        <MoreOutlined className='text-xl' />
                    </Dropdown>
                </Space>
            </BorderSectionInDiv>
        )
        setActiveId(active.id);
    }

    return (
        <SideDiv className={`relative pb-8 ${deviceType !== DI_DEFAULT && 'hidden'}`}>
            {
                editState === SECTION_STATE_NORMAL ? 
                
                <div className='px-4 pt-2'>
                    <Title level={5} className='mb-4'>Theme</Title>
                    <BorderOutDiv>

                        <div className={`justify-between flex mb-4`}>
                            <Space className='block'>
                                <Title level={5} className='!mb-[0px]'>Default Theme</Title>
                                <Text>Used on {}Pages</Text>
                            </Space>
                            <Space>
                                <Dropdown menu={{ items }} placement="bottomRight">
                                    <MoreOutlined className='text-xl' />
                                </Dropdown>
                            </Space>
                        </div>
                        <BorderInDiv >
                            <Space className='block'>
                                <BoldH5>This is a heading</BoldH5>
                                <Text>This is a paragraph</Text>
                            </Space>
                            <div className='block mt-4'>
                                <Button type='primary' className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none`} > Button </Button>
                                <Button className={`mx-1 `}> Button</Button>
                                <Button type='link' className='mx-1 p-0 text-[#294753]' > Link</Button>
                            </div>
                        </BorderInDiv>
                    </BorderOutDiv>
                    <Title level={5} className='my-4'>Sections</Title>
                    <BorderOutDiv>


                        <BorderSectionInDiv>
                            <Space className='block'>
                                <BoldH5>Navigation <Lock2Icon className="inline-block" /></BoldH5>
                                <Text className="text-[#666666]">Canbe edited in theme</Text>
                            </Space>
                            <Space>
                                <Dropdown menu={{ items }} placement="bottomRight">
                                    <MoreOutlined className='text-xl' />
                                </Dropdown>
                            </Space>
                        </BorderSectionInDiv>

{/* ============================== drag and drop ========================= */}
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                            onDragStart={handleDragStart}
                            >
                            <SortableContext items={sections} strategy={verticalListSortingStrategy}>
                                {sections.map((section: PageType, index: number) => (

                                <div style={{ opacity: section.id === activeId ? 0 : 1 }} key={`key_${index}`}>
                                    <SortableItem key={section.id} id={section.id}>
                                        <BorderSectionInDiv>
                                            <div className="flex items-center">
                                                <DraggableIcon className="mx-1" />
                                                <Space className='block'>
                                                    <BoldH5> {section.type} </BoldH5>
                                                    <Text className="text-[#666666]">Canbe edited in theme</Text>
                                                </Space>
                                            </div>
                                            <Space>
                                                <Dropdown menu={{items, onClick: (e) => handleMenuItemClick(e, index)}} placement="bottomRight">
                                                    <MoreOutlined className='text-xl' />
                                                </Dropdown>
                                            </Space>
                                        </BorderSectionInDiv>
                                    </SortableItem>
                                </div>

                                ))}
                            </SortableContext>
                            <DragOverlay>{activeId && selectItem}</DragOverlay>
                        </DndContext>





                        <BorderSectionInDiv>
                            <Space className='block'>
                                <BoldH5>Footer <Lock2Icon className="inline-block" /></BoldH5>
                                <Text className="text-[#666666]">Canbe edited in theme</Text>
                            </Space>
                            <Space>
                                <Dropdown menu={{ items }} placement="bottomRight">
                                    <MoreOutlined className='text-xl' />
                                </Dropdown>
                            </Space>
                        </BorderSectionInDiv>



                    </BorderOutDiv>
                </div>
                
                :

                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: <LayoutGridThreeIcon /> ,
                            key: '1',
                            children: <div className="h-full overflow-auto relative">
                                {
                                    editingSectionType === TT_TEXT && 
                                    <>
                                        <SPText /> 
                                    </>
                                }

                                {
                                    editingSectionType === TT_IMAGE && 
                                    <>
                                        <SPImage /> 
                                    </>
                                }  
                                {
                                    editingSectionType === TT_GALLERY && 
                                    <>
                                        <SPGallery /> 
                                    </>
                                } 
                                {
                                    editingSectionType === TT_VIDEO && 
                                    <>
                                        <SPVideoSection /> 
                                    </>
                                }
                                {
                                    editingSectionType === TT_LIST && 
                                    <>
                                        <SPList /> 
                                        <SPListItem /> 
                                    </>
                                }

                                {
                                    editingSectionType === TT_MAP && 
                                        <>
                                            <SPMap /> 
                                        </>
                                }
                                {
                                    editingSectionType === TT_JOBS && 
                                    <>
                                        <SPJobs /> 
                                        <SPJobCardLayout /> 
                                        <SPJobFilters /> 
                                        <SPJobGroups /> 
                                        <SPJobTabs />
                                    </>
                                }
                                {
                                    editingSectionType === TT_QUOTES && 
                                    <>
                                        <SPQuotes />
                                        <SPListSettings />
                                    </>
                                }
                                    <SPSectionHeader /> 

                            </div>,
                        },
                        {
                            label: <ImageTwoIcon className="bld-stroke-black" />,
                            key: '2',
                            children: <div className="h-full overflow-auto">
                                <SPSelectionColor />
                                <SPBackground />    
                            </div> ,
                        },
                        {
                            label: <SpacingVerticalIcon className="bld-stroke-black" />,
                            key: '3',
                            children: <div className="h-full overflow-auto ">
                                <SPSectionSizeAndPaddings />
                                <SPMinHeight />
                            </div>,
                        },

                    ]}
                    className={`bld-leftSettingTab h-full`}
                    hideAdd
                />
            }
            {
                editState === SECTION_STATE_EDIT && 
                <div className={`bottom-0 block w-full absolute text-center px-6`}>
                    {
                        selectedComponentType === CT_IMAGE && <EditImageModal />
                    }
                    {
                        selectedComponentType === CT_GALLERY && <EditGalleryModal />
                    }
                    {
                        (selectedComponentType === CT_VIDEO_CONTAINER || selectedComponentType === CT_VIDEO || selectedComponentType === CT_IFRAME || selectedComponentType === CT_VIDEO_POSTER_IMAGE) && <EditVideoModal />
                    }
                    {
                        editingSectionType === TT_LIST && <EditListModal />
                    }
                    {
                        selectedComponentType === CT_MAP && <EditMapModal />
                    }
                    

                </div>
            }
        </SideDiv>
    )
}


const SideDiv = styled.div`
    border-left: 1px solid #EAE7E6;
    background-color: white;
    min-width: 300px;
    min-height: calc(100vh - 72px);
    overflow: auto;
`

const BorderInDiv = styled.div`
    border: 1px solid #EDEFF1;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
`

const BorderSectionInDiv = styled.div`
    border: 1px solid #EDEFF1;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
`

const BorderOutDiv = styled.div`
    border: 1px solid #EDEFF1;
    border-radius: 5px;
    background-color: #F9FBFC;
    padding: 1rem;
`

const BoldH5 = styled.h5`
    margin-bottom: 0px;
    font-weight: 700;
    font-size: 16px;
`


function SortableItem(props: any) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });
  
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
  
    return (
      <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {props.children}
      </Item>
    );
  }
  

  export const Item = forwardRef(({ id, ...props }: any, ref) => {
    return (
      <div {...props} ref={ref}>
        {props.children}
      </div>
    );
  });
  