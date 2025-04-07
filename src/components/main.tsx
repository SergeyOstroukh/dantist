"use client"
import React from "react"
import { Button } from "@/components/shared/Button"

const Main = () => {
  return (
    <div className="flex justify-end w-full min-w-[300px] ">
      <div className="flex flex-col sm:bg-cover bg-right xl:p-10 p-4 gap-5 xl:gap-60 w-full bg-[url('../images/banner360.svg')] lg:min-h-[374px] xl:min-h-[700px] sm:bg-[url('../images/MainBaner.svg')] sm:bg-repeat sm:w-full bg-no-repeat items-start left-0 md:justify-start">
        <div className='flex flex-col gap-4 xl:gap-15'>
          <div className="font-bold text-xl max-w-[400px] md:text-[32px] md:max-w-[600px] xl:text-[56px] xl:max-w-[900px]">
            Лечение и протезирование зубов по Европейским стандартам
          </div>
          <div className="text-xl text-[#099DBA] max-w-[400px] md:text-[24px] md:max-w-[500px] xl:max-w-[700px] xl:text-[28px]">
            Предоставим 2-3 плана качественного лечения под ваш бюджет
          </div>
          <div className="font-light max-w-[400px] md:text-[24px] md:max-w-[500px] xl:max-w-[700px]">
            Запишитесь на <span className="text-[#099DBA]">бесплатную</span>{" "}
            первичную консультацию - диагностику зубов
          </div>
        </div>
        <div className="w-full flex justify-center items-center xl:justify-start xl:absolute xl:pt-135">
          <Button>Записаться</Button>
        </div>
      </div>
    </div>
  )
}

export default Main
