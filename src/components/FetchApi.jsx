import React, { useEffect, useState } from "react";
import { config } from "../config";

export default function FetchApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(url);
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
        console.log(json);
        const data = json.results || json;
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
