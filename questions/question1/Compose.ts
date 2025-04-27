export function compose<T>(...fns: Array<(arg: any) => any>): any {

  const syncpipe = (...fns: Array<Function> ) => {
    return (x: any) => fns.reduce((acc, fn) => fn(acc), x);
  }
  const asyncPipe = (...fns: Array<Function> ) => {
    return (x: any) => fns.reduce(async (acc, fn) => fn(await acc), Promise.resolve(x));
  }

  if(fns[0].constructor.name === 'AsyncFunction'){
   return asyncPipe
  }

  else{
    return syncpipe
  }

  }

