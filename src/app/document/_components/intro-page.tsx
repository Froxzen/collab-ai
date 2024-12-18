import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function IntroPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center p-4">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div className="lg:w-1/2 space-y-8">
						<h1 className="text-4xl font-bold text-blue-800">
							Welcome to Our Amazing Platform
						</h1>
						<div className="space-y-4">
							<p className="text-xl text-gray-700">
								Discover a world of possibilities with our
								cutting-edge solutions. We're here to help you
								achieve your goals and transform your ideas into
								reality.
							</p>
							<p className="text-lg text-gray-600">
								Whether you're a startup founder, an established
								business owner, or an individual with a dream,
								our platform provides the tools and support you
								need to succeed in today's fast-paced digital
								landscape.
							</p>
						</div>
						<SignInButton mode="modal">
							<button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
								Get Started
							</button>
						</SignInButton>
					</div>
					<div className="lg:w-1/2">
						{/* <Image
							src="/placeholder.svg?height=600&width=600"
							alt="Platform illustration"
							width={600}
							height={600}
							className="rounded-lg shadow-xl"
						/> */}
					</div>
				</div>
			</div>
		</div>
	);
}
