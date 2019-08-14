import {getDeviceTypeInfo} from "../src/utilResponsive.js";

test('resolution (2560 x 680) big screenp', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 2560, height: 680 })

	expect(deviceType).toBe("LargerThanLaptop");
    expect(deviceTypeVariant).toBe("LargerThanLaptop");
    expect(orientation).toBe("Landscape");
});

test('resolution (1440 x 680) large laptop', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 1440, height: 680 })

	expect(deviceType).toBe("Laptop");
    expect(deviceTypeVariant).toBe("LaptopLarge");
    expect(orientation).toBe("Landscape");
});

test('resolution (1024 x 680) small laptop like macbook air', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 1024, height: 680 })

	expect(deviceType).toBe("Laptop");
    expect(deviceTypeVariant).toBe("LaptopSmall");
    expect(orientation).toBe("Landscape");
});

test('resolution (768 x 680) tablet', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 768, height: 680 })

	expect(deviceType).toBe("Tablet");
    expect(deviceTypeVariant).toBe("Tablet");
    expect(orientation).toBe("Landscape");
});

test('resolution (425 x 716) large phone portrait', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 425, height: 716 })

	expect(deviceType).toBe("Mobile");
    expect(deviceTypeVariant).toBe("MobileLarge");
    expect(orientation).toBe("Portrait");
});

test('resolution (716 x 425) large phone landscape', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 716, height: 425 })

	expect(deviceType).toBe("Mobile");
    expect(deviceTypeVariant).toBe("MobileLarge");
    expect(orientation).toBe("Landscape");
});

test('resolution (682 x 375) medium phone landscape', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 682, height: 375 })

	expect(deviceType).toBe("Mobile");
    expect(deviceTypeVariant).toBe("MobileMedium");
    expect(orientation).toBe("Landscape");
});

test('resolution (375 x 682) medium phone portrait', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 375, height: 682 })

	expect(deviceType).toBe("Mobile");
    expect(deviceTypeVariant).toBe("MobileMedium");
    expect(orientation).toBe("Portrait");
});

test('resolution (594 x 320) medium phone landscape', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 594, height: 320 })

	expect(deviceType).toBe("Mobile");
    expect(deviceTypeVariant).toBe("MobileSmall");
    expect(orientation).toBe("Landscape");
});

test('resolution (320 x 594) medium phone portrait', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 320, height: 594 })

	expect(deviceType).toBe("Mobile");
    expect(deviceTypeVariant).toBe("MobileSmall");
    expect(orientation).toBe("Portrait");
});

test('resolution (1024 x 1366) iPad pro portrait', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 1024, height: 1366 })

	expect(deviceType).toBe("Tablet");
    expect(deviceTypeVariant).toBe("iPadPro");
    expect(orientation).toBe("Portrait");
});

test('resolution (1366 x 1024) iPad pro landscape', () => {
	const {
		width,
      	height,
      	deviceTypeVariant, 
      	deviceType,
      	orientation,
      	isFallback
	} = getDeviceTypeInfo({ width: 1366, height: 1024 })

	expect(deviceType).toBe("Tablet");
    expect(deviceTypeVariant).toBe("iPadPro");
    expect(orientation).toBe("Landscape");
});