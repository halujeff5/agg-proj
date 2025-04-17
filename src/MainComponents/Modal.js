import React from 'react'
import '../Vault.css'

function Modal({ onClose, children }) {
 
    return (
        <div className='modal-overlay' onClick= {onClose}>
             <div className="modal-content">
            <div className= 'heading'>Standard Plan</div>
            <ul className='plans'>
                <li>topic search for news</li>
                <li>Podcast search</li>
                <li>Youtube news channels</li>
                <li>save articles to vault</li>
                </ul>
            <div className= 'heading'>Premium Plan</div>
            <ul className = 'plans'>
                <li>Standard plan+</li>
                <li>custom search on news</li>
                <li>transcript search on podcasts</li>
                <li>daily email with curated news based on preferences</li>
                <li>Billed at $7.99/month</li>
                </ul>
                <div>
                <button className= 'close-modal' onClick = {onClose}>Upgrade</button>
                </div>
                </div>
        </div>
    )
}

export default Modal