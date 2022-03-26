import React, { useEffect, useState } from "react";

const FromData = ({ inputvalue }) => {
  return inputvalue.map((feedback) => (
    <>
      <tr key={Math.random()}>
        <td>{feedback.fname}</td>
        <td>{feedback.name}</td>
        <td>{feedback.email}</td>
        <td>{feedback.number}</td>
        <td>{feedback.radio}</td>
      </tr>
    </>
  ));
};

export default FromData;
