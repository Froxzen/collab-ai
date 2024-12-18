"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { FiPlus } from "react-icons/fi";


export const NewDocument = () => {
	const createNewDoc = async () => {
		try {
			// Your create new document logic here
		} catch (error) {
			// Handle error
		}
	};

	const TemplateMap = [
		{
			component: (
				<button onClick={() => createNewDoc()}>
					<Card className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer">
						<CardHeader></CardHeader>
						<CardContent className="flex justify-center mx-auto">
							<FiPlus size={80} />
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</button>
			),
			footer: "Blank Document",
			key: "blank-document",
		},
		{
			component: <div>Another Template</div>,
			footer: "Another Template",
			key: "another-template",
		},
	];

	return (
		<div className="bg-gray-50 h-[300px] flex flex-row md:flex-col justify-center flex-wrap">
			<div className="flex flex-col space-y-4 w-10/12 mx-auto flex-wrap">
				<h3 className="text-muted-foreground text-sm">
					Start a new document
				</h3>
				<div className="flex space-x-4 flex-wrap">
					{TemplateMap.map((template) => (
						<div key={template.key}>
							{template.component}
							<p className="text-sm mt-2 ml-2">
								{template.footer}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
