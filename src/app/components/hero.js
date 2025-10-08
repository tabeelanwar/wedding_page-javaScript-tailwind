import Image from "next/image";
import Weddingcouple from "../../../public/wedding_couple.jpg"
import Navbar from "./navbar"

export default function hero () {
    return(
        <div>
           <div className="heroimg items-center flex justify-center">
           <div className="text-center text-[#fff]">
            <h1 className="mb-4 text-6xl">Jane & John</h1>
           <h2 className="mb-2 text-3xl">Are getting married</h2>
           <h2 className="text-3xl font-bold">17.07.2017</h2>
           </div>
           </div>
        </div>
    );
}
