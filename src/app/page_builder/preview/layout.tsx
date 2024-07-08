'use client'

import { ReactNode } from 'react'

import { Layout } from 'antd'

import PreviewHeader from './header'

export default function Preview({children}: {children: ReactNode}) {
    return (
        <Layout>
            <PreviewHeader />
            {children}
        </Layout>
    )
}