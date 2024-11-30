import React from 'react'
import './SocialIcon.css'
import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'


const SocialIcon = () => {
  return (
    <div>
        <div className="customIcon">
        <TwitterOutlined />
        <FacebookOutlined />
        <InstagramOutlined />
        <GithubOutlined />
        </div>
      
    </div>
  )
}

export default SocialIcon
