const WhoToFollowListItem = (who) =>{
    return(`
    <li>
    <class = "list-group-item"
    <!-- Components of profile -->
    ${who.avatarIcon}
    ${who.userName}
    ${who.handle}
    <!-- Need to include Tuit button -->
    <button class = "btn btn-primary">Follow</button>
    </li>
    `);
}

export default WhoToFollowListItem;