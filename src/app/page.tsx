export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        SSR Examples
      </div>
      <p>Cache Tests Far (150ms simulated latency)</p>
      <div className="flex flex-col px-4">
        <a className="text-blue-600" href="/far/uncached">uncached</a>
        <a className="text-blue-600" href="/far/uncached/streaming">uncached + streaming</a>
        <a className="text-blue-600" href="/far/cached/kv">global cache</a>
        <a className="text-blue-600" href="/far/cached/streaming/kv">global cache + streaming</a>
        <a className="text-blue-600" href="/far/cached/cache-api">local cache</a>
        <a className="text-blue-600" href="/far/cached/streaming/cache-api">local cache + streaming</a>
        <a className="text-blue-600" href="/far/unstable-cache">unstable_cache</a>
        <a className="text-blue-600" href="/far/unstable-cache/streaming">unstable_cache + streaming</a>
      </div>
      <p>Cache Tests Close (25ms simulated lantency)</p>
      <div className="flex flex-col px-4">
        <a className="text-blue-600" href="/close/uncached">uncached</a>
        <a className="text-blue-600" href="/close/uncached/streaming">uncached + streaming</a>
        <a className="text-blue-600" href="/close/cached/kv">global cache</a>
        <a className="text-blue-600" href="/close/cached/streaming/kv">global cache + streaming</a>
        <a className="text-blue-600" href="/close/cached/cache-api">local cache</a>
        <a className="text-blue-600" href="/close/cached/streaming/cache-api">local cache + streaming</a>
        <a className="text-blue-600" href="/close/unstable-cache">unstable_cache</a>
        <a className="text-blue-600" href="/close/unstable-cache/streaming">unstable_cache + streaming</a>
      </div>
    </main>
  );
}
