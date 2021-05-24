//import { useParams , useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
  const { data: monday, error, isPending } = useFetch(
    "https://api.jikan.moe/v3/schedule/monday"
  );

  return (
    <div className="details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {monday && (
        <article>
          <h2>{monday.title}</h2>
          <p>{monday.episodes ?? "not known"}</p>
          <div>{monday.synopsis}</div>
        </article>
      )}
    </div>
  );
};

export default Details;
