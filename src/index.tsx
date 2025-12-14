import { createRoot } from 'react-dom/client';

// style.scss
import 'assets/style.css';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// apex-chart
import 'assets/third-party/apex-chart.css';

// google-fonts
// Preload critical fonts (for example, Roboto) to reduce FOUC.
// (In a real app, you might add a <link rel="preload" as="font" href="..." crossorigin="anonymous" /> tag in your HTML (or via a plugin) for each critical font.)
// (Below is a dummy example – replace with your actual font URLs if needed.)
// <link rel="preload" as="font" href="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2" crossorigin="anonymous" />

// Space Grotesk - Main font for ONE ecosystem
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';

// Roboto Mono - Only for tagline button
import '@fontsource/roboto/400.css';

// project imports
import App from './App';
import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);

// ==============================|| MAIN - REACT DOM RENDER ||============================== //

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
