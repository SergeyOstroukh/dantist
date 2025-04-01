import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}
export const Button = ({ children }: Props) => {
  return (
    <button
      type="button"
      className="border border-[#099DBA] text-[#099DBA] rounded-full py-2 px-4 transition duration-300 ease-in-out hover:bg-[#099DBA] hover:text-white active:scale-95 active:bg-[#077A8A]"
    >
      {children}
    </button>
  )
}
