
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // const [blogs,setBlogs] = useState(null);

    // here while using the useFetcch the delete function is not working due to the useState using in useFetch 
    const {data:blogz,isPending,isError} = useFetch('http://localhost:8000/blogs');
    const handleDelete = () => {
         
    };
    return (
        <div className="home">
            {isError && <div>{isError}</div>}
            {isPending && <div className="wait">Loading...</div>}
            {/* this below is a prop */}
            {blogz && <BlogList blogs={blogz} title="All Blogs" handleDelete={handleDelete} />}
            {/* <BlogList blogs ={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blog" handleDelete={handleDelete}/> */}
        </div>
    );
}

export default Home;