import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
const BlogDetails = ()=>{
    const {id} = useParams();
    const history = useHistory();
    const handleDel = ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            alert("Blog Deleted");
            history.push('/');
        })
    }
    const {data:blog, isError,isPending} = useFetch('http://localhost:8000/blogs/' +id);
    return (
          
        <div className='blog-details'> 
        {isPending && <div>Loading...</div>}
        {isError && <div>{isError}</div>}
        {blog && (
            <article>
                <div className='style-detail'>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
                <div>{blog.body}</div>
                <button className='delete' onClick={handleDel}>Delete❌</button>
            </article>
        )}
            
        </div>
    )
}
export default BlogDetails;  