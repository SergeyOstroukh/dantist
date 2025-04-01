import { UslugiCard } from "@/components/shared/UslugiCard"
import surgery from "../../public/surgery.svg"

export const Services = () => {
  const actionsList = ["sfdsdf", "sfdsdf", "sfdsdf", "sfdsdf"]

  return (
    <div>
      <UslugiCard
        title="Хирургия"
        description="jhsfgdbalkasd bfkjsfklsdklfsdkjfs dflksdbfsd safdasdfsdfg sd sdf gsd"
        actions={actionsList}
        imageSrc={surgery}
      />
    </div>
  )
}
