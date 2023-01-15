import { Client } from '@notionhq/client';
const config = useRuntimeConfig();

export default new Client({ auth: config.notionSecretKey });