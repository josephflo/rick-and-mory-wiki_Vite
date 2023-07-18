import React from 'react'
import style from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div>
      <form className='d-flex justify-content-center gap-4 mb-5'>
        <input placeholder="Type a character"type="text" className={`${style.input}`} />
        <button className='btn btn-primary'>search</button>
      </form>
    </div>
  )
}

export default SearchBar
