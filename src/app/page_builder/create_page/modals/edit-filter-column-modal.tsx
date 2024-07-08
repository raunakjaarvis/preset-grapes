'use client'

import { useState } from "react";

import styled from 'styled-components';

// import redux
import { useDispatch, useSelector } from '@/store/store';
import { 
    setJobFilterColumn, 
} from '@/store/projects/page_builder';
import { 
    CommonObject
} from '@/types/page_builder'

// antd
import { Button,  Modal, Switch } from "antd";


// icon
import { JOB_TALBE_COLUMNS  } from "../constants";


export default function EditFilterColumnModal ( ) {

    const { jobFilterColumn } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()

    const [ modalShow, setModalShow ] = useState<boolean>(false)
    const [ allCheckState, setAllCheckState ] = useState<CommonObject>(jobFilterColumn)
    const [ filterColumns, setFilterColumns ] = useState<CommonObject>({...JOB_TALBE_COLUMNS, searchInput: "Search Text"})

    const showModal = (flag : boolean) => {
        setModalShow(true)

        setAllCheckState(jobFilterColumn)
    }

    const handleOk = () => {
        dispatch(setJobFilterColumn(allCheckState))
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
                Edit filters visibility
            </Button>
            <Modal
                title={<ModalHeaderDiv>Edit filters visibility</ModalHeaderDiv>}
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
                                    <span className="ml-1">{filterColumns[key]}</span>
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