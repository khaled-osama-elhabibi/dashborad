var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LicenseKey = function (_React$Component) {
    _inherits(LicenseKey, _React$Component);

    function LicenseKey() {
        _classCallCheck(this, LicenseKey);

        return _possibleConstructorReturn(this, (LicenseKey.__proto__ || Object.getPrototypeOf(LicenseKey)).apply(this, arguments));
    }

    _createClass(LicenseKey, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "license-key" },
                React.createElement(
                    "div",
                    { className: "license-key__statment" },
                    "License key"
                ),
                React.createElement(
                    "div",
                    { className: "license-key__number" },
                    React.createElement(
                        "div",
                        { className: "license-key__number_ac" },
                        "XXXX - XXXX - XXXX - XXXX"
                    ),
                    React.createElement(
                        "span",
                        { className: "material-icons license-key__number__icon" },
                        "visibility_off"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "license-key__btns" },
                    React.createElement(
                        "button",
                        { className: "license-key__btns__renew" },
                        React.createElement(
                            "span",
                            { className: "license-key__btns__renew__w1" },
                            "Renew Now"
                        ),
                        React.createElement(
                            "span",
                            { className: "license-key__btns__renew__w2" },
                            "Stripe"
                        )
                    ),
                    React.createElement(
                        "button",
                        { style: { color: "#EC4165" }, className: "btn-common" },
                        "Deactivate"
                    )
                ),
                React.createElement(
                    "p",
                    { className: "license-key__renewal" },
                    "Next Renewal \xA0",
                    React.createElement(
                        "span",
                        { className: "license-key__renewal__date" },
                        "on 22 Mar 2021"
                    )
                )
            );
        }
    }]);

    return LicenseKey;
}(React.Component);

export default LicenseKey;