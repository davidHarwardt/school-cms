import { buildConfig } from 'payload/config';
import path from 'path';

import Users from './collections/Users';
import Articles from './collections/Articles';
import Media from './collections/Media';
import Authors from './collections/Authors';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Media,
    Users,
    Authors,
    Articles,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
