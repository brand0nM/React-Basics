// Base render of page by DOM selectors
// ReactDOM.render(<h1> Holler World</h1>, document.getElementById('root'))




// Create functions in js and call them to be rendered in react
// Property is comonly known as Composable, since dont have to redeclare main content everytime
// function MainContent(){
// 	return (
// 		<h1> Holler Warld </h1> 
// 	)
// }

// ReactDOM.render(
// 	<div>
// 		<MainContent />
// 	</div>,
// 	document.getElementById('root')
// )




// Also known as declarative since just tell what to be done, not how

// EX: Declarative React
// ReactDOM.render(<h1 className='header'>rendered content </h1>,document.getElementById('root'))

// EX: Imperative js
// const h1 = document.createElement('h1')
// h1.textContent = 'text Content'
// h1.className = 'header'
// document.querySelector(#root).append(h1)

// Reason we have html shoved inside react code is JSX creation (javaScript XML), jsx is more 
// declarative than js, allowing easier declaraions and less lines for react ReactDOM...(jsx, )
// jsx stored as a dictionary object





// React will only allow render of 1 parrent element, so throw multiple rendered elements in a div
const navbar = (
	<div>
		<h1 className='header'> Borgers</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</div>
	)

console.log(navbar)
ReactDOM.render(navbar,document.getElementById('root'))














