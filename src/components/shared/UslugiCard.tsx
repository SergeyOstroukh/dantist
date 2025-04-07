import Image from "next/image"
import React from "react"
import { Button } from "@/components/shared/Button"

interface Props {
  imageSrc: string
  title: string
  description: string
  actions: string[]
}

export const UslugiCard = ({
  imageSrc,
  title,
  description,
  actions,
}: Props) => {
  return (
    <div className="flex flex-col justify-between bg-[#EAFBFE] xl:h-[500px] rounded-xl p-6 mx-2 w-[95%] overflow-visible relative shadow-lg xl:w-[80%] xl:max-w-[500px]">
      <div className=''>
          <div className="relative flex flex-col space-y-4">
              <h2 className="text-[#099DBA] text-xl font-bold">{title}</h2>
              <p className="text-gray-600 md:max-w-[70%] max-w-[300px] xl:max-w-[250px]">{description}</p>
              <ul className="list-disc list-inside text-gray-800 font-medium">
                  {actions.map((action, index) => (
                      <li key={index}>{action}</li>
                  ))}
              </ul>
          </div>
          <div className="absolute md:top-[10px] md:right-[10px] top-[-30px] right-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] ">
              <Image
                  src={imageSrc}
                  alt={title}
                  layout="intrinsic"
                  width={200}
                  height={200}
                  className="overflow-visible"
              />
          </div>
      </div>
      <div className="flex flex-col items-center  justify-center md:flex-row gap-4 mt-6">
        <Button >Узнать цены</Button>
        <Button>Записаться</Button>
      </div>
    </div>
  )
}
