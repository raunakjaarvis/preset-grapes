'use client'

import { useRouter } from "next/navigation"

// import antd design
import { Layout, Space, Button, Divider } from 'antd'

const { Header } = Layout

// import icons
import LogoIcon from '@/icons/page_builder/logo-icon.svg'
import SettingIcon from '@/icons/page_builder/setting-icon.svg'
import QuestionIcon from '@/icons/page_builder/question-icon.svg'
import ArrowLeftIcon from '@/icons/page_builder/arrow-left.svg'

export default function BuilderHeader() {

    const router = useRouter()

    const handleGoMainPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
        router.push("/");
    }

    return (
        <Header className={`min-h-[72px] bg-[#29292A] flex justify-between`}>
            <Space>
                <LogoIcon />
            </Space>

            <Space className={`gap-x-0`}>
                <Button icon={<SettingIcon  />} type='text' className={`flex `} ></Button>
                <Button icon={<QuestionIcon className={'page_builder '} />} type='text' className={`flex text-white hover:!text-white`} >Help</Button>
                <Divider type="vertical" className="bg-[#3A3A3C] h-8" />
                <Button icon={<ArrowLeftIcon />} type='text' className={`flex text-white hover:!text-white`} onClick={handleGoMainPage} >Back to Dashboard</Button>
            </Space>
        </Header>
    )
}

