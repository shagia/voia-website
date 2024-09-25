import { atom } from "nanostores";

const initialIsOpen = true
const isOpen = atom(initialIsOpen)

const closeModal = () => {	
	isOpen.set(!isOpen.value)
}

export { isOpen, closeModal }