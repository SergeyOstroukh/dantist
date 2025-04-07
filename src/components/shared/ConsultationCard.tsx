import React from 'react';
import Image from "next/image";


type ConsultationCardPropsType = {
    size?: string
    icon?:any
    name?:string
    description?:string
}
const ConsultationCard = ({icon,name,description}:ConsultationCardPropsType) => {
    return (
        <div className={`flex flex-col min-w-[250px] max-w-[300px]  items-center gap-4 rounded-2xl`}>
            <Image src={icon} alt="icon" height={200} width={230} />
            <div className="text-[18px] font-bold text-center">{name}</div>
            <p className="text-[18px] font-light text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default ConsultationCard;