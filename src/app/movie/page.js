
import React from 'react'
import MovieCard from '../components/MovieCard';

const Movie = async () => {
    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '173ede1eecmsh8bc16cb721f9bf5p1cb637jsnc55167e60aff',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
   
    const res = await fetch(url,options);
    const data = await res.json();
    const main_data = data.titles;
   
    
  return (


    <>
   
    <div>
    
                    <div>
                    <h1 className='mt-10 mb-2 text-center capitalize text-4xl font-bold'>Updated Blogs</h1>
<hr className='w-1/5 mx-auto'/>
           <div className='grid grid-cols-3 lg:gap-3'>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard  key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                    </div>
         </div>
        
    </>
  )
}

export default Movie;