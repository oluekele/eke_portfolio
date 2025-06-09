'use client'

import Blog from "@/components/Blog";
import useContactStore from "@/store/useCounterStore";
import Project from "@/components/Project"


const BlogProjects = () => {
  const { activeTab, setActiveTab } = useContactStore();

  return (
    <div className=" md:px-6">
      {/* Tabs */}
      <div className="flex space-x-6 text-xl font-semibold mb-5">
        <button
          onClick={() => setActiveTab('blog')}
          className={`transition border-b-2 pb-1 ${
            activeTab === 'blog'
              ? 'text-orange-600 border-orange-600'
              : 'text-gray-500 border-transparent hover:border-gray-300'
          }`}
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`transition border-b-2 pb-1 ${
            activeTab === 'projects'
              ? 'text-orange-600 border-orange-600'
              : 'text-gray-500 border-transparent hover:border-gray-300'
          }`}
        >
          Projects
        </button>
      </div>

      <hr className="mb-8 border-t border-[#d6d0d05e]" />

      {/* Conditional Rendering */}
      {activeTab === 'blog' ? (
        <div className="flex items-center w-full gap-6">
          
          <Blog />
          
        </div>
      ) : (
        <div className="flex items-center w-full gap-6">
          <Project />
        </div>
      )}
    </div>
  );
};

export default BlogProjects;
