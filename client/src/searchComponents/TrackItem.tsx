import React from "react";

interface Track {
    album: {
        images: {
            url: string
        }[]
    },
}

interface TrackItemProps {
    track: Track,
    index: number
}

const TrackItem: React.FC<TrackItemProps> = ({ track, index }) => {

    return (
        <li className="top-tracks-li" key={index}>
            <div className="top-tracks-thumb-container">
                {track.album.images[2] && (
                    <img
                        className="top-tracks-thumb-img"
                        src={track.album.images[2].url}
                        alt=""
                    />
                )}
            </div>
            <div className="track-details">
                <div className="track-details-track">{`${track.name}`}</div>
                <div className="track-details-artist">{`${track.artists[0].name}`}</div>
            </div>
        </li>
    )
};

export default TrackItem;