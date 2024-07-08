'use client'

import { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'

import { Badge, Dropdown, Space, Typography  } from "antd"
import type { MenuProps } from 'antd';

const { Title  } = Typography

import { MoreOutlined } from '@ant-design/icons'
import { PageInfo, PageType, TemplateResponse, saveStackObject } from '@/types/page_builder'
import { useDeleteTemplateMutation } from '@/features/projects'
import TemplatePreviewItem from "./TemplatePreviewItem";

import { useDispatch, useSelector } from '@/store/store'
import { 
    setInit, 
    setPageInfo, 
    setSavedUndoStacks, 
    setCurrentTemplate, 
    setSections
} from '@/store/projects/page_builder'

const BOOTSTRAP_CSS = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">`
const BOOTSTRAP_JS = `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>`
const JQUERY_JS = `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`


interface EIProps {
    templateData: TemplateResponse
}


export default function EssentialItem( { templateData }: EIProps ) {

    const dispatch = useDispatch()
    const pathname = usePathname()
    const router = useRouter()
    const [ deleteTemplate, result ] = useDeleteTemplateMutation()

    const [ items, setItems ] = useState<MenuProps['items']>([
            {
                label: 'Edit',
                key: 'edit',
            },
            {
                label: 'Delete',
                key: 'delete',
            },
        ]
    )


    const handleMenuItemClick = async (e: any, index: number) => {
        if(e?.key === "delete") {
            await deleteTemplate(templateData).unwrap()
        } else if (e?.key === "open") {
            window.location.href = `/page_builder/template/${templateData.templateId}`
        } else if (e?.key === "edit") {

            dispatch(setInit())

            const pageInfo = templateData?.templateContent?.pageInfo as PageInfo

            dispatch(setPageInfo(pageInfo))

            const savedUndoStack: saveStackObject = templateData?.templateContent as saveStackObject

            dispatch(setSavedUndoStacks([savedUndoStack]))
            dispatch(setCurrentTemplate(templateData))
            if(templateData?.templateContent?.sections) {
                dispatch(setSections(templateData?.templateContent?.sections))
            } else {
                dispatch(setSections([]))
            }
            // Construct the new URL relative to the current URL
            const newUrl = `${pathname}/create_page`

            // Navigate to the new URL
            router.push(newUrl)
            
        }
    }

    useEffect(() => {
        if(templateData?.publishStatus) {
            setItems([
                {
                    label: 'Open',
                    key: 'open',
                },
                {
                    label: 'Edit',
                    key: 'edit',
                },
                {
                    label: 'Delete',
                    key: 'delete',
                },
            ])
        }
    }, [])

    return (
        <Space direction="vertical" className="w-full bg-white rounded-md p-4 border border-[#EAE7E6]" >
            
            <div className="w-full h-[250px] overflow-hidden border rounded-md">
                {
                    templateData?.templateContent?.sections?.map((section: PageType, index: number) => 
                        index < 3 && 
                        <div key={index}>
                            <TemplatePreviewItem srcDoc={`
                                 ${BOOTSTRAP_CSS}
                                 ${BOOTSTRAP_JS}
                                 ${JQUERY_JS}
                                 <style>${section ? section.styles : null }</style>
                                 <style>body{scale: 0.5; width: 200%;overflow: hidden; left: -50%; position: absolute; top: -50%;}</style>
                                 ${section ? section.component : null}
                            `} />
                        </div>
                    )
                }
            </div>
            <div className={`flex justify-center`}>
                <Space direction="vertical" className={`gap-y-0 w-full`} >
                    <Space direction="horizontal" className={`flex justify-between w-full`}>
                        <Space>
                            <Title level={4} className="text-xl text-black" >{templateData?.templateName}</Title>
                            <Badge count={<span className="bg-transparent">Template</span>} color="#e0e4e9" className="text-black mb-1 bg-[#EDECEA] p-1 rounded-md" />
                        </Space>
                        <Dropdown 
                            className="mr-0"  
                            menu={{ items, onClick: (e) => handleMenuItemClick(e, 0) }}
                        >
                            <MoreOutlined className="text-xl" />
                        </Dropdown>
                    </Space>
                    {
                        templateData?.publishStatus ? <Badge color="#12B76A" text="Published" /> : <Badge color="#F1B928" text="Not Published" />
                    }
                    
                </Space>
            </div>
        </Space>
    )
}