import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const githubData = useLoaderData()  // No need for additional state or useEffect

    return (
        <div className='text-center m-4 bg-gray-600 rounded-s-lg text-white p-4 text-3xl'>
            Github followers: {githubData.followers}
            <img 
                src={githubData.avatar_url} 
                alt="GitHub profile picture" 
                width={300} 
                style={{ borderRadius: '50%' }} 
            />
        </div>
    )
}

export default Github

// Loader function to fetch GitHub data
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vinay2003')
    return response.json()
}
