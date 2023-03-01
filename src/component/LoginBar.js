import React, {useEffect} from "react";
import "../App.css";
import userLogo from "../assets/userLogo.svg";
import proposalImage from "../assets/proposalImage.svg";
import {useMoralis} from "react-moralis";
import Moralis from "moralis";

const LoginBar = ({ isUserLoggedIn, onLoginButtonClick, onLogoutButtonClick, displayAddress}) => {

    const Bar = () => {
        return !isUserLoggedIn ? (<LoginBar />) : (<LogoutBar />);
    }

    const { authenticate, isAuthenticated, isAuthenticating, user, account, chainId, logout } = useMoralis();

    useEffect(() => {
        // Moralis.enableWeb3();
        if (isAuthenticated) {
            // add your logic here
            console.log("useEffect isAuthenticated");
            onLoginButtonClick(user.get("ethAddress"));
        } else {
            console.log("useEffect !isAuthenticated");
        }
    }, [isAuthenticated]);

    const moralisLogin = async () => {
        await Moralis.enableWeb3();
        console.log("in login");
        // updateChainToPolygon(chainId);
        if (!isAuthenticated) {
            console.log("authenticate");
            await authenticate({signingMessage: "Log into Dapp" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user.get("ethAddress"));
                    console.log(account);
                    onLoginButtonClick(user.get("ethAddress"));
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("already authenticated");
            onLoginButtonClick(user.get("ethAddress"));
        }
    }

    const moralisLogout = async () => {
        await logout();
        onLogoutButtonClick();
        console.log("logged out");
    }

    const LoginBar = () => {
        return (
            <div>
                <button id="login" className="App-login" onClick={moralisLogin}>
                    <img src={userLogo} alt="Logo" />
                </button>
            </div>
        );
    }

    const LogoutBar = () => {
        return (
            <div>
                <div className={"accountInfo"}>
                    <img src={proposalImage} style={{}} id={"proposalImage"}/> &nbsp;&nbsp;
                    { displayAddress }
                </div>
                <button id="logout" className="App-logout" onClick={moralisLogout}>
                    LOGOUT
                </button>
            </div>
        );
    }

    return (
        <div>
            <Bar />
        </div>
    );
};

export default LoginBar;