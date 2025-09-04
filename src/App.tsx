import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EpisodesPage from './pages/EpisodesPage';
import HostsPage from './pages/HostsPage';
import MissionPage from './pages/MissionPage';
import './styles/animations.css';

type Page = 'home' | 'episodes' | 'hosts' | 'mission';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'episodes':
        return <EpisodesPage />;
      case 'hosts':
        return <HostsPage />;
      case 'mission':
        return <MissionPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b4d59] relative overflow-x-hidden">
      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="cyber-grid"></div>
        <div className="neural-particles"></div>
        <div className="holographic-overlay"></div>
      </div>
      
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      
      <main className="relative z-10">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;