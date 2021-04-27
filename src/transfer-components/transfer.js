
class TransferScreen extends React.Component {
    constructor(props){
        super(props) ;
        this.clickOnWindow = this.clickOnWindow.bind(this);  
    }
    render() {
        return (
            <div onClick={this.clickOnWindow} style={{display:this.props.display}} className = "transfer-screen">
                <div className = "transfer-window">
                    <h1>Transfer</h1>
                    <p>Transfer to </p>
                    <input/>
                </div>
            </div>
        );
    }
    clickOnWindow(event){
        if (event.target.closest('.transfer-window')) return;
        this.props.closeTransferScreen();
    }

}
        
export default TransferScreen