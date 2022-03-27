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
            <div className = "wd-flex-container wd-suggested-post wd-suggested-borders p-2">
                <div>
                  <textarea className = "wd-input-bar float-end p-1"
                            placeholder = "What's happening?"
                      value={whatsHappening}
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}>
                  </textarea>
                </div>

                <div>
                    <button className = "btn btn-primary float-end"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;