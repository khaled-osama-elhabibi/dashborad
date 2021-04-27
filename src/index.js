import DesktopApp from "./main-components/desktopApp.js" ;
import DiscordID from "./main-components/discordID.js" ;
import FilterBy from "./main-components/filterBy.js" ;
import LicenseKey from "./main-components/licenseKey.js" ;
import Notifications from "./main-components/notifications.js" ;
import MainTable from "./main-components/mainTable.js" ;
import Transfer from "./main-components/transfer.js" ;
import UserInfo from "./main-components/userInfo.js" ;
import Monitor from "./main-components/monitor.js";

import TransferScreen from "./transfer-components/transfer.js";
class App extends React.Component {
    render() {
        return (
        <div className = "app">
            <div className = "row-1">
                <Notifications/>
                <UserInfo/>
            </div>
            <div className = "row-2">
                <div className = "col-main-table-monitor">
                    <div className = "row-monitor">
                        <FilterBy/>
                        <Monitor target = "Checkouts" number = {72} logoPath = "./imgs/sign-checkout.png"/>                           
                        <Monitor target = "Failures" number = {10} logoPath = "./imgs/sign-failure.png"/>                           
                    </div>
                    <MainTable/>
                </div>
                <div className = "col-transter-lic-key">
                    <LicenseKey/>
                    <DiscordID/>
                    <Transfer/>
                    <DesktopApp/>
                </div>
            </div>
            <TransferScreen/>
        </div>
        );
    }
}


ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);