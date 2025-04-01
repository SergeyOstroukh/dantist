"use client"
import React from "react"
import { Button } from "@/components/shared/Button"

const Main = () => {
  return (
    <div className="flex justify-end w-full min-w-[300px]">
      <div className="flex flex-col sm:bg-cover bg-right p-4 gap-5 w-full bg-[url('../images/banner360.svg')] sm:bg-[url('../images/MainBaner.svg')] sm:bg-repeat sm:w-full bg-no-repeat items-start left-0 md:justify-start">
        <div>
          <div className="font-bold text-xl max-w-[400px]">
            Лечение и протезирование зубов по Европейским стандартам
          </div>
          <div className="text-xl text-[#099DBA] max-w-[400px]">
            Предоставим 2-3 плана качественного лечения под ваш бюджет
          </div>
          <div className="font-light max-w-[400px]">
            Запишитесь на <span className="text-[#099DBA]">бесплатную</span>{" "}
            первичную консультацию - диагностику зубов
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button>Записаться</Button>
        </div>
      </div>
    </div>
  )
}

export default Main
