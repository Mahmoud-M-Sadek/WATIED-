
import React, { useState, useRef } from 'react';
import { Briefcase, UploadCloud, Send, Link as LinkIcon, DollarSign, User } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import RevealOnScroll from '../components/RevealOnScroll';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    salary: '',
    portfolio: '',
    bio: ''
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
      // Note: We can't actually set the file input value programmatically for security reasons,
      // but we store the name to show it to the user.
      // Since we are sending via WhatsApp, we only need the user to know they need to attach it there.
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const message = `*طلب انضمام لفريق WATIED*%0a` +
      `--------------------------------%0a` +
      `*الاسم:* ${formData.name}%0a` +
      `*المسمى الوظيفي:* ${formData.position}%0a` +
      `*الراتب المتوقع:* ${formData.salary}%0a` +
      `*رابط الأعمال (Portfolio):* ${formData.portfolio}%0a` +
      `--------------------------------%0a` +
      `*نبذة مختصرة:*%0a${formData.bio}%0a` +
      `--------------------------------%0a` +
      `*(مرفق السيرة الذاتية CV)*`; // Reminder for the user

    const whatsappUrl = `${COMPANY_INFO.whatsapp}?text=${message}`;
    
    // Alert the user to attach the file manually in WhatsApp
    if (confirm("سيتم تحويلك الآن إلى واتساب لإرسال البيانات.\n\nتنبيه هام: يرجى إرفاق ملف السيرة الذاتية (CV) يدوياً داخل المحادثة.")) {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-watied-beige">
      {/* Hero Section */}
      <div className="bg-watied-purple py-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-watied-brown/10 rounded-full blur-3xl animate-float-delayed"></div>
        <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">انضم لفريقنا</h1>
            <p className="text-watied-beige/80 text-lg relative z-10 max-w-2xl mx-auto">
                نبحث دائماً عن المبدعين لبناء قصص نجاح جديدة. هل لديك الموهبة؟ مكانك معنا.
            </p>
        </RevealOnScroll>
      </div>

      <div className="container mx-auto px-4 py-16">
        <RevealOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-watied-purple to-watied-brown"></div>
            
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <Briefcase className="text-watied-purple" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">بيانات التوظيف</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الاسم بالكامل</label>
                <div className="relative">
                    <User className="absolute top-3 right-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="اكتب اسمك هنا"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pr-10 pl-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                </div>
              </div>

              {/* Position & Salary Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">المسمى الوظيفي (Position)</label>
                  <div className="relative">
                      <Briefcase className="absolute top-3 right-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="position"
                        required
                        placeholder="مثال: Graphic Designer"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full pr-10 pl-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الراتب المتوقع (Salary)</label>
                  <div className="relative">
                      <DollarSign className="absolute top-3 right-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="salary"
                        required
                        placeholder="مثال: 5000 EGP"
                        value={formData.salary}
                        onChange={handleInputChange}
                        className="w-full pr-10 pl-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                  </div>
                </div>
              </div>

              {/* Portfolio Link */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رابط معرض الأعمال (Portfolio URL)</label>
                <div className="relative">
                    <LinkIcon className="absolute top-3 right-3 text-gray-400" size={20} />
                    <input
                      type="url"
                      name="portfolio"
                      placeholder="https://behance.net/..."
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      dir="ltr"
                      className="w-full pr-10 pl-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-right"
                    />
                </div>
              </div>

              {/* CV Upload (Visual + Drag & Drop) */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">السيرة الذاتية (CV)</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                    isDragging 
                        ? 'border-watied-purple bg-watied-purple/10 scale-[1.02]' 
                        : fileName 
                            ? 'border-watied-purple bg-watied-purple/5' 
                            : 'border-gray-300 hover:border-watied-purple hover:bg-gray-50'
                  }`}
                >
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                    />
                    <UploadCloud className={`mx-auto mb-3 transition-colors ${isDragging || fileName ? 'text-watied-purple' : 'text-gray-400'}`} size={40} />
                    {fileName ? (
                        <div className="animate-fade-in">
                            <p className="text-watied-purple font-bold text-lg">{fileName}</p>
                            <p className="text-sm text-gray-500 mt-1">اضغط أو اسحب ملفاً آخر للتغيير</p>
                        </div>
                    ) : (
                        <div>
                            <p className={`font-medium transition-colors ${isDragging ? 'text-watied-purple' : 'text-gray-600'}`}>
                                {isDragging ? 'أفلت الملف هنا' : 'اضغط للرفع أو اسحب الملف هنا'}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                    )}
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">نبذة مختصرة عنك</label>
                <textarea
                  name="bio"
                  rows={4}
                  required
                  placeholder="حدثنا قليلاً عن خبراتك ومهاراتك..."
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watied-purple focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-watied-purple text-white font-bold py-4 rounded-lg hover:bg-watied-brown transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                إرسال الطلب عبر واتساب <Send size={18} className="group-hover:translate-x-[-4px] transition-transform rotate-180" />
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                * عند الضغط على إرسال، سيتم توجيهك لتطبيق واتساب. يرجى تذكر إرفاق ملف السيرة الذاتية في المحادثة.
              </p>

            </form>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Careers;
