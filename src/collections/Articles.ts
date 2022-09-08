import { CollectionConfig } from 'payload/types';

const Articles: CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: 'content',
            type: 'text',
            required: true,
        },
        {
            name: "hero-image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "thumbnail",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "authors",
        }
    ],
}

export default Articles;