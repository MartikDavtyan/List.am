import React from 'react'
import StoryEl from './StoryEl'

export default function index({dataBassa}) {
  return (
    <div className="c">
            {dataBassa.storyBassa.map((el) => (
                <StoryEl key={el.key} bc={el.bc} c={el.c} img={el.img} text={el.text} />
            ))}
        </div>
  )
}
