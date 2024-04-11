import Nav from "@/components/navbar"
import Footer from "@/components/homepage/footer"
import ProductDisplay from "@/components/productDisplay"

import {  PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function dinning_tables(){
    const data = await prisma.product.findMany(
        {
            where:{
                catagoryId:3
            },
            include:{
                catagory:true
            }
        }
    )
    console.log(data)
    return(
        <>
        <Nav></Nav>
            <section className="mx-36 my-20 flex flex-row flex-wrap border justify-center"> 
                
                {data.map((item)=>(
                            <div className=" flex justify-center py-5" key={item.id}>
                                <ProductDisplay props={item.image}  name={item.ProductName} desc={item.ProductDescription} size={300}/>
                            </div>
                    ))
                }
            </section>
        <Footer></Footer>
        </>
    )
}