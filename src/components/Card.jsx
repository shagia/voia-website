import * as React from 'react'
import { useStore } from '@nanostores/react'
import { isOpen, toggleModal, updateContent, storedContent } from '../store/handleModal.js'

let noContent = "No content"

// Each component spawned determines what's recieved based on if there's content or not.
// No content? Spawn question marks for now. Content? Strictly expect the schema.
// Either way, the modal state should be updated with what's provided.


const Card = ({ content }) => {
	const openStatus = useStore(isOpen)
	return (
		<>
			<div>
			<button onClick={() => {
				updateContent(content)
				!content ? content = noContent : content
				toggleModal()
				console.log("dom test", content)
			}}>test</button>
			</div>
		</>
	)
}

export default Card;