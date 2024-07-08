'use client'


import { useState, useEffect, useRef } from 'react'

// import redux
import { useDispatch, useSelector } from '@/store/store'
import { PageType, CommonObject, HistoryObject } from '@/types/page_builder'
import {
    setGrapesjsEditor,
    setSections,
    setUsedEditState,
    setEditingSectionType, 
    setSelectedComponentType, 
    setJobTableColumnFilter, 
    setJobFilterColumn, 
    setEditSectionIndex, 
    setCopiedSectionIndex, 
    setEditModalShow, 

    setUndoStacks, 
} from '@/store/projects/page_builder'

// antd
import { Button, MenuProps, Dropdown } from 'antd'

// grapesjs
import grapesjs from 'grapesjs'
import { Component } from "grapesjs"

// icons
import ArrowDownTransIcon from '@/icons/page_builder/arrow-down-trans.svg'
import AlignLeftTransIcon from '@/icons/page_builder/align-left-icon-trans.svg'
import TranslateTransIcon from '@/icons/page_builder/translate-icon-trans.svg'
import CheckTransIcon from '@/icons/page_builder/check-icon-trans.svg'
import ImageTransIcon from '@/icons/page_builder/image-trans-icon.svg'
import GalleryIcon from '@/icons/page_builder/gallery-icon.svg'
import VideoTransIcon from '@/icons/page_builder/video-icon-trans.svg'
import ListTransIcon from '@/icons/page_builder/list-icon-trans.svg'
import MapIcon from '@/icons/page_builder/map-icon.svg'
import TrunkIcon from '@/icons/page_builder/trunk-icon.svg'
import QuoteIcon from '@/icons/page_builder/quote.svg'

import LinkIcon from '@/icons/page_builder/link.svg'
import DuplicateIcon from '@/icons/page_builder/duplicate.svg'
import TrashSmIcon from '@/icons/page_builder/trash-sm.svg'

import { DownOutlined } from '@ant-design/icons'

import {
    BOOTSTRAP_CSS, 
    BOOTSTRAP_JS, 
    JQUERY_JS, 

    JOB_TALBE_COLUMNS, 

    HT_SECTION_CREATE, 
    HT_SECTION_REMOVE, 
    HT_SECTION_MOVE, 
    HT_SECTION_DUPLICATE, 
    HT_SECTION_COPY, 
    HT_SECTION_PASTE, 
    HT_SECTION_EDIT, 
    HT_SECTION_DONE, 
    HT_SECTION_EDITING, 

    TT_TEXT, 
    TT_IMAGE, 
    TT_GALLERY, 
    TT_VIDEO, 
    TT_LIST, 
    TT_MAP, 
    TT_JOBS, 
    TT_QUOTES, 
    TT_COOKIES, 

    ID_CLASS_PREFIX, 
  
    CT_MAIN_COMPONENT, 
    CT_CONTENT_COMPONENT,
    CT_HEADER_COMPONENT, 
    CT_TEXT_CONTAINER, 
    CT_CONTENT_CONTAINER, 
    CT_IMAGE_CONTAINER, 
    CT_VIDEO_CONTAINER, 
    CT_POSTER_CONTAINER, 
    CT_IFRAME, 

    CT_HEADER, 
    CT_CONTENT, 
    CT_BUTTON, 
    CT_IMAGE, 
    CT_GALLERY, 
    CT_GALLERY_ITEM, 
    CT_GALLERY_IMG, 
    CT_VIDEO, 
    CT_VIDEO_POSTER_IMAGE, 
    CT_LIST, 
    CT_LIST_ITEM, 
    CT_LIST_ITEM_IMG, 
    CT_LIST_ITEM_HEAD, 
    CT_LIST_ITEM_CONTENT, 
    CT_MAP, 
    CT_JOB, 
    CT_JOB_CARD, 
    CT_JOB_FILTER, 
    CT_JOB_GROUP, 
    CT_QUOTE, 
    CT_QUOTE_TEXT, 
    CT_QUOTE_ITEM, 
    CT_QUOTE_AUTHOR_IMG, 
    CT_QUOTE_AUTHOR_TXT, 
    CT_LIST_SETTING, 
    CT_COOKIE
} from '../constants'

const CT_ARR: string[] = [
    CT_MAIN_COMPONENT,
    CT_CONTENT_COMPONENT,
    CT_CONTENT_CONTAINER,
    CT_IMAGE_CONTAINER,
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
    CT_LIST_ITEM_IMG,
    CT_LIST_ITEM_HEAD,
    CT_LIST_ITEM_CONTENT,
    CT_MAP,
    CT_JOB,
    CT_JOB_CARD,
    CT_JOB_FILTER,
    CT_JOB_GROUP,
    CT_QUOTE,
    CT_QUOTE_TEXT,
    CT_QUOTE_ITEM,
    CT_QUOTE_AUTHOR_IMG,
    CT_QUOTE_AUTHOR_TXT,
    CT_LIST_SETTING,
    CT_COOKIE
]

import { SECTION_STATE_NORMAL, SECTION_STATE_EDIT } from './../constants'

interface SLMProps {
    handleModalShow: (show: boolean) => void,
    handleSelectedType: (type: string) => void, 
    sectionIndex: number
}


export default function SectionEditor({handleModalShow, handleSelectedType, sectionIndex} : SLMProps): JSX.Element {

    const {
        editState, 
        sections, 
        editor, 
        editSectionIndex, 
        copiedSectionIndex, 
        doneSectionIndex, 
        deviceType, 

        undoStacks, 
        actionIsHuman, 
        undoStackIndex, 
    } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()

    const iframeRef = useRef<HTMLIFrameElement>(null)
    const divGrapesjs = useRef<HTMLDivElement>(null)
    const sectionDiv = useRef<HTMLDivElement>(null)

    const [ pageData, setPageData ] = useState<PageType>(sections[sectionIndex])
    const [ sectionState, setSectionState ] = useState<number>(SECTION_STATE_NORMAL)
    const [ minHeight, setMinHeight ] = useState<number>(0)
    const [ doneButtonClicked, setDoneButtonClicked ] = useState<boolean>(false)

    useEffect(() => {
        setPageData(sections[sectionIndex])
        setMinHeight(0)
    }, [sections])

    useEffect(() => {
        if(actionIsHuman) {

            const newSections = [...sections]
            newSections[sectionIndex] = pageData
            dispatch(setSections(newSections))
            setMinHeight(0)
        } else if(editor){
            editor.destroy()
            initGrapesjs()
        }
    }, [pageData])

    useEffect(() => {
        if(editSectionIndex === sectionIndex) {
            handleSectionEdit();
            dispatch(setEditSectionIndex(-1));
            (sectionDiv?.current?.parentNode as HTMLElement)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [editSectionIndex])

    useEffect(() => {
        if(doneSectionIndex === sectionIndex) {
            handleDone()
        }
    }, [doneSectionIndex])


    useEffect(() => {
        handleIFrameLoad()
        handleDivGrapesjsLoad()
    }, [deviceType])


    const handleShowTemplate = (selectedType: string) => {
        handleModalShow(true)
        handleSelectedType(selectedType)
    }

    const handleLanguage = () => {

    }


// ====================================================

    const handleDone = () => {

        setCurrentEditorData(true)

        setSectionState(SECTION_STATE_NORMAL)
        setDoneButtonClicked(true)
    }

    const setCurrentEditorData = (isSetPageData: boolean) => {
        if(!editor) return

        const editorComponent = editor.getWrapper()
        const mainComponent = editorComponent.find(`.${CT_MAIN_COMPONENT}`)[0]

        const e = mainComponent.em.get("Editor");

        const csses = editor.Css.getRules()
        const cssList = csses.map((css: any) => {
            return css.toCSS()
        })

        const htmlContent = editor.getHtml({ withAttributes: true })

        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlContent, 'text/html')
        const scriptElements = doc.querySelectorAll('script')
        const scriptArray = Array.from(scriptElements)
        const stringtScripts = scriptArray?.map((script: any) => {return script.innerHTML})

        let component =  mainComponent.toHTML()
        component += '<script>' + stringtScripts.join("\n") + '</script>'

        setPageData({...pageData, 'component': component, "styles": cssList.join('') })
    }

    const handleSectionEdit = () => {
        dispatch(setEditingSectionType(pageData?.type))

        setSectionState(SECTION_STATE_EDIT)
    }


    useEffect(() => {
        dispatch(setUsedEditState(sectionState))

        if(sectionState === SECTION_STATE_NORMAL) {
            // ============== save to history stack ================
            if(doneButtonClicked && actionIsHuman) {
                const newUndoStack: HistoryObject = {
                    step            : undoStackIndex + 1, 
                    sectionIndex    : sectionIndex, 
                    sectionData     : pageData, 
                    actionType      : HT_SECTION_DONE, 
                }

                const newStacks = [...undoStacks]

                dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
            }
            // =====================================================

        }else if(sectionState === SECTION_STATE_EDIT) {
            initGrapesjs()
        }
        setDoneButtonClicked(false)

    }, [sectionState])

    const initGrapesjs = () => {
        interface Config {
            container: string | HTMLElement;
            height:string;
            storageManager?:boolean;
            allowScripts?: boolean;
            // other options...
        }

        const newEditor = grapesjs.init({
            container: '#gjs',
            height: '100%',
            storageManager: false,
            allowScripts: true,
            pageManager: {
                pages: [
                    pageData
                ]
            },

            blockManager: {
            },
            panels: {
                defaults: []
            },
            canvas: {
                styles: [`https://cdn.jsdelivr.net/npm/@mantine/core@7.10.2/+esm`, ],
                scripts: [
                    `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`, 
                    `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js`, 
                ]
            }
        } as Config);

        dispatch(setGrapesjsEditor(newEditor))

        // newEditor.DomComponents.addType('LIST ITEM', {
        //     isComponent: (el: HTMLElement) => (el.tagName == 'DIV' && el.classList.contains(`${CT_LIST_ITEM}`))
        // })
        newEditor.Commands.add('tlb-prev', {
            name: 'Move to Previouse',
            group: 'GroupItem',
            description: 'Replace with previous item position',
            run: function(editor, sender) {
                const selectedComponent = editor.getSelected()

                if (selectedComponent) {
                    const componentIndex = selectedComponent.index()
                    const parentComponent = selectedComponent.parent()
                    if(parentComponent) {
                        selectedComponent.move(parentComponent, {at: componentIndex - 1})
                    }
                }

            },
        });

        newEditor.Commands.add('tlb-next', {
            name: 'Move to Next',
            group: 'GroupItem',
            description: 'Replace with next item position',
            run: function(editor, sender) {
                const selectedComponent = editor.getSelected()
                selectedComponent?.set('selectable', false)
          
                if (selectedComponent) {
                    const parent = selectedComponent?.parent()
                    const siblings = parent?.components().models as Component[]

                    const index = siblings?.indexOf(selectedComponent) as number
                    const nextIndex = index + 1
                    const nextComponent = siblings?.at(nextIndex)
                    // Check if the component is not already the last child
                    if (parent && siblings && nextIndex < siblings?.length && nextComponent) {

                        const newSiblings = siblings.slice()
                        newSiblings.splice(index, 1, nextComponent)
                        newSiblings.splice(nextIndex, 1, selectedComponent)

                        parent.components().reset()
                        parent.components().add(newSiblings)
                    }
                }
                selectedComponent?.set('selectable', true)
            },
        });
          

        newEditor.Commands.add('tlb-edit', {
            name: 'Edit Component',
            group: 'GroupItem',
            description: 'Edit Component',
            run: function(editor, sender) {
                dispatch(setEditModalShow(true))
            },
        });

        setTimeout(() => {

            const editorComponent = newEditor.getWrapper()
            const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

            const classes = mainComponent?.getClasses()
            const itemExists = classes?.some((item: string) => item.includes(ID_CLASS_PREFIX))
            if(!itemExists) {
                const randomClassName = `${ID_CLASS_PREFIX}${Math.random().toString(36).substring(2, 8)}`

                mainComponent?.addClass(randomClassName)
            }

            handleDivGrapesjsLoad()

            const tableComponent = mainComponent?.find(`.${CT_JOB} table`)
            if(tableComponent?.length) {
                const headerTHs = tableComponent[0]?.find("tr th")
                const existKeys = headerTHs.map((th: Component) => {return th.getAttributes()['key']})

                const jobTableColumnFilter = Object.keys(JOB_TALBE_COLUMNS).reduce((obj: CommonObject, item: string) => {
                    obj[item] = existKeys.includes(item);
                    return obj;
                }, {});

                dispatch(setJobTableColumnFilter(jobTableColumnFilter))

            } else {
                const jobTableColumnFilter = Object.keys(JOB_TALBE_COLUMNS).reduce((obj: CommonObject, item: string) => {
                    obj[item] = true;
                    return obj;
                }, {});

                dispatch(setJobTableColumnFilter(jobTableColumnFilter))
            }

            const searchItem = mainComponent?.find(`.${CT_JOB_FILTER} input, .${CT_JOB_FILTER} select`)
            if(searchItem?.length) {
                const existKeys = searchItem.map((tag: Component) => {return tag.getAttributes()['key']})

                const filterColumns = {searchInput: "Search", ...JOB_TALBE_COLUMNS}
                const jobFilterColumns = Object.keys(filterColumns).reduce((obj: CommonObject, item: string) => {
                    obj[item] = existKeys.includes(item);
                    return obj;
                }, {});

                dispatch(setJobFilterColumn(jobFilterColumns))

            } else {
                const filterColumns = {searchInput: "Search", ...JOB_TALBE_COLUMNS}
                const jobFilterColumns = Object.keys(filterColumns).reduce((obj: CommonObject, item: string) => {
                    obj[item] = true;
                    return obj;
                }, {});

                dispatch(setJobFilterColumn(jobFilterColumns))
            }

        }, 500)

        // when current component changed
        newEditor.on('component:selected', (component) => {
            const classes: string[] = component.getClasses()

            const sameClasses = classes.filter((element) => CT_ARR.includes(element))
            const component_type = sameClasses.length ? sameClasses[0] : ''
            dispatch(setSelectedComponentType(component_type))

        });

        newEditor.on('update', (component) => {
            handleDivGrapesjsLoad()

            const resizeEvent = new Event('resize')
            window.dispatchEvent(resizeEvent)
        });

        newEditor.on("component:update", (cmp) => {
            const resizeEvent = new Event('resize')
            window.dispatchEvent(resizeEvent)
        })

        newEditor.on('component:mount', (component) => {
            const classes: string[] = component.getClasses()
            
            let newToolbar = [
                {
                    command: 'tlb-delete',
                    label: `<svg viewBox="0 0 24 24"><path fill="#00447A" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
                }
            ]

            if (classes.includes(`${CT_LIST_ITEM}`)){
                component.set({type: "List Item"})
                newToolbar = [...newToolbar, {
                    command: 'tlb-prev', 
                        label: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 9.5H3.5M3.5 9.5L8 5M3.5 9.5L8 14" stroke="#00447A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`
                    }, 
                    {
                        command: 'tlb-next', 
                        label: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 9.5H15.5M15.5 9.5L11 5M15.5 9.5L11 14" stroke="#00447A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`
                    }, 
                    {
                        command: 'tlb-edit', 
                        label: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path style="fill:none;stroke-width:1.66667;stroke-linecap:round;stroke-linejoin:round;stroke:#00447A;stroke-opacity:1;stroke-miterlimit:4;" d="M 10 16.666667 L 17.5 16.666667 M 2.5 16.666667 L 3.897569 16.666667 C 4.301215 16.666667 4.505208 16.666667 4.700521 16.618924 C 4.869792 16.579861 5.030382 16.510417 5.182292 16.419271 C 5.347222 16.319444 5.494792 16.171875 5.78125 15.885417 L 16.25 5.416667 C 16.940104 4.726562 16.940104 3.606771 16.25 2.916667 C 15.559896 2.226562 14.440104 2.226562 13.75 2.916667 L 3.28125 13.385417 C 2.994792 13.671875 2.847222 13.819444 2.747396 13.984375 C 2.65625 14.136285 2.586806 14.296875 2.547743 14.466146 C 2.5 14.661458 2.5 14.861111 2.5 15.269097 Z M 2.5 16.666667 " transform="matrix(0.9,0,0,0.9,0,0)"/>
                                </svg>`
                    }    
                ]
                
            } else if(classes.includes(`${CT_HEADER_COMPONENT}`)){
                component.set({type: "Header"})
            } else if (classes.includes(`${CT_TEXT_CONTAINER}`)) {
                component.set({type: "Text"})
            } else if ( classes.includes(`${CT_GALLERY_ITEM}`) ) {
                newToolbar = [...newToolbar, {
                    command: 'tlb-prev', 
                        label: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 9.5H3.5M3.5 9.5L8 5M3.5 9.5L8 14" stroke="#00447A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`
                    }, 
                    {
                        command: 'tlb-next', 
                        label: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 9.5H15.5M15.5 9.5L11 5M15.5 9.5L11 14" stroke="#00447A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`
                    }, 
                ]
            } else if ( classes.includes(`${CT_GALLERY_IMG}`) ) {
                component.set('selectable', false)
            } else if ( classes.includes(`${CT_LIST_ITEM_IMG}`) ) {
                component.set('selectable', false)
            }

            component.set('toolbar', newToolbar)
            component.set('draggable', false)
        });



        // ============== save to history stack ================
        if(actionIsHuman) {
            const newUndoStack: HistoryObject = {
                step            : undoStackIndex + 1, 
                sectionIndex    : sectionIndex, 
                sectionData     : pageData, 
                actionType      : HT_SECTION_EDIT, 
            }

            const newStacks = [...undoStacks]

            dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
        }
        // =====================================================

        return () => {
            newEditor.destroy()
        }
    }


    const handleIFrameLoad = () => {
        setTimeout(() => {
            const iframe = iframeRef.current
        
            if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
                const height = iframe.contentWindow.document.body?.offsetHeight
                iframe.style.height = `${height}px`
                setMinHeight(height)
                if(iframe.style.left) iframe.style.left = "0px"
                if(iframe.style.position) iframe.style.position = "relative"
            }
        }, 500)
    }

    const handleDivGrapesjsLoad = () => {
        const iframe: HTMLIFrameElement = divGrapesjs.current?.querySelector('div > div > div > div > div > iframe') as HTMLIFrameElement
        
        if(divGrapesjs.current) {
            divGrapesjs.current.style.height = "0px"
        }

        if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
            const height = iframe.contentWindow.document.documentElement.scrollHeight
            if(divGrapesjs.current) {
                divGrapesjs.current.style.height = `${height}px`
            }
            setMinHeight(height)
        }
    }

    const handleMenuItemClick = (e: any) => {
        if(e?.key === "copy"){
            dispatch(setCopiedSectionIndex(sectionIndex))
        } else if (e?.key === "duplicate") {
            const newSections = [...sections]
            const newDSections = [...sections]
            const duplicateSection = newDSections[sectionIndex]
            const newSectionIndex = sectionIndex + 1

            dispatch(setSections([...newSections.slice(0, newSectionIndex), duplicateSection, ...newSections.slice(newSectionIndex)]))

            // ============== save to history stack ====================
            if(actionIsHuman) {
                const newUndoStack: HistoryObject = {
                    step            : undoStackIndex + 1, 
                    sectionIndex    : newSectionIndex, 
                    sectionData     : duplicateSection, 
                    actionType      : HT_SECTION_DUPLICATE, 
                }

                const newStacks = [...undoStacks]
    
                dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
            }
            // =========================================================
        } else if (e?.key === "remove") {
            const newSections = [...sections]
            const newSection = newSections.splice(sectionIndex, 1)[0]
            dispatch(setSections(newSections))

            // ============== save to history stack =================
            if(actionIsHuman) {
                const newUndoStack: HistoryObject = {
                    step            : undoStackIndex + 1, 
                    sectionIndex    : sectionIndex, 
                    sectionData     : newSection, 
                    actionType      : HT_SECTION_REMOVE, 
                }

                const newStacks = [...undoStacks]
    
                dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
            }
            // ======================================================
        }
    }

    const handlePaste = () => {
        const newSections = [...sections]
        const newCSections = [...sections]
        const copiedSection = newCSections[copiedSectionIndex]
        const newSectionIndex = sectionIndex + 1

        dispatch(setSections([...newSections.slice(0, newSectionIndex), copiedSection, ...newSections.slice(newSectionIndex)]))
        dispatch(setCopiedSectionIndex(-1))

        // ============== save to history stack =============
        if(actionIsHuman) {
            const newUndoStack: HistoryObject = {
                step            : undoStackIndex + 1, 
                sectionIndex    : newSectionIndex, 
                sectionData     : copiedSection, 
                actionType      : HT_SECTION_PASTE, 
            }

            const newStacks = [...undoStacks]

            dispatch(setUndoStacks([...(newStacks.slice(0, undoStackIndex)), newUndoStack]))
        }
        // ==================================================

    }

    const items: MenuProps['items'] = [
        {
            label: <div className="flex items-center justify-start"><LinkIcon /><span className="ml-1 text-[16px]">Copy section link</span></div>,
            key: 'copy',
        },
        {
            label: <div className="flex items-center justify-start"><DuplicateIcon /><span className="ml-1 text-[16px]">Duplicate Section</span></div>,
            key: 'duplicate',
        },
        {
            label: <div className="flex items-center justify-start"><TrashSmIcon /><span className="ml-1 text-[16px]">Remove</span></div>,
            key: 'remove',
        },
    ];

    const buttonsRender = (): React.ReactElement[] => [
        <Button type="primary" className={`bg-[#0087F4] text-white hover:!bg-[#0087F4] before:!bg-[#1B2F37] stroke-[#FFFFFF] stroke-[1.5] flex items-center ml-auto`} key={"btn_publish"} icon={<CheckTransIcon />} onClick={() => handleSectionEdit()} >Edit</Button>,
        <Button type="primary" icon={<DownOutlined />} className={`bg-[#0087F4] text-white hover:!bg-[#0087F4] before:!bg-[#0087F4]`} key={"btn_dropdown"} />,
    ]

    return (
        <div ref={sectionDiv}>
            <div className={`relative min-h-[36px]`}>
                {
                   (( editState === SECTION_STATE_NORMAL ) || 
                   ( editState === SECTION_STATE_EDIT && sectionState === SECTION_STATE_EDIT )) &&
                    <div className={`flex gap-x-4 px-4 `}>

                        {
                            copiedSectionIndex > -1 && <Button
                                type="primary"
                                icon={<ArrowDownTransIcon />}
                                className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent !w-[50px]`} 
                                onClick={handlePaste}    
                            >
                            </Button>
                        }
                        
                        {
                            pageData?.type === TT_TEXT
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_TEXT)} icon={<AlignLeftTransIcon />} >
                                    Text
                                </Button>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleLanguage()} >
                                    <TranslateTransIcon />
                                    English
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_IMAGE
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_IMAGE)} >
                                    <ImageTransIcon className="mr-1" />
                                    Image
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_GALLERY
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_GALLERY)} >
                                    <GalleryIcon className="mr-1" />
                                    Gallery
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_VIDEO
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_VIDEO)} >
                                    <VideoTransIcon className="mr-1" />
                                    Video
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_LIST
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_VIDEO)} >
                                    <ListTransIcon className="mr-1" />
                                    List
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_MAP
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_MAP)} >
                                    <MapIcon className="mr-1" />
                                    Map
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_JOBS
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_MAP)} >
                                    <TrunkIcon className="mr-1" />
                                    Job
                                </Button>
                            </>
                        }
                        {
                            pageData?.type === TT_QUOTES
                            &&
                            <>
                                <Button type="primary" className={`border-[#D0D5DD] text-[#344054] hover:!text-[#344054] !stroke-[#344054] stroke-2 shadow-none flex font-semibold h-[36px] items-center justify-center hover:!bg-transparent`} onClick={() => handleShowTemplate(TT_QUOTES)} >
                                    <QuoteIcon className="mr-1" />
                                    Quote
                                </Button>
                            </>
                        }




                        {/* section top right button */}
                        {
                            sectionState === SECTION_STATE_NORMAL && 
                            <Dropdown.Button 
                                buttonsRender={buttonsRender} 
                                menu={{ items, onClick: handleMenuItemClick }}
                            >
                            </Dropdown.Button>
                        }
                        {
                            sectionState === SECTION_STATE_EDIT && 
                            <Button type="primary" className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none flex items-center ml-auto`} onClick={() => handleDone()} >
                                <CheckTransIcon />
                                Done
                            </Button>
                        }
                    </div>
                }
                
            </div>

            <div className={`${sectionState === SECTION_STATE_EDIT ? 'border border-gray-400': ''} m-1 p-1  ${( editState === SECTION_STATE_NORMAL ) || (editState === SECTION_STATE_EDIT && sectionState === SECTION_STATE_EDIT) ? '':'opacity-25'}`} style={{minHeight: `${minHeight}px`}}>
                {
                    sectionState === SECTION_STATE_NORMAL && 
                    <iframe 
                        className="w-full" 
                        srcDoc={`
                            ${BOOTSTRAP_CSS}
                            ${BOOTSTRAP_JS}
                            ${JQUERY_JS}
                            <style>${pageData ? pageData.styles : null }</style>
                            ${pageData ? pageData.component : null}`
                        }
                        ref={iframeRef}
                        onLoad={() => handleIFrameLoad()}
                        
                    ></iframe>
                }

                {
                    sectionState === SECTION_STATE_EDIT && 
                    <div 
                        id="gjs" 
                        className={`bld-gjs-pannel`} 
                        ref={divGrapesjs}
                     >
                    </div>
                }
            </div>

        </div>
    )
}