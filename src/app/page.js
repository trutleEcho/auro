'use client'
import Nav from '@/components/navbar';
import Banner from '@/components/homepage/banner'; 
import ProductDisplay from '@/components/productDisplay';
import Footer from '@/components/homepage/footer';
import FabricationPrducts from '@/components/homepage/fabricationProducts';

import {Divider} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import { useEffect } from "react";
 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);
export default function Page() {
  const sectionTrigger = useRef()
  const sectionref = useRef()
  const productTrigger = useRef()
  const productref = useRef()
    useEffect(()=>{
        const pin = gsap.timeline()
        pin.fromTo(sectionref.current,{translateX:"-300vh"},{translateX:'0',ease:'',duration:20,scrollTrigger:{
            trigger: sectionTrigger.current,
            start: "top center",
            end: "430 center",
            scrub: 0.2,
            markers:true
        }})
        return()=>{
            pin.kill()
        }
    })
  return (
    <div>
      <Nav></Nav>

      <Banner index={0} size={'w-4/6 '} className='flex justify-center items-center'/>
      <div ref={sectionTrigger} className='w-full h-full p-0 mt-0'>
            <div ref={sectionref} className='w-full h-full p-0'>
                <div ref={productTrigger}>
                  <Banner index={1} size={'w-5/6'}/>
                </div>
            </div>
      </div>
      <section className='h-max'>
        <div className=' flex flex-row mx-15 my-115 flex-nowrap h-96'>
          <ProductDisplay className='w-2/6' props={{src:'./banner.png'}} size={300} desc='now this is a product' />
          <ProductDisplay className='w-2/6' props={{src:'./banner.png'}} size={300} desc='now this is a product' />
          <div className='w-2/6  text-black mx-10'>
            <span className='text-3xl font-bold'>Our popular products</span>
            <Divider className='bg-black mt-5'/>
          </div>
        </div>
      </section>
      
      <FabricationPrducts/>

      <section className='flex flex-col justify-center items-center text-black mx-20 mb-20'>
        <div><span className='w-full text-5xl'>Trending Products</span></div>
        <Divider className='bg-black mt-5 w-72'/>
        <div className=' flex flex-row justify-evenly mt- h-72'>
        <ProductDisplay className='w-2/6' props={{src:'./banner.png'}} size={200} desc='now this is a product' />
        <ProductDisplay className='w-2/6' props={{src:'./banner.png'}} size={200} desc='now this is a product' />
        <ProductDisplay className='w-2/6' props={{src:'./banner.png'}} size={200} desc='now this is a product' />
        <ProductDisplay className='w-2/6' props={{src:'./banner.png'}} size={200} desc='now this is a product' />
        </div>
      </section>
      
      <div className=" w-full flex justify-center items-center "> 
        <div className="w-6/6 h-2/5 py-20">
          <Image src='./banner3.png' radius='sm' shadow='sm'></Image>
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}