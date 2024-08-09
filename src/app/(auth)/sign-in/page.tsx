import { GraduationCap } from 'lucide-react'
import React from 'react'
import SignInForm from './_components/sign-in-form'
import { ModeToggle } from '@/components/global/theme-mode-toggle'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='relative w-full overflow-y-auto bg-background flex flex-col items-center justify-center px-4 pt-10'>
            <div className='absolute top-5 right-5'>
                <ModeToggle />
            </div>
            <div className='flex items-center justify-between'>
                <GraduationCap className='w-4 h-4 mr-10' />
                <h1>Welcome Back  👋</h1>
            </div>
            <SignInForm />
        </div>
    )
}

export default page