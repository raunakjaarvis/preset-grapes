'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

// import redux
import { useDispatch, useSelector } from '@/store/store';
import { setNewSectionIndex } from '@/store/projects/page_builder';
import { CommonObject } from '@/types/page_builder'

// antd
import { Button, Layout } from 'antd'
const { Content } = Layout;

//  component
import EmptyPage from '@/components/page_builder/EmptyPage'
import SecondLibraryModal from './modals/second-library-modal'
import SectionEditor from './layouts/sectionEditor'

// icons
import PlusTransIcon from '@/icons/page_builder/plus-icon-trans.svg' 


import 'grapesjs/dist/css/grapes.min.css';

import { TT_TEXT, DEVICE_INFO, DI_IPHONE_SE } from './constants'
import Link from 'next/link';

import { SECTION_STATE_EDIT } from './constants'
import DoryLogoIcon from '@/images/dory_logo.png'


export default function CreatePage() {

    const {
        sections,
        editState, 
        deviceType, 
    } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()


    const [ selectSectionMdoalOpen, setSelectSectionModalOpen ] = useState(false)
    const [ selectedType, setSelectedType ] = useState<string>(TT_TEXT)


    const handleShowTemplate = (selectedType: string) => {
        setSelectSectionModalOpen(true)
        setSelectedType(selectedType)
    }

    const handleAddSection = (index: number) => {
        dispatch(setNewSectionIndex(index))
        handleShowTemplate(TT_TEXT)
    }


    return (
        <Content className="h-full overflow-auto">

            {
                sections.length === 0 ?
                    <div>
                        <div className='w-full pt-6 text-2xl font-extrabold pl-20 font-bolder '>
                            Dory
                        </div>
                        <div className="px-4 py-2 h-[calc(100vh_-_10rem_-_72px)]">
                            <EmptyPage
                                handleOnClick={setSelectSectionModalOpen}
                                title="It’s Kind of empty in here 👋"
                                content={ <div>Add your first section. or learn more in our <Link href="/" className='text-[#0087F4]'>help article.</Link></div> }
                                buttonText="Add Section"
                            />
                        </div>
                        <div className="flex justify-center w-full pb-6 items-end">
                            <span className="text-lg">Hiring with</span> <Image className="mx-4 h-[35px] w-auto" src={DoryLogoIcon} alt="" /> <span className="text-2xl font-semibold">Dory</span>
                        </div>
                    </div>
                    :
                    <div className={`border border-solid border-[#EDEFF1] rounded-md bg-white m-4 min-h-[calc(100%_-_2rem)]  ${ deviceType === DI_IPHONE_SE && DEVICE_INFO[DI_IPHONE_SE]['class'] }`}>
                        <div className='w-full py-6 text-2xl font-extrabold pl-20 font-bolder '>
                            Dory
                        </div>
                        {/* top add section button */}
                        <div className="h-[calc(100vh_-_14rem_-_72px)] overflow-auto">
                            <div className="pt-4 mt-8 block">
                                <div className={`border-[#edeff1] border-solid border-t-2 flex`}>
                                    <Button type='primary' className={`${ editState === SECTION_STATE_EDIT ? 'invisible': ''} bg-white hover:!bg-white border border-[#D0D5DD] hover:!border-[#D0D5DD] text-[#344054] hover:!text-[#344054] stroke-[#344054] stroke-[1.5] flex items-center justify-center -top-4 mx-auto`} icon={<PlusTransIcon />} onClick={() => handleAddSection(0)} > Add Section </Button>
                                </div>
                            </div>

                            {
                                sections.map((item: CommonObject, index: number) => 
                                    <div key={`tmpIndex_${index}`}>
                                        <SectionEditor
                                            handleModalShow={setSelectSectionModalOpen}
                                            handleSelectedType={setSelectedType}
                                            sectionIndex={index}
                                        />
                                        
                                        {/* bottom add section button */}
                                        <div className="py-4 block">
                                            <div className={`border-[#edeff1] border-solid border-t-2 flex`}>
                                                <Button type='primary' className={`${ editState === SECTION_STATE_EDIT ? 'invisible': ''} bg-white hover:!bg-white border border-[#D0D5DD] hover:!border-[#D0D5DD] text-[#344054] hover:!text-[#344054] stroke-[#344054] stroke-[1.5] flex items-center justify-center -top-4 mx-auto`} icon={<PlusTransIcon />} onClick={() => handleAddSection(index + 1)} > Add Section </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex justify-center w-full py-6 items-end">
                            <span className="text-lg">Hiring with</span> <Image className="mx-4 h-[35px] w-auto" src={DoryLogoIcon} alt="" /> <span className="text-2xl font-semibold">Dory</span>
                        </div>
                    </div>
            }


            <SecondLibraryModal
                modalShow={selectSectionMdoalOpen}
                selectedType={selectedType}
                handleModalShow={setSelectSectionModalOpen}
            />

        </Content>
    )
}