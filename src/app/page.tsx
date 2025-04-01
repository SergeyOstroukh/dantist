import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { Services } from "@/components/Services"
import Main from "@/components/main"

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <Main />
      <Services />
      <Footer />
    </div>
  )
}
