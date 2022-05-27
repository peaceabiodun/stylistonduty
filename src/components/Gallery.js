const Gallery = () => {
    return ( 
        <div className='w-full py-16 px-4 bg-[#007479] '>
           <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '> 
               <div className='lg:col-span-2'>
               <h2 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2' >Pick a style</h2>
               </div>
                <div>
                    <div>
                        <input className='p-3 flex w-full rounded-md' placeholder='pick a style' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;