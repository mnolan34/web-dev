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
            <div className = "wd-flex-container wd-suggested-post">
                <img className = "wd-avatar-photo"
                     src = "../../../images/nasa.png"
                     alt = "avatar"/>

                <div>
                  <textarea className = "wd-body-text float-end p-1 wd-input-bar"
                            placeholder = "What's happening?"
                      value={whatsHappening}
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}>
                  </textarea>
                </div>

                <div>
                    <div>
                        <i className = "fa fa-file-photo-o"></i>
                    </div>
                    <div>
                        <i className = "fa fa-line-chart"></i>
                    </div>
                    <div>
                        <i className = "fa fa-smile-o"></i>
                    </div>
                    <div>
                        <i className = "fa fa-calendar-o"></i>
                    </div>

                    <div>
                        <button className = "btn btn-primary float-end width = 100%"
                            onClick={tuitClickHandler}>
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;