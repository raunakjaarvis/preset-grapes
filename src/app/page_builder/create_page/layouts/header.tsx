'use client'

import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { format } from 'date-fns'

// import antd
import { Button, Divider, Space, Layout, Dropdown, MenuProps, Tooltip, notification } from "antd"
const { Header } = Layout

// import icons
import CloseIcon from '@/icons/page_builder/close-icon.svg'
import HelpIcon from '@/icons/page_builder/question-icon.svg'
import SettingIcon from '@/icons/page_builder/setting-icon.svg'

import LaptopIcon from '@/icons/page_builder/laptop-icon.svg'
import PhoneIcon from '@/icons/page_builder/phone-icon.svg'
import ExpandIcon from '@/icons/page_builder/expand-icon.svg'
import ArrowSquareUpRightIcon from '@/icons/page_builder/arrow-square-up-right-icon.svg'

import FlipBackwordIcon from '@/icons/page_builder/flip-backword-icon.svg'

import DraftIcon from '@/icons/page_builder/draft.svg'
import PublishIcon from '@/icons/page_builder/publish.svg'

import { DownOutlined } from '@ant-design/icons';

//=============== import redux
import { useDispatch, useSelector } from '@/store/store'
import { SECTION_STATE_EDIT } from '../constants'

import { 
    DI_DEFAULT, 
    DI_IPHONE_SE, 
    DI_MAX_SIZE, 

    HT_SECTION_CREATE, 
    HT_SECTION_REMOVE, 
    HT_SECTION_MOVE, 
    HT_SECTION_DUPLICATE, 
    HT_SECTION_COPY, 
    HT_SECTION_PASTE, 
    HT_SECTION_EDIT, 
    HT_SECTION_DONE, 
    HT_SECTION_EDITING, 
 } from '../constants'

 import { 
    setSections, 
    setDeviceType, 
    setPreviewIndex, 

    setSavedUndoStacks, 
    setUndoStackIndex, 
    setUndoStacks, 

    useSaveSectionMutation, 
} from "@/features/projects"

import { saveStackObject, TemplateResponse } from '@/types/page_builder'
import PageHistoryModal from '../modals/page-history-modal'



export default function CreatePageHeader() {
    
    const { pageInfo, sections, editState, undoStacks, undoStackIndex, deviceType, savedUndoStacks, currentTemplate } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()
    const [saveSection, result] = useSaveSectionMutation()


    const router = useRouter()


    const handleGoFirstPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
        router.push("/page_builder");
    }


    const handleUndoHistory = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if(undoStackIndex === 0) return;

        let minusIndex = 0
        if(undoStackIndex - 1 > 0 && undoStacks[undoStackIndex - 1].actionType === HT_SECTION_DONE ){
            minusIndex ++
        }

        const undoStack = undoStacks[undoStackIndex - 1 - minusIndex]

        let newSections

        switch(undoStack.actionType)
        {
            case HT_SECTION_CREATE:
                newSections = [...sections];
                newSections.splice(undoStack.sectionIndex, 1)
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_REMOVE:
                newSections = [...sections]
                const newSectionIndex = undoStack.sectionIndex
                const newSection = undoStack.sectionData
                dispatch(setSections([...newSections.slice(0, newSectionIndex), newSection, ...newSections.slice(newSectionIndex)]))
                break;

            case HT_SECTION_MOVE:
                newSections = [...sections]
                const oldIndex = undoStack.sectionIndex
                const newIndex = undoStack.preSectionIndex
                const [ reorderedItem ] = newSections.splice(oldIndex, 1)
                newSections.splice(newIndex, 0, reorderedItem)
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_DUPLICATE:
                newSections = [...sections];
                newSections.splice(undoStack.sectionIndex, 1)
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_PASTE: 
                newSections = [...sections];
                newSections.splice(undoStack.sectionIndex, 1)
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_EDIT:
                const editSectionIndex = undoStack.sectionIndex
                newSections = [...sections]
                newSections[editSectionIndex] = undoStack.sectionData
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_DONE:
                const sectionIndex = undoStack.sectionIndex
                newSections = [...sections]
                newSections[sectionIndex] = undoStack.sectionData
                dispatch(setSections(newSections))
                break;

        }

        dispatch(setUndoStackIndex(undoStackIndex - 1 - minusIndex))
    }

    const handleRedoHistory = (event: React.MouseEvent<HTMLButtonElement>): void => {
        if(undoStackIndex >= undoStacks.length) return

        let plusIndex = 0
        if( undoStackIndex + 1 < undoStacks.length && undoStacks[undoStackIndex].actionType === HT_SECTION_EDIT ){
            plusIndex ++
        }

        const undoStack = undoStacks[undoStackIndex + plusIndex]

        let newSections
        let newSectionIndex
        let newSection

        switch(undoStack.actionType)
        {
            case HT_SECTION_CREATE:
                newSections = [...sections]
                newSectionIndex = undoStack.sectionIndex
                newSection = undoStack.sectionData
                dispatch(setSections([...newSections.slice(0, newSectionIndex), newSection, ...newSections.slice(newSectionIndex)]))
                break;

            case HT_SECTION_REMOVE:
                newSections = [...sections];
                newSections.splice(undoStack.sectionIndex, 1)
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_MOVE:
                newSections = [...sections]
                const newIndex = undoStack.sectionIndex
                const oldIndex = undoStack.preSectionIndex
                const [ reorderedItem ] = newSections.splice(oldIndex, 1)
                newSections.splice(newIndex, 0, reorderedItem)
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_DUPLICATE:
                newSections = [...sections]
                newSectionIndex = undoStack.sectionIndex
                newSection = undoStack.sectionData
                dispatch(setSections([...newSections.slice(0, newSectionIndex), newSection, ...newSections.slice(newSectionIndex)]))
                break;

            case HT_SECTION_PASTE: 
                newSections = [...sections]
                newSectionIndex = undoStack.sectionIndex
                newSection = undoStack.sectionData
                dispatch(setSections([...newSections.slice(0, newSectionIndex), newSection, ...newSections.slice(newSectionIndex)]))
                break;

            case HT_SECTION_EDIT:
                const editSectionIndex = undoStack.sectionIndex
                newSections = [...sections]
                newSections[editSectionIndex] = undoStack.sectionData
                dispatch(setSections(newSections))
                break;

            case HT_SECTION_DONE:
                const doneSectionIndex = undoStack.sectionIndex
                newSections = [...sections]
                newSections[doneSectionIndex] = undoStack.sectionData
                dispatch(setSections(newSections))
                break;

        }

        dispatch(setUndoStackIndex(undoStackIndex + 1 + plusIndex))
    }


    const handleSetDevice = (value: string) => {
        if(deviceType !== DI_DEFAULT && deviceType === value) {
            dispatch(setDeviceType(DI_DEFAULT))
        } else {
            dispatch(setDeviceType(value))
        }
    }

    const handlePreview = (event: React.MouseEvent<HTMLButtonElement>): void => {
        dispatch(setPreviewIndex(savedUndoStacks.length - 1))

        // Construct the new URL relative to the current URL
        const newUrl = `preview`

        // Navigate to the new URL
        router.push(newUrl)
    }

    const handleSave = () => {

        const savedUndoStack: saveStackObject = {...(currentTemplate?.templateContent), 
            date: format(new Date(), "yyyy-MM-dd HH:mm:ss"), 
            undoStacks: [...undoStacks], 
            sections: sections, 
        }
        
        saveSection({...currentTemplate, templateContent: savedUndoStack})
    }


    useEffect(() => {
        if(! pageInfo ) {
            const newUrl = `../page_builder`

            router.push(newUrl)
        }
    }, [pageInfo])

    useEffect(() => {
        if(result.isSuccess) {
            const responseTemplate = result?.data?.data as TemplateResponse
            if(responseTemplate?.publishStatus === 1) {
                const newUrl = `../page_builder/template/${responseTemplate?.templateId}`

                router.push(newUrl)
            } else {

                const savedUndoStack = responseTemplate?.templateContent as saveStackObject
                const newSavedUndoStacks = [...savedUndoStacks, savedUndoStack]
    
                dispatch(setSavedUndoStacks(newSavedUndoStacks))
                dispatch(setUndoStacks([]))
                dispatch(setUndoStackIndex(0))
                notification.success({
                    message: 'Page has been saved successfully!',
                });
            }
        }
    }, [result])


    const items: MenuProps['items'] = [
        {
          label: <div>
                    <div className="flex justify-start text-black font-bold text-sm gap-1 items-center">
                        <DraftIcon />Draft
                    </div>
                    <div className="text-xs text-gray-400">
                        25 Jun 2023 - 42 Minute ago
                    </div>
                </div>,
          key: '1',
        },
        {
            label: <div>
                    <div className="flex justify-start text-black font-bold text-sm gap-1 items-center">
                        <PublishIcon />Publish Changes
                    </div>
                    <div className="text-xs text-gray-400">
                        Changes 42 minutes ago
                    </div>
                </div>,
            key: 'publish',
        },
    ];

    const buttonsRender = (): React.ReactElement[] => [
        <Button type="primary" className={`bg-[#0087F4] text-white hover:!bg-[#0087F4] before:!bg-[#1B2F37]`} key={"btn_publish"}>Publish</Button>,
        <Button type="primary" icon={<DownOutlined />} className={`bg-[#0087F4] text-white hover:!bg-[#0087F4] before:!bg-[#0087F4]`} key={"btn_dropdown"} />,
    ]

    const handleMenuItemClick = async (e: any) => {
        if(e?.key === "publish") {
            const savedUndoStack: saveStackObject = {...(currentTemplate?.templateContent), 
                    date: format(new Date(), "yyyy-MM-dd HH:mm:ss"), 
                    undoStacks: [...undoStacks], 
                    sections: sections, 
            }

            saveSection({...currentTemplate, templateContent: savedUndoStack, publishStatus: 1})
        }
    }
      
    return (
        <Header className={`min-h-[72px] bg-[#29292A] relative`}>
            <div className="relative h-full z-1">
                <div className="flex justify-between h-full">

                    <Space>
                        <CloseIcon onClick={handleGoFirstPage} />
                        <Divider type="vertical" className="bg-[#3A3A3C] h-8" />
                        <span className={`text-white text-lg`}>
                            {
                                pageInfo?.pageName
                            }
                        </span>
                    </Space>

                    <Space className={`gap-x-0`}>
                        <Button icon={<SettingIcon  />} type='text' className={`flex bg-transparent hover:!bg-transparent`} ></Button>
                        <Button icon={<HelpIcon className={'page_builder '} />} type='text' className={`flex text-white hover:!text-white bg-transparent hover:!bg-transparent`} >Help</Button>
                        <Divider type="vertical" className="bg-[#3A3A3C] h-8" />


                        <Tooltip placement="bottom" title={`Editor`} color={`#FFFFFF`} overlayInnerStyle={{color: 'black'}}>
                            <Button icon={<LaptopIcon  />} type='text' className={`flex mx-1 stroke-[2px] bg-transparent hover:!bg-transparent ${deviceType === DI_DEFAULT ? 'stroke-[#FFFFFF]': 'stroke-[#94A3A9]'}`} onClick={() => handleSetDevice(DI_DEFAULT)} ></Button>
                        </Tooltip> 
                        <Tooltip placement="bottom" title={`Mobile Preview`} color={`#FFFFFF`} overlayInnerStyle={{color: 'black'}}>
                            <Button icon={<PhoneIcon  />} type='text' className={`flex mx-1 stroke-[2px] bg-transparent hover:!bg-transparent ${deviceType === DI_IPHONE_SE ? 'stroke-[#FFFFFF]': 'stroke-[#94A3A9]'}`} onClick={() => handleSetDevice(DI_IPHONE_SE)} ></Button>
                        </Tooltip> 
                        <Tooltip placement="bottom" title={`Full Screen Preview`} color={`#FFFFFF`} overlayInnerStyle={{color: 'black'}}>
                            <Button icon={<ExpandIcon  />} type='text' className={`flex mx-1 stroke-[2px] bg-transparent hover:!bg-transparent ${deviceType === DI_MAX_SIZE ? 'stroke-[#FFFFFF]': 'stroke-[#94A3A9]'}`} onClick={() => handleSetDevice(DI_MAX_SIZE)} ></Button>
                        </Tooltip> 
                        <Tooltip placement="bottom" title={`Preview Last Saved`} color={`#FFFFFF`} overlayInnerStyle={{color: 'black'}}>
                            <Button icon={<ArrowSquareUpRightIcon  />} type='text' className={`flex mx-1 stroke-[2px] bg-transparent hover:!bg-transparent stroke-[#94A3A9]`} onClick={handlePreview}></Button>
                        </Tooltip> 
                        <Divider type="vertical" className="bg-[#3A3A3C] h-8" />


                        <Tooltip placement="bottom" title={`Undo`} color={`#FFFFFF`} overlayInnerStyle={{color: 'black'}}>
                            <Button icon={<FlipBackwordIcon  />} type='text' className={`justify-center flex mx-1 ${undoStackIndex > 0 ? "fill-[#FFFFFF]": "fill-[#94A3A9]"} bg-transparent hover:!bg-transparent`} onClick={handleUndoHistory} ></Button>
                        </Tooltip> 
                        <Tooltip placement="bottom" title={`Redo`} color={`#FFFFFF`} overlayInnerStyle={{color: 'black'}}>
                            <Button icon={<FlipBackwordIcon  />} type='text' className={`justify-center reverse flex mx-1 ${undoStackIndex < undoStacks.length ? "fill-[#FFFFFF]": "fill-[#94A3A9]"} bg-transparent hover:!bg-transparent`} onClick={handleRedoHistory}></Button>
                        </Tooltip> 
                        <PageHistoryModal />
                        <Divider type="vertical" className="bg-[#3A3A3C] h-8" />

                        <Button type='text' className={`flex mt-1 text-white hover:text-white`} onClick={() => handleSave()} >Save</Button>
                        <Dropdown.Button 
                            buttonsRender={buttonsRender} 
                            menu={{ items, onClick: (e) => handleMenuItemClick( e ) }}
                        >
                        </Dropdown.Button>
                    </Space>
                </div>
            </div>

            {
                editState === SECTION_STATE_EDIT && 
                <div className="absolute bg-opacity-50 z-2 h-full w-full bg-gray-700 top-0 left-0"></div>
            }
            
        </Header>
    )
}