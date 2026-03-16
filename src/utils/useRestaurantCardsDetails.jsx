import { useEffect, useState } from "react";



const useRestaurantCardsDetails = (url)=>{
    const [restaurantCardsDetails,setRestaurantCardsDetails] = useState([]);
    useEffect(()=>{
    const getRestaurantCardsDetails = async (url)=>{
        try{
           const res = await fetch(url);
           const resObj = await res.json();
            setRestaurantCardsDetails(resObj);
        }
        catch(err){
            console.log(err);
        }
    }
        getRestaurantCardsDetails(url);
    },[url])

    return restaurantCardsDetails;
}

export default useRestaurantCardsDetails;