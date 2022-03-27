import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
        tuit: whatsHappening});
    }
    return (
        <>
            <div className = "wd-flex-container p-2">

                <div className = "wd-avatar-photo">
                    <img src = "../../../images/react-blue.png"/>
                </div>

                <div>
                  <textarea className = "wd-body-text float-end p-1 wd-input-bar"
                            placeholder = "What's happening?"
                      value={whatsHappening}
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}>
                  </textarea>
                </div>

                <div className = "wd-flex-container">
                    <i className = "fa fa-file-photo-o"></i>
                    <i className = "fa fa-line-chart"></i>
                    <i className = "fa fa-smile-o"></i>
                    <i className = "fa fa-calendar-o"></i>
                </div>

                <div>
                    <button className = "btn btn-primary float-end width = 100%"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;