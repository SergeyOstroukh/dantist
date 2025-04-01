import Header from "@/components/header";
import {Footer} from "@/components/footer";

export default function Page() {
    return (
        <div className='flex flex-col justify-between w-full h-screen'>
            <Header/>
            <Footer/>
        </div>
)
    ;
}
