import React from "react";
import Links from "./Links";

function About(props) {
  //   // function bio(bio) {
  //   //   if (bio.length > 0) {
  //   //     return bio
  //   //   }
  //   //   else if (bio === undefined || bio === '') {
  //   //     return null
  //   //   }
  //   }
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio === "" || props.bio === undefined ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
