"use client";
import BlockChainDetails from "@/components/dashboard/BlockChainDetails";
import MobileAppDetails from "@/components/dashboard/MobileAppDetails";
import WebAppDetails from "@/components/dashboard/WebAppDetails";
import Image from "next/image";
import React, { useState } from "react";

const tabs = [
	{ key: "1", label: "Blockchain" },
	{ key: "2", label: "Web App" },
	{ key: "3", label: "Mobile App" },
];

const Dashboard = () => {
	const [selectedTab, setSelectedTab] = useState("1");

	const handleTabChange = (key: string) => {
		setSelectedTab(key);
	};

	return (
		<div className="position-relative bg-primary height-100 p-x-100 width-100 d-flex flex-column justify-center">
			<div className="d-flex flex-column justify-center width-inherit ">
				<div className="d-grid grid-cols-6">
					{selectedTab === "1" ? (
						<BlockChainDetails />
					) : selectedTab === "2" ? (
						<WebAppDetails />
					) : (
						<MobileAppDetails />
					)}
				</div>
				<div
					className="position-absolute bottom-0 p-b-80 z-index-2 m-t-20"
					style={{ width: "87%" }}
				>
					<div className="d-flex justify-space-between align-center max-sm-flex-column max-sm-gap-4">
						<div className="d-flex align-center gap-2">
							<div className="d-flex align-center justify-center text-center border-primary-1 radius-100 p-6">
								<Image
									src={"/play-btn-slider.png"}
									alt="play button"
									height={20}
									width={20}
								/>
							</div>
							<span className="f-14-0-500-white m-l-2">Our Video</span>
						</div>
						<div className="d-flex align-center">
							<div className="d-flex align-center">
								{tabs.map((tab) => (
									<div
										key={tab.key}
										onClick={() => handleTabChange(tab.key)}
										className={`cursor-pointer d-flex p-x-8 p-y-6 m-r-24 position-relative ${
											selectedTab === tab.key
												? "border-bottom-white-1 f-14-0-500-white"
												: "f-14-0-500-text-secondary"
										}`}
									>
										<span className="f-14-0-500-text-secondary m-b-6">
											{tab.label}
										</span>
									</div>
								))}

								<div className="d-flex align-center justify-center border-text-secondary-1 p-4 m-b-6">
									<Image
										src={"/play-btn-slider.png"}
										alt="play button"
										height={20}
										width={20}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
