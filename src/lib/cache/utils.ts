import { internal_runWithWaitUntil as waitUntil } from "next/dist/server/web/internal-edge-wait-until";

export type CacheEntry = {
  key: string;
  value: unknown;
  ttl: number;
  swr: number;
  lastModified: number;
};

export type CacheEntryOptions = {
  key: string;
  ttl: number;
  swr: number;
};

export type Callback = (...args: any[]) => Promise<any>;

export function stringifyCacheEntry(
  key: string,
  value: unknown,
  ttl: number,
  swr: number,
) {
  return JSON.stringify({
    key,
    value,
    ttl,
    swr,
    lastModified: Date.now(),
  } satisfies CacheEntry);
}
export function parseCacheEntry(entry: string) {
  return JSON.parse(entry) as CacheEntry;
}

export function buildCacheKey(key: string) {
  return `https://INCREMENTAL_CACHE.local/entry/${key}` as const;
}

export function getWaitUntil() {
  return (promise: Promise<any>) => {
    return waitUntil(async () => promise);
  }
}

