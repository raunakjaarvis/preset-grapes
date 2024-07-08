'use client'

import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

// redux
import { useDispatch, useSelector } from '@/store/store'
import { 
    setInit, 
    setPageInfo, 
    setSavedUndoStacks, 
    useGetAllTemplateDataQuery, 
    setCurrentTemplate, 
} from '@/store/projects/page_builder'
import { useGetDefaultLanguageQuery } from '@/features/projects/auth';
import { saveStackObject, TemplateResponse } from '@/types/page_builder'
import type { ApiResponse, LanguageType, Option } from '@/types/global';

// antd design
import { Layout , Space, Badge, Button, Modal, Form, Input, Select, notification, Skeleton } from 'antd'

const { Content } = Layout
const { Option } = Select

// import components
import BuilderHeader from "./header"

import EssentialItem from '@/components/page_builder/EssentialItem'
import EmptyPage from '@/components/page_builder/EmptyPage'
import CreatePageItem from '@/components/page_builder/CreatePageItem'

// import icons & images
import PlusIconTrans from '@/icons/page_builder/plus-icon-trans.svg'
import LinkExternalIcon from '@/icons/page_builder/link-external-icon.svg'

import styled from 'styled-components'



const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
};

export default function PageBuilder() {

    const { publishedTemplates, savedTemplates, savedUndoStacks } = useSelector((store: any) => store.pageBuilder)
    const router = useRouter()

    const [pageTitleModalOpen, setPageTitleModalOpen] = useState(false);
    const [form] = Form.useForm<{ name: string; language: string }>();

    const dispatch = useDispatch()
    const { data: languageList } = useGetDefaultLanguageQuery({ kind: 2, sword: '' });
    const { data: templateList } = useGetAllTemplateDataQuery( { templateId: 0, userId: 2, companyId: 1} )

    const pathname = usePathname()

    const [ language, setLanguage ] = useState<Option[]>([]);
    const [ pageLoading, setPageLoading ] = useState<boolean>(true);

    const onFinish = (values: any) => {

        dispatch(setInit())

        const langData = languageList as ApiResponse<LanguageType[]>
        const find = langData?.data?.find((f: LanguageType) => f.languageCode === values.language) as LanguageType

        const pageInfo = {pageName: values.pageName, language: find}


        dispatch(setPageInfo(pageInfo))

        const savedUndoStack: saveStackObject = {
            date: format(new Date(), "yyyy-MM-dd HH:mm:ss"), 
            undoStacks: [], 
            sections: [], 
            pageInfo: pageInfo
        }

        const newSavedUndoStacks = [...savedUndoStacks, savedUndoStack]

        dispatch(setSavedUndoStacks(newSavedUndoStacks))
        const template: TemplateResponse = {
            userId: 2, 
            companyId: 1, 
            templateId: 0, 
            templateName: pageInfo.pageName, 
            templateContent: savedUndoStack, 
            publishStatus: 0, 
            defaultStatus: 0, 
        }
        dispatch(setCurrentTemplate(template))
        // Construct the new URL relative to the current URL
        const newUrl = `${pathname}/create_page`

        // Navigate to the new URL
        router.push(newUrl)
    }

    const onFinishFailed = (errorInfo: any) => {
    
        notification.error({
          message: errorInfo.errorFields[0].errors[0] || 'Please enter values',
        });
    };

    const handleCancel = () => {
        setPageTitleModalOpen(false);
    }

    useEffect(() => {
        (async () => {
          const langData = languageList as ApiResponse<LanguageType[]>

            setLanguage(
                langData?.data?.map((rs: LanguageType) => {
                    return {
                        id: rs.id, 
                        label: rs.languageName,
                        value: rs.languageCode,
                    };
                })
            );
        })();
      }, [languageList]);

      useEffect(() => {
        if(templateList){
            setPageLoading(false)
        }
      }, [templateList])

    return (
        <Space direction="vertical" className="w-full" size={[0, 48]}>
            <Layout>
                <BuilderHeader />
                <Content className='px-16 grid grid-cols-1 gap-y-10 bg-[#f9f9f9] pb-10'>
                    <Space direction='vertical' className={`w-full grid gap-y-[20px]`}>
                        <div className={`flex justify-between mt-4`}>
                            <Space direction='horizontal' >
                                <Space direction='vertical' className="gap-y-0">
                                    <Link href={""} className={`text-[#0087F4] underline hover:underline text-[28px] hover:text-[#0087F9]`}>{templateList?.data?.companyUrl}</Link>
                                    <Badge color="#12B76A" text="Published" />
                                </Space>
                                <LinkExternalIcon />
                            </Space>

                            <Space>
                                <Button type='primary' icon={<PlusIconTrans />} className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none flex`} onClick={() => setPageTitleModalOpen(true)}>Create New Page</Button>
                            </Space>
                        </div>
                        <div className={``}>
                            {
                                !pageLoading && 
                                <Space className="text-2xl font-semibold" >
                                    Essentials Page
                                </Space>
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-4' >
                            <Skeleton loading={pageLoading}>
                                {
                                    publishedTemplates.map(( publishedTemplate: TemplateResponse, index: number ) => 
                                        <EssentialItem templateData={publishedTemplate} key={`published_${index}`} />
                                    )
                                }
                            </Skeleton>
                        </div>
                        <div className={`border-t-[1px] border-solid border-[#EAE7E6] pt-2`}>
                            {
                                !pageLoading && 
                                <Space className="text-2xl font-semibold">
                                    Pages
                                </Space>
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-4' >
                            <Skeleton loading={pageLoading}>
                            {
                                savedTemplates.map(( publishedTemplate: TemplateResponse, index: number ) => 
                                    <EssentialItem templateData={publishedTemplate} key={`saved_${index}`} />
                                )
                            }
                            <CreatePageItem handleNewPageClick={setPageTitleModalOpen} />
                            </Skeleton>
                        </div>
                        <Skeleton loading={pageLoading}>
                        
                        {
                            publishedTemplates.length === 0 && savedTemplates.length === 0 && 
                            <EmptyPage 
                                handleOnClick={setPageTitleModalOpen} 
                                title="Create your first page"
                                content="Customize your page down to the last detail. use your branmd colors, change fonts and make it look the way you want." 
                                buttonText="Create new page"
                            />
                        }
                        </Skeleton>
                    </Space>
                </Content>

                <Modal
                    title={<><div>Create New Modal</div><DetailDiv>Use an existing template as a starting point. Customize it as needed.</DetailDiv></>}
                    centered
                    open={pageTitleModalOpen}
                    okText="Create"
                    className='bld-page-title-modal'
                    onCancel={handleCancel}
                    footer={[
                        <Button key={"cancel"} type='text' onClick={() => setPageTitleModalOpen(false)}>Cancel</Button>, 
                        <Button key={"create"} type="primary" className="bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none" onClick={() => form.submit()}>Create</Button>
                    ]}
                >
                    <Form 
                        form={form} 
                        layout="vertical" 
                        autoComplete="off" 
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        validateMessages={validateMessages}
                    >
                        <Form.Item 
                            name="pageName" 
                            label={<span className='font-medium'>Page Name<span className="text-red-600 ml-2">*</span></span>}
                            rules={[{ required: true, message: 'Please enter Page Name!' }]}
                        >
                            <Input placeholder='Enter your page name' />
                        </Form.Item>
                        <Form.Item
                            name="language"
                            label={<span className='font-medium'>Language</span>}
                            rules={[{ required: false, message: 'Please select language!' }]}
                            className="bld-default-select"
                        >
                            <Select placeholder="Select language" options={language} className={`border-solid border-[1px] border-[#d9d9d9] rounded-lg active:border-[#294753] hover:border-[#294753] focus:border-[#294753] h-full bld-default-select`}>
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>

            </Layout>
        </Space>
    )
}

const DetailDiv = styled.div`
    color:  #4D6670;
    font-size: 0.75rem;
`