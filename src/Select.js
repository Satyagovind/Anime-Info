// import { useState , useEffect} from "react";
// import useFetch from "./useFetch";
// import List from "./List";

// const Create = () => {
//      const Day = new Date().getDay();
//      const weekday = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
//      const [day, setDay] = useState(weekday[Day])
//      const {data , ispending , error} = useFetch('https://api.jikan.moe/v3/schedule/' +day)
//      const [items,setItems] = useState([]);


//      useEffect(() => {
//           data && setItems(data[day])
//      }, [data,day])
//   return (
//     <div className="create">
//       <h2>Select the day</h2>
//       <form>
//         <select
//           value={day}
//           onChange={(e) => setDay(e.target.value)}
//         >
//           <option value="sunday">Sunday</option>
//           <option value="monday">Monday</option>
//           <option value="tuesday">Tuesday</option>
//           <option value="wednesday">Wednesday</option>
//           <option value="thursday">Thursday</option>
//           <option value="friday">Friday</option>
//           <option value="saturday">Saturday</option>
//         </select>
//       </form>
//       {error && <p>error</p>}
//       {ispending && "ispending..."}
//       {items && <List items={items} />}
//     </div>
//   );
// }
 
// export default Create;