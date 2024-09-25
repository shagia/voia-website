import * as React from 'react'
import { useStore } from '@nanostores/react'
import { isOpen, toggleModal, storedContent } from '../store/handleModal.js'

import '../styles/modal.scss'
import Exit from '../static/images/ui/X.svg'


const Modal = ({  }) => {
	const openStatus = useStore(isOpen)
	if (!openStatus) return null
	console.log("what the modal sees state as ", storedContent.get())

  return (
	<>
	<div className="modal-root">
		<div className="modal-container">
			<button onClick={() => {
				toggleModal()
			}} className="modal-exit" id="modalExit">
				<img className="modal-exit-svg" alt="Exit" />
			</button>
			<div className="modal modal-flex">
				<div className="modal modal-left">
					<h3 className="modal-title">
						{storedContent.get().title}
					</h3>
					<div className="modal-info">
						{storedContent.get().subtitle &&
						<div className="modal-subtitle">
							{storedContent.get().subtitle}
						</div>
						}
						{storedContent.get().credits &&
						<div className="modal-credits">
							{storedContent.get().credits}
						</div>
						}
					</div>
					<div className="modal-image">
						<img src={storedContent.get().imageSrc} alt={storedContent.get().imageSrcAlt} />
					</div>
				</div>
				<div className="modal modal-right">
					<p className="modal-description">
						{storedContent.get().description}
					</p>
				</div>
			</div>
			{ storedContent.get().type === 'release' &&
			<div className="modal modal-links modal-flex">
				<div className="modal-soundcloud-embed modal-left">
					Test
				</div>
				<div className="modal-right">
					<ul className="links-container">
						<div className="links-left">
							<li><a href="/about">YouTube</a></li>
							<li><a href="/about">Soundcloud</a></li>
							<li><a href="/about">Bandcamp</a></li>
						</div>
						<div className="links-right">
							<li><a href="/about">Spotify</a></li>
							<li><a href="/about">Apple Music</a></li>
							<li><a href="/about">Amazon Music</a></li>
						</div>
					</ul>
				</div>
			</div> }
		</div>
	</div>
	</>
  );
};

export default Modal;