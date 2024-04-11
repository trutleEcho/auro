import { useRef } from "react"
import { useEffect } from "react";
 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
export default function ScrollAnimation(){
    const sectionTrigger = useRef()
    const sectionref = useRef()

    useEffect(()=>{
        const pin = gsap.fromTo(sectionref.current,{translateX:0},{translateX:"-300vw",ease:'none',duration:10,scrollTrigger:{
            trigger: sectionTrigger.current,
            start: "top center",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
        }})
        return()=>{
            pin.kill()
        }
    })
    return(
        <>
        <div ref={sectionTrigger}>
            <div ref={sectionref}>
                <span>Aurolivin ur life</span>
            </div>
        </div>
        </>
    )
}