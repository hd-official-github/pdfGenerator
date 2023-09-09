import React, { useState } from 'react'

export default function Sidebar({ handleRefresh }) {
    const [companyName, setCompanyName] = useState('')
    const handleSubmit = ()=>{
        var obj = {
            companyName
        }
        handleRefresh(obj)
    }
    return (
        <div className="sidebar">
            <div className="buttons">
                <button className='refreshbtn' onClick={handleSubmit}>Refresh</button>
            </div>
            <div className='panel'>
                <input placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
        </div>
    )
}
