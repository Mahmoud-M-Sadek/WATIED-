import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سيتم الرد عليك في أقرب وقت.');
  };

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-watied-purple py-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">تواصل معنا</h1>
            <p className="text-watied-beige/80 text-lg relative z-10">نحن هنا لبناء نجاحك</p>
        </RevealOnScroll>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
                <RevealOnScroll animation="slide-in-right">
                    <div className="bg-watied-beige p-8 rounded-2xl space-y-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold text-watied-purple mb-4">بيانات الاتصال</h3>
                        
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full text-watied-brown shadow-sm group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">الهاتف / واتساب</p>
                                <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-bold text-gray-800 hover:text-watied-purple dir-ltr block text-right">
                                    {COMPANY_INFO.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full text-watied-brown shadow-sm">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 mb-1">العنوان</p>
                                <p className="text-xl font-bold text-gray-800">
                                    {COMPANY_INFO.location}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-watied-olive/10">
                            <a href={COMPANY_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md">
                                <Facebook size={20} /> فيسبوك
                            </a>
                            <a href={COMPANY_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 bg-pink-600 text-white py-3 rounded-lg text-center font-bold hover:bg-pink-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md">
                                <Instagram size={20} /> انستجرام
                            </a>
                        </div>
                         <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 text-white py-3 rounded-lg text-center font-bold hover:bg-green-600 transition-all hover:-translate-y-1 shadow-md">
                                تواصل واتساب مباشرة
                        </a>
                    </div>
                </RevealOnScroll>

                {/* Map Placeholder */}
                <RevealOnScroll animation="fade-up" delay={200}>
                    <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.577232230894!2d31.3784704!3d31.0379339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Mansoura%20Qism%202%2C%20El%20Mansoura%2C%20Dakahlia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mansoura Map"
                        ></iframe>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Form */}
            <RevealOnScroll animation="slide-in-left" delay={200}>
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-watied-purple/5 rounded-bl-full -z-0"></div>
                    <h3 className="text-2xl font-bold text-watied-purple mb-2 relative z-10">أرسل رسالة</h3>
                    <p className="text-gray-500 mb-8 relative z-10">املأ النموذج وسنتواصل معك لمناقشة مشروعك.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                            <input 
                                type="text" 
                                id="name" 
                                required 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all hover:border-watied-olive/50"
                                placeholder="اسمك الكريم"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                required 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all text-right hover:border-watied-olive/50"
                                placeholder="01xxxxxxxxx"
                                dir="rtl"
                            />
                        </div>

                        <div>
                             <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">الخدمة المطلوبة</label>
                             <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all bg-white hover:border-watied-olive/50">
                                 <option value="">اختر نوع الخدمة</option>
                                 <option value="identity">تطوير هوية بصرية</option>
                                 <option value="marketing">خطة تسويقية</option>
                                 <option value="pricing">تسعير وتطوير أعمال</option>
                                 <option value="other">أخرى</option>
                             </select>
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">تفاصيل المشروع</label>
                            <textarea 
                                id="message" 
                                rows={4} 
                                required 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all hover:border-watied-olive/50"
                                placeholder="حدثنا قليلاً عن مشروعك وأهدافك..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-watied-purple text-white font-bold py-4 rounded-lg hover:bg-watied-brown transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            إرسال الطلب <Send size={18} className="rotate-180" />
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Contact;