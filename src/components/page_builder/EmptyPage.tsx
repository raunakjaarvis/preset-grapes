'use client'

import Image from 'next/image';

// import antd design
import { Button, Space, Typography } from "antd";
const { Title, Paragraph } = Typography

// import assets
import imgMan from '@/images/page_builder/man.png'
import PlusIcon from '@/icons/page_builder/plus-icon.svg'
import { ReactElement } from 'react';


interface EPProps {
    handleOnClick: ( show: boolean ) => void, 
    title: string, 
    content: string | ReactElement, 
    buttonText: string
}

export default function EmptyPage( { handleOnClick, title, content, buttonText }: EPProps ) {
    return (
        <div className={`min-h-[620px] bg-cover h-full w-full flex justify-center items-center flex-col bld-bg-empty-image rounded-md border border-[#EAE7E6]`}
            >
            <Image
                src={imgMan}
                alt='No registered page'
                width="190"
                height='240'
                className='mx-auto'
            />

            <Title className='mx-auto text-center'>{title}</Title>
            <Paragraph className='mx-auto text-center w-1/2'>{content}</Paragraph>
        
            <Button type='primary' className={`bg-[#0087F4] border-[#0087F4] text-white stroke-[#FFFFFF] stroke-1 shadow-none flex items-center h-[40px] text-base`} icon={<PlusIcon />} onClick={() => handleOnClick(true)}  >{buttonText}</Button>
        </div>
    )
}