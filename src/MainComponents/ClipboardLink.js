import downloadLink from '../static/link.jpeg'
import React, { useState, useCallback } from 'react'

const ClipboardLink = (url) => {

    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = useCallback(async () => {

        if (!navigator.clipboard) {
            console.error('Clipboard not available');
            return; 
        }
        try {
            await navigator.clipboard.writeText(url);
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 4000); 
        } catch (err) {
            console.error('Failed to copy URL: ', err)
            setIsCopied(false)
        }
    }, []) 

if (isCopied == false) 
    return (
        <>
    <img className= 'image-link' onClick={copyToClipboard} src = {downloadLink}/> 
    </>)

if (isCopied == true)
return (
    <>
<img className= 'image-link' onClick={copyToClipboard} src = {downloadLink}/> <h3 className= 'welcome-2'>Link Copied!</h3>  
</> )
}

export default ClipboardLink