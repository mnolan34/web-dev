import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <div class = "list-group-item">
                   <div class = "ms-1">Who to Follow </div>
                </div>
            
            ${
                who.map(who => {
                    return (WhoToFollowListItem(who));
                }).join('')
    }
            </ul>
`); }

export default WhoToFollowList;
