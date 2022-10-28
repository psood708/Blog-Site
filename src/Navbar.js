import React  from 'react';
import {Link} from 'react-router-dom';
// const style = {color: "white",
// backgroundColor: '#bd2626',
// borderRadius:'8px'}
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Sood Diaries</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* this below is the example how to use this  */}
                {/* <a href="/create" style={style}>New Blog</a> */}
            </div>
            {/* this is how we can put the styles in a particular thing */}
        </nav>
    ); 
} 
  
export default Navbar;