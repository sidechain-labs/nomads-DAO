import lomads from "../assets/lomads_sq.svg";
import projects from "../assets/projects.svg";
import myBoard from "../assets/myBoard.svg";
import logout from "../assets/logout.svg";

const Sidebar = ({userInfo}) => {
    return (
        <div id="sidebar" className={"sidebarCN"}>
            <img src={lomads} className={"sidebarImage"} />
            <img src={projects} className={"sidebarImage"} />
            <img src={myBoard} className={"sidebarImage"} />
            <div className={"sidebarImage"}>
                <div><img src={userInfo.userImage} style={{maxWidth:60, maxHeight:60}}/></div>
                <div className={"profileNameSidebar"}>{userInfo.userName}</div>
            </div>
            <img src={logout} className={"sidebarImage"} />
        </div>
    );
}

export default Sidebar;