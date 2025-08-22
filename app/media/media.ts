import { contentfulService } from "@/lib/contentful";

export default async function getMedia(page: number = 1){
    const res = await contentfulService.getMediaByMinistryId(
        process.env.NEXT_PUBLIC_CONTENTFUL_MINISTRY_ID!,
        page
    );
    return res; // { items, total } | null
}