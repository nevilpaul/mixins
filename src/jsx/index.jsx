class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			header_title:"Mixins{functions}"
		}
	}
	render(){
		return(
			<div className="mainNav">
				<div className="logoName">{this.state.header_title}</div>
			</div>
		);
	}
}
const container = document.getElementById('container');
ReactDOM.render(<App/>,container);