import { CollectionConfig } from 'payload/types';

const Authors: CollectionConfig = {
    slug: 'authors',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "username",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
        },
    ],
};

export default Authors;