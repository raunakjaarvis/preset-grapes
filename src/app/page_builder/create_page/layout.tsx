'use client'

import { ReactNode } from 'react'

import { Layout } from 'antd'
import CreatePageHeader from './layouts/header'
import RightBar from './layouts/rightBar'


export default function CreatePageLayout({children} : {children: ReactNode}) {

    return (
        <Layout>
            <CreatePageHeader />
            <Layout hasSider className="h-[calc(100vh_-_72px)]">
                {children}
                <RightBar />
            </Layout>
        </Layout>
    )
}