import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UploadModal from "./UploadModal";
import VideoList from "./VideoList";
import VideoModal from "./VideoModal";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Track active tab indexs

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Video Management</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <Tabs selectedIndex={activeTabIndex} onSelect={(index) => setActiveTabIndex(index)}>
          <TabList className="flex justify-center gap-6 border-b-2 pb-2">
            <Tab
              className={`cursor-pointer px-4 py-2 rounded-t-lg focus:outline-none hover:bg-gray-200 relative ${
                activeTabIndex === 0 ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
            >
              Instructor
              {activeTabIndex === 0 && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-lg" />
              )}
            </Tab>
            <Tab
              className={`cursor-pointer px-4 py-2 rounded-t-lg focus:outline-none hover:bg-gray-200 relative ${
                activeTabIndex === 1 ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
            >
              Student
              {activeTabIndex === 1 && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-lg" />
              )}
            </Tab>
          </TabList>

          <TabPanel>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Instructor Panel</h2>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow"
              >
                Upload Video
              </button>
              <VideoList videos={videos} openVideoModal={openVideoModal} />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Available Videos</h2>
              <VideoList videos={videos} openVideoModal={openVideoModal} />
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <UploadModal
          closeModal={() => setIsUploadModalOpen(false)}
          addVideo={addVideo}
        />
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} closeModal={closeVideoModal} />
      )}
    </div>
  );
};

export default App;
