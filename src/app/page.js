import { headers } from 'next/headers';
import React from 'react';
import { api } from '@/utils/api';
import Card from '@/components/Card';
import Banner from '@/components/Banner';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { isMobileUserAgent } from '@/utils/utils';

export default async function Home() {
	const popularMovies = await api.getPopularMovies();
	const trendingMovies = await api.getTrendingMovies();
	const upcomingMovies = await api.getUpcomingMovies();
	const nowPlaying = await api.getNowPlaying();
	const userAgent = headers().get('user-agent') || '';
	const isMobile = isMobileUserAgent(userAgent);

	return (
		<div className='flex flex-col w-full min-h-screen'>
			<Navbar />
			{isMobile && (
				<div className='flex items-center justify-center h-[90vh] text-center px-4'>
					<div className=''>
						<p className='text-lg font-semibold'>
							Visit this website on a laptop or desktop as it is not supported
							on mobile
						</p>
					</div>
				</div>
			)}
			{!isMobile && (
				<>
					<Banner movie={nowPlaying.results} />
					<section className='w-full py-12 pb-4'>
						<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
							<div className='space-y-3'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Upcoming Movies
								</h2>
								<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									Watch the latest hits. Available for streaming soon.
								</p>
							</div>
							<div className={'py-4 flex gap-5 overflow-auto'}>
								{upcomingMovies.results?.map((movie) => {
									return (
										<Link
											href={`/${movie?.id}`}
											key={movie?.id}
											className={'cursor-pointer'}
										>
											<Card path={movie?.poster_path} title={movie?.title} />
										</Link>
									);
								})}
							</div>
						</div>
					</section>
					<section className={'w-full py-4'}>
						<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
							<div className='space-y-3'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Trending Movies
								</h2>
								<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									Watch the latest trending hits.
								</p>
							</div>
							<div className={'py-4 flex gap-5 overflow-auto'}>
								{trendingMovies.results?.map((movie) => {
									return (
										<Link
											href={`/${movie?.id}`}
											key={movie?.id}
											className={'cursor-pointer'}
										>
											<Card path={movie?.poster_path} title={movie?.title} />
										</Link>
									);
								})}
							</div>
						</div>
					</section>
					<section className={'w-full py-4'}>
						<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
							<div className='space-y-3'>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
									Popular Movies
								</h2>
								<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									Watch the latest popular hits.
								</p>
							</div>
							<div className={'py-4 flex gap-5 overflow-auto'}>
								{popularMovies.results?.map((movie) => {
									return (
										<Link
											href={`/${movie?.id}`}
											key={movie?.id}
											className={'cursor-pointer'}
										>
											<Card path={movie?.poster_path} title={movie?.title} />
										</Link>
									);
								})}
							</div>
						</div>
					</section>
				</>
			)}
		</div>
	);
}
