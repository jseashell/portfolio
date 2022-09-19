import React from "react";
import Xarrow from "react-xarrows";

const path = "smooth";
const curveness = 0.6;
const showHead = false;
const color = "#6f8576";

/**
 * Wrapper for 'react-xarrows' for an arrow with a solid line.
 * Line connectors have a larger stroke width.
 *
 * @param {Object} props
 * @param {string} props.start
 * @param {string} props.end
 * @returns {LineConnector} solid line connector
 */
export function LineConnector(props) {
  return (
    <React.Fragment>
      <Xarrow
        start={props.start}
        end={props.end}
        path={path}
        curveness={curveness}
        showHead={showHead}
        strokeWidth={4}
        color={color}
      />
    </React.Fragment>
  );
}

/**
 * Wrapper for 'react-xarrows' for an arrow with a dashed line.
 * Dashed lines have a smaller stroke width.
 *
 * @param {Object} props
 * @param {string} props.start
 * @param {string} props.end
 * @returns {DashConnector} dashed line connector
 */
export function DashConnector(props) {
  return (
    <React.Fragment>
      <Xarrow
        start={props.start}
        end={props.end}
        path={path}
        curveness={curveness}
        showHead={showHead}
        strokeWidth={2}
        dashness={true}
        color={color}
      />
    </React.Fragment>
  );
}
