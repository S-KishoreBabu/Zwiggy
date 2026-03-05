import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }


    render(){
        const {name,role} = this.props;
        return(
            <div className="user-card">
                <h2>{name}</h2>
                {/* <h4>{role}</h4>
                <p>Location : Coimbatore, Contact : 9843620XXX </p>
                <button onClick={()=>{
                    this.setState(
                        {
                            count:this.state.count+1
                        }
                    )
                }} >click Me </button>
                <p>{this.state.count}</p> */}
            </div>
        )
    }
}
export default UserClass;