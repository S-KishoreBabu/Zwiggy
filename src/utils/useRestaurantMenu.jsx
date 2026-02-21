import { useState, useEffect } from 'react';


function useRestaurantMenu(resId){
    const [restaurantDetail,setRestaurantDetail] = useState({});
    const getRestaurantDetail = async () => {
        const res = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.1242738057084&lng=77.31280166655779&restaurantId="+resId);
        
        const resObj = await res.json();
        setRestaurantDetail(resObj);
    }
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getRestaurantDetail();
    },[])
    return restaurantDetail;
}




export default useRestaurantMenu;