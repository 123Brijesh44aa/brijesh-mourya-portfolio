import React from 'react';
import Image from "next/image";

const ProfileCard = () => {
	return (
		<div
			className="flex flex-row justify-start sm:justify-center items-center gap-3 w-full">   { /* bg-amber-400 */}
			<div className="w-28 h-28 rounded-full overflow-hidden">
				<Image
					src="/images/brijesh-mourya.svg"
					alt="brijesh mourya"
					width={150}
					height={150}
					className="w-full object-cover rounded-full"
				/>
			</div>
			<div className="flex flex-col justify-center items-start">
				<h1 className="text-2xl font-bold text-gray-800">
					Brijesh Mourya
				</h1>
				<p className="text-gray-500">
					Software Developer
				</p>
			</div>
		</div>
	);
};

export default ProfileCard;
