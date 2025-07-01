'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.',
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes—all virtual sessions are conducted via Zoom.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice is required for cancellations or rescheduling.',
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="bg-[#96e2f5e4]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-white tracking-wide">
            Dr. Serena Blake
          </div>
          <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
            <li><a href="#fees" className="hover:text-blue-400 transition">Fees</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 relative"
        style={{ backgroundImage: "url('/serena-bg.gif')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-center text-white max-w-2xl space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-300 text-transparent bg-clip-text font-serif">
            Compassionate Therapy for Healing and Growth
          </h1>


          <h2 className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
            Dr. Serena Blake, PsyD – Clinical Psychologist in Los Angeles
          </h2>
          <Link
            href="/book-session"
            className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          >
            Book a Free Consult
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gray-50" id="about">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/serena-headshot.png"
            alt="Dr. Serena Blake"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
              About Dr. Serena Blake
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She specializes in helping individuals navigate anxiety, relationship challenges, and trauma recovery using a blend of evidence-based techniques and compassionate, client-focused care.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              She received her doctorate in Clinical Psychology from Pacifica Graduate Institute, with additional training in trauma-informed therapy, cognitive-behavioral techniques (CBT), and mindfulness-based stress reduction (MBSR).
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Dr. Blake believes that healing is not one-size-fits-all. She works collaboratively with each client, tailoring treatment to their unique goals, history, and strengths. Her warm, grounded presence makes clients feel heard, understood, and empowered to take meaningful steps toward change.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Whether you meet in her calming Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space where you can grow into your most resilient, authentic self.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative py-24 px-6 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/therapy-texture.gif')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <h3 className="text-5xl font-bold text-center mb-16 drop-shadow-md bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 text-transparent bg-clip-text font-serif">
            Services Offered
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Anxiety & Stress Management",
                desc: "Tools to manage overwhelm, panic, and chronic worry.",
                extra:
                  "Includes guided breathing, CBT strategies, and mindfulness training to help regain emotional balance.",
                image: "/anxiety.jpeg",
              },
              {
                title: "Relationship Counseling",
                desc: "Support for couples or individuals navigating relationships.",
                extra:
                  "Strengthen communication, rebuild trust, and explore healthy boundaries in romantic or family dynamics.",
                image: "/relationship.png",
              },
              {
                title: "Trauma Recovery",
                desc: "Healing from past experiences using evidence-based approaches.",
                extra:
                  "Using trauma-informed care, EMDR techniques, and somatic awareness to help you feel safe and whole again.",
                image: "/trauma.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
                />
                <h4 className="text-2xl font-bold mb-2 text-sky-200">{s.title}</h4>
                <p className="mb-2 text-blue-100 font-medium">{s.desc}</p>
                <p className="text-blue-200 text-sm italic">{s.extra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 text-transparent bg-clip-text font-serif">
            Frequently Asked Questions
          </h3>


          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-2xl shadow-xl border border-blue-200 backdrop-blur-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center text-lg font-semibold text-blue-900 hover:bg-blue-50 rounded-t-2xl transition"
                >
                  {faq.question}
                  <span
                    className={`text-2xl font-bold transition-transform duration-300 ${openFAQ === index ? "rotate-45 text-blue-600" : "text-gray-400"
                      }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`px-6 pb-5 text-blue-800 text-base leading-relaxed transition-all duration-300 ease-in-out ${openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quote */}
      <section
        className="relative py-32 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/quote-bg.gif')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed drop-shadow-md">
            &quot;Healing doesn&apos;t mean the damage never existed. It means the damage no longer controls your life.&quot;
          </p>
          <p className="mt-6 text-lg font-medium text-blue-200">– Dr. Serena Blake</p>
        </div>
      </section>

      {/* Fees */}
      <section className="py-24 px-6 bg-white" id="fees">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-sky-300 via-blue-800 to-indigo-800 text-transparent bg-clip-text font-serif drop-shadow-md">
            Session Fees
          </h3>


          <p className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">💳 $200 <span className="text-base font-normal text-gray-700">/ Individual Session</span></p>
          <p className="text-xl md:text-2xl font-semibold text-blue-700">💑 $240 <span className="text-base font-normal text-gray-700">/ Couples Session</span></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12 px-4 md:px-6" id="contact">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h3 className="text-4xl md:text-4xl font-extrabold font-serif bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text drop-shadow-lg">
            Contact & Booking
          </h3>

          <p className="text-lg">1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p className="text-lg">📞 (323) 555-0192</p>
          <p className="text-lg">📧 <a href="mailto:serena@blakepsychology.com" className="underline text-blue-400 hover:text-blue-300">serena@blakepsychology.com</a></p>
          <div className="pt-4 text-base">
            <p className="font-semibold text-lg font-serif">Office Hours</p>
            <p className="text-gray-300">In-person: Tue & Thu, 10 AM–6 PM</p>
            <p className="text-gray-300">Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
          <Link href="/book-session" className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
            Book a Free Consult
          </Link>
          <p className="mt-10 text-sm text-gray-500 font-mono tracking-wide">
            © {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
