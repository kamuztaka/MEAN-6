import React from "react";

const Me = (props) => {
  return <li>I am a {props.ako}</li>;
};

const App = () => {
  const mycv = ["name", "address", "email address", "course", "phone number"];

  return (
    <div>
      <h1 style={{ color: "red" }}>My CV</h1>
      <h2>Okey...</h2>
      <ul>
        {mycv.map((mycv) => {
          return <Me ako={mycv} />;
        })}
      </ul>
    </div>
  );
};

export default App;
