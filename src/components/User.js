import React from 'react'
import { Link } from 'react-router-dom'

export default function User(props) {
    return (
        <>
            <li key={props.data.id}>
                <div className="flex items-center gap-x-6">
                    <img className="h-20 w-20 rounded" src="https://picsum.photos/200" alt="" />
                    <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{props.data.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">{props.data.email}</p>
                        <p>{props.data.company.name}</p>
                        <Link to={`/users/${props.data.id}`}>View Details</Link>
                    </div>
                </div>
            </li>
        </>
    )
}
