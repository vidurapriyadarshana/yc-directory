import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signIn, signOut } from '@/auth'

const Navbar = async () => {

    const session = await auth();

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={40}
                    />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span>
                                    Create
                                </span>
                            </Link>

                            <form action={async () => {
                                'use server'
                                await signOut({ redirectTo: '/' })
                            }}>
                                <button type='submit'>
                                    LogOut
                                </button>
                            </form>

                            <Link href={`/user/${session.user.id}`}>
                                <span>
                                    {session.user.name}
                                </span>
                            </Link>

                        </>
                    ) : (
                        <form action={async () => {
                            'use server'
                            await signIn('github')
                        }}>
                            <button type='submit'>LogIn</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
