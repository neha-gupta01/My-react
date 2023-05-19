import React from "react";

function Heading() {
  const name = "Neha";
  const currentDate = new Date(2019, 1, 1, 17);
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const img = "https://picsum.photos/200";

  let greeting;

  const customStyle = {
    color: "",
  };

  if (hour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
      <h2>My favourite fruits</h2>
      <img src={img} alt="A Random" />
      <p>Created by {name} </p>
      <p>Copyright {year} </p>
    </div>
  );
}

export default Heading;
