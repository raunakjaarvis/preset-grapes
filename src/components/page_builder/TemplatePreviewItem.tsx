import { useRef, useEffect } from 'react'

interface TPIProps {
    srcDoc: string, 
}

export default function TemplatePreviewItem({ srcDoc }: TPIProps) {

    const iframeRef = useRef<HTMLIFrameElement>(null)
    

    useEffect(() => {
        const iframe = iframeRef.current;
    
        const handleLoad = () => {

            setTimeout(() => {
                setIframeHeight()
            }, 500)
        };
    
        iframe?.addEventListener('load', handleLoad);

    
        return () => {
            iframe?.removeEventListener('load', handleLoad);
        };
    }, []);

    const setIframeHeight = () => {
        const iframe = iframeRef.current

        if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {
            const height = iframe.contentWindow.document.body.offsetHeight
            iframe.style.height = `${height / 2}px`
            iframe.style.left = "0px"
            iframe.style.position = "relative"
        }
    }
    

    return (
        <iframe
            ref={iframeRef}
            srcDoc={srcDoc}
            className={`w-full`}
        />
    )    
}