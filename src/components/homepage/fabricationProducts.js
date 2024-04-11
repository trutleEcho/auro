import {Image} from "@nextui-org/react";
import {Card,CardHeader} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
export default function FabricationPrducts(){
    return(
        <>
        <Card className="bg-white my-20 mx-20">
            <CardHeader className="text-black text-4xl pl-20 pt-16">Fabrictaions</CardHeader>
            <Divider className="bg-black ml-20"/>
        <section className=" h-fit w-full p-10 grid gap-10 grid-cols-6 grid-rows-8">
            <div className="row-span-8 col-span-3">
                <button><Image radius="sm" src="./fabrication/staircaserailing.png"></Image></button>
            </div>
            <div className="row-span-3 col-span-1">
                <button><Image radius="sm" src="./fabrication/metalFacade.png"></Image></button>
            </div>
            <div className="row-span-3 col-span-1">
                <button><Image radius="sm" src="./fabrication/railing.png"></Image></button>
            </div>
            <div className="row-span-3 col-span-1">
                <button><Image radius="sm" src="./fabrication/roomPartition.png"></Image></button>
            </div>
            <div className="row-span-6 col-span-3">
                <button><Image radius="sm" src="./fabrication/metalCeiling.png"></Image></button>
            </div>   


        </section>
        </Card>
        </>
    )
}