(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),o=a(6),l=a(4),c=a(5),u=a(8),m=a(7),d=a(1),h=(a(14),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];a(15);function b(e){var t=e.user;return r.a.createElement("span",{className:"user"},t.name)}b.defaultProps={user:null};a(16);function g(e){var t=e.todo;return r.a.createElement("div",{className:"container"},r.a.createElement(b,{user:t.user}),r.a.createElement("h2",{className:"title"},": ".concat(t.title)),r.a.createElement("p",{className:t.completed?"completed":"uncompleted"},t.completed?"\u2705":"\u274c"))}a(17);function y(e){var t=e.todos;return r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(g,{key:e.id,todo:e})})))}var f=h.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:p.find((function(t){return e.userId===t.id}))})})),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={fullTodos:f,selectedUserId:"",newUser:null,title:"",hasSelectError:!1,hasInputError:!1},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.newUser;if(n&&r){var i={user:r,userId:r.id,id:n,title:n,completed:!1};e.setState((function(e){return{fullTodos:[].concat(Object(o.a)(e.fullTodos),[i]),selectedUserId:"",title:"",newUser:null,hasInputError:!1,hasSelectError:!1}}))}n||e.setState({hasInputError:!0}),r||e.setState({hasSelectError:!0})},e.handleSelection=function(t){var a=t.target.value;e.setState({newUser:p.find((function(e){return e.id===+a})),selectedUserId:a,hasSelectError:!1})},e.handleChange=function(t){e.setState({title:t.target.value,hasInputError:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.fullTodos,a=e.selectedUserId,n=e.title,i=e.hasInputError,s=e.hasSelectError;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"ADD TODO FORM"),i&&r.a.createElement("div",null,r.a.createElement("h3",null,"error"),r.a.createElement("p",null,"Please, write a title")),s&&r.a.createElement("div",null,r.a.createElement("h3",null,"error"),r.a.createElement("p",null,"Please, choose a user")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Title",value:n,onChange:this.handleChange}),r.a.createElement("select",{value:a,onChange:this.handleSelection},r.a.createElement("option",null,"Choose a User"),p.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement(y,{todos:t}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.04d6afdd.chunk.js.map