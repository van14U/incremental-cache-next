import { getTimeFn } from "@/lib/utils";

const SIMULATED_LATENCY = 150

const getTime = getTimeFn(SIMULATED_LATENCY);

export default async function Page() {
  const start = Date.now();
  const time = await getTime()
  const duration = Date.now() - start;
  return <main className="flex min-h-screen flex-col items-center p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p>UNCACHED Value - {SIMULATED_LATENCY}MS simulated latency </p>
    </div>
    <p>Value: {time} (took{duration}ms)</p>
  </main>
}

