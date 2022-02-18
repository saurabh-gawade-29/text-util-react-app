import React from 'react'
import './Alert.css'

function Alert() {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>You should check in on some of those fields below.</strong> 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert
