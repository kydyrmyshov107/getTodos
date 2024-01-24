import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [getPosts, setGetPosts] = useState([]);
  
  const getTodos = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const responseData = await response.json();
      setGetPosts(responseData);
    } catch (error) {
      console.error(error, "backend fall");
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {getPosts.map((item) => {
        return (
          <div key={item.id}> 
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
