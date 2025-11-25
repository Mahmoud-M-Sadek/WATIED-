import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Target, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, TEXT_CONTENT, SERVICES, PROJECTS } from '../data';
import RevealOnScroll from '../components/RevealOnScroll';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-watied-beige overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-watied-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-watied-brown/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/30 rounded-full blur-[100px] -z-0"></div>

        <div className="z-10 max-w-4xl mx-auto space-y-8 relative">
          <RevealOnScroll animation="scale-up">
            <img 
              src={COMPANY_INFO.logo} 
              alt="Watied Logo" 
              className="w-32 md:w-48 mx-auto mb-6"
            />
          </RevealOnScroll>
          
          <RevealOnScroll animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-watied-purple leading-tight">
              {TEXT_CONTENT.home.hero.headline}
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-watied-olive font-medium max-w-2xl mx-auto border-t border-b border-watied-olive/20 py-4">
              {TEXT_CONTENT.home.hero.subline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="px-8 py-4 bg-watied-purple text-white text-lg font-bold rounded-lg hover:bg-watied-brown hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} /> اتصل الآن
              </a>
              <a 
                href={COMPANY_INFO.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                 تواصل واتساب
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <RevealOnScroll animation="slide-in-right">
                <h2 className="text-3xl font-bold text-watied-purple flex items-center gap-2">
                  <span className="w-12 h-1 bg-watied-brown inline-block"></span>
                  عن وطيد
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify mt-4">
                  {TEXT_CONTENT.home.aboutSnippet}
                </p>
                <div className="mt-6">
                  <Link to="/about" className="inline-flex items-center text-watied-brown font-bold hover:text-watied-purple transition-colors">
                    اقرأ المزيد <ArrowLeft size={16} className="mr-2" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-1 gap-4">
               {TEXT_CONTENT.home.whyUs.map((reason, idx) => (
                 <RevealOnScroll key={idx} animation="slide-in-left" delay={idx * 150}>
                   <div className="bg-watied-beige p-6 rounded-lg border-r-4 border-watied-purple flex items-center gap-4 hover:shadow-md transition-shadow">
                      <CheckCircle2 className="text-watied-brown shrink-0" size={24} />
                      <p className="font-semibold text-watied-olive">{reason}</p>
                   </div>
                 </RevealOnScroll>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-watied-beige relative">
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: 'radial-gradient(#771783 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-watied-purple mb-4">خدماتنا</h2>
              <p className="text-watied-olive">حلول متكاملة لبناء وتطوير مشروعك</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <RevealOnScroll key={service.id} delay={idx * 100} animation="fade-up">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-watied-beige text-watied-purple rounded-lg flex items-center justify-center mb-6 group-hover:bg-watied-purple group-hover:text-white transition-colors">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-watied-purple mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <RevealOnScroll delay={200}>
              <Link to="/services" className="px-8 py-3 border-2 border-watied-purple text-watied-purple font-bold rounded-lg hover:bg-watied-purple hover:text-white transition-colors inline-block">
                عرض كل الخدمات
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-watied-purple mb-4">أعمالنا</h2>
                <p className="text-watied-olive">قصص نجاح صنعناها بدقة</p>
              </div>
              <Link to="/projects" className="hidden md:flex items-center text-watied-brown hover:text-watied-purple transition-colors font-bold">
                تصفح كل المشاريع <ArrowLeft size={20} className="mr-2" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project, idx) => (
              <RevealOnScroll key={project.id} delay={idx * 200} animation="scale-up">
                <Link 
                  to={`/projects/${project.id}`}
                  className="group block relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer"
                >
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-watied-brown text-sm font-bold bg-white/90 px-3 py-1 rounded-full w-fit mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{project.title}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                       <p className="text-gray-300 text-sm mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          اضغط لعرض التفاصيل
                       </p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="text-watied-brown font-bold underline">
              تصفح كل المشاريع
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-watied-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots animate-pulse-slow"></div> 
        <div className="container mx-auto px-4 text-center relative z-10">
          <RevealOnScroll animation="scale-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">جاهز تبني مشروع حقيقي؟</h2>
          </RevealOnScroll>
          <RevealOnScroll animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-watied-beige mb-10 max-w-2xl mx-auto opacity-90">
              {TEXT_CONTENT.projectCta}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-watied-brown text-white text-lg font-bold rounded-lg hover:bg-white hover:text-watied-brown transition-colors shadow-lg"
              >
                ابدأ الآن
              </Link>
              <a 
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-watied-purple transition-colors"
              >
                استشارة مجانية
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Home;