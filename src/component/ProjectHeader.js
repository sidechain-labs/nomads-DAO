import proposeProject from "../assets/proposeProject.svg";
import daoImage from "../assets/daoImage.svg";

const ProjectHeader = () => {

    return (
        <div id="projectHeader" className={"projectHeaderCN"}>
            <img src={daoImage} style={{paddingTop:25, paddingLeft:20}}/>
            <div className={"projectHeader"}>Paris Film Festival</div>
            <img src={proposeProject} style={{padding:15}}/>
        </div>
    );
}

export default ProjectHeader;