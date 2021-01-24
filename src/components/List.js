import React from 'react'

export default function List (props) {                                                              
  return (
    <ul>
      {props.items.map((item) => (
        <li className="d-flex justify-content-between" key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            className={item.complete ? 'line-through' : 'none'}>
              {item.name}
          </span>
          <button type="button" className="btn btn-sm btn-danger ml-2" onClick={() => props.remove(item)}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             