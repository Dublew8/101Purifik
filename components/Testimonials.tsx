
import React from 'react';

const Testimonials: React.FC = () => {
  const feedback = [
    {
      quote: "Purifik Clean transformed our hospital's sanitation protocol. Their AI-driven staffing ensures we are never under-resourced during peak emergencies.",
      author: "Sarah Jenkins",
      role: "VP of Operations, St. Jude Medical",
      image: "https://picsum.photos/seed/doc1/100/100"
    },
    {
      quote: "The transparency of the Manager Portal is unmatched. I can track compliance across 12 banking branches from a single screen.",
      author: "Markus Vane",
      role: "Regional Director, Sterling Bank",
      image: "https://picsum.photos/seed/banker1/100/100"
    },
    {
      quote: "Their workforce isn't just cleaning staff; they are trained facility specialists who understand industrial safety like nobody else.",
      author: "Elena Rodriguez",
      role: "Facility Lead, Global Logix",
      image: "https://picsum.photos/seed/ind1/100/100"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {feedback.map((f, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="text-blue-600 text-4xl font-serif mb-4">“</div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                {f.quote}
              </p>
              <div className="flex items-center gap-4">
                <img src={f.image} alt={f.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{f.author}</h4>
                  <p className="text-slate-500 text-xs">{f.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
