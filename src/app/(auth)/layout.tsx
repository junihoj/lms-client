"use client"
import { Vortex } from '@/components/ui/vortex';
import React from 'react';
// import dynamic from 'next/dynamic';

// // import Lottie from 'react-lottie';
// const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
type Props = {
    children: React.ReactNode
}
const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: "/assets/lottie/Animation.json", // Ensure the correct path
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


const AuthLayout = ({ children }: Props) => {
    return (
        <div className='flex w-screen h-screen'>
            <div className='sm:w-1/2 w-full px-10'>
                {children}
            </div>
            <div className='bg-white sm:w-1/2 h-full overflow-hidden'>
                {/* <Lottie options={lottieOptions}
                    height={400}
                    width={400}
                /> */}
                <Vortex
                    backgroundColor="black"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >

                </Vortex>
            </div>
        </div>
    );
};

export default AuthLayout;
