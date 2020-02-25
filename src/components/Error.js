import React from 'react'

function Error(props) {
  return (
    <div style={{color: 'red', fontSize: '36px', padding: '20px'}}>
      {props.errorData ? `Error: ${props.errorData.message}` : null}
    </div>
  )
}

export default Error