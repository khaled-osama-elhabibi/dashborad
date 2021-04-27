var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
    _inherits(Row, _React$Component);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                { className: "main-table__row" },
                React.createElement(
                    "td",
                    { className: "main-table__row__cell" },
                    "22 Feb 2021"
                ),
                React.createElement(
                    "td",
                    { className: "main-table__row__cell" },
                    this.props.product
                ),
                React.createElement(
                    "td",
                    { className: "main-table__row__cell" },
                    this.props.size
                ),
                React.createElement(
                    "td",
                    { className: "main-table__row__cell" },
                    "Footlocker UK"
                ),
                React.createElement(
                    "td",
                    { className: "main-table__row__cell" },
                    this.props.price
                ),
                React.createElement(
                    "td",
                    { className: "main-table__row__cell" },
                    React.createElement(
                        "span",
                        { className: "main-table__row__cell__stat--" + this.props.status },
                        this.props.status
                    )
                )
            );
        }
    }]);

    return Row;
}(React.Component);

var MainTable = function (_React$Component2) {
    _inherits(MainTable, _React$Component2);

    function MainTable() {
        _classCallCheck(this, MainTable);

        return _possibleConstructorReturn(this, (MainTable.__proto__ || Object.getPrototypeOf(MainTable)).apply(this, arguments));
    }

    _createClass(MainTable, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                { className: "main-table" },
                React.createElement(
                    "tr",
                    { className: "main-table__main-row" },
                    React.createElement(
                        "td",
                        { className: "main-table__main-row__cell display-flex" },
                        "DATE",
                        React.createElement(
                            "span",
                            { className: "material-icons" },
                            "unfold_more"
                        )
                    ),
                    React.createElement(
                        "td",
                        { className: "main-table__main-row__cell" },
                        "PRODUCT"
                    ),
                    React.createElement(
                        "td",
                        { className: "main-table__main-row__cell" },
                        "SIZE (US)"
                    ),
                    React.createElement(
                        "td",
                        { className: "main-table__main-row__cell" },
                        "WEBSITE"
                    ),
                    React.createElement(
                        "td",
                        { className: "main-table__main-row__cell" },
                        "PRICE"
                    ),
                    React.createElement(
                        "td",
                        { className: "main-table__main-row__cell" },
                        "STATUS"
                    )
                ),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 6 Retro Carmine (2021)", size: 10.0, price: "$252", status: "FAIL" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 6 Retro Carmine (2021)", size: 10.0, price: "$252", status: "FAIL" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 6 Retro Carmine (2021)", size: 10.0, price: "$252", status: "FAIL" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 6 Retro Carmine (2021)", size: 10.0, price: "$252", status: "FAIL" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 6 Retro Carmine (2021)", size: 10.0, price: "$252", status: "FAIL" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" }),
                React.createElement(Row, { product: "Jordan 11 Retro Jubilee", size: 9.0, price: "$211", status: "SUCCESS" })
            );
        }
    }]);

    return MainTable;
}(React.Component);

export default MainTable;