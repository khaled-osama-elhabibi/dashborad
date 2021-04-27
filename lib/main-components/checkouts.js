var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Monitor = function (_React$Component) {
    _inherits(Monitor, _React$Component);

    function Monitor() {
        _classCallCheck(this, Monitor);

        return _possibleConstructorReturn(this, (Monitor.__proto__ || Object.getPrototypeOf(Monitor)).apply(this, arguments));
    }

    _createClass(Monitor, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "monitor__container" },
                React.createElement(
                    "div",
                    { className: "monitor" },
                    React.createElement(
                        "div",
                        { className: "monitor__record" },
                        React.createElement(
                            "div",
                            { className: "monitor__record__statment" },
                            "Total Checkouts"
                        ),
                        React.createElement(
                            "div",
                            { className: "monitor__record__number" },
                            React.createElement(
                                "span",
                                { className: "monitor__record__number--checkout" },
                                "72"
                            ),
                            "/82"
                        )
                    ),
                    React.createElement("img", { className: "monitor__sign", src: "./imgs/sign-checkout.png" })
                )
            );
        }
    }]);

    return Monitor;
}(React.Component);

export default Monitor;