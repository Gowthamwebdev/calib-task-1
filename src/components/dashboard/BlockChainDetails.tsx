import Image from "next/image";
import React from "react";
import BlockChainLabels from "./BlockChainLabels";

const blockChainLabel = [
	"UniSwap?",
	"Metamask?",
	"Opensea?",
	"Dogecoin?",
	"Binance?",
];
const BlockChainDetails = () => {
	return (
		<>
			<div className="max-w-720 width-100 col-span-4 gap-8">
				<div className="m-b-48">
					<h2 className="f-54-76-600-white w-full max-w-320-f-32-44-600-white m-b-16">
						Want to be the next{" "}
						<span className="text-primary f-54-76-600-primary max-sm-f-32-44-600-primary">
							<BlockChainLabels labels={blockChainLabel} />
						</span>{" "}
					</h2>
					<p className="f-18-32-500-white max-w-560 width-100 max-sm-f-14-22-500-white max-w-320-text-center">
						We are here to bring your Blockchain products to LIFE!
					</p>
				</div>
				`
				<div className="d-flex items-center position-relative">
					<div className="d-flex flex-wrap-wrap max-w-700 w-100">
						<div className="m-r-50 m-b-36">
							<h2 className="f-24-34-700-white m-b-10">9+years</h2>
							<p className="f-14-26-500-text-secondary m-0">
								in Blockchain Industry
							</p>
						</div>
						<div className="m-r-50 m-b-36">
							<h2 className="f-24-34-700-white m-b-10">20+</h2>
							<p className="f-14-26-500-text-secondary m-0">
								Blockchain Platforms worked
							</p>
						</div>
						<div className="m-r-50 m-b-36">
							<h2 className="f-24-34-700-white m-b-10">180+</h2>
							<p className="f-14-26-500-text-secondary m-0">
								Blockchain Projects developed
							</p>
						</div>
						<div className="m-r-50 m-b-36">
							<h2 className="f-24-34-700-white m-b-10">450+</h2>
							<p className="f-14-26-500-text-secondary m-0">POCs done</p>
						</div>
						<div className="m-r-50 m-b-36">
							<h2 className="f-24-34-700-white m-b-10">1.5 M+</h2>
							<p className="f-14-26-500-text-secondary m-0">
								Cost saved through a dedicated Blockchain Business
							</p>
						</div>
					</div>
				</div>
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

export default BlockChainDetails;
