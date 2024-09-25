import * as React from 'react'
import { useStore } from '@nanostores/react'
import { isOpen, closeModal } from '../store/handleModal.js'



const Card = ({  }) => {
	const openStatus = useStore(isOpen)
	return (
		<>
			<div>
			<button onClick={() => {
				closeModal()
			}}>test</button>
			</div>
		</>
	)
}

export default Card;