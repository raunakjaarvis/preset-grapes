'use client'

import { useState, forwardRef, useEffect, ReactElement } from "react";
import dynamic from 'next/dynamic';
import { Component, ComponentManager } from 'grapesjs';

import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from '@/store/store';
import { setEditModalShow } from '@/store/projects/page_builder'


// antd
import { Button,  Modal, Avatar, Upload, List, UploadProps, UploadFile, Switch, Input } from "antd"

// dnd-kit module
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
    DndContext,
    closestCenter,
    MouseSensor, 
    useSensor,
    useSensors,
    DragOverlay, 
    useDraggable, 
} from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import "react-quill/dist/quill.snow.css";

// icon
import XIcon from '@/icons/page_builder/x-icon.svg'
import CheckTransIcon from '@/icons/page_builder/check-icon-trans.svg'
import PlusTransIcon from '@/icons/page_builder/plus-icon-trans.svg'
import EditIcon from '@/icons/page_builder/edit.svg'
import TrashTrans2Icon from '@/icons/page_builder/trash-trans-2.svg'
import SixDotsIcon from '@/icons/page_builder/six-dots.svg'

import { MoreOutlined, PlusOutlined } from '@ant-design/icons';

import { 
    CT_MAIN_COMPONENT, 

    CT_LIST, 
    CT_LIST_ITEM, 
    CT_LIST_ITEM_IMG, 
    CT_LIST_ITEM_HEAD, 
    CT_LIST_ITEM_CONTENT, 
 } from "../constants";
import { RcFile } from "antd/es/upload";




const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
});


const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "code"],
        ["clean"],
    ],
}
   
const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "code",
]



export default function EditListModal ( ) {

    const { editor, showEditListModal } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [listItems, setListItems] = useState<Component[]>([]);
    const [currentItem, setCurrentItem] = useState<string>('');

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([])

    useEffect(() => {
        if(showEditListModal) {
            showModal(true)
            dispatch(setEditModalShow(false))
        }
    }, [ showEditListModal ])


    const showModal = (flag : boolean) => {
        setModalShow(true)

        initListItems()
    }

    const initListItems = () => {
        if(editor) {
            
            const editorComponent = editor.getWrapper()
            const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    
            const listComponents = mainComponent?.find(`.${CT_LIST_ITEM}`) as Component[]
            setListItems(listComponents.slice())
        }
    }

    const handleOk = () => {
        if(editor) {
            
            const editorComponent = editor.getWrapper()
            const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    
            const component = mainComponent?.find(`.${CT_LIST}`)[0]
            component.components().reset()
            component.components().add(listItems)
    
            setModalShow(false)
        }
    }

    const setActive = (id: string) => {
        setCurrentItem( id )

        const item = listItems.find((item: any) => item.getId() === id)
        const prevImage = item?.find(`.${CT_LIST_ITEM_IMG}`)[0]?.getAttributes().src
        setPreviewImage((prevImage as string))
    }

    const handleDelete = () => {
        const newListItems = listItems.filter((item: any) => item.getId() !== currentItem)

        setListItems(newListItems)
    }

    // ======================== Drag and Drop
    
    const [ activeId, setActiveId ] = useState(null)
    const [ activeItem, setActiveItem ] = useState<ReactElement | null>(null)

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

            const clonedListItems = listItems.slice();
            const oldIndex = listItems.findIndex((i: Component) => i?.getId() === active.id)
            const newIndex = listItems.findIndex((i: Component) => i?.getId() === over.id)

            const [reorderedItem] = clonedListItems.splice(oldIndex, 1);
            clonedListItems.splice(newIndex, 0, reorderedItem);
    
            setListItems(clonedListItems);
        }
        setActiveId(null);
    }

    function handleDragStart(event: any) {
        const { active } = event;
        const itemIndex = listItems.findIndex((i: Component) => i?.getId() === active.id)
        const item = listItems[itemIndex]
        setActiveItem(<div  
                            className={`my-2 border rounded-lg border-solid h-[65px]`}
                        >
                        <List.Item className="flex items-align">
                            <Button type="text" icon={<SixDotsIcon />} className="hover:!bg-transparent active:!bg-transparent"></Button>
                            <List.Item.Meta
                            className="flex !items-center justify-center"
                            avatar={<Avatar src={item?.find(`.${CT_LIST_ITEM_IMG}`)[0]?.getAttributes().src} />}
                            title={<span>{item?.find(`.${CT_LIST_ITEM_HEAD}`)[0]?.getEl().innerHTML}</span>}
                            description={<span>{item?.find(`.${CT_LIST_ITEM_CONTENT}`)[0]?.getEl().innerHTML}</span>}
                            />
                            <Button type="text" icon={<MoreOutlined className="stroke-[#00ff00]" />} className="hover:!bg-transparent active:!bg-transparent"></Button>
                        </List.Item>
                    </div>)

        setActiveId(active.id);
    }


// ============================ file upload
    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    

    return (
        <>
            <Button 
                    className={`bg-white !border-[#D0D5DD] !text-[#344054] mb-4 flex mx-auto w-full justify-center`} 
                    icon={<EditIcon className="ml-auto" />} 
                    onClick={() => showModal(true)}
            >
                Edit List
            </Button>
            <Modal
                title={<ModalHeaderDiv>Edit List Item</ModalHeaderDiv>}
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

                                <DndContext
                                    sensors={sensors}
                                    collisionDetection={closestCenter}
                                    onDragEnd={handleDragEnd}
                                    onDragStart={handleDragStart}
                                    >
                                    <SortableContext items={listItems} strategy={verticalListSortingStrategy}>
                                        <List
                                            dataSource={listItems}
                                            size="small"
                                            renderItem={(item, index) => (
                                                <SortableItem key={item.getId()} id={item.getId()}>
                                                    <div style={{ opacity: item.getId() === activeId ? 0 : 1 }} key={`key_${index}`} 
                                                        className={`my-2 border rounded-lg border-solid  ${currentItem === item.getId() ? "border-[#0087F4]" : "border-[#EAE7E6]" }`}
                                                        onClick={() => setActive(item.getId())}
                                                    >

                                                        <List.Item >
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
                                                </SortableItem>
                                            )}
                                        />
                                    </SortableContext>
                                    <DragOverlay>{activeId && activeItem}</DragOverlay>
                                </DndContext>


                            </div>

                            <Button type="dashed" block className="border-[#B8C2C6] text-[#294753] hover:!border-[#B8C2C6] hover:!text-[#294753] text-base stroke-[#294753] flex items-center justify-center h-[44px] font-semibold stroke-2" icon={<PlusTransIcon />}>
                                Add New
                            </Button>
                        </ItemContentDiv>
                    </RightBarDiv>

                    <ContentDiv >
                        
                        <div className="h-full border-r border-solid border-[#EFF1F4] w-1/3 p-4 overflow-auto">
                            <>
                                <ItemHeaderDiv>Image</ItemHeaderDiv>
                                <Upload
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    multiple={false}
                                    className="bld-list-upload"
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel} className="flex justify-center">
                                    <img alt="example" className={`h-full`} src={previewImage} />
                                </Modal>
                            </>

                            <>
                                <ItemHeaderDiv>Title</ItemHeaderDiv>
                                <Input className="border-[#EAE7E6] hover:border-[#EAE7E6] focus:!border-[#EAE7E6]" />
                            </>

                            <>
                                <ItemHeaderDiv className="flex justify-between mt-4">Show Button <Switch size="small" defaultChecked className={`mb-1 bld-ant-switch`} /></ItemHeaderDiv>
                            </>

                            <>
                                <Button type="primary" className="bg-[#D92D20] hover:!bg-[#D92D20] !border-[#D92D20] text-[#FFFFFF] stroke-[#FFFFFF] stroke-1 fill-[#D92D20] !w-full flex items-center justify-center" icon={<TrashTrans2Icon />} onClick={() => handleDelete()}>Delete Card</Button>
                            </>
                        </div>

                        <div className="w-2/3 p-4 h-full overflow-auto">
                            <ReactQuill
                                theme="snow"
                                value={""}
                                modules={modules}
                                formats={formats}
                                // onChange={onChange}
                                placeholder={""}
                                className="h-[calc(100%_-_3rem)]"
                            />
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
    margin-bottom: 1rem;
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