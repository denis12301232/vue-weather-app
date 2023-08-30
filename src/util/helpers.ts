export function throttle<T extends Function>(func: T, ms: number) {
  let isThrottled = false;
  let funcArgs: [] | null = null;
  let context: unknown = null;

  function f(this: unknown, ...args: []) {
    if (isThrottled) {
      funcArgs = args;
      context = this;
      return;
    }
    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (funcArgs) {
        f.apply(context, funcArgs);
        funcArgs = context = null;
      }
    }, ms);
  }

  return f as unknown as T;
}

export async function requestGeolocation() {
  return new Promise<GeolocationPosition>((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}

export function converHpaToMmhg(hpa: number) {
  const UNIT = 0.750063755419211;
  return Math.round(hpa * UNIT);
}
