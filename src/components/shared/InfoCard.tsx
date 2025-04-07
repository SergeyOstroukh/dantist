import React from 'react';
import Image from "next/image";

type InfoCardsPropsType = {
    size?: string
    icon?:any
    name?:string
    description?:string
}
const InfoCard = ({size, icon, name, description}:InfoCardsPropsType) => {
    return (
        <div className={`flex flex-col items-center gap-4 min-h-[300px] min-w-[230px] w-[280px] xl:min-h-[220px] xl:min-w-[410px] justify-center p-6 bg-[#f3fefe] rounded-2xl shadow-lg ${size === 'large' ? 'w-72' : 'w-48'} -mt-3 mb-6`}>
            <Image src={icon} alt="icon" height={40} width={40} />
            <div className="text-[18px] xl:text-[24px] text-center text-[#099DBA]">{name}</div>
            <p className="text-[16px] xl:text-[18px] text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default InfoCard;