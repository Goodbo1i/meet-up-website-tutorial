import { useState, useEffect } from 'react';

import MeetUpList from '../components/meetups/MeetUpList';


function AllMeetUpsPage(){

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-basics-2-6ee1a-default-rtdb.firebaseio.com/meetups.json').then( (response) => {
    return response.json();
  }).then((data) => {
    const meetups = [];

    for(const key in data) {
      const meetUp = {
        id:key,
        ...data[key]
      };

      meetups.push(meetUp)
    }


    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
  } , []);

  

  if(isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }


    return (
        <section>
                <h1> Skelbimai </h1>
                <MeetUpList  meetups={loadedMeetups}/>                                                        {/* Key is needed for  lists in react*/}

        </section>
    );
    
}

export default AllMeetUpsPage;