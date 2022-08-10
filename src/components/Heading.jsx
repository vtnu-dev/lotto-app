function Heading({onStart}) {
	return (
		<div className="heading">
			<h1 className="heading__text animate__animated animate__slideInDown">Welcome to the game Lotto!</h1>
			<button className="btn heading__btn animate__animated animate__zoomInDown" onClick={onStart}>Click on the button to start</button>
		</div>
	)
}

export default Heading
