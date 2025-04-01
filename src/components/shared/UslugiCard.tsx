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
    <div className="bg-[#EAFBFE] rounded-xl p-6 mx-2 w-[95%] overflow-visible relative shadow-lg">
      <div className="relative flex flex-col space-y-4">
        <h2 className="text-[#099DBA] text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <ul className="list-disc list-inside text-gray-800 font-medium">
          {actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
      <div className="absolute top-[-30px] right-0 w-[100px] h-[100px] ">
        <Image
          src={imageSrc}
          alt={title}
          layout="intrinsic"
          width={100}
          height={100}
          className="overflow-visible"
        />
      </div>
      <div className="flex flex-col space-y-3 mt-6">
        <Button>Узнать цены</Button>
        <Button>Записаться</Button>
      </div>
    </div>
  )
}
