'use client'
import ComposePostTextArea from './compose-post-textarea'
import ComposePostButton from './compose-post-button'
import { useRef } from 'react'
import { addPost } from '../actions/add-post-actions'

export default function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form ref={formRef} action={async (formData) => {
            await addPost(formData)
            formRef.current?.reset()
        }} className='flex flex-row p-4 border-b border-white/20'>
            <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <ComposePostTextArea />
                <ComposePostButton />
            </div>
        </form>
    )
}
