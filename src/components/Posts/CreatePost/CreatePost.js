import React, { useState, useContext, useEffect } from "react";
import "../CreatePost/CreatePost.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { db } from "../../../firebase/firebase";
import firebase from "firebase";
import ViewPosts from "../ViewPosts/ViewPosts";

function CreatePost() {
  const user = useContext(AuthContext).user;
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [joblocation, setJobLocation] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [error, seterror] = useState(null);
  const [userspostData, setuserspostData] = useState([]);
  const handleformsubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection("jobposts").add({
        byuser: user.displayName,
        jobTitle: jobTitle,
        companyName: companyName,
        experience: experience,
        skills: skills,
        salaryRange: salaryRange,
        joblocation: joblocation,
        applyLink: applyLink,
        timestamp: firebase.firestore.Timestamp.now().toDate(),
      });
      seterror(false);
    } catch (error) {
      seterror(true);
    }
  };

  const getposts = async () => {
    try {
      await db
        .collection("jobposts")
        .orderBy("timestamp", "desc")
        .onSnapshot(function (querymysnapshot) {
          setuserspostData(
            querymysnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } catch (error) {
      console.log(error, "----->");
    }
  };
  useEffect(() => {
    getposts();
  }, []);

  return (
    <>
      <div className="createpostcontainer">
        <div className="postjobform">
          <form method="POST" id="jobform" onSubmit={handleformsubmit}>
            <div className="formcontainer">
              <input
                type="text"
                placeholder="Enter Your Job Title"
                required
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Company Name"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Experience Required"
                required
                onChange={(e) => setExperience(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Salary Range"
                required
                onChange={(e) => setSalaryRange(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Job Location"
                required
                onChange={(e) => setJobLocation(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Skills Required"
                required
                onChange={(e) => setSkills(e.target.value)}
              />

              <input
                type="text"
                placeholder="Enter Apply link/Email-address"
                required
                onChange={(e) => setApplyLink(e.target.value)}
              />
            </div>
            <div className="formsubmit">
              <button>Post Job</button>
            </div>
          </form>
        </div>
        {error ? <h1>Please try again</h1> : ""}
      </div>
      {userspostData
        // .filter((value) => {
        //   console.log("value ==== ", typeof value.data.country);
        //   if (
        //     value.data.country.toLowerCase().includes(search.toLowerCase())
        //   ) {
        //     return value;
        //   } else {
        //     <h1>No data found</h1>;
        //   }
        // })
        .map(
          ({
            id,
            data: {
              companyName,
              jobTitle,
              byuser,
              applyLink,
              experience,
              salaryRange,
              joblocation,
              skills,
            },
          }) => (
            <div className="post">
              <ViewPosts
                id={id}
                companyName={companyName}
                jobTitle={jobTitle}
                byuser={byuser}
                applyLink={applyLink}
                experience={experience}
                salaryRange={salaryRange}
                joblocation={joblocation}
                skills={skills}
              />
            </div>
          )
        )}
    </>
  );
}

export default CreatePost;
