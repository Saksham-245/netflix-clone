import Navbar from '@/components/Navbar';
import React from 'react';

function DetailLoading() {
	return (
		<div>
			<Navbar />
			<div className='px-32 pt-8 mx-auto space-y-6'>
				<div className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-[768px]'></div>
				<div className='grid md:grid-cols-2 gap-6 items-start'>
					<div className='flex flex-col gap-4 items-start h-[196px]'>
						<div className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-10'></div>
						<div className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-[100px]'></div>
					</div>
					<div className='flex flex-col gap-4 items-start h-[224px]'>
						<div className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-10'></div>
						<div className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-40'></div>
					</div>
				</div>
				<div
					data-orientation='horizontal'
					role='none'
					className='shrink-0 bg-gray-100 h-[1px] w-full'
				></div>
				<div className='grid md:grid-cols-2 gap-6 items-start'>
					<div className='grid gap-2'>
						<div className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-10'></div>
						<div className='grid gap-2 text-sm'>
							{Array.from({ length: 5 }, (_, index) => (
								<div
									key={index + 1}
									className='bg-gray-400 dark:bg-gray-400 animate-pulse rounded-md w-full h-10'
								></div>
							))}
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailLoading;
