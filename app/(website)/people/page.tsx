import PeopleCard from "@/components/layout/people/PeopleCard";
import React from "react";

export default function Page() {
  return (
    <div className="container m-auto ">
      <div className="space-y-4 border-x w-fit m-auto p-6 overflow-hidden">

      {Array.from({ length: 20 }).map((_, i) => (
        <PeopleCard key={i} />
      ))}
      </div>
    </div>
  );
}
