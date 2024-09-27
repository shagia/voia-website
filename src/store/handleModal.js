import { atom } from "nanostores";

const initialIsOpen = false
const isOpen = atom(initialIsOpen)
const initialContent = {}
const storedContent = atom(initialContent)



const toggleModal = () => {	
	isOpen.set(!isOpen.value)
}

const updateContent = ( original ) => {
	storedContent.set(original)
	console.log(storedContent.get().title)
}

export { isOpen, toggleModal, storedContent, updateContent }