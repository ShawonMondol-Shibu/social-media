import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { UserCircle } from "lucide-react";
import React from "react";

export default function PeopleCard() {
  return (
    <>
      <Item variant={"outline"} className="mx-auto w-lg">
        <ItemMedia>
          <UserCircle size={50}/>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Shawon</ItemTitle>
          <ItemDescription className=" line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quae similique accusamus odio dignissimos necessitatibus, sed nobis eos obcaecati perferendis dolore natus, ad enim officia explicabo laudantium facere minima quod?</ItemDescription>
        </ItemContent>
      </Item>
    </>
  );
}
