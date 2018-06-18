class Clock extends React.Component{
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
	render(){
  	return(
    	<div>
      	<span>Time is </span>
    		<span className="date">{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
const MountTime=()=>{
  	ReactDOM.render(<Clock/>,document.getElementById('container'))
}
setInterval(MountTime,1000);