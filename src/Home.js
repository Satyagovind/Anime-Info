import List from "./List";
import useFetch from "./useFetch";
import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const Day = new Date().getDay();
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const [day, setDay] = useState(weekday[Day]);
  //  const {data , ispending , error} = useFetch('https://api.jikan.moe/v3/schedule/' +day)
  const [items, setItems] = useState([]);
  const { data, ispending, error } = useFetch(
    "https://api.jikan.moe/v3/schedule/" + day
  );

  useEffect(() => {
    data && setItems(data[day]);
  }, [data, day]);

  return (
    <div className="Home">
         <h2>Select the day</h2>
      <form>
         <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </form>
      <br></br>
      {ispending && <div>Loading...</div>}
      {/* <h2>Home Page</h2> */}
      {{ error } && <div>{error}</div>}
      {items && <List monday={items} title="Animes! " />}
    </div>
  );
};

export default Home;
