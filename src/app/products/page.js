"use client"
import {Image} from "@nextui-org/react";
import ProductDisplay from "@/components/productDisplay";
import Nav from "@/components/navbar";
import Footer from "@/components/homepage/footer";
import ProductPage from "@/components/products/productPage";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { useEffect } from "react";


export default  function Main(){
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    
    useGSAP(()=>{
        gsap.fromTo(ref1.current,{x:"-100vh"},{x:0,duration:2,ease:'circ'})
        gsap.fromTo(ref2.current,{y:"-100vh"},{y:0,duration:2,ease:'expo'})
        gsap.fromTo(ref3.current,{x:"-100vh"},{x:0,duration:2,ease:'circ'})
        gsap.fromTo(ref4.current,{y:"100vh"},{y:0,duration:2,ease:'expo'})
        gsap.fromTo(ref5.current,{x:"100vh"},{x:0,duration:2,ease:'circ'})
    })
    return(
        <>
        <Nav/>
            <section className="my-20 mx-36">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                    <div ref={ref1}>
                        <ProductPage  name={"Chairs"} src={"./Chairs/Chairs/Alain Richard.jpg"} size={300} url={"chairs"}/>
                    </div>
                    <div ref={ref3}>
                        <ProductPage name={"Wall shelfs"} src={"./wall selves/wall selves/_Elevate Your Home_ Trendy Wall Decor Styles Unveiled!_wall decor kitchen wall decor.jpg"} size={450} url={"wall_shelfs"}/>
                    </div>
                    </div>
                    <div className="flex flex-row">
                        <div ref={ref2}>
                            <ProductPage name={"Coffee table"} src={"./coffee tables/coffee tables/wooden table lamp kitchen table dining room table wooden table upcycle coffee table style dii coffee.jpg"} size={175} url={"coffee_tables"}/>
                        </div>
                        <div ref={ref4}>
                            <ProductPage name={"Dinning tables"} src={"./planters/Planters/13 Products That Look Expensive But Are Actually Affordable AF.jpg"} size={175} url={"dinning_tables"}/>
                        </div>
                        <div ref={ref5}>
                            <ProductPage name={"Side tables"} src={"./side tables/side tables/White Modern Round Side Table with Stone Top End Table.jpg"} size={175} url={"side_tables"}/>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}