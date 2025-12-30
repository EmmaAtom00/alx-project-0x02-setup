import Card from "@/components/common/Card";
import React from "react";

function home() {
  return (
    <div>
      <h1>Home</h1>
      <Card
        title="Welcome to the Home Page"
        content="This is the home page of our Next.js application."
      />
    </div>
  );
}

export default home;
