import React from 'react';
import InfoCard from "@/components/shared/InfoCard";
import Calendar from "../images/Calendar.svg"
import Human from "../images/Human.svg"
import Finger from "../images/Finger.svg"

const InfoCards = () => {
    return (
        <div className='flex flex-col items-center gap-4 md:flex-row md:justify-center xl:gap-8 mb-8'>
            <InfoCard name='Выходим на рынок в 2025 году' icon={Calendar} description='Новая, современная стоматология'/>
            <InfoCard name='Опытные врачи' icon={Human} description='Каждый специалист имеет высшую категорию с огромным опытом работы'/>
            <InfoCard name='Уникальный подход' icon={Finger} description='Применяем в своей работе современные технологии'/>
        </div>

    );
};

export default InfoCards;