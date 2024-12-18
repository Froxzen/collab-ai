import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

export const NewDocument = () => {
	const TemplateMap = [
		{
			component: (
				<button>
					<Card className="w-[150px] hover:border hover:border-blue-500 hover:cursor-pointer">
						<CardHeader></CardHeader>
						<CardContent className="flex justify-center mx-auto">
							<Plus size={80} />
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				</button>
			),
			footer: "Blank Document",
		},
		{},
	];

	return (
		<div className="bg-gray-50 h-[300px] flex flex-row md:flex-col justify-center flex-wrap">
			NewDocument
			<div className="flex flex-col space-y-4 w-10/12 mx-auto flex-wrap">
				<h3 className="text-muted-foreground text-sm ">
					Start a new document
				</h3>
				<div className="flex space-x-4 flex-wrap">
					{TemplateMap.map(template => (
						<div key={template.footer}>
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
