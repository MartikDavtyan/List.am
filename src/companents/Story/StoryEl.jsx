import React from 'react';
import '../../companents-css/Story/storyEl.css';

export default function StoryEl({ bc, c, img, text }) {
    return (
        <a className="story-c" style={{ backgroundColor: bc, color: c }}>
            <div className="story-divs" style={{ backgroundImage: img }}>
                <div className="story-div2">{text}</div>
            </div>
        </a>
    );
}
