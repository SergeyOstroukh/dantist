import React from 'react';
import ConsultationCard from "@/components/shared/ConsultationCard";
import con1 from "../images/consultat1.svg"
import con2 from "../images/consultat2.svg"
import con3 from "../images/consultat3.svg"
import {Button} from "@/components/shared/Button";

const Consultation = () => {
    return (
        <div className='flex flex-col items-center text-center gap-4 mb-6'>
            <div className='flex flex-col gap-4'>
                <span className='text-[20px] font-bold'>Бесплатная консультация врача</span>
                <span className='text-[16px] text-[#099DBA]'>На бесплатной консультации врач клиники проведет диагностику всех зубов:</span>
            </div>
            <div className='flex flex-col min-w-[300px] md:flex-row '>
                <ConsultationCard icon={con1} name='Полный осмотр и диагностика полости рта' description='При необходимости сделаем дополнительный снимок зубов, у нас в клинике'/>
                <ConsultationCard icon={con2} name='Составит 2-3 плана лечения на выбор' description='Вы сможете выбрать подходящий план лечения, исходя из бюджета'/>
                <ConsultationCard icon={con3} name='При необходимости проведем проф. гигиену' description='Чистка зубов в 4 этапа'/>
            </div>
            <div>
                <Button>Записаться</Button>
            </div>

        </div>
    );
};

export default Consultation;