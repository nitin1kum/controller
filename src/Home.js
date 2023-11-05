import React, { useState } from "react";
import "./App.css";
import { a } from "react-router-dom";

const Home = () => {
  const [ip, setIp] = useState("192.168.89.157");
  const [button, setButton] = useState({
    ip: "",
  });
  return (
    <>
      <div className="main-page">
        <div className="controller">
          <form action="">
            <input
              type="text"
              name="ip"
              id="speed"
              placeholder="IP address"
              value={button.ip}
              onChange={(e) => {
                setButton((prev) => {
                  return {
                    ...prev,
                    ip: e.target.value,
                  };
                });
              }}
            />
          </form>
          <div className="controller-button">
            <a
              href={`http://${ip}/backward`}
              onClick={(event) => setIp(button.ip)}
            >
              <button className="up">up</button>
            </a>
            <div className="left-right">
              <a
                href={`http://${ip}/right`}
                onClick={(event) => setIp(button.ip)}
              >
                <button>left</button>
              </a>
              <a
                href={`http://${ip}/stop`}
                onClick={(event) => setIp(button.ip)}
              >
                <button>stop</button>
              </a>
              <a
                href={`http://${ip}/left`}
                onClick={(event) => setIp(button.ip)}
              >
                <button>right</button>
              </a>
            </div>
            <a
              href={`http://${ip}/forward`}
              onClick={(event) => setIp(button.ip)}
            >
              <button className="down">down</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
