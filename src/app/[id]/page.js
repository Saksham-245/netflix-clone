'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { api } from '@/utils/api';
import DetailLoading from './loading';
import useDocumentTitle from '@/utils/hooks/use-document-title';

const Page = ({ params }) => {
	const [detail, setDetail] = useState(null);
	const [credits, setCredits] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		const detail = await api.getMovieDetails(params?.id);
		const credits = await api.getMovieCredits(params?.id);
		setDetail(detail);
		setCredits(credits);
		setIsLoading(false);
	}, [params.id]);

	useDocumentTitle(
		detail ? `Netflix Clone - ${detail.original_title}` : 'Loading...',
	);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	if (isLoading) {
		return <DetailLoading />;
	}

	return (
		<div>
			<Navbar />
			<div className='px-32 pt-8 mx-auto space-y-6'>
				<Image
					unoptimized
					src={`https://image.tmdb.org/t/p/w1280${detail?.backdrop_path}`}
					alt={detail?.title}
					className='object-cover w-full h-[768px] rounded-md'
					width={100}
					height={100}
				/>
				<div className='grid md:grid-cols-2 gap-6 items-start'>
					<div className='flex flex-col gap-4 items-start'>
						<h1 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
							{detail?.original_title}
						</h1>
						<div className='flex items-center gap-2 text-sm font-medium text-muted'>
							<span>{detail?.release_date?.split('-')[0]}</span>
							<span className='divider'></span>
							<span>
								{Math.floor(detail?.runtime / 60)}h {detail?.runtime % 60}m
							</span>
							<span className='divider'></span>
							<span>
								{detail?.genres?.map((item) => item?.name).join(' , ')}
							</span>
						</div>
						<div className='grid gap-2 text-base leading-loose'>
							<p>{detail?.overview}</p>
						</div>
					</div>
					<div className='flex flex-col gap-2 items-start'>
						<div className='grid gap-2 text-sm leading-none'>
							<p className='leading-6'>
								<strong>Director:&nbsp;</strong>
								{credits?.crew
									.filter((person) => person.department === 'Directing')
									.map((item) => item?.original_name)
									.join(' , ')}
							</p>
							<p className='leading-6'>
								<strong>Writers:</strong>{' '}
								{credits?.crew
									?.filter((person) => person.department === 'Writing')
									.map((item) => item?.original_name)
									.join(' , ')}
							</p>
							<p className='leading-6'>
								<strong>Producers:</strong>{' '}
								{credits?.crew
									?.filter((person) => person.department === 'Production')
									.map((item) => item?.original_name)
									.join(' , ')}
							</p>
						</div>
						<div className='grid gap-2 text-sm leading-6'>
							<p>
								<strong>Starring:</strong>
							</p>
							<p>
								{credits?.cast.map((item) => item?.original_name).join(' , ')}
							</p>
						</div>
					</div>
				</div>
				<div
					data-orientation='horizontal'
					role='none'
					className='shrink-0 bg-gray-100 h-[1px] w-full'
				></div>
				<div className='grid md:grid-cols-2 gap-6 items-start'>
					<div className='grid gap-2'>
						<h2 className='text-2xl font-bold'>Production Houses</h2>
						<div className='grid gap-2 text-sm'>
							{/* {detail?.production_companies.map((item) => (
								<div className='flex items-center gap-2' key={item?.id}>
									<Image
										src={`https://image.tmdb.org/t/p/original${item?.logo_path}`}
										alt={item.name}
										className='rounded-[50%] object-contain bg-white w-[50px] h-[50px]'
										width={50}
										height={50}
									/>
									<div>
										<h3 className='font-bold mb-1'>{item.name}</h3>
										<p>{item?.origin_country}</p>
									</div>
								</div>
							))} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};



export default Page;
