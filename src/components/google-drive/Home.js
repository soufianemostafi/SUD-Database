import React from 'react'
import Navbar from './Navbar'
import CenteredContainer from '../authentication/CenteredContainer'
function Home() {
    return (
        <div style={{
            backgroundImage: `url("https://www.wallpapertip.com/wmimgs/47-479835_cloud-computing-images-hd.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Navbar />
            <CenteredContainer>
                <p className="h2 font-weight-bold text-white">With SUD-Database, you can upload and share your files freely and securily at the cheapest prices in the market.</p>
            </CenteredContainer>
        </div>
    )
}

export default Home
