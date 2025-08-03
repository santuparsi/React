import React from "react";

function Student(props) {
  return (
    <div>
      <h1>
        I am {props.student.name} sudied in {props.student.std} class
      </h1>
    </div>
  );
}

function ClassRoom() {
  const student = { name: "ROhan", std: "IV" };
  return (
    <>
      <Student student={student} />
      <Student student={{ name: "Charan", std: "V" }} />
    </>
  );
}

export default ClassRoom;
