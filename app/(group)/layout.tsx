import React from "react";

const GroupLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-sky-500 text-white">{children} </div>;
};

export default GroupLayout;
