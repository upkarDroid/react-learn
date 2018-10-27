"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LearnReact = function (_React$Component) {
    _inherits(LearnReact, _React$Component);

    function LearnReact() {
        _classCallCheck(this, LearnReact);

        return _possibleConstructorReturn(this, (LearnReact.__proto__ || Object.getPrototypeOf(LearnReact)).apply(this, arguments));
    }

    _createClass(LearnReact, [{
        key: "render",
        value: function render() {
            var title = "React form Const";
            var subtitle = "Subtitle string";
            var options = ["option1", "option2", "option3", "optionFour"];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, null),
                React.createElement(Options, { options: options }),
                React.createElement(AddOPtion, null)
            );
        }
    }]);

    return LearnReact;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "header" },
                React.createElement(
                    "h1",
                    null,
                    this.props.title || "Default Title"
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "What should i do ?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "here are your options from options Component"
                ),
                this.props.options.map(function (val, ind) {
                    return React.createElement(OptionSingle, { key: ind, option: val });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var OptionSingle = function (_React$Component5) {
    _inherits(OptionSingle, _React$Component5);

    function OptionSingle() {
        _classCallCheck(this, OptionSingle);

        return _possibleConstructorReturn(this, (OptionSingle.__proto__ || Object.getPrototypeOf(OptionSingle)).apply(this, arguments));
    }

    _createClass(OptionSingle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                this.props.option
            );
        }
    }]);

    return OptionSingle;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ol",
                null,
                this.props.options.map(function (val, ind) {
                    return React.createElement(
                        "li",
                        { key: ind },
                        val
                    );
                })
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOPtion = function (_React$Component7) {
    _inherits(AddOPtion, _React$Component7);

    function AddOPtion() {
        _classCallCheck(this, AddOPtion);

        return _possibleConstructorReturn(this, (AddOPtion.__proto__ || Object.getPrototypeOf(AddOPtion)).apply(this, arguments));
    }

    _createClass(AddOPtion, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    null,
                    React.createElement("input", { type: "text", name: "add" }),
                    React.createElement(
                        "button",
                        null,
                        "Add"
                    )
                )
            );
        }
    }]);

    return AddOPtion;
}(React.Component);

var jsx = React.createElement(LearnReact, null);

ReactDOM.render(jsx, document.getElementById('app'));
