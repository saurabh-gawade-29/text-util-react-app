import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-back">
                <div className="container">
                    <footer className="py-2">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Features</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Pricing</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
                        </ul>
                        <p className="text-center text-muted">© 2021 Company, Inc</p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer
