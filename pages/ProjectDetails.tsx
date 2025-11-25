import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS, TEXT_CONTENT } from '../data';
import { X, ZoomIn } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-white">
      {/* Cover Image - Full Width */}
      <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
         <div className="absolute inset-0 bg-watied-purple/10 animate-pulse-slow"></div>
         <img 
            src={project.coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover animate-fade-in"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
            <div className="container mx-auto">
                <RevealOnScroll animation="slide-in-right">
                    <span className="bg-watied-brown px-4 py-1 text-sm font-bold rounded mb-4 inline-block shadow-lg">
                        {project.category}
                    </span>
                </RevealOnScroll>
                <RevealOnScroll animation="fade-up" delay={200}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{project.title}</h1>
                </RevealOnScroll>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Description */}
        <RevealOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto mb-20 text-center md:text-justify">
                 <h2 className="text-2xl font-bold text-watied-purple mb-6 text-center">تفاصيل المشروع</h2>
                 <p className="text-lg md:text-xl text-gray-600 leading-loose">
                    {project.description}
                 </p>
            </div>
        </RevealOnScroll>

        {/* Gallery Grid */}
        <div className="mb-20">
            <RevealOnScroll animation="slide-in-right">
                <h3 className="text-2xl font-bold text-watied-olive mb-8 border-r-4 border-watied-purple pr-4">معرض الصور</h3>
            </RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                    <RevealOnScroll key={idx} delay={idx % 3 * 100} animation="fade-up">
                        <div 
                            className="cursor-pointer overflow-hidden rounded-lg relative group aspect-square shadow-sm hover:shadow-lg transition-all"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img 
                                src={img} 
                                alt={`${project.title} ${idx + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                                <ZoomIn size={32} className="transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>

        {/* CTA */}
        <RevealOnScroll animation="scale-up">
            <div className="bg-watied-beige rounded-2xl p-10 text-center border border-watied-olive/20 shadow-lg hover:shadow-xl transition-shadow">
                 <h2 className="text-2xl md:text-3xl font-bold text-watied-purple mb-6">
                    {TEXT_CONTENT.projectCta}
                 </h2>
                 <Link 
                    to="/contact" 
                    className="inline-block bg-watied-brown text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-watied-purple transition-colors shadow-lg hover:-translate-y-1"
                 >
                    تواصل معنا الآن
                 </Link>
            </div>
        </RevealOnScroll>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm">
            <button 
                className="absolute top-6 right-6 text-white hover:text-watied-brown transition-colors z-50 p-2 bg-black/50 rounded-full"
                onClick={() => setSelectedImage(null)}
            >
                <X size={32} />
            </button>
            <img 
                src={selectedImage} 
                alt="Fullscreen view" 
                className="max-h-[90vh] max-w-full object-contain rounded-sm shadow-2xl animate-scale-up" 
            />
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;