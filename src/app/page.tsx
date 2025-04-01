import Header from "@/components/header"
import {Footer} from "@/components/footer"
import Main from "@/components/main";

export default function Page() {
    return (
        <div className="flex flex-col md:justify-between w-full h-screen">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
