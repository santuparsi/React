import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }

    }
    //it invokes once the component is readdy
    componentDidMount() //life cycle hook
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
        //  console.log('I am ready.');
    }
    render() {
        return (
            <div>
                <h1 className='text-center'>POST LISt</h1>
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.posts.map((post)=>
                     <Post data={post} />
                      )}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default PostList;