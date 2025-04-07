import {UslugiCard} from "@/components/shared/UslugiCard"
import instr1 from "../images/instrument1.svg"
import instr2 from "../images/instrument2.svg"
import instr3 from "../images/instrument3.svg"
import instr4 from "../images/instrument4.svg"

export const Services = () => {
    const actionSurgeryList = ['Удаление зубов любой сложности']
    const actionTherapyList = ['Кариозных и некариозных поражений', 'Пульпитов и периодонтитов', 'Художественная реставрация зубов']
    const actionOrthopedicsList = ['Коронки и мосты керамические', 'Коронки и мосты циркониевые', 'Съёмное протезирование (протезы, бюгеля, мягкие протезы)', 'Установка виниров']
    const actionImplantationList = ['Установка имплантов OSSTEM implant', 'Наращивание кости (все виды аугментации) OSSTEM implant', 'Имлантация зубов по системе ALL ON4 - ALL ON6'
    ]

    return (
        <div className='flex flex-col items-center gap-10 xl:flex-wrap xl:flex-row xl:justify-center xl:max-w-[1200px] xl:mx-auto'>
            <UslugiCard
                title="Хирургия"
                description="Удаление зуба является одной из самых распространенных операций в стоматологической практике."
                actions={actionSurgeryList}
                imageSrc={instr1}
            />
            <UslugiCard
                title="Терапия"
                description="Лечение напрямую зависит от стадии заболевания. Мы подбираем наиболее эффективные методы диагностики и терапии."
                actions={actionTherapyList}
                imageSrc={instr2}
            />
            <UslugiCard
                title="Ортопедия"
                description="Помогает решить проблемы, связанные с аномалиями, приобретенными дефектами, повреждениями и деформациями органов жевательно-речевого аппарата."
                actions={actionOrthopedicsList}
                imageSrc={instr3}
            />
            <UslugiCard
                title="Имплантация"
                description="Это операция по установке в челюстную ткань специального стоматологического штифта, который будет играть роль корня."
                actions={actionImplantationList}
                imageSrc={instr4}
            />
        </div>
    )
}
