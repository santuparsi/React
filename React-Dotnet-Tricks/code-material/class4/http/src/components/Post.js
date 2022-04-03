import React from "react";

const Post = (props) => {
  const { id, title, body } = props.data;
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
};
export default Post;
