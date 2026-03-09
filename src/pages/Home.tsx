import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white dark:bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Certified Sanitation Experts
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-charcoal dark:text-white leading-tight mb-6">
                Building South Sudan's Future — <span className="text-primary">One Project at a Time</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
                Professional sanitation and construction services dedicated to quality, hygiene, and sustainable infrastructure development across the nation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">Our Services</Link>
                <Link to="/contact" className="bg-background-light dark:bg-slate-800 text-charcoal dark:text-white px-8 py-4 rounded-lg font-bold text-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all">Contact Us</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Construction site in South Sudan" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYFdhzrPU1DMQtu8VzSp0Iz0l9j2inRbPd-aWPOlrWTe2TuXGRYRe57WzEOklc-VjUrYBubpfkNyMM6Zip3uTwtp_hCLUwWwu4Pa0TOpk5rMDw7CCaGG7DVCwpG0Kt3V-f1I92bZV0-vLsIGyjR4b-gZKzzOBcRC1bIwGSCFxF_x5cFPVCjD6fLS5CKH7Gapu_qNYIVUnVoOihK9mOioBJfpoxdzLZmSm16OW2s3e4OJ9B-qUDQC53B8V9SxnB1VJztWHICFfhmhw"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl hidden sm:block border border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal dark:text-white">100%</div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-tighter">Quality Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-charcoal dark:bg-black py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Testimonials */}
      <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* CTA Banner */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
