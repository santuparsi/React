import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class PostListClass extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respose) => {
        //console.log(respose)
        this.setState({
          posts: respose.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Post List - Class Component</h1>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => <Post data={post}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PostListClass;
