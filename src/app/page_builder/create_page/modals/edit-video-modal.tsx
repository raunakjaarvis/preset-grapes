'use client'

import { useState } from "react";

import styled from 'styled-components';

// import redux
import { useDispatch, useSelector } from '@/store/store';

// antd
import { Button, Input, Modal, Upload, Select } from "antd";


// icon
import EditIcon from '@/icons/page_builder/edit.svg'
import { CT_VIDEO_CONTAINER, CT_IFRAME, CT_VIDEO_POSTER_IMAGE } from "../constants";


// https://www.youtube-nocookie.com/embed/_BJy3tVc6QE?playlist=_BJy3tVc6QE&playsinline=1&modestbranding=1&autoplay=1&controls=0&mute=1&loop=1&enablejsapi=1&origin=https%3A%2F%2Fheadhunthq.recruitee.com&widgetid=17
export default function VideoEditModal ( ) {

    const { editor } = useSelector((store: any) => store.pageBuilder)

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [ videoURL, setVideoURL ] = useState<string>('')
    const [ url, setUrl ] = useState<string>('')
    const [ provider, setProvider ] = useState<string>('youtube')
    const [ ratio, setRatio ] = useState<string>('16_9')

    const showModal = (flag : boolean) => {
        setModalShow(true)

        const editorComponent = editor.getWrapper()
        const mainComponent = editorComponent.find(`.${CT_VIDEO_CONTAINER}`)[0]
        const iFrameComponent = mainComponent.find(`.${CT_IFRAME}`)[0]
    }

    const handleOk = () => {
        
        const editorComponent = editor.getWrapper()
        const mainComponent = editorComponent.find(`.${CT_VIDEO_CONTAINER}`)[0]
        const iFrameComponent = mainComponent.find(`.${CT_IFRAME}`)[0]
        const imgPostImage = mainComponent.find(`.${CT_VIDEO_POSTER_IMAGE}`)[0]


        if(provider === "youtube") {
            var pattern = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/;
            if( pattern.test(url) ) {
                const parsedUrl = new URL(url)
                const videoId = parsedUrl.searchParams.get('v')
                iFrameComponent.setAttributes({'src': `https://www.youtube-nocookie.com/embed/${videoId}?playlist=${videoId}&playsinline=1&modestbranding=1&controls=1&mute=1&loop=1&enablejsapi=1&fs=1&&autoplay=0`})
            }
        } else if (provider === "vimeo") {
            iFrameComponent.setAttributes({'src': url, style: 'display: none;'})
        }
      setModalShow(false)
    }



    const handleProviderChange = (value: string) => {
        setProvider(value)
        setVideoURL('')
    };

    const handleURLChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {


        setUrl(e.target.value)
        if(provider === "youtube") {
            var pattern = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/;
            if( pattern.test(e.target.value) ) {
                const parsedUrl = new URL(e.target.value)
                const videoId = parsedUrl.searchParams.get('v')
                setVideoURL(`https://www.youtube-nocookie.com/embed/${videoId}?playlist=${videoId}&playsinline=1&modestbranding=1&autoplay=1&controls=0&mute=1&loop=1&enablejsapi=1`)
            }
        } else if (provider === "vimeo") {
            setVideoURL(e.target.value)
        }
    }

    const handleRatioChange = (value: string) => {
        setRatio(value)
    };

    return (
        <>
            <Button 
                    className={`bg-white !border-[#D0D5DD] !text-[#344054] mb-4 flex mx-auto w-full justify-center`} 
                    icon={<EditIcon className="ml-auto" />} 
                    onClick={() => showModal(true)}
            >
                Video Setting
            </Button>
            <Modal
                title={<ModalHeaderDiv>Video Setting</ModalHeaderDiv>}
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
                            <iframe src={`${videoURL}`} allowFullScreen={true} style={{width: '615px', height: '350px'}} ></iframe>
                        </ContentImageDiv>
                    </ContentDiv>
                    <RightBarDiv>

                        <div>
                            <TitleDiv className="my-2">Select Video Provider</TitleDiv>
                            <Select
                                value={provider}
                                className={`border-solid border-[1px] border-[#d9d9d9] rounded-lg active:border-[#294753] hover:border-[#294753] focus:border-[#294753] h-[38px] bld-default-select w-full`} 
                                onChange={handleProviderChange}
                                options={[
                                    { value: 'youtube', label: 'Youtube' },
                                    { value: 'vimeo', label: 'Vimeo' },
                                ]}
                            />
                        </div>
                        
                        {
                            provider === 'vimeo' && 
                            <div>
                                <TitleDiv className="my-2">Video ID</TitleDiv>
                                <Input 
                                    placeholder="https://vimeo.com/226053498"
                                    className={`!border-[#EAE7E6] h-[40px] text-base active:!shadow-[0_0_0_2px_rgb(253,231,224)] focus:!shadow-[0_0_0_2px_rgb(253,231,224)]`} 
                                    onChange={handleURLChange} 
                                    value={url} 
                                />
                            </div>
                        }

{
                            provider === 'youtube' && 
                            <div>
                                <TitleDiv className="my-2">Video URL</TitleDiv>
                                <Input 
                                    placeholder="https://www.youtube.com/watch?v=9xwazD5SyVg"
                                    className={`!border-[#EAE7E6] h-[40px] text-base active:!shadow-[0_0_0_2px_rgb(253,231,224)] focus:!shadow-[0_0_0_2px_rgb(253,231,224)]`} 
                                    onChange={handleURLChange} 
                                    value={url} 
                                />
                            </div>
                        }
                        
                        <div>
                            <TitleDiv className="my-2">Select video aspect ratio</TitleDiv>
                            <Select
                                value={ratio}
                                className={`border-solid border-[1px] border-[#d9d9d9] rounded-lg active:border-[#294753] hover:border-[#294753] focus:border-[#294753] h-[38px] bld-default-select w-full`} 
                                onChange={handleRatioChange}
                                options={[
                                    { value: '16_9', label: '16:9' },
                                    { value: '4_3', label: '4:3' },
                                ]}
                            />
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
    width: calc(100% - 500px);
    height: 100%;
    background-color: #F9F9F9;
`

const ContentImageDiv = styled.div`
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    margin: 1rem;
    background-color: #fff;
    padding: 1rem;
    border: 1px solid #EAE7E6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightBarDiv = styled.div`
    width: 500px;
    height: 100%;
    border-left: 1px solid #EAE7E6;
    padding-left: 1rem;
    padding-right: 1rem;
`

const TitleDiv = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #294753;
    display: flex;
`