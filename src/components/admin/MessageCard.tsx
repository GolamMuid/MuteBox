"use client";

import { getALLPost } from "@/api/api";
import { HoverEffect } from "../ui/card-hover-effect";
import { useQuery } from "@tanstack/react-query";
import { RingLoader, SyncLoader } from "react-spinners";

export function MessageCard() {
	const { isLoading, error, data } = useQuery({
		queryKey: ["getALLPost"],
		queryFn: getALLPost,
	});

	return (
		<div className="container mx-auto px-8 mt-16">
			{isLoading ? (
				<div className="h-screen flex justify-center items-center">
					<RingLoader color="#36d7b7" size={200} />
				</div>
			) : (
				<HoverEffect items={data} />
			)}
		</div>
	);
}
