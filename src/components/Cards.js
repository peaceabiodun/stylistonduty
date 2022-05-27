const Cards = () => {
    return ( 
        <div className='w-full py-[2rem] px-2 bg-white grid md:grid-cols-3 gap-2'>
            <div className='max-w-[1240px] mx-auto '>
                <div className='w-full bg-white shadow-xl flex flex-col p-4 my-4'>
                    <img className=' w-80 mx-auto rounded-lg hover:scale-105 duration-75 shadow-lg ' src={require ("../pictures/image0.jpg")} alt='/' />
                    <p className='font-bold text-center py-3 text-[#008181] ' >Tribal braids</p>
                    <p className='text-[#008181] text-center' >$100</p>
                </div>

            </div>
            <div className='max-w-[1240px] mx-auto '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4'>
                    <img className='w-80 bg-white  mx-auto rounded-lg hover:scale-105 duration-75 shadow-lg ' src={require ("../pictures/image2.jpg")} alt='/' />
                    <p className='font-bold text-center py-3 text-[#008181] ' >Knotless braids</p>
                    <p className='text-[#008181] text-center' >$150</p>
                </div>

            </div>
            <div className='max-w-[1240px] mx-auto '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4'>
                    <img className='w-80 bg-white  mx-auto rounded-lg hover:scale-105 duration-75 shadow-lg ' src={require ("../pictures/image3.jpg")} alt='/' />
                    <p className='font-bold text-center py-3 text-[#008181] ' >passion Twist</p>
                    <p className='text-[#008181] text-center' >$90</p>
                </div>

            </div>
            <div className='max-w-[1240px] mx-auto '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4'>
                    <img className='w-80 bg-white  mx-auto rounded-lg hover:scale-105 duration-75 shadow-lg ' src={require ("../pictures/image4.jpg")} alt='/' />
                    <p className='font-bold text-center py-3 text-[#008181] ' >curly braids</p>
                    <p className='text-[#008181] text-center' >$150</p>
                </div>

            </div>
            <div className='max-w-[1240px] mx-auto '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4'>
                    <img className='w-80 bg-white  mx-auto rounded-lg hover:scale-105 duration-75 shadow-lg ' src={require ("../pictures/image5.jpg")} alt='/' />
                    <p className='font-bold text-center py-3 text-[#008181] ' >knotless braids</p>
                    <p className='text-[#008181] text-center' >$150</p>
                </div>

            </div>
            <div className='max-w-[1240px] mx-auto '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4'>
                    <img className='w-80 bg-white  mx-auto rounded-lg hover:scale-105 duration-75 shadow-lg ' src={require ("../pictures/image1.jpg")} alt='/' />
                    <p className='font-bold text-center py-3 text-[#008181] ' >knots</p>
                    <p className='text-[#008181] text-center' >$50</p>
                </div>

            </div>
        </div>
     );
}
 
export default Cards;