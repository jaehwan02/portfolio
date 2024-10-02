import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';
const notionToken = process.env.NOTION_API_KEY;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
	auth: notionToken,
});

export async function GET() {
	try {
		const response = await notion.databases.query({
			database_id: notionDatabaseId as string,
			sorts: [
				{
					property: '기간',
					direction: 'descending',
				},
			],
		});
		return NextResponse.json(response.results);
	} catch (error) {
		console.error('Notion API 오류:', error);
		return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
	}
}
