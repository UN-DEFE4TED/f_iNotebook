import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    const { title,  description } = note;
  return (
    <div className='col-md-3 my-2'>
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description }</p>
        <i className="fa-solid fa-trash  mx-2"></i>
        <i className="fa-solid fa-pen-to-square  mx-2"></i>
        </div>
        </div>
    </div>
  )
}

export default Noteitem
