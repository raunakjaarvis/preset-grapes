'use client'

import { useEffect, useState } from "react";
import Image from 'next/image'

// redux
import { useDispatch, useSelector } from '@/store/store';
import { setSections, setUndoStacks } from '@/store/projects/page_builder';
import { PageType, HistoryObject } from '@/types/page_builder';

// import antd component
import { Button, Menu, MenuProps, Modal } from "antd";


import { styled } from "styled-components";

// import icon
import AlignLeftIcon from '@/icons/page_builder/align-left.svg'
import ImageIcon from '@/icons/page_builder/image-icon.svg'
import LayoutGridIcon from '@/icons/page_builder/layout-grid-icon.svg'
import VideoIcon from '@/icons/page_builder/video-icon.svg'
import ListIcon from '@/icons/page_builder/list-icon.svg'
import MapIcon from '@/icons/page_builder/map-icon.svg'
import UsersGroupIcon from '@/icons/page_builder/users-group-icon.svg'
import AnnotationIcon from '@/icons/page_builder/annotation-icon.svg'
import CheckDoneIcon from '@/icons/page_builder/check-done-icon.svg'

import PlusIcon from '@/icons/page_builder/plus-icon.svg'

// import templates
import { pages_data } from '../templates'

import TemplatePreviewItem from '@/components/page_builder/TemplatePreviewItem'

import {
    TT_TEXT, 
    TT_IMAGE, 
    TT_GALLERY, 
    TT_VIDEO, 
    TT_LIST, 
    TT_MAP, 
    TT_JOBS, 
    TT_QUOTES, 
    TT_COOKIES, 

    BOOTSTRAP_CSS, 
    BOOTSTRAP_JS, 
    JQUERY_JS
} from '../constants'

import { HT_SECTION_CREATE } from "../constants";

// declare data type
type MenuItem = Required<MenuProps>['items'][number];


interface SLMProps {
    modalShow: boolean,
    selectedType: string, 
    handleModalShow: (show: boolean) => void,
}

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Text',                 TT_TEXT,                <AlignLeftIcon />,),
    getItem('Image',                TT_IMAGE,               <ImageIcon />,),
    getItem('Gallery',              TT_GALLERY,             <LayoutGridIcon />,),
    getItem('Video',                TT_VIDEO,               <VideoIcon />,),
    getItem('List',                 TT_LIST,                <ListIcon />,),
    getItem('Map',                  TT_MAP,                 <MapIcon />,),
    getItem('Jobs',                 TT_JOBS,                <UsersGroupIcon />,),
    getItem('Quotes',               TT_QUOTES,              <AnnotationIcon />,),
    getItem('Cookies Preferences',  TT_COOKIES,             <CheckDoneIcon />,),
];


export default function SecondLibraryModal({ modalShow, selectedType, handleModalShow }: SLMProps) {

    const { sections, newSectionIndex, undoStacks, undoStackIndex, actionIsHuman } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()


    const [selectedItemLabel, setSelectedItemLabel] = useState<string>(TT_TEXT)

    const [filtered, setFiltered] = useState<PageType[]>([])


    const selectedItem = (key: string) => {
        const galleryItem = items?.find((item: any) => item.key === key);
        const filteredTemplates = pages_data.filter((template: PageType) => template.type === key)
        setFiltered(filteredTemplates)

        setSelectedItemLabel(galleryItem?.label as string)
    }

    const onItemClick: MenuProps['onClick'] = (e) => {
        selectedItem(e.key)
    };


    const handleSelectTemplate = (key: string) => {

        const newSection = pages_data?.find((item: PageType) => item.id === key)
        const newSections = [...sections];

        dispatch(setSections([...newSections.slice(0, newSectionIndex), newSection, ...newSections.slice(newSectionIndex)]))
        
// ============== save to history stack ========================================================
        if(actionIsHuman) {
            const newUndoStack: HistoryObject = {
                step            : undoStackIndex + 1, 
                sectionIndex    : newSectionIndex, 
                sectionData     : newSection, 
                actionType      : HT_SECTION_CREATE, 
            }

            const newStacks = [...undoStacks]
            dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
        }
// =============================================================================================

        handleModalShow(false)
    }

    useEffect(() => {
        selectedItem(TT_TEXT)
    }, [])

    return (
        <Modal
            title={<div>Second Library</div>}
            centered
            open={modalShow}
            onCancel={() => handleModalShow(false)}
            footer={<></>}
            width={1500}
            className='bld-second-library-modal-nofooter h-[90vh]'
        >
            <LeftBoxDiv>
                <Menu
                    onClick={onItemClick}
                    defaultSelectedKeys={[TT_TEXT]}
                    defaultOpenKeys={[TT_TEXT]}
                    mode="inline"
                    items={items}
                    className="bld-second-modal-menu w-[250px] p-0"
                />

            </LeftBoxDiv>
            <RightBoxDiv>
                <HeaderDiv>{selectedItemLabel}</HeaderDiv>

                <BodyDiv>
                    <div className="bld-gallery py-4">
                        {filtered.map((template, index) => (
                            <div className="bld-gallery-image mb-4 py-8 px-4 relative" key={`item_${index}`}>
                                <TemplatePreviewItem
                                    srcDoc={`
                                        ${BOOTSTRAP_CSS}
                                        ${BOOTSTRAP_JS}
                                        ${JQUERY_JS}
                                        <style>${template ? template.styles : null }</style>
                                        <style>body{scale: 0.5; width: 200%;overflow: hidden; left: -50%; position: absolute; top: -50%;}</style>
                                        ${template ? template.component : null}
                                    `}
                                />
                                <div className="bld-gallery-overlay"></div>
                                <div className="bld-gallery-button">
                                    <Button
                                        type='primary'
                                        icon={<PlusIcon />}
                                        className={`!bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none mx-auto flex items-center justify-center`}
                                        onClick={() => handleSelectTemplate(template.id)}
                                    />
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </BodyDiv>
            </RightBoxDiv>

        </Modal>
    )
}

const LeftBoxDiv = styled.div`
    height: calc(100% - 35px);
    overflow: auto;
    display: inline-block;
    padding-top: 20px;
`

const RightBoxDiv = styled.div`
    height: calc(100% - 35px);
    overflow: auto;
    display: inline-block;
    width: calc(100% - 270px);
    padding: 20px;
`

const HeaderDiv = styled.div`
    font-weight: 500;
    font-size: 24px;
`

const BodyDiv = styled.div`
    
`

const ItemDiv = styled.div`
    padding: 10px;
    width: 50%;
    display: inline-block;
    border: 1px solid #EAECF0;
    border-radius: 5px;
`