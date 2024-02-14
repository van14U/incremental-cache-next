export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTime = async () => new Date().toISOString();

export const getTimeFn = (latency: number) => async () => sleep(latency).then(() => getTime());
