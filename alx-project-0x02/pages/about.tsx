import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

function about() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Button size="large" shape="rounded-full">
        Large Button
      </Button>
      <Button size="medium" shape="rounded-md">
        Medium Button
      </Button>
      <Button size="small" shape="rounded-sm">
        Small Button
      </Button>
    </div>
  );
}

export default about;
