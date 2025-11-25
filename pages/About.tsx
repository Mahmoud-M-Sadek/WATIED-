import React from 'react';
import { TEXT_CONTENT, COMPANY_INFO } from '../data';
import { Target, Layers } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const About: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-watied-purple py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-5"></div>
        <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-watied-beige/80 text-lg">فلسفتنا في تطوير الأعمال</p>
        </RevealOnScroll>
      </div>

      <div className="container mx-auto px-4 py-20">
        <RevealOnScroll animation="fade-up">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-watied-olive/10 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-watied-purple via-watied-brown to-watied-olive rounded-t-2xl"></div>
                
                <div className="flex flex-col items-center mb-10">
                     <RevealOnScroll animation="scale-up" delay={200}>
                        <img src={COMPANY_INFO.logo} alt="Watied" className="w-32 mb-6 hover:scale-105 transition-transform" />
                     </RevealOnScroll>
                     <h2 className="text-2xl font-bold text-watied-purple text-center">وطيد Marketing Solutions</h2>
                </div>
                
                <div className="prose prose-lg text-gray-700 leading-loose whitespace-pre-line text-justify mx-auto">
                    {/* Specific Text as Requested */}
                    <p className="text-xl md:text-2xl font-medium text-watied-olive mb-8 text-center leading-relaxed">
                        {TEXT_CONTENT.aboutPage.split('\n')[0]}
                    </p>
                    
                    <RevealOnScroll delay={300} animation="slide-in-right">
                        <div className="bg-watied-beige p-6 rounded-xl border-r-4 border-watied-brown my-8 hover:shadow-md transition-shadow">
                             <p className="font-bold text-watied-purple text-lg">
                                فلسفتنا بسيطة: نعالج جذور المشكلة… مش المظاهر.
                             </p>
                        </div>
                    </RevealOnScroll>
                    
                    <ul className="space-y-4 mt-8 list-none pr-0">
                        <RevealOnScroll delay={400} animation="fade-up">
                            <li className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                 <div className="bg-watied-purple text-white p-1 rounded-full mt-1 shrink-0">
                                    <Target size={16} />
                                 </div>
                                 <span className="text-lg">نشتغل مع المشاريع اللي عايزة تبني كيان ثابت ومحترم.</span>
                            </li>
                        </RevealOnScroll>
                        <RevealOnScroll delay={500} animation="fade-up">
                             <li className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                 <div className="bg-watied-brown text-white p-1 rounded-full mt-1 shrink-0">
                                    <Layers size={16} />
                                 </div>
                                 <span className="text-lg">نفهم – ندرس – نحلل – نبني – نطلق… بدون لف ودوران.</span>
                            </li>
                        </RevealOnScroll>
                    </ul>
                </div>
            </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default About;