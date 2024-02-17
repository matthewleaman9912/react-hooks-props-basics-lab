import React from "react";
import Links from "./Links"

function About(props) {

  if (!props.bio) {
    return (
    <div id="about">
    <h2>About Me</h2>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links github={props.link1} linkedin={props.link2} />
    </div>
  )
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.link1} linkedin={props.link2} />
    </div>
  );
}
}

export default About;
