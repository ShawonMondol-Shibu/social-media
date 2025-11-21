import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CgInfinity } from "react-icons/cg";

export default function Navbar() {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Peoples", url: "/people" },
    { name: "Blogs", url: "/blog" },
  ];
  return (
    <nav className="flex items-center justify-between border p-4 sticky top-0 z-50 bg-white/50 backdrop-blur-lg">
      <CgInfinity size={30} />
      <div className="flex items-center justify-center gap-5">
        {navLinks.map((nav) => (
          <Link key={nav.name} href={nav.url}>
            {nav.name}
          </Link>
        ))}
      </div>
      <Avatar>
        <AvatarImage
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qwiuv2rvGjznp1SeiyPe7rcXpoygPT-6Ng&s"
          }
          alt="profile_picture"
        />
        <AvatarFallback>profile picture</AvatarFallback>
      </Avatar>
    </nav>
  );
}
