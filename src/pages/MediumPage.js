import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMediumPosts } from "../network/medium";
import loadingIcon from "../assets/gif/Book_loading_gif.gif"
function MediumPage({ setActiveIcon }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPost, setExpandedPost] = useState(null);
  const navigate = useNavigate();

  // Profile info (static / you can fetch dynamically later)
  const profile = {
    name: "Nikhil Kashyap",
    url: "https://medium.com/@nikkashyap021",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/5968/5968906.png", // Medium icon or your avatar
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchMediumPosts();
      setPosts(data);
      setLoading(false);
    };
    getPosts();
  }, []);

  const handleClose = () => {
    setActiveIcon(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full p-2">
      <div className="flex flex-col bg-black/80 border-4 border-gray-700 rounded-xl w-full h-full">

        {/* Top bar */}
        <div className="flex items-center justify-between bg-gray-900 rounded-t-xl h-10 px-3 flex-shrink-0">
          <div className="flex gap-2">
            <span
              onClick={handleClose}
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
            />
          </div>
        </div>

        {/* Profile header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-700">
          <img
            src={profile.avatar}
            alt="Medium Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold text-white">{profile.name}</h1>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              {profile.url}
              
            </a>
          </div>
        </div>

        {/* Posts / iframe-like section */}
        <div className="flex-1 overflow-auto mt-3 mb-3 pt-4 pb-4 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center h-full text-white text-lg">
              
               <img src={loadingIcon} alt="book_loading" className="w-10 h-10" />
              </div>
          ) : (
            posts.map((post, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl shadow cursor-pointer transition-all duration-300 w-full max-w-3xl mx-auto"
                onClick={() =>
                  setExpandedPost(expandedPost === idx ? null : idx)
                }
              >
                <h2 className="text-lg font-bold text-gray-900 mb-1">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  By {post.author || "Unknown"} on{" "}
                  {new Date(post.pubDate).toDateString()}
                </p>

                {/* Scrollable content (iframe-like) */}
                <div
                  className={`prose max-w-none text-gray-800 border rounded-lg p-2 mt-2 mb-2 ${
                    expandedPost === idx ? "h-80" : "h-20"
                  }`}
                  style={{
                    overflowY: "auto",
                    overflowX: "auto",
                    width: "100%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      expandedPost === idx ? post.content : post.description,
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MediumPage;
