var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterBY = function (_React$Component) {
    _inherits(FilterBY, _React$Component);

    function FilterBY() {
        _classCallCheck(this, FilterBY);

        return _possibleConstructorReturn(this, (FilterBY.__proto__ || Object.getPrototypeOf(FilterBY)).apply(this, arguments));
    }

    _createClass(FilterBY, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "filter-by" },
                React.createElement(
                    "div",
                    { className: "filter-by__statment" },
                    "Filter by :"
                ),
                React.createElement(
                    "div",
                    { className: "filter-by__options" },
                    React.createElement(
                        "span",
                        { className: "filter-by__options__btn" },
                        "1D"
                    ),
                    React.createElement(
                        "span",
                        { className: "filter-by__options__btn filter-by__options__btn--active" },
                        "1M"
                    ),
                    React.createElement(
                        "span",
                        { className: "filter-by__options__btn" },
                        "1Y"
                    )
                )
            );
        }
    }]);

    return FilterBY;
}(React.Component);

export default FilterBY;