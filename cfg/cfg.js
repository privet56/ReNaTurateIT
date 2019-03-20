export const expoBackendUrl = global.__DEV__ ? 'http://10.0.2.2/' : 'http://10.0.2.2/'; //TODO: set PROD url!

export const settingsInputData = { //TODO: query from server!
    areaOfInterest : [
        { label: 'BMW', value: 'bmw' },
        { label: 'Siemens', value: 'siemens' },
        { label: 'Daimler', value: 'daimler' },
    ],
    region : [
        { label: 'EU', value: 'eu' },
        { label: 'US', value: 'us' },
        { label: 'RU', value: 'ru' },
        { label: 'CH', value: 'ch' },
        { label: 'HU', value: 'hu' },
        { label: 'GB', value: 'gb' },
    ],
    timeWindow : [
        { label: '1 Month', value: '1month' },
        { label: '2 Months', value: '2month' },
        { label: '1 Year', value: '1year' },
    ],
};
