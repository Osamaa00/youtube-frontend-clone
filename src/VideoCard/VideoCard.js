import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css'

function VideoCard({ image, title, channel, views, timestamp, channelImg }) {
    return (
        <div className="videoCard" >
            <img src={image} alt="" className="videoCard__thumbnail" />
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImg} />
                <div className="videoCard__text">
                    <h4>{ title }</h4>
                    <p>{ channel }</p>
                    <p>
                        { views } . { timestamp }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
