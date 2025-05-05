import React from 'react';
import SearchForm from '../../components/SearchForm';
import StartupCard from '@/components/StartupCard';

const Page = async ({ searchParams }: { searchParams?: { query?: string } }) => {
  const query = searchParams?.query || '';

  const posts = [{
    _createdAt: new Date().toISOString(),
    views: 55,
    author: { _id: 1, name: 'John Doe' },
    _id: 1,
    description: 'This is a description',
    image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a',
    category: 'Robots',
    title: 'We Robots',
  }];

  return (
    <>
      <section className='bg-pink-500 w-full bg-primary min-h-[530px] flex justify-center items-center flex-col py-10 px-6'>
        <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>
          Pitch your startup, connect with entrepreneurs
        </h1>

        <p className='font-bold text-[20px] text-white text-center break-words !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='px-6 py-10 max-w-7xl mx-auto'>
        <p className='text-4xl font-bold text-black break-words !max-w-3xl'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className='mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className='text-black-100 text-sm font-normal'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Page;
