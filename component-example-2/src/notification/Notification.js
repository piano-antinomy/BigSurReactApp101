import './Notification.css'

function Notification(props) {
    return (
        <div className={props.severity}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </div>
    );
}

export default Notification;