'use client'

import { useState, useEffect } from "react";

import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from '@/store/store';
import { useSaveUploadImageMutation } from '@/features/projects'

// antd
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Upload } from "antd";


// icon
import TrashTransIcon from '@/icons/page_builder/trash-trans-icon.svg'
import TrashTrans2Icon from '@/icons/page_builder/trash-trans-2.svg'
import ReplaceIcon from '@/icons/page_builder/replace.svg'
import ArrowLeftIcon from '@/icons/page_builder/arrow-left.svg'
import ArrowRightIcon from '@/icons/page_builder/arrow-right.svg'
import EditIcon from '@/icons/page_builder/edit.svg'


export default function EditGalleryModal ( ) {

    const { editor } = useSelector((store: any) => store.pageBuilder)
    const [ saveUploadImage, result ] = useSaveUploadImageMutation()

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [ allImages, setAllImages ] = useState<any[]>([])
    const [ imageId, setImageId ] = useState<string>('')
    const [ alt, setAlt ] = useState<string>('')

    const showModal = (flag : boolean) => {
        setModalShow(true)

        initGalleryItems()
    }

    const initGalleryItems = () => {
        const component = editor.getSelected()

        const images = component.find('img')
        setAllImages(images.slice())
        setImageId('')
    }

    const handleOk = () => {
        const component = editor.getSelected()
        component.components().reset()
        component.components().add(allImages)

        setModalShow(false)
    }

    const handleAltChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const index = allImages.findIndex((image: any) => image.getId() === imageId)
        const newArray = [...allImages]
        const attrs = newArray[index].getAttributes()
        newArray[index].setAttributes( { ...attrs, alt: e.target.value })
        setAllImages(newArray)
        setAlt(e.target.value)
    }

    const haldleDeleteImage = (  ) => {
        const index = allImages.findIndex((image: any) => image.getId() === imageId)
        const newArray = allImages.slice()
        newArray[index].set('src', '')
        setAllImages(newArray)
    }

    const setActive = ( id: string ) => {
        setImageId( id )
        const image = allImages.find((image: any) => image.getId() === id)
        setAlt(image?.getAttributes().alt)
    }

    const handleRemoveImage = ( id: string ) => {
        const updatedImages = allImages.filter((image: any) => image.getId() !== id)
        setAllImages(updatedImages)
    }

    const moveItem = ( direct: number, id: string ) => {
        const index1 = allImages.findIndex((image: any) => image.getId() === id)
        let index2 = index1 + direct
        if(index2 < 0) index2 = allImages.length - 1
        else if( index2 > allImages.length - 1 ) index2 = 0

        const newArray = allImages.slice();
        [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];

        setAllImages(newArray)
    }

    const customUpload = async (options: any) => {
        const { file } = options
        saveUploadImage({ image: file, kind: "5" })
    }

    useEffect(() => {
        if(result.isSuccess) {
            const index = allImages.findIndex((image: any) => image.getId() === imageId)
            const newArray = allImages.slice()
            newArray[index].set('src', result?.data?.data?.url)
            setAllImages(newArray)
        }
    }, [ result ])

    return (
        <>
            <Button 
                    className={`bg-white !border-[#D0D5DD] !text-[#344054] mb-4 flex mx-auto w-full justify-center`} 
                    icon={<EditIcon className="ml-auto" />} 
                    onClick={() => showModal(true)}
            >
                Edit Gallery
            </Button>
            <Modal
                title={<ModalHeaderDiv>Edit Gallery</ModalHeaderDiv>}
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
                            <div className="h-full w-full overflow-auto">
                            <div className="grid grid-cols-5 md:grid-cols-4 gap-4 w-full">
                                {allImages.map((image: any) => (
                                    <GridItemDiv className={`${imageId === image.getId() ? 'active': ''} bld-grid-gallery-item`} key={image.getId()} onClick={() => setActive(image.getId())} >
                                        <img className="h-full w-full" alt={image.getAttributes().alt} src={image.getAttributes().src}/>
                                        <div className="bld-item-overlay absolute top-0 left-0 w-full h-full hidden">
                                            <BlackIconButton 
                                                className="top-1 ml-auto flex mr-1 justify-center fill-none stroke-[#FFFFFF]" 
                                                icon={<TrashTrans2Icon 
                                                className="m-auto" 
                                                onClick={() => handleRemoveImage(image.getId())} />}></BlackIconButton>
                                            <div className="flex justify-between relative px-3 top-[170px] w-28 mx-auto" >
                                                <OrangeIconButton 
                                                    icon={<ArrowLeftIcon
                                                    onClick={() => moveItem(-1, image.getId())} />}></OrangeIconButton>
                                                <OrangeIconButton 
                                                    icon={<ArrowRightIcon />} 
                                                    onClick={() => moveItem(1, image.getId())} ></OrangeIconButton>
                                            </div>
                                        </div>
                                    </GridItemDiv>
                                ))}
                                
                                </div>
                            </div>
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

const GridItemDiv = styled.div`
    height: 250px;
    position: relative;
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

const BlackIconButton = styled(Button)`
    background-color: #F13528;
    border-color: #F13528 !important;
    border-radius: 50%;
    stroke-width: 1.5;
`

const OrangeIconButton = styled(Button)`
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`