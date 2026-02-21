import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import RestaurantBanner from "./RestaurantBanner";
import ShimmerRestaurant from "./ShimmerRestaurant";

const RestaurantMenu = () => {

    const resId = useParams().id;
    const restaurantDetail = useRestaurantMenu(resId);
    let ansObj = restaurantDetail?.data?.cards[2]?.card?.card?.info;
    if(!ansObj){
        return <ShimmerRestaurant/>
    }
    const itemsCards = restaurantDetail.data.cards[5].groupedCard.cardGroupMap.REGULAR;
    const categories = itemsCards.cards.filter((c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className=" bg-white w-full " >
            <div className="mx-auto categoriesWrapper bg-[#ddd] w-200 ">  
                <RestaurantBanner bannderDetail = {ansObj}/>
                {categories.map((data)=> <RestaurantCategories key={data?.card?.card?.categoryId} data={data?.card?.card}/>)}
            </div>
        </div>
    )
}

export default RestaurantMenu