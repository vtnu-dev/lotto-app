import { useState } from 'react'
import Heading from './components/Heading'
import Numbers from './components/Numbers'
import 'animate.css';
import './App.scss'

function App() {
	const [showHeading, setShowHeading] = useState(true)
	//const [showNumbers, setShowNumbers] = useState(true)

	const hideHeading = () => {
		setShowHeading(false)
	}

	return (
		<div className="App">
			{showHeading && <Heading onStart={hideHeading} />}
			{(!showHeading) && <Numbers />}
			

         {/*{(!showHeading && showNumbers) && <Numbers onConfirm={hideNumbers} />}
			{!showNumbers && <Result />}*/}
		</div>
	)
}

export default App
