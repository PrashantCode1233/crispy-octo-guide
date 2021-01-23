import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curdate = new Date();
curdate = curdate.getHours();
let greeting = ' ';
const cssStyle = { };

if(curdate >= 1 && curdate <12){
	greeting = 'Good Morning';
	cssStyle.color = 'green';
}else if(curdate >= 12 && curdate < 19){
	greeting = 'Good Afternoon';
	cssStyle.color = 'Orange';
}
else{
	greeting = 'Good Night';
	cssStyle.color = 'Black';
}


ReactDOM.render(
	<>
	<div>
	<h1> Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
	</div>
	</>,
	document.getElementById('root')
);