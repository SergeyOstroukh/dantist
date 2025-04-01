import Image from "next/image";
import Burger from "@/images/Burger.svg";
import React from "react";
import Tooth from "@/images/Tooth.svg";

export const Footer = () => {
    return (
        <div
            className='bg-[#EAFBFE] hidden md:flex w-full md:min-h-[150px] p-4 xl:justify-evenly'>
            <div className='flex flex-1 xl:flex-none items-center'>
                <div
                    className='flex flex-col lg:flex text-white items-center justify-end pb-2 text-xs h-[60px] w-[60px] bg-gradient-to-b from-[#38E0DE] to-[#0699B8] rounded-full'>
                    <Image className='pt-4' src={Tooth} alt='Tooth' height={16} width={16}/>
                    <span className=''>Dantist</span>
                    <span className='mt-[-6px] '>Clinic</span>
                </div>
                <div className='ml-4'>
                    <span className='block text-[#099DBA] text-lg font-semibold'>Стоматологическая</span>
                    <span className='block text-[#099DBA] text-lg font-semibold'>клиника</span>
                </div>
            </div>
            <div className='hidden xl:flex items-center space-x-6 text-[#099DBA] text-lg font-medium'>
                <a href='#'>Главная</a>
                <a href='#'>Акции</a>
                <a href='#'>Услуги</a>
                <a href='#'>Врачи</a>
                <a href='#'>Отзывы</a>
                <a href='#'>Лицензии</a>
                <a href='#'>О клинике</a>
                <a href='#'>Контакты</a>
            </div>
            <div className='flex items-center xl:hidden'>
                <div className='mt-7'>
                    <Image src={Burger} alt='burger' height={80} width={80}/>
                </div>
            </div>
        </div>
    );
};