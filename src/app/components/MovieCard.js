import Link from 'next/link';
import React from 'react'

function MovieCard(currElem) {
    const{id,type,title,synopsis} = currElem.jawSummary;
  return (
    <>


    
 <div className=' md:w-full flex justify-center  mt-8' >
 <div className='rounded overflow-hidden  max-w-sm'>
 <img className='pl-70' src="https://picsum.photos/200" width="200" height="300"/>

 <div className='grid-cols-3 lg:gap-3 justify-items-center mt-20'>
<div className='px-3 py-2 lg:h-14'>
<span className='tracking-widest text-xs tittle-font font-bold text-grey-400 mb-1'>
<h2>{title.substring(0,18)}</h2>
</span>
</div>
                   <div className='tittle-font text-lg font-medium mb-2'> 
                   <a href='#' className='no-underline text-grey-900'>
                   <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                   </a>
                   </div>
                   <div className='px-6 pt-4 pb-2'>
                   <span className='inline-block bg-purple-700 text-white px-4 py-2 text-sm font-semibold mr-2 mb-3 
                   cursor-pointer tracking-widest rounded-full hover:bg-purple-600'>
                   <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>

                   </span>
                   
                   </div>
                   </div>
                   </div>
                   
                   
</div>
                   
                   
                   
                

    </>
  )
}

export default MovieCard;