import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 lg:pb-32 bg-[#fcfcfc] dark:bg-charcoal">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="relative z-10 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fce8e8] dark:bg-red-900/30 text-[#e62b2b] text-xs font-bold uppercase tracking-wider mb-6 mt-8 lg:mt-12">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e62b2b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e62b2b]"></span>
                </span>
                Certified Sanitation Experts
              </div>
              
              <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-[#2a2a2a] dark:text-white leading-[1.15] mb-6">
                Building South Sudan's Future — <br className="hidden lg:block" />
                <span className="text-[#e62b2b]">One Project<br className="hidden lg:block" /> at a Time</span>
              </h1>
              
              <p className="text-lg xl:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Professional sanitation and construction services dedicated to quality, hygiene, and sustainable infrastructure development across the nation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="bg-[#e62b2b] text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-red-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 text-center">
                  Our Services
                </Link>
                <Link to="/contact" className="bg-white dark:bg-slate-800 text-[#2a2a2a] dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-lg font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center">
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[650px] xl:h-[750px] overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl group cursor-pointer">
              <div 
                className="absolute transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/1933cce36d9b3ece785197b7fa8c590e1a8189ef/ChatGPT%20Image%20Mar%209%2C%202026%2C%2008_02_55%20PM.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'right center',
                  width: '200%',
                  height: '120%',
                  top: '-10%',
                  right: '0'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-charcoal dark:bg-black py-12 relative z-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Workers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <section className="py-24 bg-background-light dark:bg-background-dark" id="about">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img alt="Architectural design" className="rounded-xl shadow-lg w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuekDFbotFEv0FIeAVuiOsG3D5N0UrI2-1tr8Nd19i8Wmngn6yDxfYGWXyN_6cwCVri1XnP1fajgOjeQgoGnC1VF8BnD0VqGD6d54Lrfnjmsok3QK1-SWmeTK9Nz9DM9mOTxGp37hILtIRwYfV1ncRbxUrYlXlnSdUnC05V5l9FkUvUpvQ6Zyzw0tQ7fxP81yka1Qtr2ysQ9mcGBseuiC45XQovZvpTQSRvkWSfjcq1eA-gqraF-puQmTOwKi3W5Nk8sESvYFdSnc"/>
                <img alt="Sanitation engineering" className="rounded-xl shadow-lg w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzoVpk0-re6kyZ3W5iX9jF2fj6JR0fqAA5Elg8WQu-f39kTZiTwhm-u1eCt4NvIBP9cIr6xf766WxKdIQ1mfZz9pLCXFVNiGqY5fOBZaQctVaMQAiRQuGWI4fMruVeOQ_ut0GHMdvjM0QRLeZh7F6yfFktP4WcXZq1gfgoiZNGPi2nHyMDhvSa8B5xwl4D4noKVlezaNg4tTO6KvRFzNkuZKPwmdV6eyUl3m4Elh8vhiJXG9WdN7tB_Hz50KKFx5nns33s2mQq45g"/>
              </div>
              <div className="space-y-4">
                <img alt="Worker safety" className="rounded-xl shadow-lg w-full h-48 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrMwgAPJ35OGeXdbnW6j5hWErL_ishLvNnt973uZVDWHTnVH4Gp30sWa0YWGhdiEW8wCSAVvMQigkrD83kl-Fz4PTaPZqU1_vtNIMSBBPRNo3-vw58F2y7ouHa4Acexwd8M3OTjtvys07ERH3NIxlPgssnzb3qEG-IL1aOXNkMkzrrjmW_IbiDYqHuyW3sH5pz3GFZWP0dvmfwdaD0G6t0vIQWUYjr11nnGQp4W3NoQqbKU4NXHLDS3EFxo8NVbqHYpmDqo1f6h8"/>
                <img alt="Building site" className="rounded-xl shadow-lg w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo9L0Mk0JXJvnpnFZQfsv7T4EmyKXCpiQidgAVBhrtP-r4YVgmAGRlMmBiI73OpiqhfWWxUTSbywm73aDgxZUCabcq1Irtu-i3MuRhdV1QrD7JqKd5DQWR9ItFH1KLkgpjA8sQlfotqBM8zi0hN0YsVBJt1-xOkxAo31jYaZl4-cBh512evEoSXvbzCsBpx8TeriRA1IgvB-9nEqiaw-JXCL_tqZTKuIyq95PK_AuT38eSZETH_REg91efaPjw1T-iGf4lKt1W8W8"/>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Who We Are</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-charcoal dark:text-white mb-6">Leading the Way in Regional Infrastructure & Hygiene</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Junubin Sanitation Services is more than just a service provider; we are partners in the progress of South Sudan. With a deep commitment to excellence and community welfare, we provide world-class sanitation and construction solutions tailored to local needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-semibold text-charcoal dark:text-white text-sm lg:text-base">Locally Owned & Operated Professional Teams</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-semibold text-charcoal dark:text-white text-sm lg:text-base">Eco-friendly Sanitation Technologies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-semibold text-charcoal dark:text-white text-sm lg:text-base">Strict Adherence to Safety Standards</span>
                </li>
              </ul>
              <Link to="/about" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Learn More About Our Journey <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-charcoal" id="services">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Services</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-charcoal dark:text-white">Comprehensive Solutions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-background-light dark:bg-slate-800 p-8 rounded-xl hover:bg-primary transition-all duration-300">
              <div className="bg-primary/10 group-hover:bg-white/20 p-4 rounded-lg inline-block mb-6">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">construction</span>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white group-hover:text-white mb-4">General Construction</h4>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 text-sm leading-relaxed mb-6">High-quality residential and commercial building projects from foundation to finish.</p>
              <Link className="text-primary group-hover:text-white font-bold text-sm inline-flex items-center gap-2" to="/services">Details <span className="material-symbols-outlined text-sm">north_east</span></Link>
            </div>
            <div className="group bg-background-light dark:bg-slate-800 p-8 rounded-xl hover:bg-primary transition-all duration-300">
              <div className="bg-primary/10 group-hover:bg-white/20 p-4 rounded-lg inline-block mb-6">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">biotech</span>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white group-hover:text-white mb-4">Biodigester Systems</h4>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 text-sm leading-relaxed mb-6">Modern, eco-friendly waste management solutions for sustainable living environments.</p>
              <Link className="text-primary group-hover:text-white font-bold text-sm inline-flex items-center gap-2" to="/services">Details <span className="material-symbols-outlined text-sm">north_east</span></Link>
            </div>
            <div className="group bg-background-light dark:bg-slate-800 p-8 rounded-xl hover:bg-primary transition-all duration-300">
              <div className="bg-primary/10 group-hover:bg-white/20 p-4 rounded-lg inline-block mb-6">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">plumbing</span>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white group-hover:text-white mb-4">Expert Plumbing</h4>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 text-sm leading-relaxed mb-6">Professional installation and maintenance of water supply and drainage systems.</p>
              <Link className="text-primary group-hover:text-white font-bold text-sm inline-flex items-center gap-2" to="/services">Details <span className="material-symbols-outlined text-sm">north_east</span></Link>
            </div>
            <div className="group bg-background-light dark:bg-slate-800 p-8 rounded-xl hover:bg-primary transition-all duration-300">
              <div className="bg-primary/10 group-hover:bg-white/20 p-4 rounded-lg inline-block mb-6">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">cleaning_services</span>
              </div>
              <h4 className="text-xl font-bold text-charcoal dark:text-white group-hover:text-white mb-4">Cleaning Services</h4>
              <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 text-sm leading-relaxed mb-6">Industrial, commercial, and post-construction deep cleaning services.</p>
              <Link className="text-primary group-hover:text-white font-bold text-sm inline-flex items-center gap-2" to="/services">Details <span className="material-symbols-outlined text-sm">north_east</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Why Choose Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-charcoal dark:text-white mb-8">Committed to Excellence, 24/7</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 bg-white dark:bg-charcoal p-4 rounded-xl shadow-md border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-charcoal dark:text-white mb-2">Expert Team</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our professionals are highly trained and experienced in modern construction and sanitation standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 bg-white dark:bg-charcoal p-4 rounded-xl shadow-md border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-charcoal dark:text-white mb-2">Fair Pricing</h4>
                    <p className="text-slate-600 dark:text-slate-400">We offer competitive rates without compromising on the quality of materials or workmanship.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 bg-white dark:bg-charcoal p-4 rounded-xl shadow-md border border-primary/5">
                    <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-charcoal dark:text-white mb-2">24/7 Availability</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our emergency plumbing and cleaning services are available around the clock to serve you.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-primary rounded-3xl p-1">
              <img alt="Technical drawing" className="rounded-3xl w-full h-[500px] object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1zAe-fplDPy_O5TN80qpkbShshCSJXpDqwqaREhEPxGVom2lvu3IkAGXF6cMRHRDvNWw4l_oS9bmG0fDvilLdLGhoE_gMrK-I5ZxDKSNGLzP__PHL-seDPQZPLerToSXONPZBFMr9oIJVFLOytM6k7cQjOmBpQvHP9S-9BKydUgyl2ZAtHx38ox83KcLk-648HzQ0m-34b5uIbikYAhWo1g5R9iH7Pt9cgxjGZ5R2IY-hKe15FLYuQaCxkVmcwPQYMtag0cz9_Vs"/>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white dark:bg-charcoal">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[#ef2324] text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Work</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-charcoal dark:text-white">Featured Projects</h3>
            </div>
            <div className="flex gap-4">
              <button className="text-slate-400 hover:text-charcoal dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">chevron_left</span>
              </button>
              <button className="text-[#ef2324] hover:text-red-700 transition-colors">
                <span className="material-symbols-outlined text-4xl">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Juba Business Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#ef2324] text-xs font-bold tracking-widest uppercase mb-2">Commercial</span>
                <h4 className="text-2xl font-bold text-white">Juba Business Hub</h4>
              </div>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" alt="Riverside Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#ef2324] text-xs font-bold tracking-widest uppercase mb-2">Residential</span>
                <h4 className="text-2xl font-bold text-white">Riverside Estate</h4>
              </div>
            </div>
            
            <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" alt="Green Energy Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#ef2324] text-xs font-bold tracking-widest uppercase mb-2">Industrial</span>
                <h4 className="text-2xl font-bold text-white">Green Energy Plant</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Testimonials</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-charcoal dark:text-white">What Our Clients Say</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-charcoal p-8 rounded-2xl shadow-xl relative">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-6">format_quote</span>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 italic">"Junubin Services transformed our office building's sanitation system. Their team was professional, timely, and the quality of the biodigester they installed is unmatched."</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Client 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlMyEgyDt7YdFpyYfyAxIF7Tcf8LUNsJJLAohJYk-mMt9T2MdA2TNpOITEnMfcfk5p1Zc5xbuFuLyFGouiNo7rC674ddEfEitSUEIZOORZ4Nfv1KRewL0q0v431z9HsGnO0jrCG134Envqm-zjW0NZmxsBdv-jKHhw7qtgkNHiFSBdMCAnxgoUVpuw8_K01eDIDpMxDLDGMqPGAaPbcKvVe5zrV3OoQ1TAFaIb7QMkFkretR4r8eXL1rzHims_jqynNe1-ISnlNGg"/>
                </div>
                <div>
                  <div className="font-bold text-charcoal dark:text-white">Emmanuel Laku</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">Director, Laku Holdings</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-charcoal p-8 rounded-2xl shadow-xl relative">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-6">format_quote</span>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 italic">"The best construction team in South Sudan. They built our family home and handled all plumbing with incredible precision. Highly recommended for any structural work."</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Client 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVA8u1OSRVh0asQzmItMJ4vC0lbbKp6adVG_wEgsnctXeZ4IomoRkG1jsOOsuie0mRGNbMOu4Z2aEnnX3YtOF9XUs7j-nbTfthIfY8IHtx2FsHZYImIHqvjcXn257rjTXBi9xAmiU1tV3j0G3BhEOhUKqsqi079On78qW4E4Irkhd01-dtyUgP9YeVpH7skkJtThOt5pasq3Jr8ujSa3sBEffW25UkawqVCPB0Eq6QhUK-PVeCsIWPkHvELB-vM7ShWTGCrUMpviI"/>
                </div>
                <div>
                  <div className="font-bold text-charcoal dark:text-white">Achol Deng</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">Homeowner</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-charcoal p-8 rounded-2xl shadow-xl relative lg:col-span-1 md:col-span-2 lg:block">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-6">format_quote</span>
              <div className="flex text-primary mb-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 italic">"Reliable and efficient. Their 24/7 plumbing support has saved us from major water damage multiple times. Their maintenance team is top-notch."</p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Client 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqFKdf-7c2CNppqiDQQ-xZUqmYzKFHFf_IKQjZffWH2fGlV-t-PuMbOJMe5ytYrvaz6DPeH_lGO4X2a3lUcyyl8sC99A23nGCOyG7RaAjDADDZ_wVNOJv_T9x_hW6BjTGPNFiS-_CWw2yflQCByZHyzUgvQ88xyqPtpKhforpHc-UM1gJYa4Hz-p2E7yP6_OKnoqJ5pLgobY_q9TiP0DyRTdp4tVB2Kl6Ht4DZGxaV8WzHLtK_F6sL-QR9qm5lZzxZ3QIA4qc8HL0"/>
                </div>
                <div>
                  <div className="font-bold text-charcoal dark:text-white">Peter Kenyi</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">Operations Manager, Nile Hotel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Training */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-[#221f24] rounded-[2rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6">Professional Training</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Learn Construction &<br/>Sanitation from the Experts</h3>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
                We offer certified online and offline classes for aspiring engineers and technicians. Gain practical skills that matter in today's construction market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="bg-[#ef2324] text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all">View All Classes</Link>
                <a href="#" className="bg-[#221f24] border border-slate-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all">Download Brochure</a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative z-10">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-10 space-y-8">
                <div className="flex items-center gap-6 pb-8 border-b border-white/10">
                  <div className="bg-[#ef2324] p-4 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">menu_book</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Biodigester Engineering 101</h4>
                    <p className="text-slate-400 text-sm">Self-paced • 12 Modules</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 pb-8 border-b border-white/10">
                  <div className="bg-[#ef2324] p-4 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">architecture</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Modern Blueprint Reading</h4>
                    <p className="text-slate-400 text-sm">Live Sessions • 8 Weeks</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-[#ef2324] p-4 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">handyman</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Advanced Plumbing Systems</h4>
                    <p className="text-slate-400 text-sm">Certificate • 15 Modules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-primary">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-2">Ready to start your next project?</h2>
              <p className="text-white/80 font-medium">Get a free consultation and quote from our experts today.</p>
            </div>
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-extrabold text-lg shadow-xl hover:scale-105 transition-transform">
              Contact Our Team Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
