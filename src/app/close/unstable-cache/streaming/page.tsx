import { getTimeFn } from "@/lib/utils";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";

const SIMULATED_LATENCY = 25

const getTime = unstable_cache(
  getTimeFn(SIMULATED_LATENCY),
  ['next:time:unstable_cache:stream:close'], {
  tags: ['next:time:unstable_cache:stream:close'],
  revalidate: 120,
})

async function Time() {
  const time = await getTime()
  return <p>Streamed Value: {time}</p>
}

export default function Page() {
  return <main className="flex min-h-screen flex-col items-center p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p>Streamed CACHED VALUE on unstable_cache - {SIMULATED_LATENCY}MS simulated latency </p>
    </div>
    <Suspense fallback={<p>Loading...</p>}>
      <Time />
    </Suspense>
  </main>
}



