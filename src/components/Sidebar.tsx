import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { bottomMenuItems, menuItems } from '../data/menu-items';
import OpenPayLogo from '../assets/openpay.svg';

export default function Sidebar() {
	// const [isActive, setIsActive] = useState(true);
	const activeLink =
		'flex pl-8 pr-12 gap-3 py-2 items-center bg-openpay-light-blue border-l border-openpay-blue text-openpay-blue';
	const normalLink =
		'flex pl-8 pr-12 gap-3 py-2 items-center hover:bg-openpay-light-blue border-l hover:border-openpay-blue text-openpay-gray hover:text-openpay-blue';
	return (
		<div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto border-r'>
			<div className=' pl-8 pr-12 flex mt-4 '>
				<Link to={'/'} className='gap-3 flex items-center text-xl'>
					<img className='w-8' src={OpenPayLogo} alt='Openpay Logo' />
					<span>OpenPay</span>
				</Link>
			</div>
			<div className='text-lg flex flex-col mt-10'>
				{menuItems.map((item) => (
					<NavLink
						to={item.path}
						key={item.itemName}
						className={({ isActive }) => (isActive ? activeLink : normalLink)}
					>
						<item.icon /> <span>{item.itemName}</span>
					</NavLink>
				))}
			</div>
			<div className='text-lg flex flex-col mt-[400px]'>
				{bottomMenuItems.map((item) => (
					<NavLink
						to={item.path}
						key={item.itemName}
						className={({ isActive }) => (isActive ? activeLink : normalLink)}
					>
						<item.icon /> <span>{item.itemName}</span>
					</NavLink>
				))}
			</div>
		</div>
	);
}