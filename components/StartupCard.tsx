import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const StartupCard = ({ post }: { post: any }) => {

    const { _createdAt, views, author: { _id: authorId, name } ,_id, description , image, category, title } = post;

    function formatDate(date: string) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    return (
        <li className='group bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 transition-all duration-500 hover:border-primary hover:shadow-300 hover:bg-primary-100 flex flex-col justify-between h-full'>
            <div className='flex justify-between items-center w-full mb-4'>
                <div className='flex-shrink-0'>
                    <p className='font-medium text-[16px] px-0 py-2'>
                        {formatDate(_createdAt)}
                    </p>
                </div>
                <div className='flex items-center gap-1.5'>
                    <EyeIcon className='size-6 text-red-600' />
                    <span className='text-[16px]'>{views}</span>
                </div>
            </div>

            <div className='pt-2 flex items-center justify-between'>
                <div>
                    <Link href={`/user/${_id}`}>
                        <p className='text-[16px] font-bold truncate'>{name}</p>
                    </Link>

                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-[24px] font-bold line-clamp-1'>{title}</h3>
                    </Link>
                </div>

                <Link href={`/user/${authorId}`}>
                    <Image
                        src='https://placehold.co/600x400'
                        alt='placeholder'
                        width={48}
                        height={48}
                        className='rounded-full object-cover'
                    />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className='font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>
                    {description}
                </p>

                <img src={image} alt="placeholder" className='w-full h-[164px] rounded-[10px] object-cover'/>
            </Link>

            <div className='flex justify-between gap-3 mt-5'>
                <Link href={`/?query=${category}`}>
                    <p className='font-bold text-[16px] text-black-100'>
                        {category}
                    </p>
                </Link>

                <Button className='rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 !important' asChild>
                    <Link href={`/startup/${_id}`}> 
                        Details
                    </Link>
                </Button>
            </div>

        </li>
    );
};

export default StartupCard;
