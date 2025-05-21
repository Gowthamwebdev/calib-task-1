import { ArrowUpOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
	return (
		<div className=" dashboard-container">
			<div className="dashboard-content-container">
				<div className="dashboard-content">
					<h1 className="dashboard-content-heading">
						Turn Your <span className="highlight-primary">Mobile App</span>{" "}
						Ideas Into Successful Businesses.
					</h1>
					<p className="dashboard-content-para">
						Top Mobile App Development Company producing innovative experiences
						since 2015
					</p>
					<div className="mobileapp-details-container">
						<div className="mobileapp-details-child">
							<h2>150+</h2>
							<p>Inhouse Engineers</p>
						</div>
						<div className="mobileapp-details-child">
							<h2>80%</h2>
							<p>Senior Developers</p>
						</div>
						<div className="mobileapp-details-child">
							<h2>5</h2>
							<p>Dedicated Business Units</p>
						</div>
					</div>
					<div className="mobileapp-event-details">
						<div className="contact-us">
								<ArrowUpOutlined style={{color: 'white'}}/>
								<p>Get in touch with us</p>
						</div>
					</div>
				</div>

				<div className="dashboard-image-container">
					<Image
						src={"/home-banner.webp"}
						alt="banner"
						width={380}
						height={400}
					/>
				</div>
			</div>

			<div className="dashboard-options-container">
				<div className="video-btn">
					<PlayCircleOutlined style={{ color: "#fb7000" }} />
					<span>Our Video</span>
				</div>
				<div className="sliding-options">
					<span>Block Chain</span>
					<span>Web App</span>
					<span>Mobile App</span>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
