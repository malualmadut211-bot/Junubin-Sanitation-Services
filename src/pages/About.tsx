import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Hero Banner */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-40">
          <img className="w-full h-full object-cover" alt="Modern sanitation facility with professional workers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn9g52zi0lKgt0WiHhDaTsZLr_7xiZMeQLY772JJcgIjbcCSoOEnujJfUEsD0GRZxMPIuaCaO_tBjyzkgMbBNsfQdh2IWyLb0IKJRnVfiXhtGPl9hjIl9QLFqfBggLPCsaLBvfktqZ5Xr-ZEiGPxrBzsPSltpHmCQ4IuHwNhyIeF1ShS9ncEevEpO4CSctDcmNfc8V77cgsOv7l9RuRAk9u8zhgwq2242j7NMfT5dh2OHHFtDIbb7ny6WDdZTdopo_xldTYMJU5-Y"/>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              About Junubin Sanitation Services - <span className="text-primary">Building with Purpose.</span> Serving with Pride.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              Dedicated to providing top-tier sanitation solutions across the region with an unwavering commitment to public health and environmental excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                Our Story <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-auto aspect-[4/3] object-cover" alt="Professional sanitation team standing together smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7gxng13CfbgDeroUpz4cLuUqStvANOo1sIy1p3vbRDYkq9o5rd4mCdyYdRCTUaVw0NoYmjPQTumYXelmmspp9DJKVEJXaM0wzvNkzZ--WapK3WaF1euqAS4qTyFkD4WuWGloVi0lV_XgE9qVsGE2eBFsKDflCJxZ1UoSg4umNSiMiX67wvD-ZqlgeJ2QrNadobvLGrnbSMEuQpzWtXJNjKTLWM-w1ywPnIch521zY674pcjXlieyfgQ4xbDQQmSlb_JIbzwp9QH8"/>
                <div className="absolute bottom-6 right-6 bg-primary p-6 rounded-xl text-white shadow-xl">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">Our Legacy</div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white">A Legacy of Service and Integrity</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                Founded on the principles of integrity and hard work, Junubin Sanitation Services has grown from a local initiative into a leading provider of waste management and sanitation solutions. 
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our journey is defined by our dedication to the communities we serve. We started with a single truck and a vision to clean the city, and today we employ hundreds of professionals across multiple regions, utilizing state-of-the-art technology to ensure a cleaner, healthier future for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-semibold text-charcoal dark:text-slate-200">Certified Experts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">eco</span>
                  <span className="font-semibold text-charcoal dark:text-slate-200">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-4">The Pillars of Our Success</h2>
            <p className="text-slate-600 dark:text-slate-400">Guided by our core principles, we strive to exceed expectations in every project we undertake.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border-t-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To provide sustainable, high-quality sanitation services that promote public health and protect our environment through innovation and community engagement.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border-t-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To be the premier leader in sanitation across the continent, setting global benchmarks for operational excellence and environmental stewardship.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border-t-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">Our Values</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Integrity, Safety, Innovation, and Service. We believe in doing the right thing for our clients, our employees, and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-4">Meet Our Leadership Team</h2>
              <p className="text-slate-600 dark:text-slate-400">The experienced minds behind Junubin's growth and commitment to excellence.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Full Team <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800 aspect-[3/4]">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="CEO in professional suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQTuaGJ0BCnvr4P_lU3s8Ivp-HRl7mwSKLIkskhGiQyhnhMS5VMmdpBfhftos6ubY8yvtH3mEjNODNKS9Cw18EtIzCocCACHBK0s0tlE_Wua5lTucRng4-OENo-_FdhnFyfeS6tWGGlvbRXgB3y9OHdIGYIN342P4YtpXVnnTMpHWLJR2b54qYvA4SuScYKJHhxEMoz8phc1Ly2qhTpJj85T4kCDP32LX1tPfrl0aJ6QFvMsnhyWXYS1sT87Bu8X_Je9Tb9wBQxYg"/>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white">Dr. John Deng</h4>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Founder & CEO</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Over 20 years of experience in public infrastructure management.</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800 aspect-[3/4]">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Female COO in corporate attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDS19sVA46f3WmGzEOlrS4fuE3aGk8G0iIon3vOD5begnybJjNta_laByVEftO1Ek1TflIs-5vEZTSrpfU0lagYHO2QRM2e0nF15F3I_PEGzBgdmGLu34I-eFAE6qKOqYQkK2ZyK2NcfB3hEeNhCtxhkAcezDICBNfApTH7vPEv6CRw0zFn8J7GhAbWPyM2wFI-zSFLBp20AlTC7h74c-QXDsaBTz1rBhfgxvQT2FlpwFifNGDerkz095QkZv9RHMXgkJny7t_8dE"/>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white">Sarah Alier</h4>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Chief Operations Officer</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Driving efficiency and safety standards across all operations.</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800 aspect-[3/4]">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Technical director smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeP800aUwt1lZwf4OhDXkgBbrPdbiYm7s16vyASXUO8r-46-ICzSdgiH12JWear-RexhluZP8liaF-L5Qm-oZoTQMiaJmkjNJIa-D5QJDPp4CMVQ_HK7BjU0FLKqUn4CUQUA4dDSmiouIYal14t0L7iP4hKhMTvIPxtUQ6ZMH6C2OUhyVMDAcvGSXhJPexNjDq2pbsyXkEcn_0e5X25-_oCugGsQHVy4yFUTqAUUOHqdU8gT-9M_ftPVOaYzFZdTGh0cGFMerEgkA"/>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white">Peter Lado</h4>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Technical Director</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Expert in modern waste treatment and recycling technologies.</p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100 dark:bg-slate-800 aspect-[3/4]">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Environmental scientist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzhJVBDzoFtlgp5_rlnISRfDkzdZSUkcONt9e7VZQWuZqfwtHoDRPg92dLSc0cMGGaBYyN_s0Kp1UY0FGcDSEgDRubWEA6XCcOAFOAm2h8_X0e0UV6cpstu1rgI4sVP9Kcrlb9TO5BuDgdERbevYw1DTtzw0kCq-LdBxGsH4TLtjXhNCrHvHH5tqAlKbLVak0HDuXu03otKBpZ1Jgi39hn0Ql3XrBSc76Ujo496UjgJj6tk1vhQjuTC4azEglWhusMHdz1t_Tv3co"/>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white">Grace Nyibol</h4>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Lead Environmentalist</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Ensuring all our processes exceed environmental protection laws.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-12">Our Certified Partners & Affiliations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="h-12 w-32 bg-slate-400/20 rounded-md flex items-center justify-center font-bold text-slate-500">ISO 9001</div>
            <div className="h-12 w-32 bg-slate-400/20 rounded-md flex items-center justify-center font-bold text-slate-500">GREENER</div>
            <div className="h-12 w-32 bg-slate-400/20 rounded-md flex items-center justify-center font-bold text-slate-500">ENV-CORE</div>
            <div className="h-12 w-32 bg-slate-400/20 rounded-md flex items-center justify-center font-bold text-slate-500">MUNICIPAL</div>
            <div className="h-12 w-32 bg-slate-400/20 rounded-md flex items-center justify-center font-bold text-slate-500">ECO-SAFE</div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-primary">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Ready to improve your sanitation standards?</h2>
              <p className="text-white/80">Get in touch with our team for a customized service plan today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/contact" className="bg-charcoal text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all text-center">Contact Us</Link>
              <Link to="/services" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all text-center">Download Brochure</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
