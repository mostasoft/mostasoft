"use client";

import React from "react";
import Image from "next/image";

const VideoEditingSection = () => {
  return (
    <section className="bg-[#111] text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Video Editing Team / Example Image */}
        <div className="flex justify-center">
          <Image
            src="/video-editing-team.webp" // 🔹 replace with your video editing image in /public
            alt="Video Editing Team"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-purple-500 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-3 h-3 border border-purple-500"></span>
            Video Content To Captivate Your Audience
          </p>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-snug">
            Professional Video Editing <br /> For Your Brand
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Turn your raw footage into engaging videos that tell your story and captivate your audience. 
            Our team specializes in video editing, color grading, motion graphics, and post-production workflows.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From social media clips to corporate promos, we ensure your video content is visually stunning, 
            polished, and ready to impress viewers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoEditingSection;
