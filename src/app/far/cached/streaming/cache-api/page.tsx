import { incrementalCache } from "@/lib/cache";
import { getTimeFn } from "@/lib/utils";
import { Suspense } from "react";

const SIMULATED_LATENCY = 150

const getTime = incrementalCache(getTimeFn(SIMULATED_LATENCY), {
  key: 'next:time:cache-api:stream:far',
  ttl: 120,
  strategy: 'local',
})

async function Time() {
  const time = await getTime()
  return <p>Streamed Value: {time}</p>
}

export default function Page() {
  return <main className="flex min-h-screen flex-col items-center p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p>Streamed CACHED VALUE on Cache API - {SIMULATED_LATENCY}MS simulated latency </p>
    </div>
    <Suspense fallback={<p>Loading...</p>}>
      <Time />
    </Suspense>
  </main>
}

