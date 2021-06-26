import React from 'react'
import Navbar from './Navbar'
import CenteredContainer from '../authentication/CenteredContainer'

import { Container } from "react-bootstrap"
function Home() {
    return (
        <div style={{
            backgroundImage: `url("https://www.wallpapertip.com/wmimgs/47-479835_cloud-computing-images-hd.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Navbar />
            <Container className="d-flex align-items-center justify-content-center"style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <p className="h2 font-weight-bold text-white">With SUD-Database, you can upload and share your files freely and securily at the cheapest prices in the market.</p>
            </div>
            </Container>
        </div>
    )
}

export default Home
