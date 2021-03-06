import * as React from "react";
import FlexView from "react-flexview/src";

import "./buildo-logo.png";

export default class LogoRenderer extends React.PureComponent {
  render() {
    return (
      <FlexView
        column
        className="brc-logo"
        height={208}
        hAlignContent="center"
        vAlignContent="center"
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.hash = "")}
      >
        <img src="buildo-logo.png" width="180px" />
        <span
          style={{
            color: "#9098a7",
            fontSize: 16,
            fontWeight: 400,
            marginTop: 16
          }}
        >
          @buildo/react-components
        </span>
      </FlexView>
    );
  }
}
