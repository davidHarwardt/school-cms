
import { CollectionConfig } from 'payload/types';

const Media = {
    slug: "media",
    access: {
        read: () => true,
    },
    upload: {
        staticURL: "/media",
        staticDir: "media",
    },
};

export default Media;