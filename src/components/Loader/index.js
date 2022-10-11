import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <InfinitySpin />
    </div>
  );
}
