import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const labs = () => {
    const navigate = useNavigate();
    function clickHandler() {
        // move to about page
        navigate("/About")
    }
  return (
      <div>
          <div>
          This is labs Page
          </div>
          <button onClick={clickHandler}>Move to about page</button>
      </div>
  )
}

export default labs