import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Sidebar from '../sidebar/content/Sidebar'
import SubHeader from '../subHeader/SubHeader'
import './layout.scss'

export default function LayoutYoutube() {
    return (
        <div className='layout-youtube'  >
            <Header/>
            <Sidebar/>
            <SubHeader/>
            {/* <Main/> */}
        </div>
    )
}
