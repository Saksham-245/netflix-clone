import React from 'react';
import Navbar from '@/components/Navbar';
import CardSkeleton from '@/components/CardSkeleton';

const Loading = () => {
	return (
		<div className='flex flex-col w-full min-h-screen'>
			<Navbar />
			<div className='lg:h-[85vh] w-full bg-gray-300 animate-pulse dark:bg-gray-700'></div>
			<section className='w-full py-12 pb-4'>
				<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
					<div className='space-y-0 mx-auto'>
						<div className='h-8 w-48 bg-gray-300 rounded animate-pulse dark:bg-gray-700 space-y-0 mx-auto mb-8'></div>
						<div className='h-4 w-96 bg-gray-300 rounded animate-pulse dark:bg-gray-700'></div>
					</div>
					<div className={'py-4 flex gap-5 overflow-auto'}>
						{Array(7)
							.fill(0)
							.map((_, index) => (
								<CardSkeleton key={index + 1} />
							))}
					</div>
				</div>
			</section>
			<section className='w-full py-4'>
				<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
					<div className='space-y-0 mx-auto'>
						<div className='h-8 w-48 bg-gray-300 rounded animate-pulse dark:bg-gray-700 space-y-0 mx-auto mb-8'></div>
						<div className='h-4 w-96 bg-gray-300 rounded animate-pulse dark:bg-gray-700'></div>
					</div>
					<div className={'py-4 flex gap-5 overflow-auto'}>
						{Array(7)
							.fill(0)
							.map((_, index) => (
								<CardSkeleton key={index + 1} />
							))}
					</div>
				</div>
			</section>
			<section className='w-full py-4'>
				<div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
					<div className='space-y-0 mx-auto'>
						<div className='h-8 w-48 bg-gray-300 rounded animate-pulse dark:bg-gray-700 space-y-0 mx-auto mb-8'></div>
						<div className='h-4 w-96 bg-gray-300 rounded animate-pulse dark:bg-gray-700'></div>
					</div>
					<div className={'py-4 flex gap-5 overflow-auto'}>
						{Array(7)
							.fill(0)
							.map((_, index) => (
								<CardSkeleton key={index + 1} />
							))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Loading;
