import { useState } from 'react'

import bird from './svgs/bird.svg'
import cat from './svgs/cat.svg'
import cow from './svgs/cow.svg'
import dog from './svgs/dog.svg'
import gator from './svgs/gator.svg'
import horse from './svgs/horse.svg'
import heart from './svgs/heart.svg'

function Animal({ type }) {
  const [heartSize, setHeartSize] = useState(0)

  const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
  }

  const handleHeart = () => {
    setHeartSize(heartSize + 1)
  }

  return (
    <span onClick={handleHeart}>
      <img width='100px' src={svgMap[type]} alt={type} />
      <img width={`${5 + 5 * heartSize}px`} src={heart} alt='heart' />
    </span>
  )
}

export default Animal
