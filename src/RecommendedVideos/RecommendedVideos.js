import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import './RecommendedVideos.css'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos" >
            <h2>Recommended Videos</h2>
            <div className="recommendedVideos__videos">
                <VideoCard />
            </div>
        </div>
    )
}

export default RecommendedVideos
