import { incrementalCache } from "@/lib/cache";
import { getTimeFn } from "@/lib/utils";

const SIMULATED_LATENCY = 25

const getTime = incrementalCache(getTimeFn(SIMULATED_LATENCY), {
  key: 'next:time:kv:close',
  ttl: 120,
  strategy: 'global',
})

export default async function Page() {
  const start = Date.now();
  const time = await getTime()
  const duration = Date.now() - start;
  return <main className="flex min-h-screen flex-col items-center p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p>CACHED VALUE on KV - {SIMULATED_LATENCY}MS simulated latency </p>
    </div>
    <p>Value: {time} (took{duration}ms)</p>
  </main>
}



