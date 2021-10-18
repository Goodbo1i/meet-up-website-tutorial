import { useHistory } from 'react-router-dom';

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage(){

    const history = useHistory();

    function addMeetUpHandler (meetUpData){
        fetch('https://react-basics-2-6ee1a-default-rtdb.firebaseio.com/meetups.json',{
            method:'POST',
            body: JSON.stringify(meetUpData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>Pridėti Skelbima</h1>
            <NewMeetUpForm  onAddMeetUp={addMeetUpHandler} />
        </section>
    );
}

export default NewMeetUpPage;