import React,{useState,useEffect} from 'react'
import axios from 'axios'
import endpoints from '../../endpoints';
import Category from './Category';

export default function CategoryList() {
   
    const [categories,setCagories]=useState([]);
    useEffect(()=>{
        axios.get(endpoints.CATEGORY_URL)
        .then(response=>{
           // console.log(response.data.data)
            setCagories(response.data.data);
        })
        .catch(error=>{
            console.log(error)
        })
    })
    return (
        <div>
        <div className="container">
            <h3 className='text-center'>All Categories</h3>
            <div className="row">
            {
                categories.map(item=><Category data={item} />)
            }
        </div>
        </div>
        </div>
    )
}
