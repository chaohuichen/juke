import React from 'react'

function SideBar(props) {
  return (
    <div id="sidebar">
      <img src="juke.svg" id="logo" />
      <section>
        <h4 onClick={() => props.homeFunc()}>
          <a>ALBUMS</a>
        </h4>
      </section>
    </div>
  )
}

export default SideBar
