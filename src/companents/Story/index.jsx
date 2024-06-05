import React from 'react';
import '../../companents-css/Story/story.css';
import StoryEl from './StoryEl.jsx';

export default function Story() {
    const 

    return (
        <div className="c">
            {storyBassa.map((el) => (
                <StoryEl key={el.key} bc={el.bc} c={el.c} img={el.img} text={el.text} />
            ))}
        </div>
    );
}
