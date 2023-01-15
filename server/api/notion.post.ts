import { readBody } from 'h3';
import notionClient from '@/utils/notionClient';
const config = useRuntimeConfig();

export default defineEventHandler(async  (event): Promise<Boolean>  => {
    const body = await readBody(event);
    const res = await notionClient.pages.update({page_id: body.id, properties: {isDone: {checkbox: body.value}} });
    return true;
})