import React from 'react';
import Image from "next/image";
import Contact from "../../images/ContactsBlock.svg"

const ContactBlock = () => {
    return (
        <div className='flex flex-col justify-center h-auto items-center relative md:w-[340px]  md:h-[300px]'>
            <div className='flex min-w-[300px]'>
                <Image src={Contact} alt="icon" height={400} width={320}/>
            </div>
            <div className='absolute flex flex-col md:absolute top-6 md:top-1 md:left-10 text-white md:gap-2 p-2'>
                <span className='text-[20px] md:text-[26px]'>Контакты</span>
                <span className='text-[18px] md:text-[20px]'>г. Минск, ул. Нововиленская, <br/>д. 45</span>
                <span className='text-[18px] md:text-[16px]'>c 9.00 до 21.00</span>
                <a className="cursor-pointer text-[18px] md:text-[20px] mt-4" href="tel:+375445433196">
                    +375 (44) 5433196
                </a>
                <a className="cursor-pointer text-[18px] md:text-[20px]" href="tel:+375445433196">
                    +375 (29) 1758364
                </a>
            </div>

        </div>
    );
};

export default ContactBlock;