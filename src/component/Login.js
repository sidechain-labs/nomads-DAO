import React, { useEffect, useState } from "react";
import userLogo from "../assets/userLogo.svg";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import LoginBar from "./LoginBar";

const Login = ({ isUserLoggedIn, LoginMetamask, updateChainToPolygon}) => {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, chainId } = useMoralis();

    useEffect(() => {
        // Moralis.enableWeb3();
        if (isAuthenticated) {
            // add your logic here
            console.log("useEffect isAuthenticated");
            // LoginMetamask(user.get("ethAddress"));
        } else {
            console.log("useEffect !isAuthenticated");
        }
    }, [isAuthenticated]);

    const moralisLogin = async () => {
        await Moralis.enableWeb3();
        console.log("in login");
        updateChainToPolygon(chainId);
        if (!isAuthenticated) {
            console.log("authenticate");
            await authenticate({signingMessage: "Log into Dapp" })
                .then(function (user) {
                    console.log("logged in user:", user);
                    console.log(user.get("ethAddress"));
                    console.log(account);
                    LoginMetamask(account);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log("already authenticated");
            LoginMetamask(account);
        }
    }

    return (
        <div className={"body"}>
            <button id="login" className="App-login" onClick={moralisLogin}>
                <img src={userLogo} alt="Logo" />
            </button>
        </div>
    );
};

export default Login;
