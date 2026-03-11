import { useContext } from "react";
// import {  sanjayContext } from "../About";

const User = ({name,role}) => {
    // const [userInfo,setUserInfo] = useState({
    //     name : "Dummy"
    // });
    // useEffect(()=> {
    //     getData();
    // },[])
    // const getData = async () => {
    //     const data  = await fetch("https://api.github.com/users/S-KishoreBabu");
    //     let obj = await data.json();
    //     setUserInfo(obj);
    // }

    return (
            <div className="user-card">
                <h2>{name}</h2>
                <h4>{role}</h4>
                {/* <p>{sname}</p> */}
                <p>Location : Coimbatore, Contact : 9843620XXX </p>
            </div>
    );
}

export default User;