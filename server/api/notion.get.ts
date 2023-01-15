import type { PageObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import notionClient from '@/utils/notionClient';
const config = useRuntimeConfig();

export default defineEventHandler(async  (event): Promise<Array<Task>> => {
    const database = await notionClient.databases.query({database_id: config.notionDatabaseId });
    const results: Array<PageObjectResponse> = database.results as Array<PageObjectResponse>;
    const tasks: Array<Task> = results.map((item: PageObjectResponse) => {
        const isDone = item.properties.isDone as { checkbox: boolean };
        const titles = item.properties.Name as { title: Array<RichTextItemResponse> };
        
        const task: Task = {
            id: item.id,
            isDone: isDone.checkbox,
            name: titles.title[0].plain_text,
        }
        return task;
    });
 
    return tasks;
})