// C:\SigmaWeb\React\Practice\react-practice-projects\src\components\feature-flag\index.jsx
import LightAndDarkMode from "../light-dark-mode/index";
import TicTacToe from "../tic-tac-toe/index";
import RandomColor from "../random-color/index";
import Accordian from "../accordian";
import TreeView from "../tree-view/index";
import {useContext} from "react";
import {FeatureFlagsContext} from "./context";
import menus from "../tree-view/data.js";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightAndDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGen",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  
  if (loading) return <h1>Loading data!</h1>;




  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem=> checkEnabledFlags(componentItem.key) ? componentItem.component : null)
      }
    </div>
  );
}
