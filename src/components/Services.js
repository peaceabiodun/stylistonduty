

const Services = () => {
    return ( 
        <div className= 'w-full bg-[#FFFFFF] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-col-2  '> 
                <img className='w-[700px]  mx-auto my-4 rounded-md shadow-xl' src={require ("../pictures/image1.jpg")} alt='/'  />
                <div className='flex flex-col justify-center'>
                    <h2 className='text-[#008181] text-center font-bold md:text-3xl sm:text-2xl text-2xl'> WE OFFER VARIOUS SERVICES</h2>
                    <ul className='text-center'>
                        <li className='font-bold'>Knotless braids</li> 
                        <li className='font-bold'>Feed in Braids </li>
                        <li className='font-bold'>Locs</li>
                        <li className='font-bold'>wigs</li>
                    </ul>
                </div>
            </div>

        </div>
     );
}
 
export default Services;