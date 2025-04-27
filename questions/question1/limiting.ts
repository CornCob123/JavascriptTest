let counter = 0
let executionTimestamps: number[] = [Date.now()];
export function createRateLimitedScheduler(fn: Function , limit: number , delay:number) : string | number{
    counter ++
    executionTimestamps.push(Date.now())   // store each event time stamp in a queue or list

    if(executionTimestamps[executionTimestamps.length-1] - executionTimestamps[0] < 1000){   // 1 sec time frame
      console.log('counter', counter)
      console.log('limit ', limit)
      
      if(counter > limit){     // check if count is more than the limit , if more than the limit within 1 second time fram,  block message
        console.log("Blocked too many attempts")
        return "Blocked too many attempts"
      }

    }
    else{
          executionTimestamps = []      // reset list and counter after 1 sec
          counter = 0
    }
    setTimeout(fn, delay);
    return counter;

  }

