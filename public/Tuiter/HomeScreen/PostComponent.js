import postedTuit from "../postedTuits/homeTuits";
import HomeScreenItem from "./HomeScreenItem.js";
const HomeScreenList = () => {
    return (`
            <ul class="list-group">
            ${
            postedTuit.map(postedTuit => {
            return (HomeScreenItem(postedTuit));
        }).join('')
    }
            </ul>
`); }

export default HomeScreenList;