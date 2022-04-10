import { useEffect, useState } from "react";
import './FlipCard.css'

function FlipCard ({ front, back, id, flip }) {
    const [showBack, setShowBack] = useState(false);

  function handleClick() {
      setShowBack(!showBack);
  }

  function handleFocus() {
      setShowBack(true); 
  } 

  function handleBlur() { 
      setShowBack(false); 
  }
  useEffect(() => {
      if(flip) {
        setShowBack(true)
      } else {
          setShowBack(false)
      }
  }, [flip]) 
    return (
        <div
        key={id}
      tabIndex={id} 
      className={"flip-card-outer"} 
      onClick={handleClick}
      onFocus={handleFocus} 
      onBlur={handleBlur} 
    >
      <div
        className={`flip-card-inner ${showBack ? 'showback' : ''}`}
      >
        <div className="card front">
              {front}
        </div>
        <div className="card back">
              {back}
        </div>
      </div>
    </div>
    )
}

export default FlipCard