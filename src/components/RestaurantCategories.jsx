import ItemList from "./ItemList";
import downarrow from '../assets/down_arrow.png'
import uparrow from '../assets/up_arrow.png'
import { useState } from "react";
const RestaurantCategories = ({data}) =>{

    const [showItems,setShowItems] = useState(true);

    const handleShowItems = ()=>{
        if(!showItems){
            setShowItems(true);
        }
        else{
            setShowItems(false);
        }
    }

    return (
        <div className="category bg-white mb-2 ">
            <div className="flex justify-between  p-2 cursor-pointer" onClick={()=>{handleShowItems();}} >
                <span className="font-bold text-lg ">{data.title} ({data.itemCards.length})</span>
                {/* <img src={(showItems)?uparrow:downarrow} alt="down_Arrow"/> */}
                {(showItems)?(<img src={downarrow} alt="down_Arrow"/>):(<img src={uparrow} alt="up_Arrow"/>)}
            </div>
            {(showItems)?<ItemList data={data.itemCards} />:<></>}
              
        </div>

    );
}

export default RestaurantCategories;