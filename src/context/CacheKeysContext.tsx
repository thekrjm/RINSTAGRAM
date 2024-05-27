import { createContext, useContext } from 'react';

type CacheKeysValue = {
  postsKey: string;
};

export const CacheKeysContext = createContext<CacheKeysValue>({
  postsKey: '/api/posts', //기본값
});

export const useCacheKeys = () => useContext(CacheKeysContext);
