"use client"; // Ensure this is a client component
import { useAuth } from "@clerk/nextjs";
import React from "react";
import IntroPage from "./intro-page";
import { NewDocument } from "./new-document";

export const Dashboard = () => {
	const { userId } = useAuth(); // Client-side authentication

	if (!userId) {
		return <IntroPage />;
	}

	return (
		<div>
			<NewDocument />
		</div>
	);
};
