import React from 'react'
import './topsection.css'
const Topsection = () => {
    return (
        <div className='topsection'>
            <div className="a">
                <div className="dropdown">
                    <select className='k' name="cars" id="cars">
                        <option value="volvo">Select Operator</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select className='k' name="cars" id="cars">
                        <option value="volvo">Select Game Type</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select className='k' name="cars" id="cars">
                        <option value="volvo">Select Slate Name</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Topsection