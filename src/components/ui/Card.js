import classes from './Card.module.css' ;


function Card(props) {
    return(
        <div className={classes.card}>
            {props.children}                {/*props children ikelia viska kas buva parasyta viduje iskviesto dalyko (siuo metu tai yra card, MeetUpItem'uose) */}
        </div>
    );
}

export default Card;