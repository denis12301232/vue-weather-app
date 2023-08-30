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
