class ConfirmationWindow extends React.Component{
    constructor(props){
        super(props) ; 
        this.closeClickHandler = this.closeClickHandler.bind(this) ;    
    }
    closeClickHandler(){
        this.props.changeWindowToTransfer() ;    
        this.props.closeTransferScreen() ;
    }
    render(){
        return(
            <div className = "confirmation-window">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.2" cx="32" cy="32" r="32" fill="#63F4F7"/>
                    <path d="M47.8779 33.7784L45.091 29.5981V24.0001C45.091 23.8252 45.0069 23.6273 44.877 23.4849L37.606 16.214C37.4796 16.0875 37.2954 16 37.0909 16H21.8182C20.2145 16 18.9091 17.3047 18.9091 18.9091V29.5981L16.1222 33.7784C16.0432 33.9022 16 34.0614 16 34.1819V45.091C16 46.6953 17.3054 48.0001 18.9091 48.0001H45.091C46.6947 48.0001 48.0001 46.6954 48.0001 45.091V34.1819C48 34.05 47.9526 33.8919 47.8779 33.7784ZM37.8182 18.483L42.608 23.2728H39.2727C38.4702 23.2728 37.8182 22.62 37.8182 21.8182V18.483ZM25.4546 24.7273H38.5455C38.9475 24.7273 39.2728 25.0526 39.2728 25.4546C39.2728 25.8566 38.9475 26.1819 38.5455 26.1819H25.4546C25.0526 26.1819 24.7273 25.8566 24.7273 25.4546C24.7273 25.0526 25.0526 24.7273 25.4546 24.7273ZM25.4546 27.6364H38.5455C38.9475 27.6364 39.2728 27.9617 39.2728 28.3637C39.2728 28.7657 38.9475 29.091 38.5455 29.091H25.4546C25.0526 29.091 24.7273 28.7657 24.7273 28.3637C24.7273 27.9616 25.0526 27.6364 25.4546 27.6364ZM25.4546 30.5454H32.7273C33.1293 30.5454 33.4546 30.8707 33.4546 31.2727C33.4546 31.6747 33.1293 32 32.7273 32H25.4546C25.0526 32 24.7273 31.6747 24.7273 31.2727C24.7273 30.8707 25.0526 30.5454 25.4546 30.5454ZM42.1818 33.4546C40.5781 33.4546 39.2727 34.7592 39.2727 36.3637C39.2727 37.1655 38.6207 37.8182 37.8182 37.8182H26.1818C25.3792 37.8182 24.7273 37.1655 24.7273 36.3637C24.7273 34.7592 23.4219 33.4546 21.8182 33.4546H18.0862L19.1743 31.8224C19.3007 31.9286 19.4581 32 19.6363 32H21.8182C23.973 32 25.8309 33.6079 26.1378 35.74C26.1903 36.098 26.4957 36.3636 26.858 36.3636H37.142C37.5043 36.3636 37.8097 36.098 37.8622 35.74C38.1691 33.6079 40.027 32 42.1818 32H44.3637C44.542 32 44.6993 31.9286 44.8257 31.8224L45.9138 33.4546H42.1818Z" fill="#63F4F7"/>
                </svg>
                <p className="confirmation-window__statment-1">Confirmation Email Sent</p>
                <p className="confirmation-window__statment-2">
                    We sent a link to <span className="confirmation-window__statment-2__e-mail">anthony2142@email.com </span> 
                    and <span className="confirmation-window__statment-2__e-mail">jamesconor@email.com</span> . Check the email to confirm the transfer.
                </p>
                <p className="confirmation-window__statment-3">Didn’t get a confirmation email?</p>
                <div className="confirmation-window__statment-4">
                    Check your spam or 
                    <span
                        className = "confirmation-window__statment-4__send-again" 
                        onClick = {this.props.changeWindowToTransfer}>
                        Send Again
                    </span>
                </div>
                <span onClick={this.closeClickHandler} className="material-icons confirmation-window__close">close</span>
            </div>
        )
    }
}
class TransferWindow extends React.Component{
    render(){
        return(
            <div className = "transfer-window">
                <div className = "transfer-window__main">
                    <h1  className = "transfer-window__main__h1">Transfer</h1>
                    <p  className = "transfer-window__main__p">Transfer to </p>
                    <input placeholder="Enter the email address" className = "transfer-window__main__input"/>
                </div>
                <div  className = "transfer-window__btns">
                    <button 
                        onClick={this.props.closeTransferScreen} 
                        className = "transfer-window__btns__cancel btn-common btn-common--color-white">
                        Cancel
                    </button>
                    <button  
                        onClick = {this.props.changeWindowToConfirmation}
                        className = "btn-common btn-common--color-white btn-common--bgcolor-blue">
                        Send
                    </button>
                </div>
            </div>
        )
    }
}

class TransferScreen extends React.Component {
    constructor(props){
        super(props) ;
        this.state = { window : "transfer" }
        this.clickOnWindow = this.clickOnWindow.bind(this);  
        this.changeWindowToTransfer = this.changeWindowToTransfer.bind(this);
        this.changeWindowToConfirmation = this.changeWindowToConfirmation.bind(this);
    }
    changeWindowToTransfer(){this.setState({window:"transfer"})}
    changeWindowToConfirmation(){this.setState({window:"confirmation"})}

    render() {
        return (
            <div onClick={this.clickOnWindow} style={{display:this.props.display}} className = "transfer-screen">
                {(
                    this.state.window === "transfer" ? 
                    <TransferWindow 
                        changeWindowToConfirmation = {this.changeWindowToConfirmation} 
                        closeTransferScreen = {this.props.closeTransferScreen}
                    />
                    :
                    <ConfirmationWindow
                        changeWindowToTransfer = {this.changeWindowToTransfer}
                        closeTransferScreen = {this.props.closeTransferScreen}
                    />
                )}
            </div>
        );
    }
    clickOnWindow(event){
        if (event.target.closest('.transfer-window') ||event.target.closest('.confirmation-window')) return;
        this.changeWindowToTransfer();
        this.props.closeTransferScreen();
    }

}
        
export default TransferScreen