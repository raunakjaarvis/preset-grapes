'use client'

import { useState, useEffect } from "react";

import styled from 'styled-components';

// import redux
import { useDispatch, useSelector } from '@/store/store';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useSaveUploadImageMutation } from '@/features/projects'

// antd
import { Button, Input, Modal, Upload } from "antd";
import type { UploadFile } from 'antd/es/upload/interface';


// icon
import ReplaceIcon from '@/icons/page_builder/replace.svg'
import TrashTransIcon from '@/icons/page_builder/trash-trans-icon.svg'
import EditIcon from '@/icons/page_builder/edit.svg'


export default function EditImageModal ( ) {

    const { editor } = useSelector((store: any) => store.pageBuilder)
    const [ saveUploadImage, result ] = useSaveUploadImageMutation()

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [ alt, setAlt ] = useState<string>('')
    const [ src, setSrc ] = useState<string>('')

    const showModal = (flag : boolean) => {
        setModalShow(true)

        const selectedComponent = editor.getSelected()
        const el = selectedComponent?.getEl() as HTMLImageElement
        
        setSrc(el.src)
        setAlt(el.alt)
    }

    const handleOk = () => {

        const selectedComponent = editor.getSelected()

        selectedComponent.set('src', src)
        selectedComponent.set('alt', alt)

        setModalShow(false)
    }

    const handleAltChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAlt(e.target.value)
    }

    const haldleDeleteImage = (  ) => {
        setSrc('')
    }

    const customUpload = async (options: any) => {
        const { file } = options
        saveUploadImage({ image: file, kind: "5" })
    }

    useEffect(() => {
        if(result.isSuccess) {
            setSrc(result?.data?.data?.url)
        }
    }, [ result ])

    return (
        <>
            <Button 
                    className={`bg-white !border-[#D0D5DD] !text-[#344054] mb-4 flex mx-auto w-full justify-center`} 
                    icon={<EditIcon className="ml-auto" />} 
                    onClick={() => showModal(true)}
            >
                Edit Image
            </Button>
            <Modal
                title={<ModalHeaderDiv>Single Image</ModalHeaderDiv>}
                centered
                open={modalShow}
                onCancel={() => setModalShow(false)}
                footer={
                    <div className="flex">
                        <Button key="back" type="text" onClick={() => setModalShow(false)} className={`flex ml-auto`} >
                            Cancel
                        </Button>
                        <Button key="submit" type="primary" onClick={handleOk} className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] shadow-none flex`} >
                            Done
                        </Button>
                    </div>
                }
                width={1500}
                className='bld-second-library-modal h-[90vh]'
            >
                <div className="flex h-full">

                    <ContentDiv >
                        <ContentImageDiv >
                            <img alt="" className="h-full w-auto m-auto" src={src}/>
                        </ContentImageDiv>
                    </ContentDiv>
                    <RightBarDiv>
                        <SideHeaderDiv>Image Details</SideHeaderDiv>

                        <div>
                            <TitleDiv className="my-2">Alt</TitleDiv>
                            <Input 
                                className={`!border-[#EAE7E6] h-[40px] text-base active:!shadow-[0_0_0_2px_rgb(253,231,224)] focus:!shadow-[0_0_0_2px_rgb(253,231,224)]`} 
                                onChange={handleAltChange} 
                                value={alt} 
                                suffix={
                                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                }
                            />
                        </div>
                        
                        <div className="flex mt-4">
                            <Upload 
                                className="bld-upload inline-block w-5/6"
                                maxCount={1}
                                showUploadList={false}
                                multiple={false}
                                customRequest={customUpload}
                            >
                                <Button 
                                    className={`!border-[#EDEFF1] py-4 h-[36px] w-full text-[#294753] text-[16px] font-semibold hover:!text-[#294753] flex justify-center items-center`} 
                                    icon={<ReplaceIcon />} 
                                >
                                    <span >Replace Image</span>
                                </Button>
                            </Upload>
                            <Button icon={<TrashTransIcon />} onClick={() => haldleDeleteImage()} className=" ml-1 border-[#FDA29B] hover:!border-[#FDA29B] h-[36px] !w-[36px] stroke-[#B42318] fill-none stroke-[1.5] flex items-center justify-center"></Button>
                        </div>

                    </RightBarDiv>
                </div>

            </Modal>
        </>
    )
}



const ModalHeaderDiv = styled.div`
    font-size: 24px;
    font-weight: 600;
`

const ContentDiv = styled.div`
    width: calc(100% - 300px);
    height: 100%;
    background-color: #F9F9F9;
`

const ContentImageDiv = styled.div`
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    margin: 1rem;
    background-color: #fff;
    item-align: center;
    padding: 1rem;
    border: 1px solid #EAE7E6;
`

const RightBarDiv = styled.div`
    width: 300px;
    height: 100%;
    border-left: 1px solid #EAE7E6;
    padding-left: 1rem;
    padding-right: 1rem;
`


const SideHeaderDiv = styled.div`
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const TitleDiv = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #294753;
    display: flex;
`