import { FaTwitterSquare,
    FaInstagramSquare,
    FaWhatsappSquare,
} from "react-icons/fa"

const Footer = () => {
    return ( 
        <div className='bg-[#017378] mx-auto py-8 px-8 grid lg:grid-cols-3 gap-8 text-white'>
            <div>
                <h1 className='w-full text-2xl font-bold text-[#001414] '>Stylistonduty</h1>
                <p className='py-2'> Your prefered hair solution</p>
                <div className='flex gap-4 my-3 hover:cursor-pointer'>
                    <FaTwitterSquare size={30} /> 
                    <FaInstagramSquare size={30} />
                    <FaWhatsappSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h3 className='font-medium '>Hair styles</h3>
                    <ul>
                        <li className='py-2 text-sm'>colorful braids</li>
                        <li className='py-2 text-sm'>long box braids</li>
                        <li className='py-2 text-sm'>swirl braids</li>
                        <li className='py-2 text-sm'>Ghana braids</li>
                    </ul>
                </div>
            
                <div>
                    <h3 className='font-medium '>Hair styles</h3>
                    <ul>
                        <li className='py-2 text-sm'>cornrow braids</li>
                        <li className='py-2 text-sm'>jumbo braids</li>
                        <li className='py-2 text-sm'>Knotless braids</li>
                        <li className='py-2 text-sm'>Banto knots </li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-medium '>Hair styles</h3>
                    <ul>
                        <li className='py-2 text-sm'>locs</li>
                        <li className='py-2 text-sm'>passion twist</li>
                        <li className='py-2 text-sm'>short braids</li>
                        <li className='py-2 text-sm'>Hair dye</li>
                    </ul>
                </div>
            </div>
        </div>
     );
};



export default Footer;