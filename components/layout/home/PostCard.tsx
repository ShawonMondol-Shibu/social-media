/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export default function PostCard({ data }: any) {
  const [like, setLike] = useState(false);
  const [message, setMessage] = useState(false);
  const shareData = {
    title: data.name,
    image: data.image,
    description: data.description,
  };
  const handleLike = () => {
    setLike(!like);
  };
  const handleMessage = () => {
    setMessage(!message);
  };
  const handleShare = async () => {
    try {
      navigator.share(shareData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="m-auto max-w-2xl">
        <CardHeader className="flex justify-start gap-4">
          <Avatar className="border">
            <AvatarImage
              src={data.image}
              alt={data.user}
              width={100}
              height={100}
            />
            <AvatarFallback>{data.user}</AvatarFallback>
          </Avatar>
          <div className="">
            <CardTitle>{data.user}</CardTitle>
            <CardDescription className="line-clamp-1">
              {data.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardAction className="border-y m-auto">
          <CardDescription className="p-4">
            {data.postDetails.description}
          </CardDescription>
          {data.postDetails.image.length > 0 ? (
            <div className="w-full h-96">
              <Image
                src={data.postDetails.image}
                alt={data.postDetails.image}
                width={1000}
                height={1000}
                className="w-full h-full object-fill"
              />
            </div>
          ) : (
            ""
          )}
        </CardAction>
        <CardFooter className="gap-4">
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={handleLike}
            className=" hover:text-blue-500"
          >
            <ThumbsUp
              className={cn(
                "drop-shadow-xs drop-shadow-black/50 size-5",
                like
                  ? "fill-blue-400 stroke-blue-400 drop-shadow-blue-500"
                  : "bg-none"
              )}
            />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={handleMessage}
            className=" hover:text-blue-500"
          >
            <MessageCircle className="drop-shadow-xs drop-shadow-black/50 size-5" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={handleShare}
            className=" hover:text-blue-500"
          >
            <Share2 className="drop-shadow-xs drop-shadow-black/50 size-5" />
          </Button>
        </CardFooter>
        {message ? (
          <div className="px-4 gap-4 flex items-end">
            <Textarea />
            <Button variant={"outline"}>Submit</Button>
          </div>
        ) : (
          ""
        )}
      </Card>
    </>
  );
}
