import React from 'react'
import {
  CollectionIcon,
  MusicNoteIcon,
  SearchIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'


function Sidebar() {
  return (
    <div className="p-5 ">
      <div className="text-gray-500">
        <div className="icon_btn">
          <SearchIcon className="icon" />
          <p>Search</p>
        </div>
        <div className="icon_btn">
          <UserGroupIcon className="icon" />
          <p>Artists</p>
        </div>
        <div className="icon_btn">
          <MusicNoteIcon className="icon" />
          <p>Songs</p>
        </div>
        <div className="icon_btn">
          <CollectionIcon className="icon" />
          <p>Albums</p>
        </div>
        <div className="icon_btn">
          <UserCircleIcon className="icon" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
