import { createClient } from "microcms-js-sdk";

import { BookType } from "@/types";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

export const getAllBooks = async () => {
  try {
    const data = await client.getList<BookType>({ endpoint: "books" });

    return data;
  } catch (error: any) {
    throw new Error(`[/libs/microcms/client.ts] エラーが発生しました ${error}`);
  }
};
