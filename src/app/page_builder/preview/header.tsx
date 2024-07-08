'use client'

import { useRouter, usePathname } from "next/navigation"

// import antd
import { Button, Divider, Space, Layout } from "antd"
const { Header } = Layout

// import icons
import CloseIcon from '@/icons/page_builder/close-icon.svg'

//=============== import redux
import { useDispatch, useSelector } from '@/store/store'


export default function CreatePageHeader() {
    
    const { sections, savedUndoStacks, pageInfo } = useSelector((store: any) => store.pageBuilder)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSave = () => {

    }

    const handleGoFirstPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
        router.back()
    }
      
    return (
        <Header className={`min-h-[72px] bg-[#29292A] relative`}>
            <div className="relative h-full z-1">
                <div className="flex justify-between h-full">

                    <Space>
                        <CloseIcon onClick={handleGoFirstPage} />
                        <Divider type="vertical" className="bg-[#3A3A3C] h-8" />
                        <span className={`text-white text-lg`}>
                            {
                                pageInfo.pageName
                            }
                        </span>
                    </Space>

                    <Space className={`gap-x-0`}>
 

                        <Button type='text' className={`flex mt-1 text-white hover:text-white`} onClick={handleGoFirstPage} >Close preview</Button>

                    </Space>
                </div>
            </div>

        </Header>
    )
}