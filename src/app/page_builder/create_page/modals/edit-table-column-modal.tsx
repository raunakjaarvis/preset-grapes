'use client'

import { useState } from "react";

import styled from 'styled-components';

// import redux
import { useDispatch, useSelector } from '@/store/store';
import { 
    setJobTableColumnFilter, 
} from '@/store/projects/page_builder';
// antd
import { Button,  Modal, Switch } from "antd";


// icon
import { JOB_TALBE_COLUMNS, CT_VIDEO_CONTAINER, CT_IFRAME, StyleObject  } from "../constants";


export default function EditTableColumnModal ( ) {

    const { jobTableColumnFilter } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [ allCheckState, setAllCheckState ] = useState<StyleObject>(jobTableColumnFilter)

    const showModal = (flag : boolean) => {
        setModalShow(true)

        setAllCheckState(jobTableColumnFilter)
    }

    const handleOk = () => {
        dispatch(setJobTableColumnFilter(allCheckState))
        setModalShow(false)
    }

    const handleCheck = (checked: boolean, key: string) => {
        setAllCheckState({...allCheckState, [key]: checked})
    }

    return (
        <>
            <Button 
                    type="default" 
                    className={`!border-[#EDECEA] text-[#000000] text-[16px] font-semibold w-full hover:!text-[#294753]`} 
                    onClick={() => showModal(true)}
            >
                Edit table columns
            </Button>
            <Modal
                title={<ModalHeaderDiv>Edit table columns</ModalHeaderDiv>}
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
                width={300}
                className='bld-second-library-modal'
            >
                <div className="flex h-full">

                    <RightBarDiv>
                        {
                            Object.keys(allCheckState).map((key: string) => (
                                <div className="my-2" key={key}>
                                    <Switch 
                                        size="small" 
                                        checked={allCheckState[key]} 
                                        className={`mb-1 bld-ant-switch`}
                                        onChange={(checked: boolean, event: Event) => handleCheck(checked, key)}    
                                    />
                                    <span className="ml-1">{JOB_TALBE_COLUMNS[key]}</span>
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

const TitleDiv = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #294753;
    display: flex;
`

const ItemDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`