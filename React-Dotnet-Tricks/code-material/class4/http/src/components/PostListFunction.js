import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const PostListFunction = () => {
    const [posts, setPost] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //console.log(response.data)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    })

    return (
        <div>
            <h1 className="text-center">Post List - Function Component</h1>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => <Post data={post} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PostListFunction;