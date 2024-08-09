"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignFormSchema } from '@/lib/types';
import Image from 'next/image';
// import { googleIcon } from '@/lib/icons';

type Props = {}

const SignInForm = (props: Props) => {
    const form = useForm<z.infer<typeof SignFormSchema>>({
        resolver: zodResolver(SignFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof SignFormSchema>) {

        console.log(values)
    }
    return (
        <div className='flex flex-col w-full'>
            <Form {...form}>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p className='self-end'>Forgot Password?</p>
                <Button variant="outline" className="credits-btn">
                    Sign in
                </Button>
            </Form>
            <div className='bg-primary/90'>
                <div className='flex gap-3 items-center h-6 justify-center rounded-lg py-3 overflow-hidden'>
                    <Image
                        src={"/assets/icons/Google.svg"}
                        alt='logo'
                        width={15}
                        height={15}
                    />
                    Sign in with Google
                </div>
            </div>

            <p>
                Don't you have an account?
                <span>Sign up</span>
            </p>
        </div>
    )
}

export default SignInForm