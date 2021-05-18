import React, { useState, useEffect }from 'react';

function Register (props) {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        setImage(props.image);
        setTitle(props.title);

        return () => {

            setImage('');
            setTitle('');
        }
    }, [props]);
    return (
        <div className={`popup popup_type_${props.name}} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__content">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <form name={props.name} className="popup__form">
                    <img src={image} alt="Результат запроса" className="popup__tooltip-image"/>
                    <h2 className="popup__title popup__title_tooltip">{title}</h2>
                </form>
            </div>
        </div>
    );
}

export default Register;