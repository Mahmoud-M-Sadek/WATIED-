import React from 'react';
import { SERVICES } from '../data';
import { CheckCircle, BarChart3, Palette, DollarSign, Users, Megaphone, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const getIcon = (id: string) => {
    switch(id) {
        case 'identity': return <Palette size={32} />;
        case 'market-analysis': return <BarChart3 size={32} />;
        case 'marketing-plans': return <Megaphone size={32} />;
        case 'pricing': return <DollarSign size={32} />;
        case 'cx': return <Users size={32} />;
        case 'content': return <Layers size={32} />;
        default: return <CheckCircle size={32} />;
    }
}

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
       <div className="bg-watied-olive/10 py-20 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-watied-purple/5 rounded-full blur-3xl animate-float"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-watied-brown/5 rounded-full blur-3xl animate-float-delayed"></div>
         <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-watied-purple mb-4 relative z-10">خدماتنا</h1>
            <p className="text-watied-olive text-lg max-w-2xl mx-auto px-4 relative z-10">
                نقدم حلولاً جذرية لا تجميلية، تهدف إلى بناء أنظمة مستدامة
            </p>
        </RevealOnScroll>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
                <RevealOnScroll key={service.id} delay={idx * 150} animation="fade-up">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-watied-purple/30 transition-all duration-300 group h-full hover:-translate-y-2">
                        <div className="mb-6 p-4 bg-watied-beige rounded-2xl w-fit text-watied-purple group-hover:bg-watied-purple group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                            {getIcon(service.id)}
                        </div>
                        <h3 className="text-2xl font-bold text-watied-purple mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <div className="w-12 h-1 bg-watied-brown group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>
                </RevealOnScroll>
            ))}
        </div>

        {/* Highlight Section */}
        <RevealOnScroll animation="scale-up" delay={300}>
            <div className="mt-20 bg-watied-purple text-white rounded-3xl p-8 md:p-16 text-center md:text-right relative overflow-hidden shadow-2xl">
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                     <div className="space-y-4">
                        <h2 className="text-3xl font-bold">هدفنا الأسمى</h2>
                        <p className="text-xl opacity-90">تحويل المشروع من مجرد نشاط "قائم" إلى مؤسسة مربحة قابلة للنمو</p>
                     </div>
                     <Link to="/contact" className="bg-white text-watied-purple px-8 py-4 rounded-xl font-bold text-lg hover:bg-watied-beige transition-colors shadow-lg whitespace-nowrap transform hover:scale-105 duration-300">
                        اطلب استشارة مجانية
                     </Link>
                 </div>
                 {/* Decorative */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Services;