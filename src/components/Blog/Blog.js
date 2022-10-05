import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const blogs = useLoaderData();
   
    return (
        <div>
           <div className='grid md:grid-cols-3 md:gap-2'>
           {
                blogs.map(blog => <SingleBlog key={blog.id} blog={blog}/> )
            }
           </div>
        </div>
    );
};

export default Blog;