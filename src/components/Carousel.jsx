import React from 'react';

export const Carousel = ({children, image, page}) => {
  return (
    <div>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src={image} alt='banner1' className="w-full" />
            </div> 
        </div> 
        {/* <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">{page}</a> 
        </div> */}
    </div>
  )
}
