// import React from 'react';

import {  useEffect, useState } from "react";
import PageLocation from "../../components/PageLocation";
import SingleNews from "../../components/SingleNews";

const News = () => {

  const [news, setNews] = useState([]);
  console.log(news)

  useEffect(()=>{
    fetch("http://localhost:3000/news")
    .then(res => res.json())
    .then(data =>setNews(data))
  }, [])

    return (
        <>
          <PageLocation preb='/' next='/news'></PageLocation>
          <div className="container mx-auto px-3">
             <h1 className="news">News</h1>
             <div className="flex justify-between flex-wrap">
              {
                news.map((item)=>{
                  return(
                    <div key={item.id} className="w-full md:w-[48%] lg:w-[32%] border border-lime-600 rounded-md mb-6 p-5">
                      <SingleNews item={item}></SingleNews>
                    </div>
                  )
                })
              }
             </div>
          </div>
        </>
    );
};

export default News;