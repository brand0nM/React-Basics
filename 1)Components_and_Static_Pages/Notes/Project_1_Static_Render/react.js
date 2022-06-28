import Header from './Header'
import Footer from './Footer'
import Main from './MainContent'



function Page(){
	return(
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

ReactDOM.render(<Page />, document.getElementById('root'))