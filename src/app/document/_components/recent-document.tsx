import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";

import React from "react";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";


export const RecentDocument = async () => {
	const { userId } = await auth();

	if (!userId) {
		redirect("/");
	}

	const userDocuments = await db.document.findMany({
		where: {
			userId: userId,
		},
		orderBy: {
			createAt: "asc",
		},
	});
	return (
		<div className="w-10/12 mx-auto my-4">
			<h1 className="font-semibold text-sm mb-4">Recent Document</h1>
			<div className="flex gap-8 flex-wrap">
				{userDocuments.length > 0 ? (
					userDocuments.map(document => (
						<div key={document.id} className="w-[150px]">
							<Link href={`/document/${document.id}`}>
								<Card className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer">
									<CardHeader></CardHeader>
									<CardContent className="flex justify-center mx-auto">
										<FaBook size={80} />
									</CardContent>
									<CardFooter></CardFooter>
								</Card>
							</Link>
							<p className="text-sm mt-2">{document.title}</p>
						</div>
					))
				) : (
					<p className="text-sm">Once you start writing, your recent documents will go here...</p>
				)}
			</div>
		</div>
	);
};
