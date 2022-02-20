import classes from './ErrorModal.module.css';

const ErrorModal =(props)=>{

    return (
        <>
            <div className= {classes.ErrorModal}>
               <div className={classes.card}>
               <div onClick = {props.onCon} />
                <header>
                    <h2>{props.title} </h2>
                </header>
                <div>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer>
                    <button onClick={props.onCon}>Okay</button>
                </footer>
               </div>
            </div>
        </>
    )
}
//
export default ErrorModal;