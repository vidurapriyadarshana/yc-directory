import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const SearchForm = ({ query }: { query?: string }) => {

    return (
        <Form action='/' scroll={false} className='search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5'>
            <input name='query' defaultValue={query} className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none' placeholder='Search Startups' />
            <div className='flex gap-2'>
                {query && <SearchFormReset />}

                <Button type='submit' className='size-[50px] rounded-full bg-black flex justify-center items-center !important text-white cursor-pointer'>
                    <Image src="/icons/search.png" alt="search" width={30} height={30} />
                </Button>
            </div>
        </Form>
    )
}

export default SearchForm