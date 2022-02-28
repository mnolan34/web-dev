import homeTuits from "./homeTuits.js";
import HomeScreenItem from "./HomeScreenItem.js";
const HomeScreenList = () => {
    return (`
            <ul class="list-group">
            ${
            homeTuits.map(homeTuits => {
            return (HomeScreenItem(homeTuits));
        }).join('')
    }
            </ul>
`); }

export default HomeScreenList;