class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state={
            count:0
        }
    }
    
    addOne(){
        console.log('addOne');
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }
        })
    }
    
    subtractOne(){
        console.log('subtractOne');
        this.setState((prevState)=>{
            return {
                count:prevState.count - 1
            }
        })
    }
    
    reset(){
        console.log('reset');
        this.setState(()=>{
            return {
                count:0
            }
        })
    }
    render(){
        return (
            <div>
            <h1>Counter : {this.state.count || 0}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.subtractOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
            </div>
            );
        }
    }

    ReactDOM.render(<Counter />, document.getElementById('app'));