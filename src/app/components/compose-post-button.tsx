'use client'

import { useFormStatus } from "react-dom"

export default function ComposePostButton() {
    const { pending } = useFormStatus()

    return (
        <button disabled={pending} className='bg-sky-500 font-bold text-sm rounded-full px-5 py-2 self-end'>
           {pending ? 'Posteando...' : 'Postear'}
        </button>
    )
}