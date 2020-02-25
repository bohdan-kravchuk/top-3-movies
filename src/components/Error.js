import React from 'react'

function Error(props) {
  console.log(props.errorData);
  return (
    <div style={{color: 'red', fontSize: '36px', padding: '20px'}}>
      {props.errorData ? `Error: ${props.errorData.message}` : 'Error: Data not received'}
    </div>
  )
}

export default Error