"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Tooth from "../images/Tooth.svg"
import Geo from "../images/Geo.svg"
import Clock from "../images/Clock.svg"
import Telegram from "../images/Telegram.svg"
import WhatsApp from "../images/WhatsApp.svg"
import BurgerComponent from "@/components/shared/burgerComponent"

const Header = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Открываем модалку при загрузке компонента
    setShowModal(true)
  }, [])

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="flex bg-[#F3FEFE] min-w-[300px]">
        <div className="flex flex-1 p-4 justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex flex-col lg:flex text-white items-center justify-end pb-2 text-xs h-[60px] w-[60px] bg-gradient-to-b from-[#38E0DE] to-[#0699B8] rounded-full">
              <Image
                className="pt-4"
                src={Tooth}
                alt="Tooth"
                height={16}
                width={16}
              />
              <span className="">Dantist</span>
              <span className="mt-[-6px] ">Clinic</span>
            </div>
            <div className='flex flex-col'>
              <h1 className="flex font-bold text-lg/5 text-[#099DBA] md:text-[20px] md:pl-4 md:font-bold lg:text-[16px]">
                Cтоматологическая <br /> клиника <br />
              </h1>
              <h2 className='text-[#099DBA] md:pl-4'>Dantist Clinic</h2>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-start">
            <div className="flex">
              <Image src={Geo} alt="geo" height={22} width={20} />
              <span className="text-2xl text-[#099DBA] ml-2 lg:text-[18px]">Адрес</span>
            </div>
            <div>
              <span className='lg:text-[16px]'>г. Минск, ул. Нововиленская <br />д.45 </span>
            </div>
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="flex">
              <Image src={Clock} alt="Clock" height={22} width={20} />
              <span className="text-2xl text-[#099DBA] ml-2 lg:text-[18px]">Время работы</span>
            </div>
            <div>
              <span className="font-light lg:text-[16px]">
                Работаем без выходных <br />с 9:00 до 21:00
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="hidden md:flex md:flex-col-reverse lg:flex-row md: gap-2 ">
              <Image src={WhatsApp} alt="WhatsApp" height={22} width={20} />
              <Image src={Telegram} alt="Telegram" height={22} width={20} />
            </div>
            <div className="flex-col font-bold text-nowrap hidden lg:flex md:ml-4">
              <a className="cursor-pointer" href="tel:+375291515599">
                +375 (29) 1515599
              </a>
            </div>
          </div>
        </div>
        <BurgerComponent />
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <h2 className="text-2xl font-bold text-[#099DBA] mb-4">
              Внимание!
            </h2>
            <p className="text-gray-700 mb-4">
              Сайт находится в режиме разработки.
            </p>
            <p className="text-gray-700 mb-6">
              Для записи наберите по номеру{" "}
              <a 
                href="tel:+375291515599" 
                className="text-[#099DBA] font-bold hover:underline"
              >
                +375 (29) 1515599
              </a>
            </p>
            <button
              type="button"
              onClick={handleCloseModal}
              className="w-full bg-[#099DBA] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#0699B8] transition-colors"
            >
              ОК
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
