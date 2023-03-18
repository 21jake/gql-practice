import { postgraphile, PostGraphileOptions } from 'postgraphile';
import { appEnv } from '../configs/config';

const options: PostGraphileOptions = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
};

export const middleware = postgraphile(`${appEnv.DATABASE_URL}`, options);
