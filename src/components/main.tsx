import React from 'react';
import Image from "next/image";
import banner360 from "../images/banner360.svg"

const Main = () => {
    return (
        <div className='flex justify-end w-full min-w-[300px]'>
            <div className='relative'>
                <Image className='' src={banner360} alt='MainBaner' width={320} height={440}/>
            </div>
            <div className='flex flex-col absolute p-4 gap-4'>
                <div className='font-bold text-xl'>Лечение и протезирование зубов по Европейским стандартам</div>
                <div className='text-xl text-[#099DBA]'>Предоставим 2-3 плана качественного лечения под ваш бюджет</div>
                <div className='font-light'>Запишитесь на <span className='text-[#099DBA]'>бесплатную</span> первичную консультацию - диагностику зубов</div>
            </div>
        </div>
    );
};

export default Main;