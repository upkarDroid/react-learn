const appRoot = document.getElementById("app");

class Vbuilder extends React.Component{
    
    constructor(props){
        super(props);
        this.toggleMe = this.toggleMe.bind(this);
        
        this.state = {
            toggleSwitch:false
        }       
    }
    toggleMe(){
        this.setState((prevState)=>{
            return{
                toggleSwitch : !prevState.toggleSwitch
            }
        })
    }
    
    render(){
        return(
            <div>
            <h1>visiblility playground</h1>
            <button onClick={this.toggleMe}>{this.state.toggleSwitch ? 'hide details' : 'show details'}</button>
            {this.state.toggleSwitch && <p>Details are now shown</p>}
            </div>
            );
        }
    }
    
    
    ReactDOM.render(<Vbuilder />,appRoot)