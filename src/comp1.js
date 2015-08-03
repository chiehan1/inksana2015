var React=require("react");
var Comp1=React.createClass({
	render:function(){
		return <div>I am comp1{this.props.x}</div>
	}
});
module.exports=Comp1;