import React from "react";
import { SlSocialFacebook,SlSocialGoogle,SlSocialInstagram,SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import { FaCcVisa,FaCcAmazonPay,FaCcApplePay,FaCcMastercard,FaCcPaypal } from "react-icons/fa";
export default function Footer(){
    return(<>
    <section className="bg-black h-72 flex w-full">
        <div className="h-full w-2/5 flex flex-col text-center ">
            <span className="w-full text-3xl py-6">Follow us</span>
            <div className=" flex justify-evenly">
            <SlSocialFacebook size={30}/>
            <SlSocialGoogle size={30}/>
            <SlSocialInstagram size={30}/>
            <SlSocialLinkedin size={30}/>
            <SlSocialTwitter size={30}/>
            </div>
        </div>
        <div className="h-full w-2/5 flex flex-col text-center ">
            <span className="w-full text-3xl py-6">Contacts us</span>
            <div>
                
            </div>
        </div>
        <div className="h-full w-2/5 flex flex-col text-center ">
            <span className="w-full text-3xl py-6">We accept</span>
            <div className="mx-36 flex gap-5">
            <FaCcAmazonPay size={50}/>
            <FaCcApplePay size={50}/>
            <FaCcVisa size={50}/>
            <FaCcMastercard size={50}/>
            <FaCcPaypal size={50}/>   
            </div>
        </div>

    </section>
    </>)
}