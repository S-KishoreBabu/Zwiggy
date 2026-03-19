import { useState, useEffect } from 'react';
import Card,{PromotedCard} from './Card';
import CardWrapperShimmer from './CardWrapperShimmer';
import { data, Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useQuery } from '@tanstack/react-query';

  const getData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.023448&lng=76.9794276&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    return jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  }


function CardWrapper({ searchVal }) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = PromotedCard(Card);


  const {data:posts, isLoading, error, isFetching} = useQuery({
    queryKey:['posts'],
    queryFn:getData
  });

  useEffect(() => {
    if (posts) {
      setAllProducts(posts);
      setProducts(posts);
    }
  }, [posts]);

  useEffect(() => {
    if (searchVal) {
      let filtered = allProducts.filter((data) =>
        data.info.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      setProducts(filtered);
    } else {
      // reset to full list when search is empty
      setProducts(allProducts);
    }
  }, [searchVal, allProducts]);

  if(!onlineStatus) return (<h2>You are Offline {error.message}</h2>)
  if(isLoading) return  (<CardWrapperShimmer />)
  return (
      <div className="cardWrapper flex flex-wrap justify-center gap-7 px-5 py-10 ">
        {products.map((obj) => (
          <Link key={obj.info.id} to={"/restaurant/"+obj.info.id} >
            {(Number(obj.info.id) > 500000)?(<RestaurantCardPromoted obj={obj} />):(<Card  obj={obj}/>)}
            
          </Link>
          
        ))}
      </div>
  );
}

export default CardWrapper;
