import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ArrowLeft } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen">
       <div className="bg-watied-beige py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl -z-0"></div>
        <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-watied-purple mb-4 relative z-10">أعمالنا</h1>
            <p className="text-watied-olive text-lg relative z-10">نماذج حقيقية لتطوير الأعمال</p>
        </RevealOnScroll>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 150} animation="fade-up">
                <Link 
                    to={`/projects/${project.id}`}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                        src={project.coverImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white border-2 border-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">عرض المشروع</span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow relative">
                    <div className="flex justify-between items-start mb-4">
                         <span className="text-xs font-bold tracking-wider text-watied-brown bg-watied-beige px-3 py-1 rounded-full">
                            {project.category}
                         </span>
                    </div>
                    <h3 className="text-2xl font-bold text-watied-purple mb-3 group-hover:text-watied-brown transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 line-clamp-3 mb-6">
                        {project.description}
                    </p>
                    <div className="mt-auto flex items-center text-watied-purple font-bold text-sm">
                        اقرأ التفاصيل <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-2 transition-transform" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 h-1 bg-watied-purple w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;