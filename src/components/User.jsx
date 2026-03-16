
const User = ({name,role}) => {

    return (
            <div className="user-card">
                <h2>{name}</h2>
                <h4>{role}</h4>
                <p>Location : Coimbatore, Contact : 9843620XXX </p>
            </div>
    );
}

export default User;