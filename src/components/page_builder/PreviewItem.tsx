'use client'

import { useRef, useEffect } from 'react'

import { saveStackObject, PageType, } from '@/types/page_builder'


const bootstrap_css = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">`
const bootstrap_js = `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>`
const jquery_js = `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`



interface PIProps {
    sectionData: PageType, 
    index: number
}

export default function PreviewItem({ sectionData, index }: PIProps) {

    const iframeRef = useRef<HTMLIFrameElement>(null)
    

    useEffect(() => {
        const iframe = iframeRef.current;
    
        const handleLoad = () => {

            setTimeout(() => {
                setIframeHeight()
            }, 500 * index)

            // setIframeHeight()
        };
    
        iframe?.addEventListener('load', handleLoad);
        window.addEventListener('resize', setIframeHeight)
    
        return () => {
            iframe?.removeEventListener('load', handleLoad);
            window.removeEventListener('resize', setIframeHeight)
        };
    }, []);

    const setIframeHeight = () => {
        const iframe = iframeRef.current

        if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
            const height = iframe.contentWindow.document.body.offsetHeight
            iframe.style.height = `${height}px`
            if(iframe.style.left) iframe.style.left = "0px"
            if(iframe.style.position) iframe.style.position = "relative"
        }
    }
    
    return (
        <iframe
            ref={iframeRef}
            srcDoc={`
            ${bootstrap_css}
            ${bootstrap_js}
            ${jquery_js}
            <style>${sectionData ? sectionData.styles : null }</style>
            ${sectionData ? sectionData.component : null}
        `}
            className={`w-full`}
        />
    )    
}