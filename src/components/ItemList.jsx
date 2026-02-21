import DishCard from "./DishCard";

const ItemList = ({data}) => {

    return (
        <div className="itemList h-max">
            {data.map((dishData)=> <DishCard  key={dishData.card.info.id} dData = {dishData}/>)}
        </div>
    )
}

export default ItemList;