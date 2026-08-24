import { useEffect, useState } from "react";
import { api } from "../api/client";

export function useAxiosGet(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function run() {
      try {
        setLoading(true);
        setError("");
        const res = await api.get(url, {
          signal: controller.signal,
        });
        setData(res.data);
      } catch (e) {
        const isCanceled =
          e.name === "CanceledError" || e.code === "ERR_CANCELED";

        if (!isCanceled) {
          setError(e.message || "មានបញ្ហាពេលទាញទិន្នន័យ");
        }
      } finally {
        setLoading(false);
      }
    }
    run();

    return () => controller.abort();
  }, [url, ...deps]);

  return { data, loading, error };
}
