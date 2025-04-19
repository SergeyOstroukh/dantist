'use client'

import React, {useEffect, useRef, useState} from 'react';

const BurgerComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current
                &&
                !(event.target as HTMLElement).closest('.burger-icon')
            )  {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="flex flex-none items-center pr-2">
            <div
                className="burger-icon flex relative justify-center flex-col items-center gap-1 p-2.5 bg-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-100"
                onClick={toggleMenu}
            >
                <div className="w-8 h-1 bg-[#099DBA] rounded-full transition-all duration-300"></div>
                <div className="w-8 h-1 bg-[#099DBA] rounded-full transition-all duration-300"></div>
                <div className="w-6 h-1 bg-[#099DBA] rounded-full transition-all duration-300"></div>
            </div>
            {isOpen && (
                <div ref={menuRef}  className="absolute text-[#099DBA] w-30 top-20 right-2 bg-white rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Услуги</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Врачи</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Контакты</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerComponent;