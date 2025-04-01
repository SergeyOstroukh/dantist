"use client"
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import banner360 from "../images/banner360.svg"
import mainBanner from "../images/MainBaner.svg"
import {Button} from "@/components/shared/Button";

const Main = () => {
        const [isMdScreen, setIsMdScreen] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                setIsMdScreen(window.innerWidth >= 768); // 768px — это значение для md в Tailwind CSS
            };

            handleResize(); // Установим начальное значение
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);
    return (
        <div className='flex justify-end w-full min-w-[300px]'>
            <div className='relative'>
                <Image
                    src={isMdScreen ? mainBanner : banner360}
                    alt='banner'
                    width={isMdScreen ? 768 : 320}
                    height={isMdScreen ? 440 : 440}
                />
            </div>
            <div className='flex flex-col absolute p-4 gap-5 items-start left-0 md:justify-start'>
                <div className='font-bold text-xl max-w-[400px]'>Лечение и протезирование зубов по Европейским стандартам</div>
                <div className='text-xl text-[#099DBA] max-w-[400px]'>Предоставим 2-3 плана качественного лечения под ваш бюджет</div>
                <div className='font-light max-w-[400px]'>Запишитесь на <span className='text-[#099DBA]'>бесплатную</span> первичную консультацию - диагностику зубов</div>
                <div className='w-full flex justify-center items-center'>
                    <Button>Записаться</Button>
                </div>
            </div>
        </div>
    );
};

export default Main;