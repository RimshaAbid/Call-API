import React,{useState,useEffect} from "react";


//using function
function Student() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [id, setId]=useState(1);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])//this useEffect will run one time


  function getItem(){

      setId(id+1)
  }

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts/"+id)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems([result]);
      },
     
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[id])//The number of times the ID value increases So much time   useEffect are update

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <button onClick={()=>getItem()}>Click {id}</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.id}
            {item.title}
             {item.body}
          </li>
        ))}
      </ul>
      </>
    );
  }
}
export default Student;