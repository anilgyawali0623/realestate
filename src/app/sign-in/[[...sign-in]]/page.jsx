import React from "react";

import { SignIn } from "@clerk/nextjs";
function page() {
  return (
    <div className="flex justify-center items-center p-3">
      <SignIn />
    </div>
  );
}

export default page;
