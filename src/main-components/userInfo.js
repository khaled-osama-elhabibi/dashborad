class UserInfo extends React.Component {
    render() {
        return (
        <div className = "user-info" >
            <img className = "user-info__img" src = "./imgs/user-img.png"></img>
            <div className = "user-info__main-info">
                <div className = "user-info__main-info__name">Anthony Mike</div>
                <div className = "user-info__main-info__email">anthony2142@email.com</div>
            </div>
            <span className="material-icons user-info__expand-more">expand_more</span>
        </div>
        );
    }
}

export default UserInfo ;