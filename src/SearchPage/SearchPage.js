import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image
                channel
                verified
                subs
                noOfVideos
                description
             />
             <hr />
             <VideoRow />
        </div>
    )
}

export default SearchPage
