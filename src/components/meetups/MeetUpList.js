import classes from './MeetUpList.module.css';
import MeetUpItem from './MeetUpItem';

function MeetUpList(props) {
    return(
        <ul className={classes.list}>
            {props.meetups.map(meetUp =>(
                 <MeetUpItem 
                    key={meetUp.id} 
                    id={meetUp.id} 
                    image={meetUp.image} 
                    title={meetUp.title}
                    address={meetUp.address}
                    description={meetUp.description}
                 />
             ))}
        </ul>
    );
}

export default MeetUpList;