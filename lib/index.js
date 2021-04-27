var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import DesktopApp from "./main-components/desktopApp.js";
import DiscordID from "./main-components/discordID.js";
import FilterBy from "./main-components/filterBy.js";
import LicenseKey from "./main-components/licenseKey.js";
import Notifications from "./main-components/notifications.js";
import MainTable from "./main-components/mainTable.js";
import Transfer from "./main-components/transfer.js";
import UserInfo from "./main-components/userInfo.js";
import Monitor from "./main-components/monitor.js";

import TransferScreen from "./transfer-components/transfer.js";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { transferScreen: "none" };
        _this.displayTransferScreen = _this.displayTransferScreen.bind(_this);
        _this.closeTransferScreen = _this.closeTransferScreen.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "closeTransferScreen",
        value: function closeTransferScreen() {
            this.setState({
                transferScreen: "none"
            });
        }
    }, {
        key: "displayTransferScreen",
        value: function displayTransferScreen() {
            this.setState({
                transferScreen: "inline-block"
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "app" },
                React.createElement(
                    "div",
                    { className: "row-1" },
                    React.createElement(Notifications, null),
                    React.createElement(UserInfo, null)
                ),
                React.createElement(
                    "div",
                    { className: "row-2" },
                    React.createElement(
                        "div",
                        { className: "col-main-table-monitor" },
                        React.createElement(
                            "div",
                            { className: "row-monitor" },
                            React.createElement(FilterBy, null),
                            React.createElement(Monitor, { target: "Checkouts", number: 72, logoPath: "./imgs/sign-checkout.png" }),
                            React.createElement(Monitor, { target: "Failures", number: 10, logoPath: "./imgs/sign-failure.png" })
                        ),
                        React.createElement(MainTable, null)
                    ),
                    React.createElement(
                        "div",
                        { className: "col-transter-lic-key" },
                        React.createElement(LicenseKey, null),
                        React.createElement(DiscordID, null),
                        React.createElement(Transfer, { displayTransferScreen: this.displayTransferScreen }),
                        React.createElement(DesktopApp, null)
                    )
                ),
                React.createElement(TransferScreen, { closeTransferScreen: this.closeTransferScreen, display: this.state.transferScreen })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));