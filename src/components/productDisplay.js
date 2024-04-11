import ImageLoader from '@/components/imagecontaier';
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
export default function ProductDisplay({props,size,desc,name}) {
    return(
        <button className='hover:scale-110 duration-500'>
            <Card className='w-4/5 p-5 mx-10 bg-gray-100'>
            <CardBody>
                <ImageLoader props={props} size={size}/>
                <Divider className='mt-3 bg-slate-700'/>
                <div className="flex flex-col items-center justify-center pt-3">
                    <span className='text-small font-light text-black'>{name}{desc}</span>
                </div>
            </CardBody>
            <CardFooter>

            </CardFooter>
        </Card>
        </button>
    )
}   