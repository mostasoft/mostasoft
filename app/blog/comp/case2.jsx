// components/FacebookBlogFeedCenteredWithFilters.jsx
"use client";

import { useState, useEffect } from "react";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegComment,
  FaRegShareSquare,
  FaPaperPlane,
} from "react-icons/fa";

const filters = [
  "All",
  "React",
  "Next.js",
  "Tailwind",
  "Freelance",
  "WebDev",
  "JavaScript",
  "UI/UX",
  "Performance",
  "Deployment",
];

// Static posts
const initialPosts = [
  {
    id: 1,
    author: "John Doe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "Oct 21, 2025",
    content: "Learning React is fun! Here's my latest project.",
    image: "/Screenshot 2025-10-08 065805.png",
    likes: 0,
    comments: [{ id: 1, user: "Alice", text: "Nice project!" }],
    shares: 0,
    category: "React",
  },
  {
    id: 2,
    author: "Jane Smith",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "Oct 20, 2025",
    content: "Next.js vs Nuxt.js comparison — which one to choose?",
    image: "/Screenshot 2025-10-08 065805.png",
    likes: 0,
    comments: [{ id: 1, user: "Tom", text: "Very helpful!" }],
    shares: 0,
    category: "Next.js",
  },
];

export default function FacebookBlogFeedCenteredWithFilters() {
  // Add one post per filter (SSR-safe)
  const postsForAllFilters = filters
    .filter((f) => f !== "All")
    .map((filter, index) => ({
      id: 100 + index,
      author: `Author of ${filter}`,
      profilePic: `https://randomuser.me/api/portraits/lego/${index}.jpg`,
      date: "Oct 21, 2025",
      content: `This is a post about ${filter}.`,
      image: `/Screenshot 2025-10-08 065805.png`,
      likes: 0,
      comments: [],
      shares: 0,
      category: filter,
    }));

  const allPosts = [...initialPosts, ...postsForAllFilters];

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [posts, setPosts] = useState(allPosts);
  const [likeCounts, setLikeCounts] = useState(
    allPosts.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {})
  );
  const [likedPosts, setLikedPosts] = useState(
    allPosts.reduce((acc, post) => ({ ...acc, [post.id]: false }), {})
  );
  const [showComments, setShowComments] = useState(
    allPosts.reduce((acc, post) => ({ ...acc, [post.id]: false }), {})
  );
  const [commentInputs, setCommentInputs] = useState(
    allPosts.reduce((acc, post) => ({ ...acc, [post.id]: "" }), {})
  );
  const [showShare, setShowShare] = useState(
    allPosts.reduce((acc, post) => ({ ...acc, [post.id]: false }), {})
  );

  // Assign random likes on client
  useEffect(() => {
    const updatedLikes = {};
    posts.forEach((post) => {
      updatedLikes[post.id] = Math.floor(Math.random() * 50);
    });
    setLikeCounts(updatedLikes);
  }, [posts]);

  const handleLike = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: prev[id] + (likedPosts[id] ? -1 : 1),
    }));
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleShare = (id) => {
    setShowShare((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleCommentSend = (id) => {
    if (!commentInputs[id].trim()) return;
    const newComment = {
      id: posts.find((p) => p.id === id).comments.length + 1,
      user: "You",
      text: commentInputs[id],
    };
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
    setCommentInputs((prev) => ({ ...prev, [id]: "" }));
  };

  const filteredPosts =
    selectedFilter === "All"
      ? posts
      : posts.filter((post) => post.category === selectedFilter);

  return (
    <section className="bg-gray-100 min-h-screen py-6">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 px-4">
          {/* Left Sidebar Filters */}
          <div className="hidden md:flex flex-col w-64 sticky top-6 h-fit gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`py-2 px-4 rounded-lg text-left text-sm hover:bg-gray-200 ${
                  selectedFilter === filter
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-white text-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Feed */}
          <div className="flex-1 flex flex-col gap-6 items-center">
            {/* Mobile Sticky Filter */}
            <div className="flex md:hidden gap-3 overflow-x-auto pb-2 sticky top-0 bg-gray-100 z-10 pt-2 px-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`flex-shrink-0 py-2 px-4 rounded-full text-sm border ${
                    selectedFilter === filter
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Posts */}
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md w-full max-w-xl border border-gray-200"
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 p-4">
                  <img
                    src={post.profilePic}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-sm">{post.author}</h3>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-4">
                  <p className="text-gray-800 mb-3 text-sm">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post Image"
                      className="w-full max-h-[500px] object-cover rounded-lg mb-3"
                    />
                  )}

                  {/* Interaction Counts */}
                  <div className="flex justify-between text-gray-500 text-sm mb-2 px-1">
                    <span>{likeCounts[post.id] || 0} Likes</span>
                    <span>{post.comments.length} Comments</span>
                    <span>{post.shares || 0} Shares</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-around border-t border-gray-200 pt-2">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 py-2 w-full justify-center rounded-md hover:bg-gray-100 ${
                        likedPosts[post.id] ? "text-blue-600" : "text-gray-600"
                      }`}
                    >
                      {likedPosts[post.id] ? <FaThumbsUp /> : <FaRegThumbsUp />}{" "}
                      Like
                    </button>
                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center gap-2 py-2 w-full justify-center rounded-md hover:bg-gray-100 text-gray-600"
                    >
                      <FaRegComment /> Comment
                    </button>
                    <button
                      onClick={() => toggleShare(post.id)}
                      className="flex items-center gap-2 py-2 w-full justify-center rounded-md hover:bg-gray-100 text-gray-600"
                    >
                      <FaRegShareSquare /> Share
                    </button>
                  </div>

                  {/* Comments Section */}
                  {showComments[post.id] && (
                    <div className="mt-3 border-t border-gray-200 pt-2 flex flex-col gap-2 text-sm">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex items-center gap-2">
                          <span className="font-semibold">{comment.user}:</span>{" "}
                          <span>{comment.text}</span>
                        </div>
                      ))}

                      {/* Live Comment Input */}
                      <div className="flex items-center mt-2 gap-2">
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          className="border rounded-full px-4 py-1 w-full focus:outline-none focus:ring focus:border-blue-300 text-sm"
                          value={commentInputs[post.id]}
                          onChange={(e) =>
                            handleCommentChange(post.id, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleCommentSend(post.id);
                          }}
                        />
                        <button
                          onClick={() => handleCommentSend(post.id)}
                          className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white"
                        >
                          <FaPaperPlane />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Share Popup */}
                  {showShare[post.id] && (
                    <div className="mt-3 p-3 bg-gray-50 border rounded-lg text-sm text-gray-700">
                      <p className="mb-1">Share this post via link:</p>
                      <input
                        type="text"
                        readOnly
                        value={`https://yourwebsite.com/post/${post.id}`}
                        className="mt-1 w-full border px-2 py-1 rounded focus:outline-none text-xs"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Spacer */}
          <div className="hidden md:block w-64"></div>
        </div>
      </div>
    </section>
  );
}
