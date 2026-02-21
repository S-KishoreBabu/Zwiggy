import React from 'react'
import ratingImg from '../assets/rating_star.png';

const RestaurantBanner = ({ bannderDetail }) => {


    const { name, cuisines, avgRatingString, costForTwoMessage, totalRatingsString,labels} = bannderDetail;
    return (
        <div className='bg-white w-full p-4'>
            <div className=" text-2xl font-bold py-2 m-3">
                <h2>{name}</h2>
            </div>
            <div className="description bg-linear-to-t from-[#ddd] to-white w-full h-50 rounded-4xl p-4">
                <div className="border border-[#ddd] w-full h-full bg-white rounded-2xl p-4">
                    <div className="raitingPricefor2 w-full h-max font-bold flex flex-start gap-1 items-center">
                        <div className="ratingImg h-max">
                            <img className='h-8' src={ratingImg} alt="ratingImg" />
                        </div>
                        <p>{avgRatingString}</p>
                        <p>({totalRatingsString})</p>
                        <p >{costForTwoMessage}</p>
                    </div>
                    <div className="cuisines text-[#ff7b00] font-bold underline  ">
                        <p>{cuisines}</p>
                    </div>
                    <div className="locality flex gap-1">
                        <p className='font-bold'>Outlet : </p>
                        <p className='text-[#6e6e6e]'>{labels[1].message}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RestaurantBanner