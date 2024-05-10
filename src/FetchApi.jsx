import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./index.css"
import resim1 from "./resim1.jpg"


function FetchApi() {
    const [data, setData] = useState([]);
    const [valueUserName, setUserNameValue] = useState("");
    const [valuePassword, setPasswordValue] = useState("");
    const [alertUserName, setAlertUserName] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await fetch("http://localhost:3000/posts");
                const json = await response.json();
                if (response.ok) {
                    setData(json);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChangeusername = (e) => {
        setUserNameValue(e.target.value);
    };

    const handleChangepassword = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleRequest = () => {
        if (!valueUserName) { // Kullanıcı adı girilmediğinde
            setAlertUserName(true); // Kullanıcı ismi gir div aç
            setTimeout(() => {
                setAlertUserName(false)
            }, 2000)
            return;
        }
        if (!valuePassword) { // Şifre girilmediğinde
            setAlertPassword(true);
            setTimeout(() => {
                setAlertPassword(false);


            }, 2000)

            return;
        }

        const post = data.find(item => item.username === valueUserName);
        const password = data.find(item => item.password === valuePassword);
        if (post && password) {
            window.location.href = "http://localhost:5173/login";
        } else {
            if (!post) { // Kullanıcı adı yanlış ise
                setAlertUserName(true);
                setTimeout(() => {
                    setAlertUserName(false)
                }, 1000)
            }
            if (!password) { // Şifre yanlış ise
                setAlertPassword(true);
                setTimeout(() => {
                    setAlertPassword(false);

                }, 1000)
            }
        }
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === "Enter") {
            handleRequest();
        }
    }

    return (
        <div className="section" >
            <div className="main">
                <h1 className="title">Fake Back-End Request</h1>

                <p>User Name</p>
                <input type="text" value={valueUserName} onChange={handleChangeusername} onKeyPress={handleEnterKeyPress} />
                {alertUserName && <div className="popup">Please enter your username</div>} {/* Kullanıcı adı gir div */}

                <p>Password</p>
                <input type="text" value={valuePassword} onChange={handleChangepassword} onKeyPress={handleEnterKeyPress} />
                {alertPassword && <div className="popup">Please enter your password</div>} {/* Şifre yanlış div */}

                <button onClick={handleRequest}>Log in  <FaArrowRightLong className="arr" /></button>
                <ul className="user-password-container">
                    {data.map(item => <li key={item.id}>UserName : {item.username}</li>)}
                    {data.map(item => <li key={item.id}>PassWord  :  {item.password}</li>)}
                </ul>

                <div className="social-box">
                    <div className="contain">
                        <a href="https://github.com/dev-berkayy"> <FaGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FetchApi;
