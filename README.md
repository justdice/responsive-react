# responsive-react

[![NPM](https://nodei.co/npm/responsive-react.png)](https://nodei.co/npm/responsive-react/)

Conditional rendering of react component for responsive display. Device-type based rendering of react components, like render <SideNav> when desktop and <BottomNav> for mobile or tablet

## Installing

`npm install responsive-react --save`

For [typescript](https://github.com/Microsoft/TypeScript) projects please use [typed-responsive-react](https://www.npmjs.com/package/typed-responsive-react)


## Live Example 

- For code see [Codesandbox demo](https://codesandbox.io/s/vigilant-davinci-4mn1b)


## Getting started


### Approach 1
		
    import { Responsive } from "react-responsive";

    <>
      <Responsive displayIn={["Mobile", "Tablet"]}>
        This is a MOBILE/TABLET
      </Responsive>
      <Responsive displayIn={["Laptop"]}>
        This is a LAPTOP or a Larger screen
      </Responsive>
    </>

> Note: iPad pro in landscape is considered as a laptop screen here.

### Approach 2
   
    import {
      isMobileDevice, 
      isTabletDevice,
      isLaptopDevice,
      isBiggerThanLaptop
    } from "react-responsive/utilResponsive";

    <>
      {isMobileDevice() && <h2>This is a MOBILE</h2>}

      {isTabletDevice() && <h2>This is a TABLET</h2>}

      {isLaptopDevice() && <h2>This is a LAPTOP</h2>}

      {isBiggerThanLaptop() && <h2>This is a LARGER SCREEN</h2>}
    </>

### Additional helper function:

    import {getDeviceTypeInfo} from "react-responsive/utilResponsive";
     // helper function
    const {
      width,
      height,
      deviceTypeVariant, 
      deviceType,
      orientation,
      isFallback
    } = getDeviceTypeInfo();

    /*
    width = Width of viewport
    height = Height of viewport
    deviceTypeVariant = [MobileSmall, MobileMedium, MobileLarge, Tablet, iPadPro, LaptopSmall, LaptopLarge, LargerThanLaptop, LargeScreenMax]
    deviceType = [Laptop, Tablet, Mobile, LargerThanLaptop]
    orientation = [Landscape, Portrait]
    isFallback = [true, false] default false. true if it detects some awkward dimension (rare)
    */



## Edge cases: 
<hr/>

1. Resolution 768 x 1024 is considered tablet (mostly iPads), while 1024 x 768 is macbook air

2. iPad pro has large screen (1024 x 1366 portrait) compared to other tablets (when landscaped is as big as a midium sized laptop)
