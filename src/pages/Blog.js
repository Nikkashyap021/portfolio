import React, { useState, useRef } from "react";
import { useEffect } from "react";
function Blog() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // reset animation each time component mounts
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50); // small delay so transition triggers
    return () => clearTimeout(timer);
  }, []);
  const blogs = [
    { title: "Blog 1", url: "https://example.com/blog1" },
    { title: "Blog 2", url: "https://example.com/blog2" },
    { title: "Blog 3", url: "https://example.com/blog3" },
  ];

  const [history, setHistory] = useState([blogs[0].url]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const iframeRef = useRef(null);

  const navigateTo = (url) => {
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(url);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const goBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) setCurrentIndex(currentIndex + 1);
  };
  
  return (
    <div className={`flex flex-col  p-2  transform transition-all w-full h-full duration-1000 origin-left
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
      {/* Navigation buttons to open blogs */}
      <div className="flex gap-4 mb-2">
        {blogs.map((blog, index) => (
          <button
            key={index}
            onClick={() => navigateTo(blog.url)}
            className="text-white px-2 py-1 rounded-md hover:bg-gray-700 transition"
          >
            {blog.title}
          </button>
        ))}
      </div>

      {/* Browser-style computer screen */}
      <div className="flex-1 bg-black/80 rounded-xl flex flex-col">

        {/* Browser top bar */}
        <div className="flex items-center justify-between p-6  bg-gray-900 rounded-t-xl h-10 px-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>

          </div>

          {/* Back/Forward buttons */}
          <div className="flex gap-2">
            <button
              onClick={goBack}
              disabled={currentIndex === 0}
              className={`px-2 py-1 rounded-md ${currentIndex === 0 ? "bg-gray-700 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-500"
                }`}
            >
              &#8592; Back
            </button>
            <button
              onClick={goForward}
              disabled={currentIndex === history.length - 1}
              className={`px-2 py-1 rounded-md ${currentIndex === history.length - 1 ? "bg-gray-700 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-500"
                }`}
            >
              Forward &#8594;
            </button>
          </div>
        </div>

        {/* Iframe content */}
        <div className="flex-1 overflow-auto p-2">
          <iframe
            ref={iframeRef}
            src={history[currentIndex]}
            className="w-full h-full rounded-md border-2 border-gray-600"
            title="Blog Content"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
