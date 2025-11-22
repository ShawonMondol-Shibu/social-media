import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export default function PeopleCard() {
  return (
    <>
      <Item variant={"muted"} className="mx-auto w-lg">
        <ItemMedia>
          <Avatar>
            <AvatarImage src={'https://xsgames.co/randomusers/avatar.php?g=male'} alt=""/>
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Shawon</ItemTitle>
          <ItemDescription className=" line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quae similique accusamus odio dignissimos necessitatibus, sed nobis eos obcaecati perferendis dolore natus, ad enim officia explicabo laudantium facere minima quod?</ItemDescription>
        </ItemContent>
      </Item>
    </>
  );
}
