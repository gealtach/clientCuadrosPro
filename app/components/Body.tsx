import BodyVideo from "./BodyVideo";
import BtnFooter from "./BtnFooter";
import ImgBar from "./ImgBar";
import ImgBody from "./ImgBody";
import Reviews from "./Reviews";

export default function Body () {
    return(
        <main className="relative">
            <ImgBody />
            <ImgBar />
            <BodyVideo />
            <Reviews />
            {/* <div className="fixed bottom-0 left-0 w-full bg-slate-200 p-3">
                <BtnFooter />
            </div> */}
        </main>
    )
}