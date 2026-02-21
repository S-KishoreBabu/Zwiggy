import React from 'react'
import nonveg from '../assets/nonveg.png'
import star from '../assets/rating_star.png'
import { addItems } from '../utils/cardSlice'
import { useDispatch } from 'react-redux'
import Stepper from './Stepper'
const DishCard = ({dData}) => {
    const data = dData.card.info;
    const dispatch = useDispatch();
    const handleAddItem= (payLoad)=>{
      dispatch(addItems(payLoad));
    }
  return (
    <div className="flex p-2 h-55 w-full border-b border-[#b3b3b3]">
        <div className="dishDetail p-2 w-19/24 ">
            {(data.itemAttribute.vegClassifier=='NONVEG')?(<img src={nonveg} alt="nonveg"/>):(<></>)}
            <h2 className='font-bold text-[#414449]' >{data.name}</h2>

            {(!data.price)?<p>₹ {data.defaultPrice/100}</p>:<p>₹ {data.price/100}</p>}
            <div className="ratings flex justify-start items-center">
              <img src={star} alt="ratings_star"/>
              <p className='text-[#00912c] font-bold text-xs'>{data.ratings.aggregatedRating.rating}</p>
              <p className='text-[#505050] text-xs' >({data.ratings.aggregatedRating.ratingCountV2})</p>
            </div>
            
            <p className='text-sm line-clamp-2 text-[#505050]' >{data.description}</p>
        </div>
        <div className="dishImage  w-5/24 flex flex-col items-center">
            <img className='h-40 w-full rounded-2xl'  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_500,c_fit/${data.imageId}`} alt="" />
            {/* <button  className='relative w-30 h-11 0 bottom-4 px-5 font-bold text-[#1ba672] py-1 bg-white border-1 cursor-pointer border-[#ccc] rounded-md hover:bg-[#c7c7c7]'  onClick={()=>{handleAddItem(dData)}}>ADD</button> */}
            <Stepper/>
            <p className='text-[#505050] relative bottom-4 text-sm'>customisable</p>
        </div>
        
    </div>
  )
}

export default DishCard