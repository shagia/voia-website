import * as React from 'react'
import { useStore } from '@nanostores/react'
import { isOpen, toggleModal, storedContent } from '../store/handleModal.js'

import '../styles/modal.scss'
import Exit from '../static/images/ui/X.svg'



const Modal = ({ initialContent }) => {
	const openStatus = useStore(isOpen)
	if (!openStatus) return null
	console.log(storedContent.get())
	console.log(initialContent)

	// Set to see if initialContent is present. if not on the home page, nothing should be set
	if (Object.keys(storedContent.get()).length === 0 && storedContent.get().constructor === Object ) {
		storedContent.set(initialContent)
	} 


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
							{storedContent.get().credits.map((credit) => {
								return (
								<div key={credit} className='modal-credit-key'>
									{credit}
								</div>)
							})}
						</div>
						}
					</div>
					<div className="modal-image">
						<img className='modal-image-src' src={storedContent.get().imageSrc.src} alt={storedContent.get().imageSrcAlt} />
					</div>
				</div>
				<div className="modal modal-right">
					<p className="modal-description">
						{storedContent.get().description}
					</p>
				</div>
			</div>
			{ storedContent.get().release &&
			<div className="modal modal-links modal-flex">
				<div className="modal-soundcloud-embed modal-left">
				<iframe width="100%" height="106" scrolling="no" frameBorder="no" allow="autoplay" src={storedContent.get().soundcloudSrc}></iframe><div></div></div>
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