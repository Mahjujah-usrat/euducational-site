import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../footer/Footer";
import SetMenu from "../SetMenu/SetMenu";
import "./Details.css";

import male from "../../images/female2.jpg";
import female from "../../images/female1.jpg";

const Details = () => {
  const { serviceId } = useParams();
  console.log(serviceId);

  const [details, setDetails] = useState({});

  console.log(details);
  useEffect(() => {
    fetch( "./data.JSON" )
      .then((res) => res.json())
      .then((data) => setDetails(data?.service[0]));
  }, []);

  return (
    <div className=" details-container">
      <SetMenu></SetMenu>
      <div className="details">
        <div className="male-female-img p-5">
          {details.strGender === "Male" ? (
            <img className="w-50" src={male} alt="" />
          ) : (
            <img className="w-50" src={female} alt="" />
          )}
        </div>

        <div className="row d-flex details-teams align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="team-img">
              <img className="w-50" src={details.image} alt="" />
            </div>
            <h3>{details?.strService}</h3>
            <p>{details?.strAlternate}</p>
            <p>{details?.strLeague}</p>
          </div>
          <div className="col-md-6">
            <div className="description-team">
              <p>{details.strDescriptionEN}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Details;
