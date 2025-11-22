"use client";
import PostCard from "@/components/layout/home/PostCard";
import React from "react";

export interface postType {
  user: string;
  description: string;
  image: string;
  postDetails: { description: string; image: string };

}

export default function Page() {
  const postData = [
    {
      user: "Shawon",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias praesentium animi sapiente error eius accusamus in quia obcaecati voluptatibus pariatur voluptatum expedita, aspernatur vero placeat porro magni consequuntur esse.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qwiuv2rvGjznp1SeiyPe7rcXpoygPT-6Ng&s",
      postDetails: {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus autem velit necessitatibus? Suscipit ad saepe repudiandae voluptatem sint, quos placeat odio odit esse eum iste magni dignissimos tempora qui?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qwiuv2rvGjznp1SeiyPe7rcXpoygPT-6Ng&s",
      },
    
    },
  ];
  return (
    <div>
      <div className="container mx-auto p-4">
        {postData.map((data) => {
          return <PostCard key={data.user} data={data} />;
        })}
      </div>
    </div>
  );
}
