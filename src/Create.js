import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Parth');
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
          e.preventDefault();
          const blog = {title,body,author};
          setIsPending(true);

          //making the POST Request here using the fetch API
          fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(blog)
          }).then(()=>{
             alert("New Blog Added");
             setIsPending(false);
             history.push('/');
          })

          
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required value = {title} onChange={(e)=>setTitle(e.target.value)} placeholder="New Blog"/>
                <label>Blog Body:</label>
                <textarea required value = {body} onChange={(e)=>setBody(e.target.value)} placeholder="Once upon a time..."></textarea>
                <label>Blog Author</label>
                <select value = {author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Parth">Parth</option>
                    <option value="PewDiePie">PewDiePie</option>
                    <option value="Prakash">Prakash</option>
                    <option value="Suresh">Suresh</option>
                    <option value="Kamal">Kamal</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Loading...</button>}
                
                
            </form>
        </div>    
     );
}
 
export default Create;  