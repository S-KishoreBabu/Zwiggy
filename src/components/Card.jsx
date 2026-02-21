let Card = ({obj})=>{
  let productObj = obj.info;
  let name = productObj.name;
  let rating = productObj.avgRating;
  let description = productObj.cuisines;
  let timing = productObj.sla.deliveryTime;
  let price = productObj.costForTwo;
  let imgId = productObj.cloudinaryImageId;
  return (
    <div className="card w-60 h-70 bg-white shadow-[0_0_8px_-5px_rgba(0,0,0)] rounded-2xl overflow-hidden transition-shadow duration-[250ms] ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-[0_14px_28px_rgba(255,0,0,0.12)]">
      <img className="w-full h-42.5 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_500,c_fit/${imgId}`} alt="Cards" />
      <div className="details p-4">
        <h1 className="text-[1.05rem] mb-1.2 text-[#222] font-150" >{name}</h1>
        <p className="text-[0.85rem] text-[#777] mb-2.5">{description}</p>
        <div className="info flex justify-between items-center text-[0.85rem] mt-2.5">
          <div className="rating text-amber-500"> <p>⭐ {rating}</p>
          </div>
          <div className="foodtiming text-[#555] font-bold"><p>{timing} mins</p></div>
          <div className="price font-[600px] text-[#ff6b00]">{price}</div>
        </div>
      </div>
    </div>
  );
}

export const PromotedCard = (Card)=>{
  return (props)=>{
    return (
      <div>
        <label className="label z-2 text-xs top-2 left-2 absolute bg-[#000000a1] text-white p-1 rounded-2xl">Promoted</label>
        <Card {...props}/>
      </div>
    );
  }
}

export default Card