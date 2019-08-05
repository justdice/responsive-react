import React from "react";
import {
  getWindowDimension,
  IdDeviceBreakpointsByWidth,
  IdMobileHeight
} from "./utilResponsive";

const { width, height } = getWindowDimension();
const initialState = { width, height };

export class Responsive extends React.PureComponent {
  state = initialState;
  componentDidMount() {
    window.addEventListener("resize", this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
  }

  render = () => {
    const { children, displayIn } = this.props;
    const { width, height } = this.state;

    const shouldRenderChildren = this.shouldRender(displayIn, width, height);

    return (
      <React.Fragment>{shouldRenderChildren ? children : null}</React.Fragment>
    );
  };

  handleResize = () => {
    const { width, height } = getWindowDimension();
    this.setState({ width, height });
  };

  shouldRender = (display, width, height) => {
    if (
      display.indexOf("Laptop") !== -1 &&
      width >= IdDeviceBreakpointsByWidth.laptop_min
    ) {
      return true;
    }

    if (
      display.indexOf("Tablet") !== -1 &&
      (width <= IdDeviceBreakpointsByWidth.tablet_max &&
        width >= IdDeviceBreakpointsByWidth.tablet_min)
    ) {
      return true;
    }

    // For mobile regardless of orientation
    if (
      display.indexOf("Mobile") !== -1 &&
      width <= IdDeviceBreakpointsByWidth.mobile_max
    ) {
      return true;
    }

    if (
      display.indexOf("MobilePortrait") !== -1 &&
      (width <= IdDeviceBreakpointsByWidth.mobile_max &&
        height >= IdMobileHeight.mobileLandscape_max)
    ) {
      return true;
    }

    return !!(
      display.indexOf("MobileLandScape") !== -1 &&
      (width <= IdDeviceBreakpointsByWidth.mobile_max &&
        height <= IdMobileHeight.mobileLandscape_min)
    );
  };
}
