import { Separator } from './components/ui/separator';
import './styles/index.css';
import WebsiteLogo from './assets/swagpart-logo.svg';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center my-3">
        <img
          src={WebsiteLogo}
          alt="Website Image"
          className="w-[300px] h-full"
        ></img>
      </div>
      <h4 className="mt-2 text-sm font-semibold text-center">
        Created with &hearts; by{' '}
        <a
          className="hover:text-blue-600"
          href="https://github.com/WhatNext-ID"
          target="_blank"
          rel="noreferrer"
        >
          WhatNext
        </a>
      </h4>
      <Separator className="my-4" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </div>
  );
};

export default App;
