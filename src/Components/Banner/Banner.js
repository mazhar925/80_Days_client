import React from 'react'

export default function Banner() {
    const style = {
        maxWidth: '700px',
        maxHeight: '520px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <div style={style}>
        <img src={'https://cdn.britannica.com/68/179868-138-F4FC616A/Overview-discussion-Southern-Alps-warming-New-Zealand.jpg?w=800&h=450&c=crop'} alt="photo" style={{width: '100%', height: '100%', borderRadius: '10px', position: 'relative'}} />
        <div style={{zIndex: '2', position: 'absolute', color: 'white', textAlign: 'center'}}>
            <h1>Around the World</h1>
            <h1>In 80 Days</h1>
        </div>
    </div>
  )
}
