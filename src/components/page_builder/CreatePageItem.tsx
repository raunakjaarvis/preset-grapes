'use client'

import { Badge, Button, Space, Typography  } from "antd"

import Image from 'next/image'

const { Title  } = Typography


import CreatePageSkeleton from '@/images/page_builder/empty-skeleton.png'
import PlusIcon from '@/icons/page_builder/plus-icon.svg'

interface CPProps {
    handleNewPageClick: ( show: boolean ) => void
}


export default function CreatePageItem( { handleNewPageClick }: CPProps ) {

    return (
        <div className="w-full bg-white rounded-md p-4 border border-[#EAE7E6]" >
            <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] flex min-h-[calc(100%_-_63px)]`} >
                <Image 
                    src={CreatePageSkeleton}
                    alt="Picture Of theme"
                    className="m-auto"
                    height={205}
                />
            </div>
            <div className={`flex mt-4 justify-center`}>
                <Space direction="vertical" className={`gap-y-0 w-full`} >
                    <Space direction="horizontal" className={`flex justify-between w-full`}>
                        <Space>
                            <Title level={4} className="text-xl !text-black" >Create Page</Title>
                        </Space>
                        <Button type='primary' className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none flex`} icon={<PlusIcon />} onClick={() => handleNewPageClick(true)} >New Page</Button>
                    </Space>

                </Space>
            </div>
        </div>
    )
}