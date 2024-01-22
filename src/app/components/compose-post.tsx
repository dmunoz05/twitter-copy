// import { Avatar } from '@nextui-org/react'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default function ComposePost({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    return (
        <form className='flex flex-1 flex-col gap-y-4'>
            <img className='rounded-full w-6 h-6 object-contain' src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <textarea name='post' rows={4} className='w-full text-2xl placeholder-gray-500 bg-black' placeholder='¡Qué está pasando!?' >
                </textarea>
                <button className='bg-sky-500 font-bold text-sm rounded-full px-5 py-2 self-end'>
                    Postear
                </button>
            </div>
        </form>
    )
}
