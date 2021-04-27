var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransferScreen = function (_React$Component) {
    _inherits(TransferScreen, _React$Component);

    function TransferScreen(props) {
        _classCallCheck(this, TransferScreen);

        var _this = _possibleConstructorReturn(this, (TransferScreen.__proto__ || Object.getPrototypeOf(TransferScreen)).call(this, props));

        _this.clickOnWindow = _this.clickOnWindow.bind(_this);
        return _this;
    }

    _createClass(TransferScreen, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { onClick: this.clickOnWindow, style: { display: this.props.display }, className: "transfer-screen" },
                React.createElement(
                    "div",
                    { className: "transfer-window" },
                    React.createElement(
                        "h1",
                        null,
                        "Transfer"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Transfer to "
                    ),
                    React.createElement("input", null)
                )
            );
        }
    }, {
        key: "clickOnWindow",
        value: function clickOnWindow(event) {
            if (event.target.closest('.transfer-window')) return;
            this.props.closeTransferScreen();
        }
    }]);

    return TransferScreen;
}(React.Component);

export default TransferScreen;