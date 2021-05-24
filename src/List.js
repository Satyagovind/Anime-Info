// import { Link } from "react-router-dom";
//import Create from "./Select";

const List = (monday) => {
  return (
    <div className="Blog-List">
      <h1>Anime's List</h1>
      {monday.monday.map((monday) => (
        <div className="blog-preview" key={monday.mal_id}>
          {/* <Link to={`//${blog.mal_id}`}> */}
          <img src={monday.image_url} alt="not found" />
          <h1>{monday.title}</h1>
          <h3>Episodes: {monday.episodes ?? "not known"}</h3>
          <p>{monday.synopsis}</p>
          <a href={monday.url}>MyanimeList</a>
          <h3>Airing Starts At :{monday.airing_start}</h3>
          {/* <h4>{monday.genres}</h4> */}
          {/* </Link> */}
          {/* <button onClick={ () => handledel(blog.id) }>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default List;
