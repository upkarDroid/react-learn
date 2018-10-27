class LearnReact extends React.Component{
    render(){
        const title = "React form Const";
        const subtitle = "Subtitle string";
        const options = ["option1","option2","option3","optionFour"]
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
            <AddOPtion />
            </div>
            );
        }
    }
    
    class Header extends React.Component {
        render(){
            return (
                <div className="header">
                <h1>{this.props.title || "Default Title"}</h1>
                <h2>{this.props.subtitle}</h2>
                </div>);
            }
        }
        
        class Action extends React.Component {
            decision(){
                alert('What should you do ?')
            }
            render(){
                return (
                    <div>
                    <button onClick={this.decision}>What should i do ?</button>
                    </div>
                    )
                }
            }
            
            class Options extends React.Component {

                constructor(props){
                    super(props);
                    this.removeAll = this.removeAll.bind(this);
                }
                removeAll(){
                    console.log(this);
                    this.props.options.pop();
                    
                }
                render(){
                    
                    return (
                        <div>
                        <h3>here are your options from options Component</h3>
                        <button onClick={this.removeAll}>Remove All Options</button>
                        
                        {/* <Option options={options}/> */}
                        {
                            this.props.options.map((val,ind) => <OptionSingle key={ind} option={val}/> )
                        }
                        </div>
                        )
                    }
                }

                class OptionSingle extends React.Component{
                    render(){
                        return (
                            <p>{this.props.option}</p>
                        );
                    }
                }
                
                class Option extends React.Component{
                    render(){
                        return (
                            <ol>
                              {this.props.options.map((val,ind)=> <li key={ind}>{val}</li>)}
                            </ol>
                            
                            
                            );
                        }
                    }
                    
                    class AddOPtion  extends React.Component {
                        onFormSubmit(e){
                            e.preventDefault();
                            const option = e.target.elements.add.value.trim();
                            if(option){
                                //do something
                                alert(option);
                                e.target.elements.add.value = "";
                            }

                        }
                        render(){
                            return (
                                <div>
                                <form onSubmit={this.onFormSubmit}>
                                <input type="text" name="add" />
                                <button>Add</button>
                                </form>
                                </div>
                                );
                            }
                        }
                        
                        const jsx=(
                            <LearnReact />
                            );
                            
                            
                            ReactDOM.render(jsx,document.getElementById('app'));