'use client';
import { useEffect, useState } from 'react';
import * as NotionType from '@/app/api/notion-db/notion-types';
import Image from 'next/image';

const fetchData = async () => {
	try {
		const response = await fetch('/api/notion-db', {
			method: 'GET',
		});
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

function Portfolio() {
	const [list, setList] = useState<NotionType.NotionPage[]>();
	useEffect(() => {
		fetchData()
			.then((items) => setList(items))
			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	return (
		<div className="flex flex-wrap justify-center gap-4 w-screen h-screen">
			{list
				? list.map((item) => (
						<div key={item.id} className="w-[300px]">
							{item.cover?.file?.url ? (
								<Image
									src={item.cover.file.url}
									alt={item.properties.이름.title[0]?.plain_text || '제목 없음'}
									width={300}
									height={200}
									style={{ width: '300px', height: '200px', objectFit: 'cover' }}
								/>
							) : (
								<div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">이미지 없음</div>
							)}
							<h2 className="mt-2 text-lg font-semibold">{item.properties.이름.title[0]?.plain_text || '제목 없음'}</h2>
						</div>
				  ))
				: null}
		</div>
	);
}

export default Portfolio;
