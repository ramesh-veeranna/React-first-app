import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import User from './User';

export default function UserDetails() {
    const {userId} = useParams();

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then((result) => {
            setIsLoaded(true)
            setUser(result)
            console.log(user)
        },
        (error) => {
            setIsLoaded(true)
            setError(error)
        })
    }, [])

    if(error) {

    } else if(!isLoaded) {

    } else {

        return (
            <>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <User data={user}  key={userId} />
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
