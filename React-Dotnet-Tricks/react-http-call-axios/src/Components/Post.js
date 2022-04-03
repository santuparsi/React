import React from 'react'

const Post = (props) => {
    return (
        <tr key={props.data.id}>
            <td>{props.data.title}</td>
            <td>{props.data.body}</td>
        </tr>
    )
}
export default Post;