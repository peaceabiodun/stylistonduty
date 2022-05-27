import Typed from "react-typed";

const HomePage = () => {
    return ( 
        <div>
            <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col '>
                <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6'>Stylist On Duty</h1>
                <p className='text-[#008181] p-2 font-bold'> Mobile stylist </p>
                <div className='flex flex-col'>
                    <p className='md:text-3xl sm:text-2xl text-2xl sm: px-6 font-bold'> Get your hair done at the comfort of your home </p>
                    <Typed className=' font-bold text-[#008181]' 
                    strings={['Book an appointment today']} 
                    typeSpeed={100}
                    backSpeed={120} 
                    loop />
                    <button className='bg-[#006464] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Book here</button>
                </div>
            </div>

        </div>
     );
}
export default HomePage;