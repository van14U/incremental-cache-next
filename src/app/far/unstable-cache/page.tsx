import { getTimeFn } from "@/lib/utils";
import { unstable_cache } from "next/cache";

const SIMULATED_LATENCY = 150

const getTime = unstable_cache(
  getTimeFn(SIMULATED_LATENCY),
  ['next:time:unstable_cache:far'], {
  tags: ['next:time:unstable_cache:far'],
  revalidate: 120,
})

export default async function Page() {
  const start = Date.now();
  const time = await getTime()
  const duration = Date.now() - start;
  return <main className="flex min-h-screen flex-col items-center p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p>CACHED VALUE on unstable_cache - {SIMULATED_LATENCY}MS simulated latency </p>
    </div>
    <p>Value: {time} (took{duration}ms)</p>
  </main>
}



