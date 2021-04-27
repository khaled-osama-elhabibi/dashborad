class Monitor extends React.Component {
    render() {
        return (
            <div className = "monitor">
                <div className = "monitor__record">
                    <div className = "monitor__record__statment">Total {this.props.target}</div>
                    <div className = "monitor__record__number">
                        <span 
                            className = {
                                "monitor__record__number-assign "+
                                "monitor__record__number-assign--"+
                                this.props.target
                            }>
                            {this.props.number}
                        </span>
                        /82
                    </div>
                </div>
                <img className = "monitor__sign" src = {this.props.logoPath}></img>
            </div>
        );
    }
}

export default Monitor ;
//"monitor__record__number-assign monitor__record__number-assign--checkout"