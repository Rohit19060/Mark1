(this.webpackJsonpweek=this.webpackJsonpweek||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),o=n.n(s),i=n(2),c=n(3),u=n(5),l=n(4),m=n(7),p=n.n(m),h=(n(41),n(18)),d=n(6),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n=[];0!==e.state.checkedItems.size&&Array.from(e.state.checkedItems.keys()).forEach((function(t){e.state.Offerings.forEach((function(a){parseInt(t)===a.id&&!0===e.state.checkedItems.get(t)&&n.push(a.value)}))}));n.sort(),e.props.addUnit(e.state.code,e.state.title,n),e.setState({code:"",title:""})},e.onChange=function(t){return e.setState(Object(h.a)({},t.target.name,t.target.value))},e.formHandler=function(t){t.preventDefault(),e.props.setUser(e.state.username,e.state.password)},e.state={code:"",title:"",Offerings:[{id:1,value:"S1"},{id:2,value:"S2"}],checkedItems:new Map,username:"",password:""},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.formHandler=e.formHandler.bind(Object(d.a)(e)),e}return Object(c.a)(n,[{key:"handleChange",value:function(e){var t=e.target.checked,n=e.target.value;this.setState((function(e){return{checkedItems:e.checkedItems.set(n,t)}}))}},{key:"render",value:function(){var e=this;return this.props.user?r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"columns seven"},r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"six columns",type:"text",name:"code",value:this.state.code,onChange:this.onChange,placeholder:"Code",required:!0}),r.a.createElement("input",{className:"six columns",type:"text",name:"title",value:this.state.title,onChange:this.onChange,placeholder:"Title",required:!0})),this.state.Offerings.map((function(t){return r.a.createElement("label",{key:t.id},r.a.createElement("input",{type:"checkbox",value:t.id,onChange:e.handleChange}),r.a.createElement("span",{className:"label-body primary"}," ",t.value))})),r.a.createElement("input",{type:"submit",value:"Submit",className:"button-primary"})),r.a.createElement("div",{className:"columns four"},r.a.createElement("button",{onClick:this.props.logout.bind(this,this.props.user),className:"button-primary"},"Logout"))):r.a.createElement("form",{onSubmit:this.formHandler},r.a.createElement("input",{type:"text",name:"username",onChange:this.onChange,placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.onChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Login",className:"button-primary"}))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Happy to see you, ",e)):r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Welcome to our Unit App, You have not logged in"))}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:e.props.unit.title},e.changeup=function(t){e.setState({title:t.toUpperCase()})},e.changedown=function(t){e.setState({title:t.toLowerCase()})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"six columns"},this.props.unit.code," - ",this.state.title),r.a.createElement("button",{className:"button-primary two columns",onClick:function(){return e.changeup(e.props.unit.title)}},"Up")," ",r.a.createElement("button",{className:"button-primary two columns",onClick:function(){return e.changedown(e.props.unit.title)}},"Down")," ",r.a.createElement("button",{className:"button-primary two columns",onClick:this.props.deleteUnit.bind(this,this.props.unit.id)},"Delete"))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return this.props.units.map((function(t){return r.a.createElement(v,{unit:t,key:t.id,deleteUnit:e.props.deleteUnit})}))}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={units:[],user:null},e.addUnit=function(t,n,a){var r={code:t,title:n,offering:a};p.a.post("/api/units",r).then((function(t){e.setState({units:t.data})})).catch((function(e){return console.error(e)}))},e.setUser=function(t,n){var a={username:t,password:n};p.a.post("/api/login",a).then((function(t){console.log(t.data),e.setState({user:t.data.name})})).catch((function(e){return console.error(e)}))},e.deleteUnit=function(t){p.a.delete("/api/units?id="+t).then((function(t){e.setState({units:t.data})})).catch((function(e){return console.error(e)}))},e.logout=function(){e.setState({user:null}),console.log("Logout Successfully")},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/units").then((function(t){e.setState({units:t.data})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App mar"},r.a.createElement(b,{user:this.state.user}),r.a.createElement(f,{addUnit:this.addUnit,user:this.state.user,setUser:this.setUser,logout:this.logout}),r.a.createElement(g,{units:this.state.units,deleteUnit:this.deleteUnit}))}}]),n}(a.Component);o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1d214a67.chunk.js.map