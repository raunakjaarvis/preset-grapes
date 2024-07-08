'use client'

import { useState, useRef, useMemo } from "react"
import { Component } from 'grapesjs'
import { GoogleMap, useJsApiLoader, Marker, MarkerProps } from "@react-google-maps/api"

import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from '@/store/store';

// antd
import { Button,  Modal, Avatar, List, UploadProps, UploadFile, Switch, Input } from "antd"
const { TextArea } = Input

// import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'

// icon
import XIcon from '@/icons/page_builder/x-icon.svg'
import CheckTransIcon from '@/icons/page_builder/check-icon-trans.svg'
import PlusTransIcon from '@/icons/page_builder/plus-icon-trans.svg'
import EditIcon from '@/icons/page_builder/edit.svg'
import TrashTrans2Icon from '@/icons/page_builder/trash-trans-2.svg'
import SixDotsIcon from '@/icons/page_builder/six-dots.svg'

import { MoreOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';

import { 
    CT_LIST_ITEM, 
    CT_LIST_ITEM_IMG, 
    CT_LIST_ITEM_HEAD, 
    CT_LIST_ITEM_CONTENT, 
 } from "../constants";
import { RcFile } from "antd/es/upload";


import { GOOGLE_MAP_API_KEY } from '../constants'



const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
});


export default function EditMapModal ( ) {

    const { editor } = useSelector((store: any) => store.pageBuilder)

    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [listItems, setListItems] = useState<Component[]>([]);
    const [currentItem, setCurrentItem] = useState<string>('');
    const [ marker, setMarker ] = useState<string>('London UK')

    const showModal = (flag : boolean) => {
        setModalShow(true)

        initGalleryItems()
    }

    const initGalleryItems = () => {
        const component = editor.getSelected() as Component

        const listComponents = component.find(`.${CT_LIST_ITEM}`) as Component[]
        setListItems(listComponents.slice())
    }

    const handleOk = () => {
        const component = editor.getSelected()
        component.components().reset()
        component.components().add(listItems)

        setModalShow(false)
    }

    const setActive = (id: string) => {
        setCurrentItem( id )
        const item = listItems.find((item: any) => item.getId() === id)
        const prevImage = item?.find(`.${CT_LIST_ITEM_IMG}`)[0]?.getAttributes().src
        // setPreviewImage((prevImage as string))
    }

    // ======================== Drag and Drop
    // function handleOnDragEnd(result: DropResult) {
    //     if (!result.destination) return;
  
    //     const clonedListItems = listItems.slice();
    //     const [reorderedItem] = clonedListItems.splice(result.source.index, 1);
    //     clonedListItems.splice(result.destination.index, 0, reorderedItem);

    //     setListItems(clonedListItems);
    // }
    
    const handleSearchMarker = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMarker(e.target.value)
    }
// =================== google map & marker ==============

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDGc3yqAPcSwBTrdYIVzoi_LavzD3X-vxY",
    });

    const center = useMemo(() => ({ lat: 40.7128, lng: -74.006 }), []);
    const favoritePlace = { lat: 40.748817, lng: -70.985428 };

    const [markerPosition, setMarkerPosition] = useState({ lat: 59.95, lng: 30.33 });

    const handleMarkerDragEnd = (event: google.maps.MouseEvent<MarkerProps>) => {
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        console.log(lat, lng)
        setMarkerPosition({ lat, lng });
    }

    return (
        <>
            <Button 
                    className={`bg-white !border-[#D0D5DD] !text-[#344054] mb-4 flex mx-auto w-full justify-center`} 
                    icon={<EditIcon className="ml-auto" />} 
                    onClick={() => showModal(true)}
            >
                Edit Map
            </Button>
            <Modal
                title={<ModalHeaderDiv>Edit Map Marker</ModalHeaderDiv>}
                centered
                open={modalShow}
                onCancel={() => setModalShow(false)}
                footer={
                    <div className="flex">
                        <Button key="back" onClick={() => setModalShow(false)} className={`!border-[#D0D5DD] text-[#344054] hover:!text-[#344054] flex ml-auto stroke-2`} icon={<XIcon />} >
                            Cancel
                        </Button>
                        <Button key="submit" type="primary" onClick={handleOk} className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] shadow-none hover:!bg-[#294753] hover:border-[#294753] hover:text-white hover:stroke-[#FFFFFF] flex`} icon={<CheckTransIcon />} >
                            Done
                        </Button>
                    </div>
                }
                width={1500}
                className='bld-second-library-modal h-[90vh]'
            >
                <div className="flex h-full">
                    <RightBarDiv>
                        <ItemContentDiv>
                            <div className="h-[calc(100%_-_3rem)] overflow-auto mb-2">
                                {/* <DragDropContext onDragEnd={handleOnDragEnd} className="h-full">
                                    <Droppable droppableId="DropId">
                                        {(provided: any) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <List
                                                    
                                                    dataSource={listItems}
                                                    size="small"
                                                    renderItem={(item, index) => (
                                                    <Draggable draggableId={`draggable-${index}`} index={index} rowKey={`draggable_${index}`} >
                                                        {(provided: any) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}

                                                            className={`my-2 border rounded-lg border-solid  ${currentItem === item.getId() ? "border-[#0087F4]" : "border-[#EAE7E6]" }`}
                                                            onClick={() => setActive(item.getId())}
                                                        >
                                                            <List.Item className="">
                                                                <Button type="text" icon={<SixDotsIcon />} className="hover:!bg-transparent active:!bg-transparent"></Button>
                                                                <List.Item.Meta
                                                                className="flex !items-center justify-center"
                                                                avatar={<Avatar src={item?.find(`.${CT_LIST_ITEM_IMG}`)[0]?.getAttributes().src} />}
                                                                title={<span>{item?.find(`.${CT_LIST_ITEM_HEAD}`)[0]?.getEl().innerHTML}</span>}
                                                                description={<span>{item?.find(`.${CT_LIST_ITEM_CONTENT}`)[0]?.getEl().innerHTML}</span>}
                                                                />
                                                                <Button type="text" icon={<MoreOutlined className="stroke-[#00ff00]" />} className="hover:!bg-transparent active:!bg-transparent"></Button>
                                                            </List.Item>
                                                        </div>
                                                        )}
                                                    </Draggable>
                                                    )}
                                                />
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext> */}
                            </div>

                            <Button type="dashed" block className="border-[#B8C2C6] text-[#294753] hover:!border-[#B8C2C6] hover:!text-[#294753] text-base stroke-[#294753] flex items-center justify-center font-semibold stroke-2" icon={<PlusTransIcon />} onClick={() => addNewMarker()}>
                                Add New
                            </Button>
                        </ItemContentDiv>
                    </RightBarDiv>

                    <ContentDiv >
                        
                        <div className="h-full border-r border-solid border-[#EFF1F4] w-1/3 p-4 overflow-auto">

                            <>
                                <ItemHeaderDiv>Title</ItemHeaderDiv>
                                <Input className="border-[#EAE7E6] hover:border-[#EAE7E6] focus:!border-[#EAE7E6]" />
                            </>

                            <>
                                <ItemHeaderDiv>Description</ItemHeaderDiv>
                                <TextArea className="border-[#EAE7E6] hover:border-[#EAE7E6] focus:!border-[#EAE7E6] mb-4" rows={4} />
                            </>

                            <>
                                <Button type="primary" className="bg-[#D92D20] hover:!bg-[#D92D20] !border-[#D92D20] text-[#FFFFFF] stroke-[#FFFFFF] stroke-1 fill-[#D92D20] !w-full flex items-center justify-center" icon={<TrashTrans2Icon />}>Delete Marker</Button>
                            </>
                        </div>

                        <div className="w-2/3 p-4 h-full overflow-auto relative ">
                            <Input className="absolute top-[2rem] bg-white hover:bg-white [&>input:focus]!bg-white w-11/12 ml-3 " prefix={<SearchOutlined />} onChange={handleSearchMarker} value={marker} />
                            {isLoaded ? (
                                <GoogleMap
                                center={center}
                                mapContainerStyle={{
                                    width: "100%",
                                    height: "400px",
                                }}
                                zoom={8}
                                >
                                <Marker 
                                    position={favoritePlace}
                                    draggable={true}
                                    onDragEnd={handleMarkerDragEnd}
                                 />
                                </GoogleMap>
                            ) : null }
                        </div>

                    </ContentDiv>

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
    width: calc(100% - 350px);
    height: 100%;
    display: flex;
`

const RightBarDiv = styled.div`
    width: 350px;
    height: 100%;
    border-right: 1px solid #EFF1F4;
    padding: 1rem;
    background-color: #F9FBFC;
`

const ItemContentDiv = styled.div`
    border-radius: 6px;
    border: 1px solid #EDEFF1;
    padding: 1rem;
    height: 100%;
`

const ItemHeaderDiv = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`