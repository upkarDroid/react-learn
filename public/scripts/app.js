'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById("app");

var Vbuilder = function (_React$Component) {
    _inherits(Vbuilder, _React$Component);

    function Vbuilder(props) {
        _classCallCheck(this, Vbuilder);

        var _this = _possibleConstructorReturn(this, (Vbuilder.__proto__ || Object.getPrototypeOf(Vbuilder)).call(this, props));

        _this.toggleMe = _this.toggleMe.bind(_this);

        _this.state = {
            toggleSwitch: false
        };
        return _this;
    }

    _createClass(Vbuilder, [{
        key: 'toggleMe',
        value: function toggleMe() {
            this.setState(function (prevState) {
                return {
                    toggleSwitch: !prevState.toggleSwitch
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'visiblility playground'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleMe },
                    this.state.toggleSwitch ? 'hide details' : 'show details'
                ),
                this.state.toggleSwitch && React.createElement(
                    'p',
                    null,
                    'Details are now shown'
                )
            );
        }
    }]);

    return Vbuilder;
}(React.Component);

ReactDOM.render(React.createElement(Vbuilder, null), appRoot);
