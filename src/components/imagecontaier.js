import {Image} from "@nextui-org/react";

export default function ImageLoader({props,size}){
    return(
        <>
        <Image
        isZoomed
        src={props.src}
        width={size}
        height={size}
        alt="product"
        style={{borderRadius:'5px'}}
        ></Image>
        </>
    )
}