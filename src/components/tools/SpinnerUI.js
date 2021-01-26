import React from 'react'
import { Spinner } from 'react-bootstrap'

const SpinnerUI = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" role="status" style={{ with: 30, height: 30 }}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerUI
