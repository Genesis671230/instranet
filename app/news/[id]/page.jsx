"use client"
import React, { useEffect, useState } from 'react'
import { ENDPOINTS } from "../../../lib/utils"

const page = ({params}) => {
    const [news, setNews] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(news,params);
   const fetchAllEvents = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(
        `https://api.ens.sch.ae:8443/${ENDPOINTS.GET_ALL_NEWS}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            APIKEY: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      let result = await response.json();
      console.log(result,"this is resulrt")
      if (result.statusCode === 200) {
        let newsArray = result.data;
        newsArray = newsArray.map((item, index) => {
          item["id"] = index + 1;
          return item;
        });
        const matched = newsArray.find((_,index)=>index === Number(params.id))
        console.log(matched);
        setNews(matched);
        // dispatch(_setNews(newsArray));
        setIsLoading(false);
      } else if (result.statusCode !== 200) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchAllEvents()
  },[])


  
  return (
    <div>
          
       <div className=" mb-12 lg:mb-0 flex justify-center items-center h-screen">

            <div className="relative mb-6 overflow-hidden flex-1 rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">

              <img src={news.image} className="w-full  h-[500px] object-cover" />
              <a href="#!">
                <div
                  className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
              </a>
            </div>
            <div className='relative flex-1 px-10'>

            <h5 className="mb-4 text-lg font-bold">{news.subject}</h5>
            <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              News
            </div>
            <div className=' scrollable-container p-2 max-h-[28rem] overflow-y-scroll ' dangerouslySetInnerHTML={{__html:news.body}}></div>
            </div>
            {/* <p className="text-neutral-500 dark:text-neutral-300">
    
</p> */}
          </div>
    </div>
  )
}

export default page