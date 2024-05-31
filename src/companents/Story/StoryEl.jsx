import React from 'react'
import '../../companents-css/Story/storyEl.css'

export default function StoryEl({bc,c,img,text}) {
  return (
    <a class="story-c" style={{ backgroundColor: {bc}, color: {c} }}>
        <div class="story-divs" style={{ backgroundImage: {img} }}>
            <div class="story-div2">{text}</div>
        </div>
    </a>
  )
}
