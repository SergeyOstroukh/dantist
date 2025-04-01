import React from 'react';
import Image from 'next/image'
import Tooth from '../images/Tooth.svg';
import Burger from '../images/Burger.svg';
import Geo from '../images/Geo.svg';
import Clock from '../images/Clock.svg';
import Telegram from '../images/Telegram.svg';
import WhatsApp from '../images/WhatsApp.svg';




const Header = () => {
    return (
        <div className='flex bg-[#F3FEFE] p-4 justify-between min-w-[300px] items-center'>
            <div className='flex flex-col'>
                <div className='flex flex-col lg:flex text-white items-center justify-end pb-2 text-xs h-[60px] w-[60px] bg-gradient-to-b from-[#38E0DE] to-[#0699B8] rounded-full'>
                    <Image className='pt-4' src={Tooth} alt='Tooth' height={16} width={16} />
                    <span className=''>Dantist</span>
                    <span className='mt-[-6px] '>Clinic</span>
                </div>
                <span className='flex flex-wrap text-lg/5 text-[#099DBA]'>Cтоматологическая клиника</span>
            </div>
            <div className='hidden md:flex flex-col items-start'>
                <div className='flex'>
                    <Image src={Geo} alt='geo' height={22} width={20} />
                    <span className='text-2xl text-[#099DBA] ml-2'>Адрес</span>
                </div>
                <div>
                    <span className='font-bold'>г. Минск, ул. Нововиленская д. 45</span>
                </div>
            </div>
            <div className='hidden lg:flex flex-col'>
                <div className='flex'>
                    <Image src={Clock} alt='Clock' height={22} width={20} />
                    <span className='text-2xl text-[#099DBA] ml-2'>Время работы</span>
                </div>
                <div>
                    <span className='font-light'>Работаем без выходных с 9:00 до 21:00</span>
                </div>

            </div>
            <div className='flex'>
                <div className='w-full'>
                        <Image src={WhatsApp} alt='WhatsApp' height={22} width={20} />
                        <Image src={Telegram} alt='Telegram' height={22} width={20} />
                </div>
                <div className='hidden lg:flex'>
                    <a className='cursor-pointer' href="tel:+375445433196">+375 (44) 5433196</a>
                    <a className='cursor-pointer' href="tel:+375291758364">+375 (44) 5433196</a>
                </div>
            </div>
            <div className='flex items-center'>
                <Image src={Burger} alt='burger' height={60} width={60} />
            </div>

        </div>
    );
};

export default Header;