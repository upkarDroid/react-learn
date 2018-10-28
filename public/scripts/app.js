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
        _this.deleteOption = _this.deleteOption.bind(_this);
        _this.state = {
            title: "React using components",
            subtitle: "Hand your life to the computer program",
            options: props.options

        };
        return _this;
    }

    _createClass(LearnReact, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentdidMount : fired by react when component mounts");
            console.log('fetching data');
            try {

                var optionsArr = localStorage.getItem('options');

                if (optionsArr) {
                    this.setState(function () {
                        return {
                            options: JSON.parse(optionsArr)
                        };
                    });
                }
            } catch (e) {
                //do nothing
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            console.log("componentDidUpdate : fired by react everytime state changes. this.state and this.props are the new values here, args are old values");
            if (this.state.options.length != prevState.options.length) {
                console.log('saving data');

                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount");
        }
    }, {
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
        key: "deleteOption",
        value: function deleteOption(option) {
            console.log(option);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (val) {
                        return option !== val;
                    })
                };
            });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    decision: this.randomAction
                }),
                React.createElement(Options, { options: this.state.options, removeAll: this.removeAll, deleteOption: this.deleteOption }),
                React.createElement(AddOPtion, { addOneOption: this.addOption })
            );
        }
    }]);

    return LearnReact;
}(React.Component);

LearnReact.defaultProps = {
    options: ["option1", "option2", "option3", "optionFour"]
};
var Header = function Header(props) {
    return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
            "h1",
            null,
            props.title || "Default Title"
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};
// class Header extends React.Component {
//     render() {

//     }
// }

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.decision },
            "What should i do ?"
        )
    );
};

// class Action extends React.Component {
//     decision() {
//         alert('What should you do ?')
//     }
//     render() {

//         )
//     }
// }


var Options = function Options(props) {
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
            { onClick: props.removeAll },
            "Remove All Options"
        ),
        props.options.map(function (val, ind) {
            return React.createElement(OptionSingle, {
                key: ind,
                option: val,
                deleteOption: props.deleteOption

            });
        })
    );
};

var OptionSingle = function OptionSingle(props) {
    return React.createElement(
        "p",
        null,
        props.option,
        "\xA0\xA0\xA0",
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.deleteOption(props.option);
                }
            },
            "x"
        )
    );
};

var Option = function (_React$Component2) {
    _inherits(Option, _React$Component2);

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
                        val,
                        React.createElement("button", { onClick: function onClick(e) {
                                props.deleteOption(val);
                            } })
                    );
                })
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOPtion = function (_React$Component3) {
    _inherits(AddOPtion, _React$Component3);

    function AddOPtion(props) {
        _classCallCheck(this, AddOPtion);

        var _this3 = _possibleConstructorReturn(this, (AddOPtion.__proto__ || Object.getPrototypeOf(AddOPtion)).call(this, props));

        _this3.onFormSubmit = _this3.onFormSubmit.bind(_this3);
        _this3.state = {
            errorMsg: null
        };
        return _this3;
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
                    return { errorMsg: error };
                });
            } else {
                e.target.elements.add.value = "";
            }
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

ReactDOM.render(React.createElement(LearnReact, { options: ["devils den", "district 13"] }), document.getElementById('app'));
