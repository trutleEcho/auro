import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import Link from "next/link";

export default function ProductPage({name,src,size,url}){
    
    return(<>
    <Link legacyBehavior href={`./products/${url}`} className="hover:text-white">
            <Card fullWidth isHoverable shadow="md" radius="lg" isPressable className="w-fit bg-gray-100 m-5 hover:scale-110 ">
                <CardHeader className="z-10 justify-center  hover:text-white">
                    <Image
                    removeWrapper
                    shadow="sm"
                    alt="Chair"
                    className="z-0"
                    src={src}
                    height={size}
                    width={size}
                />
                <a className="px-5 z-10 text-xl text-black hover:text-white">{name}</a>
                </CardHeader>
                
            </Card></Link>
    </>
    )
}