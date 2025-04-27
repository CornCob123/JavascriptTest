import { useCallback, useEffect, useState, useMemo, useRef } from "react";

function useFetchWithCache(url: string) {
    const cache = useRef<Record<string, any>>({});
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchData = useCallback(async () => {
      if (cache.current[url]) {
        setData(cache.current[url]);
        return;
      }

      setLoading(true);
      try {

        const memoizedValue = useMemo(async ()=>{
          await fetch(url)
        },[url])
        cache.current[url] = memoizedValue;

      } finally {
        setLoading(false);
      }
    }, [url]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    return { data, loading, refetch: fetchData };
  }