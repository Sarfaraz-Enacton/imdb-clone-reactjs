import React from "react";
import { useParams } from "react-router-dom";
import FetchApi from "../components/FetchApi";
import { config } from "../config";

export default function Preview() {
  const params = useParams();
  console.log(params);
  const id = params.id;
  const media_type = "tv";
  const { data, loading, error } = FetchApi(
    `${config.API_BASE_URL}${media_type}/${id}`
  );
  console.log({ data });
  return (
    <main>
      <div className="container">
        <h1 className="text-3xl text-primary">Preview</h1>
      </div>
    </main>
  );
}
