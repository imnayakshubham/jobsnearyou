import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { db } from "../../../firebase/firebase";
import "../ViewPosts/ViewPosts.css";

function ViewPosts({
  id,
  companyName,
  jobTitle,
  byuser,
  applyLink,
  experience,
  salaryRange,
  joblocation,
  skills,
}) {
  const user = useContext(AuthContext).user;
  const deletepost = () => {
    try {
      if (user.displayName === byuser) {
        db.collection("jobposts").doc(id).delete();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="viewposts" id={id}>
        <div className="viewpostscontainer">
          <div className="details">
            <div className="companyname">
              <h1>{companyName}</h1>
              <div className="role">
                <h3>{jobTitle}</h3>
              </div>
              <div className="postedby">
                <h3>Posted by :{byuser}</h3>
              </div>
            </div>
          </div>

          <div className="applylink">
            <a href={applyLink} target="_blank" rel="noreferrer">
              <button className="applynowbtn">Apply</button>
            </a>
          </div>
        </div>
        <div className="aboutjob">
          <div className="jobdetails">
            <div className="experience">{experience}</div>
            <div className="location">{joblocation}</div>
            <div className="salary">{salaryRange}</div>
          </div>
        </div>

        <div className="moreinfo">
          <div className="skills">
            <h3>Skills:</h3> {skills}
          </div>
          <div className="delete">
            <i className="fas fa-trash" onClick={deletepost}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPosts;
