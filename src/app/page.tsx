import Header from "@/components/header"
import {Footer} from "@/components/footer"
import {Services} from "@/components/Services"
import Main from "@/components/main"
import InfoCards from "@/components/InfoCards";
import Consultation from "@/components/consultation";

export default function Page() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header/>
            <Main/>
            <InfoCards/>
            <Consultation />
            <Services/>
            <Footer/>
        </div>
    )
}
