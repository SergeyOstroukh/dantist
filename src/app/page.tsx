import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/Services"

export default function Page() {
  return (
    <div className="flex flex-col md:justify-between w-full h-screen">
      <Header />
      <Services />
      <Footer />
    </div>
  )
}
