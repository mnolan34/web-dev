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
        <div className="wd-suggested-post">
            <img className ="wd-avatar-photo"
                 src = "../../../images/react-blue.png"
                 alt = "avatar"/>


            <div className ="mt-0 wd-body-text wd-tweet-info-pos">
                 <textarea className = "wd-body-text float-end p-1 wd-input-bar"
                           placeholder = "What's happening?"
                           value={whatsHappening}
                           onChange={(event) =>
                               setWhatsHappening(event.target.value)}>
                  </textarea>
            </div>



                <div className = "wd-whatsHappening-container">
                    <div className = "wd-icon-color wd-whatsHappening-container">
                        <div>
                            <i className = "pe-3 fa fa-file-image"></i>
                        </div>
                        <div>
                            <i className = "pe-3 fa fa-line-chart"></i>
                        </div>
                        <div>
                            <i className = "pe-3 fa fa-smile"></i>
                        </div>
                        <div>
                            <i className = "fa fa-calendar"></i>
                        </div>
                    </div>
                    <div className = "float-end">
                        <button className = "float-right btn btn-primary"
                                    onClick={tuitClickHandler}>
                                    Tuit
                        </button>
                    </div>
                </div>


            </div>
    );
}
export default WhatsHappening;