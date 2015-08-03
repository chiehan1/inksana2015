var React=require("react");
var Comp1=require("./comp1");
var maincomponent=React.createClass({
  getInitialState:function(){
    return{name:"Giant",age:30};
  }
  ,componentWillMount:function(){
    this.timer=setInterval(function(){
      var age=this.state.age+1;
      this.setState({age:age});
    }.bind(this),100);
  }
  ,componentWillUnmount:function(){
    clearInterval(this.timer);
  }
  ,render:function(){
    return <div>Hello,world,
    my name is: {this.state.name},
    I am {this.state.age} years old <Comp1 x={1}/></div>
  }
});
module.exports=maincomponent;