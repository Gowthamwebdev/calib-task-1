import Image from "next/image";
import React from "react";
const WebAppDetails = () => {
	return (
		<>
			<div className="max-w-720 width-100 col-span-4 gap-8">
				<div className="m-b-36">
					<h2 className="f-54-76-600-white w-full m-b-24 max-w-700">
						<span className="text-primary f-54-76-600-primary ">
							Your Business
						</span>{" "}
						Deserves Seamless Solutions —we’re here to Provide them
					</h2>
					<p className="f-18-32-500-white max-w-540 width-100 ">
						We are professional Web App developers empowering your vision with
						precision and dedication.
					</p>
				</div>
				<div className="d-flex items-center w-100 position-relative">
					<div className="">
						<div className="m-b-12">
							<Image
								src={"/banner-click-here.png"}
								width={20}
								height={20}
								alt="play button"
							/>{" "}
                            <span className="f-16-28-400-white">Quality App</span>
						</div>
						<div className="m-b-12">
							<Image
								src={"/banner-click-here.png"}
								width={20}
								height={20}
								alt="play button"
							/>{" "}
                            <span className="f-16-28-400-white">Clear Communication</span>
						</div>
						<div className="m-b-12">
							<Image
								src={"/banner-click-here.png"}
								width={20}
								height={20}
								alt="play button"
							/>{" "}
                            <span className="f-16-28-400-white">On-time delivery</span>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex align-center justify-center col-span-2">
				<Image
					src={"/home-banner-web.webp"}
					alt="banner"
					width={340}
					height={500}
				/>
			</div>
		</>
	);
};

export default WebAppDetails;
