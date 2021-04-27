var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transfer = function (_React$Component) {
    _inherits(Transfer, _React$Component);

    function Transfer() {
        _classCallCheck(this, Transfer);

        return _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).apply(this, arguments));
    }

    _createClass(Transfer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "transfer" },
                React.createElement(
                    "div",
                    { className: "transfer__statment" },
                    React.createElement(
                        "svg",
                        { className: "transfer__statment__SVG", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM15.8393 6.8868L13.1122 4.15976C12.8993 3.94675 12.5539 3.94675 12.3409 4.15976C12.1279 4.37276 12.1279 4.71806 12.3409 4.93107L14.1369 6.72709H4.54542C4.2442 6.72709 4 6.97129 4 7.27251C4 7.57372 4.2442 7.81792 4.54542 7.81792H14.1369L12.3409 9.61392C12.1279 9.82692 12.1279 10.1722 12.3409 10.3852C12.4474 10.4917 12.587 10.545 12.7266 10.545C12.8662 10.545 13.0058 10.4917 13.1122 10.3852L15.8393 7.65814C16.0523 7.44513 16.0523 7.09981 15.8393 6.8868ZM5.8631 12.1817H15.4546C15.7558 12.1817 16 12.4259 16 12.7271C16 13.0283 15.7558 13.2725 15.4546 13.2725H5.86307L7.65904 15.0685C7.87205 15.2815 7.87205 15.6268 7.65904 15.8398C7.5526 15.9463 7.41299 15.9996 7.27341 15.9996C7.13383 15.9996 6.99427 15.9463 6.88773 15.8398L4.16068 13.1127C3.94767 12.8997 3.94767 12.5544 4.16068 12.3414L6.88775 9.61438C7.10076 9.40137 7.44611 9.40137 7.65907 9.61438C7.87207 9.82738 7.87207 10.1727 7.65907 10.3857L5.8631 12.1817Z", fill: "#01A9F4" })
                    ),
                    "Transfer"
                ),
                React.createElement(
                    "div",
                    { className: "transfer__info" },
                    React.createElement(
                        "div",
                        { className: "transfer__info__email" },
                        React.createElement(
                            "p",
                            { className: "transfer__info__email__statment" },
                            "Current Email"
                        ),
                        React.createElement(
                            "p",
                            { className: "transfer__info__email__actual" },
                            "anthony2142@email.com"
                        )
                    ),
                    React.createElement(
                        "button",
                        { style: { color: "#1EC1C3" }, className: "transfer__btn btn-common" },
                        React.createElement(
                            "p",
                            { className: "transfer__btn__txt" },
                            " Transfer To "
                        ),
                        React.createElement(
                            "span",
                            { className: "material-icons" },
                            "chevron_right"
                        )
                    )
                )
            );
        }
    }]);

    return Transfer;
}(React.Component);

export default Transfer;