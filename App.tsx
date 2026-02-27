
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AddStoryPage from './pages/AddStoryPage';
import StoryDetailPage from './pages/StoryDetailPage';
import NarratorsPage from './pages/NarratorsPage';
import NarratorProfilePage from './pages/NarratorProfilePage';
import ContactPage from './pages/ContactPage';
import GovernoratePage from './pages/GovernoratePage';
import GovernorateMapPage from './pages/GovernorateMapPage.tsx';

export type Page =
  | 'home'
  | 'about'
  | 'add-story'
  | 'contact'
  | 'story-detail'
  | 'narrators'
  | 'narrator-profile'
  | 'governorate'
  | 'governorate-map';

export type MapStory = {
  id: number;
  title: string;
  narrator: string;
  location: string;
  documentedAt: string;
  lat: number;
  lng: number;
};

export type Story = {
  id: string;
  title: string;
  location: string;
  category?: string;
  storyType?: string;
  narrator: string;
  description: string;
  image: string;
  content?: string;
  video?: string;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGovernorate, setSelectedGovernorate] = useState<string>('عمّان');
  const [mapGovernorateName, setMapGovernorateName] = useState<string>('عمّان');
  const [mapStories, setMapStories] = useState<MapStory[]>([]);
  const [selectedNarratorId, setSelectedNarratorId] = useState<number | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToNarratorProfile = (id: number) => {
    setSelectedNarratorId(id);
    setCurrentPage('narrator-profile');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToGovernorate = (govName: string) => {
    setSelectedGovernorate(govName);
    setCurrentPage('governorate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToGovernorateMap = (govName: string, stories: MapStory[]) => {
    setMapGovernorateName(govName);
    setMapStories(stories);
    setCurrentPage('governorate-map');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToStoryDetail = (story: Story) => {
    setSelectedStory(story);
    setCurrentPage('story-detail');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProvincesClick = () => {
    setCurrentPage('home');
    setTimeout(() => {
      const section = document.getElementById('regions-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const isDetailPage = currentPage === 'story-detail';

  // Animate sections as they enter the viewport (scroll reveal)
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const main = document.querySelector('main');
    if (!main) return;

    const targets = Array.from(main.querySelectorAll<HTMLElement>('section, article'));
    if (targets.length === 0) return;

    targets.forEach((el, idx) => {
      el.classList.add('scroll-reveal');
      el.classList.remove('is-visible');
      el.style.setProperty('--sr-delay', `${Math.min(idx * 80, 240)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-seera-beige">
      {/* Master Container Wrapper to prevent stretching */}
      <div className="flex flex-col min-h-screen w-full max-w-[1920px] mx-auto relative border-x border-gray-200">
        <Header
          activePage={currentPage}
          navigateTo={navigateTo}
          onProvincesClick={handleProvincesClick}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Portal mount for GovernoratePage bottom controls (DOM order before main) */}
        <div id="gov-controls-slot" />

        <main className={`flex-grow ${currentPage === 'home' ? 'pt-0' : 'pt-8'}`}> {/* Reduced gap from 10 to 8 */}
          {currentPage === 'home' && <HomePage navigateTo={navigateTo} onGovernorateSelect={navigateToGovernorate} onStorySelect={navigateToStoryDetail} />}
          {currentPage === 'about' && <AboutPage navigateTo={navigateTo} />}
          {currentPage === 'add-story' && <AddStoryPage navigateTo={navigateTo} />}
          {currentPage === 'contact' && <ContactPage navigateTo={navigateTo} />}
          {currentPage === 'narrators' && (
            <NarratorsPage navigateTo={navigateTo} navigateToNarratorProfile={navigateToNarratorProfile} />
          )}
          {currentPage === 'narrator-profile' && (
            <NarratorProfilePage navigateTo={navigateTo} narratorId={selectedNarratorId} onStorySelect={navigateToStoryDetail} />
          )}
          {currentPage === 'governorate' && (
            <GovernoratePage
              governorateName={selectedGovernorate}
              navigateTo={navigateTo}
              onExploreMap={navigateToGovernorateMap}
              onProvincesClick={handleProvincesClick}
              onStorySelect={navigateToStoryDetail}
            />
          )}
          {currentPage === 'governorate-map' && (
            <GovernorateMapPage
              governorateName={mapGovernorateName}
              stories={mapStories}
              onBack={() => navigateTo('governorate')}
            />
          )}
          {currentPage === 'story-detail' && <StoryDetailPage navigateTo={navigateTo} handleProvincesClick={handleProvincesClick} story={selectedStory} navigateToNarratorProfile={navigateToNarratorProfile} />}
        </main>

        <Footer navigateTo={navigateTo} onProvincesClick={handleProvincesClick} isMobileMenuOpen={isMobileMenuOpen} />
      </div>
      {/* Texture Overlay - Last Layer */}
      <div className="texture-overlay"></div>
    </div>
  );
};

export default App;
