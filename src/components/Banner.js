'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

const Banner = ({movie}) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(movie[currentMovieIndex]);
    // const bannerRef = useRef(null);


    // const handleScroll = () => {
    //     if (!bannerRef.current) return;
    //
    //     const {top} = bannerRef.current.getBoundingClientRect();
    //     const isOutOfView = top < -798;
    //
    //     if (isOutOfView) {
    //         document.querySelector('.navbar').classList.remove('absolute');
    //     } else {
    //         document.querySelector('.navbar').classList.add('absolute');
    //     }
    // };

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentMovieIndex + 1) % movie.length;
            setCurrentMovieIndex(newIndex);
            setCurrentMovie(movie[newIndex]);
        }, 5000); // Change every 5 seconds (adjust as needed)

        // window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            // window.removeEventListener('scroll', handleScroll);
        }
    }, [currentMovieIndex, movie]);

    return (
        <section className="w-full">
            <div className="relative w-full aspect-video overflow-hidden h-[745px]">
                <Image
                    unoptimized
                    className={'w-full lg:h-[745px] opacity-50 bg-black object-cover'}
                    src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
                    alt={currentMovie.original_title}
                    width={100}
                    quality={100}
                    height={100}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{currentMovie?.original_title}</h1>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {currentMovie?.overview}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
