import { atom } from "nanostores";

const initialIsOpen = true
const isOpen = atom(initialIsOpen)
const initialContent = {}
const storedContent = atom(initialContent)

const toggleModal = () => {	
	isOpen.set(!isOpen.value)
}

const updateContent = ( original ) => {
	console.log( "debug content update" )
	console.log( "original content, " + original.title )
	storedContent.set(original)
	console.log(storedContent.get().title)
}

export { isOpen, toggleModal, storedContent, updateContent }