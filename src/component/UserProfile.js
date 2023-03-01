import teamIcon from "../assets/teamIcon.svg";
import serviceIcon from "../assets/serviceIcon.svg";
import monthlyStrength from "../assets/monthlyStrength.svg";
import ongoingTasks from "../assets/ongoingTasks.svg";
import progress from "../assets/progress.svg";
import line from "../assets/line.svg";
import DataTable from 'react-data-table-component';
import level1Image from "../assets/level1Image.svg";
import level2Image from "../assets/level2Image.svg";
import level3Image from "../assets/level3Image.svg";
import level4Image from "../assets/level4Image.svg";
import React from "react";

const UserProfile = ({userInfo}) => {

    const UserInfo = () => {
        return (
            <div className={"userInfoBox"} style={{marginRight:40}}>
                <div className={"yourProfile"}>Your Profile</div>
                <div>
                    <img src={userInfo.userImage} style={{paddingBottom:5, paddingTop:30, maxHeight:100, maxWidth:100}}/>
                </div>
                <div className={"infoText4"}>
                    {userInfo.userName}
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={teamIcon} style={{padding:10}}/>
                    <div style={{paddingRight:30, paddingTop:13}}>
                        <div className={"infoText6"}>2</div>
                        <div className={"infoText5"}>Teams</div>
                    </div>
                    <img src={serviceIcon} style={{padding:10}}/>
                    <div style={{paddingTop:13, justifyContent:"left", alignItems:"flex-start"}}>
                        <div className={"infoText6"} style={{opacity: 0.5}}>5</div>
                        <div className={"infoText5"}>Services</div>
                    </div>
                </div>
            </div>
        );
    }

    const UserStrengthPoints = () => {
        return (
            <div>
                <div className={"userStrengthPoints"}>
                    <div style={{paddingTop:20, paddingLeft:60}}>
                        <div className={"strengthPointsText"}>Your Strength Points</div>
                        <div className={"strengthPointsText"} style={{paddingTop:20, fontSize:40, fontWeight:600}}>{userInfo.strengthPoints}</div>
                    </div>
                    <div style={{paddingTop:40, paddingLeft:80}}>
                        <div style={{display:"flex", fontSize:14, fontWeight:600}}>
                            <div style={{textAlign:"left", paddingRight:110}}>Level {userInfo.level}</div>
                            <div style={{textAlign:"right", color: "#FBAA0E"}}>Level {userInfo.level + 1}</div>
                        </div>
                        <div><img src={progress} style={{width:200}}/></div>
                        <div style={{display:"flex", fontSize:10}}>
                            <div style={{textAlign:"left", paddingRight:160}}>{userInfo.levelStartPoints}</div>
                            <div style={{textAlign:"right"}}>{userInfo.levelEndPoints}</div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                        <div className={"recentStrength"}>
                            <div style={{paddingTop:15}}>
                                <img src={monthlyStrength} />
                            </div>
                            <div className={"infoText1"}>Strength points earned last month</div>
                            <div className={"infoText2"}>{userInfo.pointsLastMonth}</div>
                        </div>
                        <div className={"recentStrength"}>
                            <div style={{paddingTop:20}}>
                                <img src={ongoingTasks} />
                            </div>
                            <div className={"infoText1"}>Ongoing tasks</div>
                            <div className={"infoText2"}>{userInfo.ongoingTasks}</div>
                        </div>
                    </div>
                    <div>
                        <div className={"strengthGraphText"} style={{paddingLeft:10, paddingBottom:5}}>
                            Strength points earnings
                        </div>
                        <div className={"pointsGraph"} style={{marginLeft:20}}>
                        <img src={userInfo.pointsGraph} style={{height:260, width:450}}/>
                        </div>
                        {/*<div className={"strengthGraph"}>*/}
                        {/*    <img src={userGraph} style={{width:450, height:245}}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }

    const LevelsInfo = () => {
        return (
            <div className={"levelsInfoBox"} style={{marginRight:40, paddingTop:30}}>
                <div className={"line"}><img src={line} style={{height:650}}/></div>
                <div>
                    <LevelDetail levelNo={1} source={level1Image} taskName={"New member"} taskDetail={"Participate to bounty"} spPoints={500} opa={userInfo.level >= 1 ? 1 : 0.5}/>
                    <LevelDetail levelNo={2} source={level2Image} taskName={"Member"} taskDetail={"Participate and create projects"} spPoints={1000} opa={userInfo.level >= 2 ? 1 : 0.5}/>
                    <LevelDetail levelNo={3} source={level3Image} taskName={"Veteran"} taskDetail={"Treasury voting rights"} spPoints={3000} opa={userInfo.level >= 3 ? 1 : 0.5}/>
                    <LevelDetail levelNo={4} source={level4Image} taskName={"Advisor"} taskDetail={"Admin rights"} spPoints={7500} opa={userInfo.level >= 4 ? 1 : 0.5}/>
                </div>
            </div>
        );
    }

    const LevelDetail = ({levelNo, source, taskName, taskDetail, spPoints, opa}) => {
        return (
            <div className={"activeLevelBox"} style={{opacity:opa}}>
                <div className={"activeLevel"}>
                    <div style={{paddingTop:20, color: "#D26F38", fontWeight:700}}>Level {levelNo}</div>
                </div>
                <div style={{paddingLeft:30, paddingRight:10}}><img src={source}/></div>
                <div style={{width:150}}>
                    <div className={"levelTaskInfo"} style={{fontWeight:700}}>{taskName}</div>
                    <div className={"levelTaskInfo"}>{taskDetail}</div>
                </div>
                <div className={"spInfo"} style={{width:150}}>{spPoints} SP</div>
            </div>
        );
    }

    const UnlockPoints = () => {
        return (
                <div className={"unlockPointsBox"}>
                    <div className={"strengthGraphText"} style={{margin:0, padding:0, width:280}}>
                        Get more points to unlock next level:
                    </div>
                    <div className={"unlockBlock"}>
                        <button className={"pointsButtons"} style={{width:120, height:40}}>Staking</button>
                        <div className={"infoText3"} style={{paddingTop:12}}>+ 12 SP the 21/10/22</div>
                        <button className={"blueButton"} style={{width:60, height:40}}>Stake</button>
                    </div>
                    <div className={"unlockBlock"}>
                        <button className={"pointsButtons"} style={{width:120, height:40}}>Achievements</button>
                        <div className={"infoText3"}>&nbsp;&nbsp;&nbsp; 3 projects ongoing &nbsp;&nbsp;&nbsp;&nbsp; + 24 SP when achieved</div>
                        <button className={"blueButton"} style={{width:60, height:40}}>Tasks</button>
                    </div>
                    <div className={"unlockBlock"}>
                        <button className={"pointsButtons"} style={{width:120, height:40}}>Projects</button>
                        <div className={"infoText3"}>&nbsp;&nbsp;&nbsp; 1 project ongoing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + 24 SP when achieved</div>
                        <button className={"blueButton"} style={{width:60, height:40}}>New</button>
                    </div>
                </div>
        );
    }

    const columns = [
        // {
        //     name: 'Service',
        //     selector: row => row.service,
        //     sortable: true,
        //     // style: {fontSize:18, fontWeight: 700}
        // },
        {
            name: 'Task',
            selector: row => row.task,
            sortable: true,
            width: '300px'
        },
        {
            name: 'Duration',
            selector: row => row.duration,
            sortable: true,
        },
        {
            name: 'Created',
            selector: row => row.createdOn,
            sortable: true,
        },
        {
            name: 'Strength Points',
            selector: row => row.points,
            sortable: true,
            width: '170px'
        },
        {
            name: 'Created By',
            selector: row => row.createdBy,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
    ];

    const MyActivity = () => {
        return (
            <div>
                <div className={"myActivity"} style={{display:"flex", paddingBottom:10}}>My activity</div>
                <div className={"myActivityBox"} style={{marginRight:40, marginBottom:40, paddingBottom:10}}>
                    <DataTable
                        // pagination
                        columns={columns}
                        data={userInfo.history}
                        highlightOnHover={true}
                        responsive={true}
                        striped={true}
                        customStyles={customStyles}
                    />
                </div>
            </div>
        );
    }

    const customStyles = {
        rows: {
            style: {},
        },
        headCells: {
            style: {
                fontFamily: 'Montserrat',
                fontStyle: 'bold',
                fontWeight: 700,
                fontSize: 13,
                color: '#000000'
            },
        },
        cells: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 500,
                fontSize: 12,
                color: '#3A3C40'

            },
        },
    };

    return (
        <div>
        <div id="projectInfo" className={"projectInfoCN"}>
            <UserInfo />
            <UserStrengthPoints />
        </div>
        <div id="projectInfo2" className={"projectInfoCN"} style={{marginTop:30}}>
            <LevelsInfo />
            <UnlockPoints />
        </div>
        <div id="projectInfo3" className={"projectInfoCN"}>
            <MyActivity />
            {/*<img src={myActivity} />*/}
        </div>
        </div>
    );
}

export default UserProfile;