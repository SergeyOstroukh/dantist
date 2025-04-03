import { UslugiCard } from "@/components/shared/UslugiCard"
import surgery from "../../public/surgery.svg"

export const Services = () => {
  const actionsList = ["тест", "тест", "тест", "тест"]

  return (
    <div>
      <UslugiCard
        title="Хирургия"
        description="тест"
        actions={actionsList}
        imageSrc={surgery}
      />
    </div>
  )
}
