import React, { useEffect, useState } from "react";
import { config } from "../config";

export default function FetchApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${config.bearer_token}`,
          },
        };

        const response = await fetch(url, options);
        const json = await response.json();
        const data = await json.results;
        setData(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
