"use client";

import { getALLPost } from "@/api/api";
import { HoverEffect } from "../ui/card-hover-effect";
import { useQuery } from "@tanstack/react-query";

export function MessageCard() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getALLPost"],
    queryFn: getALLPost,
  });

  console.log("data", data);

  return (
    <div className="container mx-auto px-8 mt-16">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "24 april 2024",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
];
