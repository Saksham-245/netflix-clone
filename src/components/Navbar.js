import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@/icons/SearchIcon';

const Navbar = () => {
    return (
        <header className="flex h-16 w-full shrink-0 items-center px-4 shadow-sm md:px-6">
            <div className="w-[100px]">
                <Link className="h-8 w-8" href="#">
                    <Image src={'/logo.svg'} alt={'Logo'} width={100} height={27}/>
                </Link>
            </div>
            <nav className="hidden ml-4 space-x-2 text-sm md:flex">
                <Link className="font-medium" href="/">
                    Movies
                </Link>
                <Link className="font-medium" href="#">
                    Series
                </Link>
                <Link className="font-medium" href="#">
                    New
                </Link>
                <Link className="font-medium" href="#">
                    Expiring
                </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-4">
                <Link className="inline-flex items-center rounded-lg hover:no-underline" href="#">
                    <SearchIcon className="w-4 h-4 mr-2"/>
                    Search
                </Link>
            </div>
        </header>
    )
}

export default Navbar;
