import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../components/profile/ProfileHeader';
import LiveChat from '../components/profile/LiveChat';
import ContentTabs from '../components/profile/ContentTabs';
import CreatorBio from '../components/CreatorBio';
import TagsSidebar from '../components/TagsSidebar';
import FilterSidebar from '../components/FilterSidebar';
import { getImageUrl } from '../utils/dummyData';

// Dummy video URL (1x1 pixel video)
const DUMMY_VIDEO_URL = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAu1tZGF0AAACrQYF//+p3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";

const DUMMY_CREATOR = {
  name: "Sophie A",
  realName: "Sophie Anderson",
  followers: 286489,
  birthDate: "March 10, 2001",
  age: 23,
  type: "Content Creator",
  interestedIn: ["Gaming", "Art", "Music"],
  location: "Los Angeles, CA",
  lastBroadcast: "2 hours ago",
  bodyType: "Athletic",
  smokeDrink: "No/Occasionally",
  bodyDecorations: "Small tattoo",
  socialLinks: [
    { platform: "WhatsApp", url: "#", tokens: 300, duration: "6 Months" },
    { platform: "Snapchat", url: "#", tokens: 200, duration: "1 Year" },
    { platform: "Telegram", url: "#", tokens: 250, duration: "3 Months" }
  ]
};

type Category = 'all' | 'girls' | 'boys' | 'couples' | 'trans';
type TabType = 'media' | 'similar' | 'subscription' | 'membership';

export default function ProfilePage() {
  const { id } = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dividerPosition, setDividerPosition] = useState(window.innerWidth * 0.75);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('media');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition = Math.min(
        Math.max(e.clientX - containerRect.left, containerWidth * 0.3),
        containerWidth * 0.8
      );
      setDividerPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging]);

  const categories = [
    { id: 'all', label: 'Popular Creators' },
    { id: 'girls', label: 'Girls' },
    { id: 'boys', label: 'Boys' },
    { id: 'couples', label: 'Couples' },
    { id: 'trans', label: 'Trans' }
  ] as const;

  const tabs = [
    { id: 'media', label: 'Pics & Videos' },
    { id: 'similar', label: 'Similar Streams' },
    { id: 'subscription', label: 'Subscription' },
    { id: 'membership', label: 'Membership' }
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      {/* Category Tabs */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-purple-900/95 backdrop-blur-sm">
        <div className="pt-20 px-4 mb-4">
          <div className="flex items-center gap-2 bg-purple-800/30 backdrop-blur-sm rounded-xl p-1">
            <div className="flex gap-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`py-2 px-4 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                    activeCategory === category.id
                      ? 'bg-pink-500 text-white'
                      : 'text-white hover:bg-pink-500/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="flex gap-1 ml-auto">
              <button
                onClick={() => {
                  setIsTagsOpen(!isTagsOpen);
                  if (isFilterOpen) setIsFilterOpen(false);
                }}
                className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                  isTagsOpen ? 'bg-pink-500 text-white' : 'text-white hover:bg-pink-500/20'
                }`}
              >
                Tags
              </button>
              <button
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen);
                  if (isTagsOpen) setIsTagsOpen(false);
                }}
                className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                  isFilterOpen ? 'bg-pink-500 text-white' : 'text-white hover:bg-pink-500/20'
                }`}
              >
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-36">
        <div className="max-w-full mx-auto">
          {/* Stream and Chat Container */}
          <div 
            ref={containerRef}
            className="flex flex-col lg:flex-row w-full relative"
            style={{ height: '925px' }}
            onMouseMove={handleMouseMove}
          >
            {/* Livestream Box */}
            <div 
              className="bg-black relative overflow-hidden w-full lg:w-auto h-full"
              style={{ width: window.innerWidth >= 1024 ? dividerPosition : '100%' }}
            >
              <ProfileHeader
                isMuted={isMuted}
                setIsMuted={setIsMuted}
                isFullscreen={isFullscreen}
                setIsFullscreen={setIsFullscreen}
                videoUrl={DUMMY_VIDEO_URL}
              />
            </div>

            {/* Resizable Divider */}
            {window.innerWidth >= 1024 && (
              <div
                className={`w-1 bg-white/10 hover:bg-pink-500/50 cursor-col-resize transition-colors ${
                  isDragging ? 'bg-pink-500/50' : ''
                }`}
                onMouseDown={handleMouseDown}
                style={{ height: '925px' }}
              />
            )}

            {/* Chat Box */}
            <LiveChat
              containerWidth={containerWidth}
              dividerPosition={dividerPosition}
            />
          </div>

          {/* Content Area */}
          <div className="max-w-full mx-auto px-4 py-8">
            {/* Creator Bio */}
            <CreatorBio 
              creatorInfo={DUMMY_CREATOR}
              avatarUrl={getImageUrl('avatars', Number(id) || 0)}
            />

            {/* Content Tabs */}
            <div className="mt-8">
              <div className="flex gap-1 p-1 bg-purple-800/30 backdrop-blur-sm rounded-2xl mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-6 text-sm font-medium transition-colors whitespace-nowrap rounded-xl ${
                      activeTab === tab.id
                        ? 'bg-pink-500 text-white'
                        : 'text-white hover:bg-pink-500/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <ContentTabs activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebars */}
      <TagsSidebar
        isOpen={isTagsOpen}
        onClose={() => setIsTagsOpen(false)}
        selectedTags={[]}
        setSelectedTags={() => {}}
      />

      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedFilters={{
          age: '',
          ethnicity: '',
          bodyType: '',
          hair: ''
        }}
        setSelectedFilters={() => {}}
      />
    </div>
  );
}