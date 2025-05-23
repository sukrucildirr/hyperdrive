import { useEffect, useState } from "react";
import HyperwareLogo from "../components/HyperwareLogo";
import useHomepageStore from "../store/homepageStore";
import AllApps from "../components/AllApps";
import Widgets from "../components/Widgets";
import WidgetsSettingsModal from "../components/WidgetsSettingsModal";

function Homepage() {
  const [our, setOur] = useState("");
  const [version, setVersion] = useState("");
  const { setApps, showWidgetsSettings, setShowWidgetsSettings } =
    useHomepageStore();

  const getAppPathsAndIcons = () => {
    Promise.all([
      fetch("/apps", { credentials: "include" })
        .then((res) => res.json())
        .catch(() => []),
      fetch("/version", { credentials: "include" })
        .then((res) => res.text())
        .catch(() => ""),
    ]).then(([appsData, version]) => {
      setVersion(version);
      setApps(appsData);
    });
  };

  useEffect(() => {
    getAppPathsAndIcons();
  }, [our]);

  useEffect(() => {
    fetch("/our", { credentials: "include" })
      .then((res) => res.text())
      .then((data) => {
        if (data.match(/^[a-zA-Z0-9\-\.]+\.[a-zA-Z]+$/)) {
          setOur(data);
        }
      });
  }, [our]);

  return (
    <div
      className="
        homepage
        flex flex-col md:flex-row place-items-center place-content-center
        md:h-screen w-screen
        overflow-y-auto overflow-x-hidden
      "
    >
      <div className="max-w-screen w-full lg:w-fit">
        <header>
          <HyperwareLogo style={{ marginRight: '10px', maxWidth: 64 }} />
          <h2>
            {new Date().getHours() < 4
              ? "Good evening" // midnight to 4am
              : new Date().getHours() < 12
                ? "Good morning" // 4am to 11am
                : new Date().getHours() < 18
                  ? "Good afternoon" // 12pm to 5pm
                  : "Good evening" // 5pm to midnight
            }, {our}
          </h2>
          <a
            href="https://github.com/hyperware-ai/hyperdrive/releases"
            target="_blank"
          >
            [hyperware v{version}]
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowWidgetsSettings(true);
            }}
          >
            [⚙]
          </a>
        </header>


        <Widgets />
        <footer>
          <AllApps />
        </footer>
        {showWidgetsSettings && <WidgetsSettingsModal />}
      </div>
    </ div>
  );
}

export default Homepage;
