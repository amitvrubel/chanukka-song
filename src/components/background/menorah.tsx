import React from 'react';
import './menorah.css';

export const Menorah: React.FC = () => {
  return (
    <div className="grid">
      <div id="top_clear_row"  className="toprow"></div>
      <div id="flame_1"        className="flame"></div>
      <div id="flame_2"        className="flame"></div>
      <div id="flame_3"        className="flame"></div>
      <div id="flame_4"        className="flame"></div>
      <div id="flame_5_center" className="flame"></div>
      <div id="flame_6"        className="flame"></div>
      <div id="flame_7"        className="flame"></div>
      <div id="flame_8"        className="flame"></div>
      <div id="flame_9"        className="flame"></div>

      <div id="cup_1"          className="cup"></div>
      <div id="cup_2"          className="cup"></div>
      <div id="cup_3"          className="cup"></div>
      <div id="cup_4"          className="cup"></div>
      <div id="cup_5_center"   className="cup"></div>
      <div id="cup_6"          className="cup"></div>
      <div id="cup_7"          className="cup"></div>
      <div id="cup_8"          className="cup"></div>
      <div id="cup_9"          className="cup"></div>

      <div id="sphere_1"         className="sphere"></div>
      <div id="sphere_2"         className="sphere"></div>
      <div id="sphere_3"         className="sphere"></div>
      <div id="sphere_4"         className="sphere"></div>
      <div id="sphere_5_center"  className="sphere"></div>
      <div id="sphere_6"         className="sphere"></div>
      <div id="sphere_7"         className="sphere"></div>
      <div id="sphere_8"         className="sphere"></div>
      <div id="sphere_9"         className="sphere"></div>

      <div id="stick_1"         className="stick"></div>
      <div id="stick_2"         className="stick"></div>
      <div id="stick_3"         className="stick"></div>
      <div id="stick_4"         className="stick"></div>
      <div id="stick_5_center"  className="stick"></div>
      <div id="stick_6"         className="stick"></div>
      <div id="stick_7"         className="stick"></div>
      <div id="stick_8"         className="stick"></div>
      <div id="stick_9"         className="stick"></div>

      <div id="crossBarL" className="left"></div>
      <div id="crossBar" className="crossbar"></div>
      <div id="crossBarR" className="right"></div>

      <div id="baseId" className="base"></div>

      <div id="shaftId" className="shaft"></div>
    </div>
  );
}