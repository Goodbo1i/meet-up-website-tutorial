import { useRef } from 'react';
import classes from './NewMeetUpForm.module.css';
import Card from '../ui/Card';

function NewMeetUpForm(props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adrressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAdrress = adrressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetUpData={
            title: enteredTitle,
            image: enteredImage,
            adrress: enteredAdrress,
            description: enteredDescription,
        };

        props.onAddMeetUp(meetUpData);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Skelbimo Pavadinimas</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Skelbimo Nuotraukos link</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor='adrress'>Daikto bukle</label>
                    <input type='text' required id='adrress' ref={adrressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Skelbimo Aprasimas</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef} />
                </div>

                <div className={classes.actions}>
                    <button>Prideti Skelbima</button>
                </div>
                
            </form>
        </Card>
    );
}

export default NewMeetUpForm