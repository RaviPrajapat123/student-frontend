// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// import axios from "axios";
// import { useEffect, useState } from "react"

// // const App = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [postsPerPage, setPostsPerPage] = useState(10);

// //   useEffect(() => {
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/posts")
// //       .then((res) => setPosts(res.data))
// //       .catch((err) => console.error("Error fetching posts:", err));
// //   }, []);

// //   // 🔍 Filtering logic
// //   const filteredPosts = posts.filter((post) =>
// //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     post.body.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // 📄 Pagination logic
// //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
// //   const startIndex = (currentPage - 1) * postsPerPage;
// //   const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-2xl font-bold text-center mb-4">Dummy API Pagination + Search</h1>

// //       {/* 🔍 Search Input */}
// //       <div className="max-w-xl mx-auto mb-4 flex justify-between items-center">
// //         <input
// //           type="text"
// //           placeholder="Search posts..."
// //           value={searchTerm}
// //           onChange={(e) => {
// //             setSearchTerm(e.target.value);
// //             setCurrentPage(1); // reset to first page on new search
// //           }}
// //           className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm"
// //         />
// //       </div>

// //       {/* 📦 Posts Display */}
// //       <div className="max-w-xl mx-auto bg-white shadow-md rounded p-4">
// //         {currentPosts.map((post) => (
// //           <div key={post.id} className="border-b py-2">
// //             <h2 className="font-semibold text-lg">{post.title}</h2>
// //             <p className="text-gray-600 text-sm">{post.body}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* 🔢 Rows per page */}
// //       <div className="text-center mt-4">
// //         <label className="font-medium mr-2">Rows per page:</label>
// //         <select
// //           value={postsPerPage}
// //           onChange={(e) => {
// //             setPostsPerPage(Number(e.target.value));
// //             setCurrentPage(1); // reset to first page
// //           }}
// //           className="border px-2 py-1 rounded"
// //         >
// //           {[5, 10, 15, 20].map((n) => (
// //             <option key={n} value={n}>{n}</option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* 📄 Pagination Controls */}
// //       <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
// //         <button
// //           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //           disabled={currentPage === 1}
// //           className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
// //         >
// //           Prev
// //         </button>

// //         {Array.from({ length: totalPages }, (_, i) => (
// //           <button
// //             key={i}
// //             onClick={() => setCurrentPage(i + 1)}
// //             className={`px-3 py-1 rounded ${
// //               currentPage === i + 1
// //                 ? "bg-blue-600 text-white"
// //                 : "bg-gray-200 text-gray-800"
// //             }`}
// //           >
// //             {i + 1}
// //           </button>
// //         ))}

// //         <button
// //           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //           disabled={currentPage === totalPages}
// //           className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import Parent from "./lifting_state/parent";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./Home";
// import Add from "./add";
// import ViewUser from "./ViewUser";
// import NavBar from "./NavBar";
// import WindowWidth from "./WindowWidth";
// import UserForm from "./UserForm";
// function App(){
//   const [data,setData]=useState({
//     name:"",
//     email:'',
//     password:''
//   })
//   const [show,setShow]=useState(false)
//   const [blog,setBlog]=useState([])
//   const list=["Apple", "Banana", "Mango", "Orange"];

  
//     useEffect(()=>{
//       const fetch=async()=>{
//       let response= await axios.get("https://jsonplaceholder.typicode.com/posts")
//       setBlog(response.data)
      
//       }
//       fetch()
//     },[])
  

//     const users = [
//     { id: 1, name: "Ravi", email: "ravi@example.com" },
//     { id: 2, name: "Anjali", email: "anjali@example.com" },
//     { id: 3, name: "Amit", email: "amit@example.com" },
//   ];
//   const handleInput=(e)=>{
//     const {name,value}=e.target;
//     setData((prev)=>{
//       return{
//         ...prev,[name]:value
//       }
//     })
//   }
//   const handleSubmit=(e)=>{
//   e.preventDefault()
//    console.log("first",data)
//   }

//   return(
//     // <>
//     // <form onSubmit={handleSubmit}>

//     // <input type="text" placeholder="enter your name" name="name" value={data.name} onChange={handleInput} className="border"/>
//     // <input type="email" placeholder="enter your email" name="email" value={data.email} onChange={handleInput} className="border"/>
//     // <button type="submit">submit</button>
//     // </form>
//     // {show && <p>Your Name,{data.name}</p>}
//     // <p>Your Email,{data.email}</p>
//     // <button className="p-3 bg-red-400" onClick={()=> setShow(!show)}>Click me</button>
//     // {list.map((fruit,i,array)=>(
//     //   <p key={i}>{i+1}.{fruit}</p>
//     // ))}
//     // {users.map((item,i)=>(
//     //   <div key={item.id}>
//     //     <h2>{item.name}</h2>
//     //     <p>{item.email}</p>
//     //   </div>
//     // ))}
//     // {blog.slice(0,5).map((item)=>(
//     //   <div key={item.id}>
//     //       <p>{item.title}</p>
//     //   </div>
//     // ))}
//     // </>
//     // <Parent/>
//     <BrowserRouter>
//     <NavBar/>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/add" element={<Add/>}/>
//       <Route path="/viewuser/:id" element={<ViewUser/>}/>
//       <Route path="/window" element={<WindowWidth/>}/>
//       <Route path="/userForm" element={<UserForm/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }
// export default App



import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [students, setStudents] = useState([]);

useEffect(() => {
  axios.get(`${process.env.REACT_APP_API_URL}/all-students`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}, []);

  // 🔄 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 📤 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/add-student", formData);
      alert("Student Added");
      setFormData({ name: '', email: '' });
      fetchStudents(); // ⬅️ refresh list
    } catch (err) {
      alert("Failed to add student");
    }
  };

  return (
    <div className="App">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
        <button type="submit">Submit</button>
      </form>

      <hr />
      <h2>📋 All Students</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map((stu, index) => (
            <li key={stu._id || index}>
              {index + 1}. {stu.name} - {stu.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

