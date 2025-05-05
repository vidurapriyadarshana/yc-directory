"use client"

import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) {
            form.reset()
        }
    }

    return (
        <Button type='reset' onClick={reset} className='size-[50px] rounded-full bg-black flex justify-center items-center !important text-white'>
            <Link href='/' className='size-[50px] rounded-full bg-black flex justify-center items-center !important text-white' >
                <Image src="/icons/clear.png" alt="close" width={30} height={30} />
            </Link>
        </Button>
    )
}

export default SearchFormReset