# responsive-react

[![NPM](https://nodei.co/npm/responsive-react.png)](https://nodei.co/npm/responsive-react/)

conditional rendering of react component for responsive display

### Demo: [Demo](https://codesandbox.io/s/goofy-mcnulty-ue7zq)

<hr/>

### Approach 1
		
    import { Responsive } from "react-responsive";

    <>
      <Responsive displayIn={["Mobile", "Tablet"]}>
        <h2>This is a MOBILE/TABLET</h2>
      </Responsive>
      <Responsive displayIn={["Laptop"]}>
        <h2>This is a LAPTOP or a Larger screen</h2>
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



### Edge cases: 

1. Resolution 768 x 1024 is considered tablet (mostly iPads), while 1024 x 768 is macbook air

2. iPad pro has large screen (1024 x 1366 portrait) compared to other tablets (when landscaped is as big as a midium sized laptop)

