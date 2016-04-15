import makeStore from './src/store';
import { startServer } from './src/server';
import { getPosts } from './src/posts';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_POSTS',
  posts: getPosts(),
});
