import Banner  from './Banner';  
import SearchBar from './SearchBar';
import CardWrapper from './CardWrapper'
import {useState} from 'react'
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {

    let [searchVal,setSearchVal] = useState("");
    
    return (
        <>
            <Banner />
            <div className="searchPanel ">
                <SearchBar setSearchVal = {setSearchVal} />
            </div>
            <div className="cartContainer">
                <div className="containerHeader py-2.5 px-37.5 ">
                    <h2 className='font-bold text-2xl'>Top restaurants in கோவை </h2>
                </div>
                <CardWrapper searchVal = {searchVal} />
            </div>
        </>
    );
}

export default Body