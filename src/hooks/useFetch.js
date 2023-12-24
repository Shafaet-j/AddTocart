import axios from "axios";
import { useEffect, useState } from "react";

export const makeRequest = axios.create({
  baseURL: "https://task-addtocart-server.vercel.app/api",
});

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);

        setData(res.data.data);
      } catch (err) {
        console.error("Error fetching data:", err);

        if (axios.isAxiosError(err) && err.response) {
          console.error("HTTP error status:", err.response.status);
        } else if (axios.isAxiosError(err) && !err.response) {
          console.error("No response received");
        } else {
          console.error("Error setting up the request:", err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
