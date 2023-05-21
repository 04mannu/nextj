 import React from 'react';


 

    const Page = async ({params}) => {
       
        const id = params.id;
    
        const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };
    
        const res = await fetch(url, options);
        const data = await res.json();
        const main_data = data[0].details;

        
        
   return (
    


     <>


<div className=' md:w-full flex justify-center  mt-8' >
<div className='rounded'>
<img className='pl-70 justify-center' src="https://picsum.photos/200" width="400" height="500"/>
<div className='px-3 py-2 lg:h-14'>
<span className='tracking-widest text-xs tittle-font font-bold text-grey-400 mb-5'>
<h1>{main_data.title}</h1>
</span>

<div className='tittle-font text-lg font-bold mb-5'> 
                   <a href='#' className='no-underline text-grey-1000'>
                  
                   <p>{main_data.synopsis}</p>
                   </a>
                   </div>
</div>
</div>
                       
                       </div>
                       <div className='flex w-full min-h-screen justify-center items-center'>
                       <div className='bg-white rounded-xl shadow-lg p-5'>
                        <form action='' className='flex flex-col space-y-4'>
                        <label htmlFor="username" className='text-sm'>
                    Enter your name
                    <input type="text" name="username" 
                        placeholder="Enter your name" className='ring-1 ring-grey-300 w-full rounded-md px-4 py-2 outline-none'
                      required
                    />
                </label>
                <label htmlFor="Comment className='text-sm">
                    Comment
                    <textarea  name="Comment" rows={5}
                           placeholder="Type your comment" className='ring-1 ring-grey-300 w-full rounded-md px-4 py-2 outline-none'
                        required
                               
                    />
                </label>
                <button>submit</button>
                        </form>
                       </div>
                       </div>
                    
                    
                    
     </>
   )
 }
 
 export default Page;