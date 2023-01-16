import './Popup.css';
import PropTypes from 'prop-types';

function Popup(props) {

    return (
        <div>
            <div className='popup'> {props.children}</div>
            <button onClick={props.onClose}> {props.buttonText} </button>
        </div>
    );
}

Popup.propType = {
    onClose: PropTypes.func,
    buttonText: String
}

Popup.defaultProps = {
    onClose: () => {
        window.alert("Close action undefined");
    },

    buttonText: "Close"
}

export default Popup;