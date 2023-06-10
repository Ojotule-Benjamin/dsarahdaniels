import React from "react";
import { useLocation } from "react-router-dom";

const Service = () => {
  const location = useLocation().state;
  //const { item } = location.state;

  const { item } = location.state || {};

  return (
    <div>
      <h1>service</h1>
      {console.log({ item })}
      {item && (
        <>
          <h1>service: {item.service}</h1>
          <h1>service: {item.desc}</h1>
          <h1>service: {item.service}</h1>
        </>
      )}
    </div>
  );
};

export default Service;
