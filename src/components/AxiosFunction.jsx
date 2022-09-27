import React from "react";
import axios from "axios";
import "./style.css" 

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const AxiosFunction=()=>
{
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  if (!post) return null;
  return (
    <div class="main">
      <div class="main_heading">API CALL data from https://jsonplaceholder.typicode.com </div>
      <h1>TITLE:{post.title}</h1>
      <p>BODY:{post.body}</p>
    </div>)



  // const [val,setVal]=useState(null);
  // const URL="https://jsonplaceholder.typicode.com/posts/1";
  // useEffect(axios.get(URL).then((response)=>{
  //   console.log(response.data)
  //   //setVal(response.data)
  // }),[])
  //     return(<div>
  //       {val.title}
  //     </div>)
}
export default AxiosFunction;