var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesktopApp = function (_React$Component) {
    _inherits(DesktopApp, _React$Component);

    function DesktopApp() {
        _classCallCheck(this, DesktopApp);

        return _possibleConstructorReturn(this, (DesktopApp.__proto__ || Object.getPrototypeOf(DesktopApp)).apply(this, arguments));
    }

    _createClass(DesktopApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "desktop-app" },
                React.createElement(
                    "div",
                    { className: "desktop-app__download-logo" },
                    React.createElement(
                        "svg",
                        { width: "100", height: "58", viewBox: "0 0 100 58", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { x: "13.8662", y: "3.81226", width: "72.1563", height: "47.8148", stroke: "white", strokeOpacity: "0.6", strokeWidth: "0.5" }),
                        React.createElement("path", { d: "M59 30V34C59 34.5304 58.7893 35.0391 58.4142 35.4142C58.0391 35.7893 57.5304 36 57 36H43C42.4696 36 41.9609 35.7893 41.5858 35.4142C41.2107 35.0391 41 34.5304 41 34V30", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round" }),
                        React.createElement("path", { d: "M45 25L50 30L55 25", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round" }),
                        React.createElement("path", { d: "M50 30V18", stroke: "white", strokeLinecap: "round", strokeLinejoin: "round" }),
                        React.createElement("rect", { x: "10.5181", y: "0.25", width: "79.0759", height: "55.0509", rx: "2.75", stroke: "white", strokeOpacity: "0.6", strokeWidth: "0.5" }),
                        React.createElement("rect", { x: "0.25", y: "55.9121", width: "99.5", height: "1.83781", rx: "0.918907", stroke: "white", strokeOpacity: "0.6", strokeWidth: "0.5" }),
                        React.createElement("path", { d: "M34.3714 56.3749C34.1611 56.2385 34.2576 55.9121 34.5082 55.9121H65.1521C65.4445 55.9121 65.5464 56.3004 65.2917 56.4439C64.8087 56.7162 64.2636 56.8593 63.7091 56.8593H36.0091C35.4279 56.8593 34.8591 56.6911 34.3714 56.3749Z", stroke: "white", strokeOpacity: "0.6", strokeWidth: "0.5" })
                    ),
                    React.createElement(
                        "p",
                        { className: "desktop-app__download-logo__statment" },
                        "Desktop App"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "desktop-app__btns" },
                    React.createElement(
                        "button",
                        { className: "desktop-app__btns__samp" },
                        React.createElement(
                            "svg",
                            { width: "18", height: "20", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M14.6168 19.2C13.5328 20.252 12.3368 20.088 11.1968 19.592C9.9848 19.086 8.8768 19.054 7.5968 19.592C6.0028 20.28 5.1568 20.08 4.1968 19.2C-1.2232 13.62 -0.423203 5.12002 5.7368 4.80002C7.2308 4.88002 8.2768 5.62602 9.1568 5.68801C10.4648 5.42202 11.7168 4.66002 13.1168 4.76002C14.7988 4.89602 16.0568 5.56002 16.8968 6.75401C13.4368 8.83401 14.2568 13.394 17.4348 14.674C16.7988 16.344 15.9828 17.994 14.6148 19.214L14.6168 19.2ZM9.0368 4.74002C8.8748 2.26002 10.8848 0.220019 13.1968 0.0200195C13.5148 2.88002 10.5968 5.02002 9.0368 4.74002Z", fill: "#19A2A4" })
                        ),
                        React.createElement(
                            "p",
                            { className: "desktop-app__btns__statment" },
                            "Download for MacOS"
                        )
                    ),
                    React.createElement(
                        "button",
                        { className: "desktop-app__btns__samp" },
                        React.createElement(
                            "svg",
                            { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M0 2.81864L8.11068 1.71405L8.11423 9.53746L0.00740909 9.58362L0 2.81864ZM8.10682 10.4389L8.11311 18.2691L0.00629545 17.1545L0.00584091 10.3863L8.10682 10.4389ZM9.09002 1.56955L19.8441 0V9.43795L9.09002 9.52333V1.56955ZM19.8466 10.5125L19.8441 19.908L9.09 18.3901L9.07493 10.4949L19.8466 10.5125Z", fill: "#19A2A4" })
                        ),
                        React.createElement(
                            "p",
                            { className: "desktop-app__btns__statment" },
                            "Download for Windows"
                        )
                    )
                )
            );
        }
    }]);

    return DesktopApp;
}(React.Component);

export default DesktopApp;