import React, {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const tuitClickHandler = () => {
        console.log(whatsHappening);
    }
    return (
        <>
      <textarea className = "p-1"
          value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
            <button onClick={tuitClickHandler}>
                Tuit
            </button>
        </>
    );
}
export default WhatsHappening;