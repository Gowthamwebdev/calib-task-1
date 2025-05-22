import Image from "next/image";
import React from "react";

const MobileAppDetails = () => {
	return (
		<>
			<div className="max-w-720 width-100 col-span-4 gap-8">
				<div className="m-b-48">
					<h2 className="f-54-76-600-white w-full max-w-320-f-32-44-600-white m-b-24">
						Turn Your{" "}
						<span className="text-primary f-54-76-600-primary max-sm-f-32-44-600-primary">
							Mobile App
						</span>{" "}
						Ideas Into Successful Businesses.
					</h2>
					<p className="f-18-32-500-white max-w-560 width-100 max-sm-f-14-22-500-white max-w-320-text-center">
						Top Mobile App Development Company producing innovative experiences
						since 2015.
					</p>
				</div>
				<div className="d-flex items-center w-100 position-relative">
					<div className="d-flex flex-wrap-wrap max-w-700 w-100 ">
						<div className="m-r-80">
							<h2 className="f-24-40-600-white m-0">150+</h2>
							<p className="f-16-40-500-text-secondary m-0">
								Inhouse Engineers
							</p>
						</div>
						<div className="m-r-80">
							<h2 className="f-24-40-600-white m-0">80%</h2>
							<p className="f-16-40-500-text-secondary m-0">
								Senior Developers
							</p>
						</div>
						<div className="m-r-80">
							<h2 className="f-24-40-600-white m-0">5</h2>
							<p className="f-16-40-500-text-secondary m-0">
								Dedicated Business Units
							</p>
						</div>
					</div>
				</div>
				{/* <div className="contact-us position-absolute bottom-90 right-20 d-flex align-center justify-center p-36 radius-100 cursor-pointer border-white-1 max-sm-d-none">
							<div className="contact-us-wrapper" />
							<div className="d-flex flex-column align-center justify-center gap-16 max-w-100 text-center">
								<ArrowUpOutlined className="icon-24-white" />
								<p className="f-14-24-400-white m-0">Get in touch with us</p>
							</div>
						</div> */}
			</div>
			<div className="d-flex align-center justify-center col-span-2">
				<Image
					src={"/home-banner.webp"}
					alt="banner"
					width={340}
					height={500}
				/>
			</div>
		</>
	);
};

export default MobileAppDetails;
