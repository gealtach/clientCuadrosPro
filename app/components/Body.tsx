import BodyVideo from "./BodyVideo";
import BtnFooter from "./BtnFooter";
import Footer from "./Footer";
import ImgBar from "./ImgBar";
import ImgBody from "./ImgBody";
import Reviews from "./Reviews";

export default function Body () {
    return(
        <main className="relative">
            <div className="md:flex">
            <ImgBody />
            <ImgBar />
            </div>
            <BodyVideo />
            <Reviews />
            <div className="fixed bottom-0 left-0 w-full bg-slate-200 p-3">
                <BtnFooter />
            </div>
            <Footer />
        </main>
    )
}