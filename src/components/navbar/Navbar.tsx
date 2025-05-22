"use client";
import React, { useState } from "react";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import CalibLogo from "../../../public/calib-logo.png";
import { navElements } from "@/utils/data";

const navItems: MenuProps["items"] = [
	{ key: "1", label: "list of services" },
	{ key: "2", label: "company portfolio" },
	{ key: "3", label: "company data" },
	{ key: "4", label: "company resources" },
];

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<div className="d-flex flex-column width-100 bg-nav-black position-fixed top-0 z-index-1051">
			<div className="d-flex align-center">
				<div
					className="d-none max-md-d-block position-absolute right-20 top-20 cursor-pointer icon-24-white"
					onClick={() => setMobileNav(!mobileNav)}
				>
					{mobileNav ? <CloseOutlined /> : <MenuOutlined />}
				</div>
			</div>

			<div className="d-flex justify-space-between w-100 h-80 p-x-100 align-center max-md-d-none">
				<div className="d-flex align-center height-100">
					<div className="d-flex align-center w-140 h-40 p-r-20">
						<Image
							src={CalibLogo}
							className="d-block"
							width={110}
							alt="Calibraint"
						/>
					</div>
					<div className="d-flex align-strech m-l-36 height-100">
						{navElements.map((element) => (
							<Dropdown
								key={element.key}
								menu={{ items: [navItems[Number(element.key) - 1]] }}
								className="cursor-pointer"
							>
								<Space className="height-100 m-l-36">
									<span className="f-14-24-400-white">{element.label}</span>
									<DownOutlined
										className="f-14-24-400-white hover"
										color="white"
									/>
								</Space>
							</Dropdown>
						))}
					</div>
				</div>
				<div className="d-flex align-center gap-4">
					<div className="position-relative">
						<Button
							type="default"
							className="ant-btn-variant-outlined p-20 f-14-12-400-white"
						>
							Discuss with Experts
						</Button>
					</div>
					<Button type="primary" className="ant-btn-variant-solid f-14-12-600-white p-20">
						Contact Us
					</Button>
				</div>
			</div>

			{mobileNav && (
				<div className="d-flex flex-column gap-16 m-t-16 md-d-none">
					<div className="d-flex flex-column gap-16">
						{navElements.map((element) => (
							<Dropdown
								key={element.key}
								menu={{ items: [navItems[Number(element.key) - 1]] }}
								className="cursor-pointer"
							>
								<Space className="d-flex align-center gap-4">
									<span className="f-16-24-400-white">{element.label}</span>
									<DownOutlined className="icon-12-white hover" />
								</Space>
							</Dropdown>
						))}
					</div>
					<div className="d-flex flex-column gap-12">
						<Button type="text" className="ant-btn-variant-outlined ">
							Discuss with Experts
						</Button>
						<Button type="primary" className="ant-btn-variant-solid">
							Contact Us
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
