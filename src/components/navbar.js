import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import Link from "next/link";
import { League_Spartan } from "next/font/google";
const roboto_mono = League_Spartan({
    subsets: ['latin'],
    display: 'optional',
  })
export default function Nav(){
    return(
        <>
        <Navbar shouldHideOnScroll className="bg-white border-solid border border-black flex flex-col py-4">
            <NavbarBrand className="w-300vh">
                <span className="text-black md:text-4xl font-extrabold w-full flex">aurolivin<span className="text-gray-600"><Link href={"../"} className="hover:text-gray-400">home.</Link></span></span>
            </NavbarBrand>
            <NavbarContent className="flex flex-row-reverse w-full text-black">
                <NavbarItem><Link href="./products" legacyBehavior><a className="hover:text-gray-600 text-lg ">Products</a></Link></NavbarItem>
                <NavbarItem><Link href='#' legacyBehavior><a className="hover:text-gray-600 text-lg ">About</a></Link></NavbarItem>
                <NavbarItem><Link href='#' legacyBehavior><a className="hover:text-gray-600 text-lg ">Contact</a></Link></NavbarItem>
                <NavbarItem><Link href='#' legacyBehavior><a className="hover:text-gray-600 text-lg ">Services</a></Link></NavbarItem>
            </NavbarContent>
        </Navbar>
        </>
    )
}