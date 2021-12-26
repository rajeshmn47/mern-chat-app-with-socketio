import axios from 'axios'
import { useEffect, useState } from 'react'
import './chatOnline.css'

export default function ChatOnline() {
  const [friends, setFriends] = useState([])
  const [onlineFriends, setOnlineFriends] = useState([
    { username: 'rajesh', age: 22 },
    { username: 'mahesh', age: 22 },
    { username: 'rajesh', age: 22 },
    { username: 'mahesh', age: 22 },
  ])

  const handleClick = async (user) => {
    try {
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="chatOnline">
    {onlineFriends.map((o) => (
      <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src='
              www.pornhun/.dmfselkmselk
            '
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{o?.username}</span>
      </div>
    ))}
  </div>
  )
}
