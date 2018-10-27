"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LearnReact = function (_React$Component) {
    _inherits(LearnReact, _React$Component);

    function LearnReact(props) {
        _classCallCheck(this, LearnReact);

        var _this = _possibleConstructorReturn(this, (LearnReact.__proto__ || Object.getPrototypeOf(LearnReact)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.randomAction = _this.randomAction.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            title: "React using components",
            subtitle: "give your life to the computer program",
            options: ["option1", "option2", "option3", "optionFour"]

        };
        return _this;
    }

    _createClass(LearnReact, [{
        key: "randomAction",
        value: function randomAction() {
            alert("picking first option " + this.state.options[0]);
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "addOption",
        value: function addOption(val) {
            if (!val) {
                return 'please enter a valid value';
            } else if (this.state.options.indexOf(val) > -1) {
                return "\"" + val + "\" is already included";
            } else {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(val)
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { options: this.state.options, removeAll: this.removeAll }),
                React.createElement(AddOPtion, { addOneOption: this.addOption })
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
        key: "decision",
        value: function decision() {
            alert('What should you do ?');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.props.hasOptions, onClick: this.decision },
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


        // constructor(props){
        //     super(props);
        //     this.removeAll = this.removeAll.bind(this);
        // }
        // removeAll(){
        //     console.log(this);
        //     this.props.options.pop();

        // }
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "here are your options from options Component"
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.removeAll },
                    "Remove All Options"
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

    function AddOPtion(props) {
        _classCallCheck(this, AddOPtion);

        var _this7 = _possibleConstructorReturn(this, (AddOPtion.__proto__ || Object.getPrototypeOf(AddOPtion)).call(this, props));

        _this7.onFormSubmit = _this7.onFormSubmit.bind(_this7);
        _this7.state = {
            errorMsg: null
        };
        return _this7;
    }

    _createClass(AddOPtion, [{
        key: "onFormSubmit",
        value: function onFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.add.value.trim();
            var error = this.props.addOneOption(option);

            if (error) {
                //do something
                this.setState(function () {
                    return {
                        errorMsg: error
                    };
                });
            }
            e.target.elements.add.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.onFormSubmit },
                    React.createElement("input", { type: "text", name: "add" }),
                    React.createElement(
                        "button",
                        null,
                        "Add"
                    )
                ),
                this.state.errorMsg && React.createElement(
                    "h2",
                    null,
                    this.state.errorMsg
                )
            );
        }
    }]);

    return AddOPtion;
}(React.Component);

ReactDOM.render(React.createElement(LearnReact, null), document.getElementById('app'));
