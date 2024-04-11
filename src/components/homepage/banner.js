import {Image} from "@nextui-org/react";
export default function Banner({index,size}){
    const uri = [
        "./Banner0.png",
        "./banner2.png"
    ]
    return(
        <>
        <div className=" w-full flex justify-center items-center "> 
        <div className="w-5/6 h-2/5 py-20">
            <Image src={uri[index]} loading="lazy" shadow="md"></Image>
        </div>
        </div>
        </>
    )
}