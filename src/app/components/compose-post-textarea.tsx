'use client'
import React, { useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'

export default function ComposeTextArea() {
    const { pending } = useFormStatus()
    const alreadySent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (alreadySent.current === null) return

        if (!pending && alreadySent.current) {
            alreadySent.current = false
            textAreaRef.current.value = ''
            return
        }
        alreadySent.current = pending
    }, [pending])

    return (
        <textarea ref={textAreaRef} name='content' rows={4} className='w-full text-2xl placeholder-gray-500 bg-black p-2' placeholder='¡Qué está pasando!?' >
        </textarea>
    )
}