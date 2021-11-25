import React, { useEffect, useState } from "react";
import "./AllServices.css";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setService] = useState("");
  const [AllServices, setAllService] = useState([]);
  const handleChange = (s) => {
    const searchText = s.target.value;
    setService(searchText);
    console.log(s.target.value);
  };

  useEffect(() => {
    
    fetch("./data.JSON")
    .then(res => res.json())
    .then(data => setAllService(data));
  }, [services]);
  console.log(AllServices)

  return (
    <div className="container all-services">
      <div className="all-service">
        <h1>Lets hits upon the other opportunity</h1>
        <h3 style={{ color: "green" }} className="mt-5">
          Services
        </h3>
        <p className="mt-2">
        Education isn’t an exception to the ever-growing use of the internet. Gone are those days when students had to spend hours in the library searching for answers, seeking references, verifying facts, etc. and then and come up with their observations and inferences. Today, every answer, irrespective of the subject a student is studying, is available on the internet. So, right from human anatomy to astrophysics, everything is right there, available on the internet!
        </p>
      </div>
      <div className="search-service">
        <input onChange={handleChange} className="p-2" type="text" />{" "}
        <button className="btn p-2 btn-success">Search</button>
      </div>
      <div className="service">
        <div className="row">
          
          {AllServices.map((pd) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={pd.image} alt="" />
                </div>
                <div className="text-area">
                  <h4>{pd.name}</h4>
                  <p>{pd.subjects}</p>
                  <p>serviceCharge: {pd.serviceCharge}</p>
                  <p>country: {pd.type}</p>
                  <Link to={`/details/${pd.idservice}`}>
                    <button className="btn btn-success">Details</button>
                  </Link>
                </div>
              
              </div>
            </div>
           ))} 
        </div>
      </div>
    </div>
  );
};

export default AllServices;
