'use client'

import { useState } from "react";
import { format } from 'date-fns'
import { useRouter } from "next/navigation"

import styled from 'styled-components';

// import redux
import { useDispatch, useSelector } from '@/store/store';
import { 
    setPreviewIndex, 
} from '@/store/projects/page_builder';
import { 
    saveStackObject, 
} from '@/types/page_builder'

// antd
import { Button,  Modal, Switch } from "antd";

import HistoryFill from '@/icons/page_builder/history-fill-icon.svg'
import EyeIcon from '@/icons/page_builder/eye-icon.svg'


export default function PageHistoryModal ( ) {

    const { savedUndoStacks } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()
    const router = useRouter()

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    
    const showModal = (flag : boolean) => {
        setModalShow(true)
    }

    const handlePreview = ( index: number ) => {
        dispatch(setPreviewIndex(index))
        router.push("preview")
    }

    return (
        <>
            <Button 
                icon={<HistoryFill  />} 
                type='text' 
                className={`flex mx-1 bg-transparent hover:!bg-transparent stroke-[2px] stroke-[#FFFFFF]`} 
                onClick={() => showModal(true)}
            ></Button>
            
            <Modal
                title={<ModalHeaderDiv>Page history</ModalHeaderDiv>}
                centered
                open={modalShow}
                onCancel={() => setModalShow(false)}
                footer={<></>}
                width={700}
                className='bld-second-library-modal-nofooter'
            >
                <div className="flex h-full">

                    <RightBarDiv>
                        {
                            savedUndoStacks.map((undoStack: saveStackObject, index: number) => (
                                <div className={`flex justify-between py-3 ${index > 0 ? "border-t":""}`} key={`history_${index}`}>
                                    <span>
                                        <span>
                                            {format(new Date(undoStack.date), "dd MMM yyyy, HH:mm")}
                                        </span>
                                        <span className="font-semibold text-base ml-3">
                                            {undoStack.pageInfo?.pageName}
                                        </span>
                                    </span>
                                    <span>
                                        <Button type={'link'} icon={<EyeIcon />} className="flex items-center text-black hover:!text-gray-700" onClick={() => handlePreview(index)}>Preview</Button>
                                    </span>
                                </div>
                            ))
                        }

                    </RightBarDiv>
                </div>

            </Modal>
        </>
    )
}



const ModalHeaderDiv = styled.div`
    font-size: 18px;
    font-weight: 600;
`
const RightBarDiv = styled.div`
    width: 100%;
    height: 100%;
    border-left: 1px solid #EAE7E6;
    padding-left: 1rem;
    padding-right: 1rem;
`