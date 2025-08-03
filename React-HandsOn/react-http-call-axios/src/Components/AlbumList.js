import React, { useState,useEffect } from 'react'
import axios from 'axios';

const AlbumList=()=>{
    const [albums,setAlbum]=useState([]); //default is empty array
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
           // console.log(response.data);
           setAlbum(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })

    return(
        <div>
            <h1>Album List-Function Component</h1>
            <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>User ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                     {albums.map(album=>(
                         <tr>
                             <td>{album.userId}</td>
                             <td>{album.title}</td>
                         </tr>
                     ))}
                    </tbody>
                </table>
        </div>
    )
}
export default AlbumList;