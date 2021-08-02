import { useState, useEffect } from "react"
import MeetupList from "../components/meetups/MeetupList"



const AllMeetupsPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [LoadedMeetups, setLoadedMeetups] = useState([]) 

    useEffect(() => {

       setIsLoading(true)  
        
    fetch('https://react-meetup-c99d0-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
        return response.json()
    }).then(data => {
        const meetups = []

        for (const key in data) {
            const meetup = {
                id: key,
                ...data[key]
            }

            meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
    })
    }, [])


    if (isLoading) {
        return <section>
            <p>Loading ...</p>
        </section>
    }

    return (
        <div>
            <h1>All MeetUps</h1>
            <MeetupList meetups={LoadedMeetups} />
        </div>
    )
}

export default AllMeetupsPage 
