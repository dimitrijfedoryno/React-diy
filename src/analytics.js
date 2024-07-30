// src/analytics.js
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-2YE0T1T3EW"; // Replace with your Google Analytics Measurement ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};
