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
		<div className="navbar-container">
			<div className="navbar-header">
				<div className="navbar-toggle" onClick={() => setMobileNav(!mobileNav)}>
					{mobileNav ? <CloseOutlined /> : <MenuOutlined />}
				</div>
			</div>

			<div className="desktop-nav-container">
				<div className="navbar-left">
					<div className="navbar-logo">
						<Image src={CalibLogo} height={40} width={90} alt="Calibraint" />
					</div>
					<div className="navbar-links">
						{navElements.map((element) => (
							<Dropdown
								key={element.key}
								menu={{ items: [navItems[Number(element.key) - 1]] }}
								className="navbar-link"
							>
								<Space>
									<span className="navbar-link-label">{element.label}</span>
									<DownOutlined className="navbar-link-icon" />
								</Space>
							</Dropdown>
						))}
					</div>
				</div>
				<div className="navbar-actions">
					<Button type="text" className="ant-btn-variant-outlined">
						Discuss with Experts
					</Button>
					<Button type="primary" className="ant-btn-variant-solid">
						Contact Us
					</Button>
				</div>
			</div>

			{mobileNav && (
				<div className="mobile-nav-drawer">
					<div className="navbar-links-mobile">
						{navElements.map((element) => (
							<Dropdown
								key={element.key}
								menu={{ items: [navItems[Number(element.key) - 1]] }}
								className="navbar-link"
							>
								<Space>
									<span className="navbar-link-label">{element.label}</span>
									<DownOutlined className="navbar-link-icon" />
								</Space>
							</Dropdown>
						))}
					</div>
					<div className="navbar-actions-mobile">
						<Button type="text" className="ant-btn-variant-outlined">
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
