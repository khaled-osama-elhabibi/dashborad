var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_React$Component) {
    _inherits(UserInfo, _React$Component);

    function UserInfo() {
        _classCallCheck(this, UserInfo);

        return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
    }

    _createClass(UserInfo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "user-info" },
                React.createElement("img", { className: "user-info__img", src: "./imgs/user-img.png" }),
                React.createElement(
                    "div",
                    { className: "user-info__main-info" },
                    React.createElement(
                        "div",
                        { className: "user-info__main-info__name" },
                        "Anthony Mike"
                    ),
                    React.createElement(
                        "div",
                        { className: "user-info__main-info__email" },
                        "anthony2142@email.com"
                    )
                ),
                React.createElement(
                    "span",
                    { className: "material-icons user-info__expand-more" },
                    "expand_more"
                )
            );
        }
    }]);

    return UserInfo;
}(React.Component);

export default UserInfo;