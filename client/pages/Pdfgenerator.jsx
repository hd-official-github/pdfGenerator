import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import { API_IP } from '../constants';
export default function Pdfgenerator() {
    const [iframeKey, setIframeKey] = useState(0);
    const pdfUrl = `${API_IP}/pdf`;
    let { clientId } = useParams();
    const handleRefresh = (obj) => {
        console.log('called');
        fetch(`${API_IP}/data`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        }).then(data => {
            console.log(data)
            setIframeKey((prevKey) => prevKey + 1);
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };
    useEffect(() => {
        console.log('page refreshed');
    })
    return (
        <>
            <Header />
            <div className='container'>
                <Sidebar handleRefresh={handleRefresh} />
                <div className="right-panel">
                    <div>
                        <iframe
                            key={iframeKey}
                            src={pdfUrl}
                            title="PDF Viewer"
                        ></iframe>
                    </div>

                </div>
            </div>
        </>

    )
}
