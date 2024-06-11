import React from 'react'
import Searchinput from '../sidebar/Searchinput'
import Conversations from './Conversations'
import Logoutbtn from './Logoutbtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <Searchinput />
        <div className=' divider px-3'></div>
        <Conversations />
        <Logoutbtn />
    </div>
  )
}

export default Sidebar