import React, {createContext, useState } from 'react'
import User from './components/User'
import UserClass from './components/UserClass'

export const sanjayContext = createContext({sname:"sanjay",age:20});
// import { userContext } from './utils/UserContext'
const About = () => {
  // const userName = useContext(userContext);
  // console.log("UserName : ",userName.loginName);

  


  const [flag,setFlag] = useState(false);
  return (
    <div>
        {/* <h2 style={{color:"red"}}>About us</h2>
        <h1> Naangathanda LEOs</h1> */}
        {/* <sanjayContext.Provider > */}
          <User name = {"kishore Babu"} role = {"Frontend Developer"} />
          <User name = {"Vigneshwaran"} role = {"BackEnd Developer"}/>
          <UserClass name={"Gowthaman"} role = {"BackEnd Developer"} />
        {/* </sanjayContext.Provider> */}
        {/* {flag?()} */}
        <p className={flag?'line-clamp-2':"text-black"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet corporis molestias obcaecati tempore fugit est fuga dolore? Sint ratione error maxime atque architecto illum distinctio earum repellendus corrupti quisquam. Hic exercitationem temporibus voluptate quo minus inventore iusto sed quidem. A totam reprehenderit libero, accusantium, recusandae minima fuga itaque eius inventore at similique cupiditate quam placeat pariatur esse in porro eligendi blanditiis quas neque. Ex saepe quam aut accusantium, modi corporis optio porro. Porro exercitationem eligendi cum aliquid molestiae facilis explicabo eius accusantium ullam, adipisci, maxime deserunt iure cupiditate tenetur! Eos dolore maxime ad nesciunt sed vitae vel, animi aperiam officiis!</p>
        {/* // <p className= >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat excepturi voluptates, asperiores, consequuntur nulla modi aspernatur debitis impedit architecto optio minima ipsum est odio nisi adipisci non maxime sit, id recusandae labore ratione facilis tempora possimus at. Ipsam incidunt laudantium pariatur quo quod perferendis doloremque laborum numquam! Quasi cum inventore perferendis voluptatum? At possimus molestias nulla nam officia. Vel nulla quasi officia, inventore incidunt aspernatur sint, dolor hic obcaecati aliquid impedit asperiores, modi doloremque ullam earum culpa numquam illum placeat perspiciatis aliquam saepe exercitationem esse non repellat. Ex veritatis nihil vitae distinctio unde quae, velit illo iste itaque amet deleniti?</p> */}
        <button onClick={()=>setFlag(!flag)} >Toggle Button</button>
    </div>
  )
}

export default About