import postedTuit from "../postedTuits/homeTuits.js";
import HomeScreenItem from "./HomeScreenItem.js";
const HomeScreenList = () => {
    return (`
            <ul class="list-group">
            ${
        postedTuit.map(post => {
            return (HomeScreenItem(postedTuit));
        }).join('')
    }
            </ul>
`); }

export default HomeScreenList;