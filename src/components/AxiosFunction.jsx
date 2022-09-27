import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import "./style1.css"
let URL="https://jsonplaceholder.typicode.com/posts/1";
const AxiosFunction=()=>
{
  const [val,setVal]=useState(null);
  useEffect(()=>{axios.get(URL).then((response)=>
    //console.log(response.data)
    setVal(response.data)
    )},[])
    if(!val) return ;
  return(
    <div class="main">
      <div class="heading">Heading:Getting API data using axios</div>
      <div class="title">TITLE : {val.title}      </div>
      <div class="body" > BODY : {val.body}</div>
    </div>
  )
}
export default AxiosFunction;











// import React from "react";
// import axios from "axios";
// import "./style.css" 

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// const AxiosFunction=()=>
// {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       console.log(response)
//       setPost(response.data);
//     });
//   }, []);
  
//   if (!post) return null;
//   return (
//     <div class="main">
//       <div class="main_heading">API CALL data from https://jsonplaceholder.typicode.com </div>
//       <h1>TITLE:{post.title}</h1>
//       <p>BODY:{post.body}</p>
//     </div>)

// }
// export default AxiosFunction;