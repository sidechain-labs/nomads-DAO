import ourProjects from "../assets/ourProjects.svg";
import Dot1 from "../assets/Dot1.svg";
import Dot2 from "../assets/Dot2.svg";
import Line2 from "../assets/Line2.svg";
import ProjectGov from "./ProjectGov";
import React from "react";

const ProjectInfo = ({userInfo}) => {

    const OurProjects = () => {
        return (
            <div className={"projectInfoBox"} style={{marginRight:40}}>
                <img src={ourProjects} style={{padding:10}}/>
            </div>
        );
    }

    const OngoingProjects = () => {
        return (
            <div className={"projectInfoBox"} style={{width:560}}>
                <div style={{paddingTop:20, paddingRight:60}}>
                    <div className={"infoText8"}>
                        4&nbsp;
                        <img src={Dot1} style={{marginBottom:10}}/>
                    </div>
                    <div className={"infoText7"} style={{paddingTop:5}}>open</div>
                    <img src={Line2} />
                </div>
                <div style={{paddingTop:20, paddingRight:70}}>
                    <div className={"infoText8"} style={{color: "#3A3C40"}}>
                        3&nbsp;
                        <img src={Dot2} style={{marginBottom:10}}/>
                    </div>
                    <div className={"infoText7"} style={{color: "#3A3C40", paddingTop:10}}>On going</div>
                </div>
                <div style={{paddingTop:20}}>
                    <div className={"infoText8"} style={{color: "#3A3C40"}}>
                        11&nbsp;
                        <img src={Dot1} style={{marginBottom:10}}/>
                    </div>
                    <div className={"infoText7"} style={{color: "#3A3C40", paddingTop:10}}>Projects total</div>
                </div>
            </div>
        );
    }

    return (
        <div>
        <div id="projectInfo" className={"projectInfoCN"}>
            <OurProjects />
            <OngoingProjects />
        </div>
            <ProjectGov userInfo={userInfo}/>
        </div>
    );
}

export default ProjectInfo;