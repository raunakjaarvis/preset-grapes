'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from '@/store/store'
import { saveStackObject, PageType, } from '@/types/page_builder'

import PreviewItem from '@/components/page_builder/PreviewItem'
import DoryLogoIcon from '@/images/dory_logo.png'

export default function PreviewPage() {

    const { savedUndoStacks, previewIndex } = useSelector((store: any) => store.pageBuilder)

    const [ savedUndoStackData, setSavedUndoStackData ] = useState<saveStackObject>(savedUndoStacks[previewIndex])

    return (
        <div className="px-8 bg-white ">
            <div className='my-10 w-full pt-6 text-2xl font-extrabold pl-20 font-bolder '>
                Dory
            </div>
            {
                savedUndoStackData?.sections?.map((section: PageType, index: number) => (
                    <div key={`section_${index}`} className="my-40" >
                        <PreviewItem sectionData={section} index={index} />
                    </div>
                ))
            }
            {
                !savedUndoStackData?.sections?.length &&
                <div className="text-lg flex justify-center h-[calc(100vh_-_20rem_-_72px)] items-center">
                    This page is empty.
                </div> 

            }
            <div className="mb-10 flex justify-center w-full py-6 items-end">
                <span className="text-lg">Hiring with</span> <Image className="mx-4 h-[35px] w-auto" src={DoryLogoIcon} alt="" /> <span className="text-2xl font-semibold">Dory</span>
            </div>
        </div>
    )
}