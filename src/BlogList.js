import React  from 'react';
import {Link} from 'react-router-dom';
const BlogList = ({blogs,title,handleDelete}) =>{
//we can also do as we did in below steps
// const BlogList = (props) => {
//     const blogs = props.blogs;
//     const title = props.title;
 
    return (
        <div className="blog-list"> 
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    </Link>
                    <p className="author">Written by {blog.author}</p>
                    <br></br>
                     
                </div>

            ))}  
        </div>
    )
}
export default BlogList;