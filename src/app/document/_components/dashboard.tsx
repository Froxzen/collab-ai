import { auth } from "@clerk/nextjs/server";
import React from "react";
import IntroPage from "./intro-page";
import { NewDocument } from "./new-document";
import { RecentDocument } from "./recent-document";

export const Dashboard = async () => {
	const { userId } = await auth();

	if (!userId) {
		return <IntroPage />;
	}

	return (
		<div>
			<NewDocument />
			<RecentDocument />
		</div>
	);
};
