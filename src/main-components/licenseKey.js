class LicenseKey extends React.Component {
    render() {
        return (
           <div className = "license-key">
                <div className = "license-key__statment">License key</div>
                <div className = "license-key__number">
                    <div className = "license-key__number_ac">XXXX - XXXX - XXXX - XXXX</div>
                    <span className="material-icons license-key__number__icon">visibility_off</span>
                </div>
                <div className = "license-key__btns">
                    <button className = "license-key__btns__renew">
                        <span className = "license-key__btns__renew__w1">Renew Now</span>
                        <span className = "license-key__btns__renew__w2">Stripe</span>
                    </button>
                    <button className = "btn-common btn-common--color-red">
                        Deactivate
                    </button>
                </div>
                <p className = "license-key__renewal">
                    Next Renewal &nbsp; 
                    <span className = "license-key__renewal__date">on 22 Mar 2021</span> 
                </p>
            
            </div>   
        );
    }
}

export default LicenseKey ;