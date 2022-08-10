import { useState } from 'react'

const Numbers = () => {
	const [choseButton, setChoseButton] = useState([])
	const [randomNumber, setRandomNumber] = useState('?')
	const [attempt, setAttempt] = useState(0)

	let amount = 1
	let quantity = 9
	const chosenArray = []

	const numbersArray = []
	for (let i = 0; i <= quantity; i++) {
		numbersArray.push(i)
	}

	function addArray(x, y) {
		if (choseButton.length < amount) {
			setChoseButton(x => [...x, y].join())
		}
	}

	function randomNumbers() {
		if (choseButton.length === 0 || randomNumber === choseButton) {
			return
		}
		setRandomNumber([Math.floor(Math.random() * 10)].join())
		setAttempt(attempt + 1)
		if (randomNumber === choseButton) {
			setChoseButton([])
			setRandomNumber('?')
			setAttempt(0)
		}
	}

	return (
		<div className="numbers">
			<h2 className="numbers__text animate__animated animate__pulse">Choose one number</h2>
			<div>
				<div className="numbers__btns">
					{numbersArray.map((numberArray, index) => {
						return (
							<button
								className="btn numbers__btn"
								key={index}
								onClick={() => {
									addArray(chosenArray, numberArray)
								}}>
								{numberArray}
							</button>
						)
					})}
				</div>
				<div className='numbers__btns-group'>
					<button className="btn numbers__btns-draw" onClick={randomNumbers}>
						Draw
					</button>
					<button
						className="btn numbers__btns-reset"
						onClick={() => {
							setChoseButton([])
							setRandomNumber('?')
							setAttempt(0)
						}}>
						Reset
					</button>
				</div>
				<div className="numbers__chosen">
					{randomNumber === choseButton ? (
						<div className="numbers__chosen-row animate__animated animate__flash">
							<p className="numbers__chosen-one">{choseButton.length === 0 ? '?' : choseButton}</p>
							<p className="numbers__win">-You WON!!!-</p>
							<p className="numbers__chosen-two">{randomNumber}</p>
						</div>
					) : (
						<div className="numbers__chosen-row">
							<p className="numbers__chosen-one">{choseButton.length === 0 ? '?' : choseButton}</p>
							<p className="numbers__chosen-two">{randomNumber}</p>
						</div>
					)}
				</div>
				<div className="numbers__attempts">
					<p >The number of attempts:</p>
					<p className="numbers__attempts__number">{attempt}</p>
				</div>
				{/*<button className="btn btn__check">Check number of attempts</button>*/}
			</div>
		</div>
	)
}

export default Numbers
