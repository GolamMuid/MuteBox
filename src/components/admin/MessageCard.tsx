"use client";

import { getALLPost } from "@/api/api";
import { HoverEffect } from "../ui/card-hover-effect";
import { useQuery } from "@tanstack/react-query";

export function MessageCard() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getALLPost"],
    queryFn: getALLPost,
  });

  return (
    <div className="container mx-auto px-8 mt-16">
      <HoverEffect items={data} />
    </div>
  );
}
