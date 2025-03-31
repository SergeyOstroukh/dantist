import React from 'react';
import Image from 'next/image'
import Logo from '../images/Logo.svg';
import Geo from '../images/Geo.svg';
import Clock from '../images/Clock.svg';
import Telegram from '../images/Telegram.svg';
import WhatsApp from '../images/WhatsApp.svg';



const Header = () => {
    return (
        <div className='flex justify-around items-center'>
           <Image src={Logo} alt='Logo' width={100} height={100}/>
            <span className='text-danger-500'>Стоматологическая клиника</span>
            <div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <Image src={Geo} alt='Logo' width={20} height={20}/>
                        <span className='textCol={#099DBA}'>Адрес</span>
                    </div>
                    <span>Минск, ул. Нововиленская, 45</span>
                </div>
            </div>
            <div>
                <div>
                    <div className='flex'>
                        <Image src={Clock} alt='Logo' width={20} height={20}/>
                        <span>Время работы</span>
                    </div>
                    <span>Работаем без выходных с 9:00 до 21:00</span>
                </div>
            </div>
            <div className='flex'>
                <Image src={Telegram} alt='Logo' width={20} height={20}/>
                <Image src={WhatsApp} alt='Logo' width={20} height={20}/>
                <div className='flex flex-col'>
                    <span>+375445433196</span>
                    <span>+375445433196</span>
                </div>
            </div>
        </div>
    );
};

export default Header;