import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCV3hXdkmd8VjjOnBJRm8QO7CjWYuK_VwX7ZJGbBfkLoz6KjweBi-ViQ_pd0SrnH9I5xKfWkGaWrg3mKFHMwfUUZHhhaE9c9KBDREocc6uYIDdJCnXqfAgp2ygMZOYy4I4wYyBeHiazdJDP9B4sDUaQRF-xnu_M7qMhpm0wglhCM34c3W1z042AWcXJc0dn9mo06hmGo4IEvpQqSB9cqKjZiysRO9k7zLPIJD3QXmN0RSGK888ZAib3fAOrFSSnJkQ3i6wd0mp12n8')"}}></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-black mb-6 leading-tight">
            Our Services - End-to-End Construction, Plumbing & Sanitation Solutions
          </h1>
          <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Professional, reliable, and sustainable solutions for all your infrastructure and sanitation needs across the region.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform" href="#services">Explore Services</a>
            <Link className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all" to="/contact">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-background-dark" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Construction */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Section 01</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6">General Construction</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                We specialize in high-quality residential, commercial, and industrial construction projects. From foundation to finishing, our expert team ensures structural integrity and aesthetic excellence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Residential Housing Developments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Commercial Office Complexes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Industrial Warehouse Solutions</span>
                </li>
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img className="w-full h-full object-cover" alt="Modern building construction site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcN9JpW06KifCx0G7FBkVTwIj9vPekXukP2IcMm12HV1_zFf59EGK-HYS0L4dvv2jbnSqTXkgdUDlLOo3WSfV1ZKX-Bfe4qvjBhwIKYUvoa8SUFpw3ipsNXxs0rBOiSVDPxkXfRxknj6-d4o2nNRYPSmFmpd5menyYic1s3gKL48_yaAA7GCw2rbyq_K8Q28jfhRRkJdoUfu5_0-M63iREGauqTFbr0flX4u37zkyaKs7AN_gYnveEMpu1fmP4CuMx-bfLH3z8_ro"/>
              </div>
            </div>
          </div>

          {/* Biodigester Septic Tank */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img className="w-full h-full object-cover" alt="Modern plumbing and septic systems" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFLwO_Dw0RDFQIDQG9zVYlK7y8irBQODZa_82bfU2cr3gVmOq9aLN6_0E7xCyRgiMmggilyaMksUUiOiI714FBgLjJxEDWDJCHuk9NbuvFbLVkoD8LXVQ9-1v0_upkWMb-HCOjAOjxjhFPw4DsJ3f2tbOWm-AMw4KbvigmVoBqidRs0Sn4fS4zKIwYoPlUhVgbuYIg0y3-L-Mu25voWsCA8fAOd9tXoN2tKhOo9GZYBgF8mkoysCftWt_gRmNiQrXYB2h1xr3b34"/>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Section 02</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Biodigester Septic Tanks</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Eco-friendly and efficient waste management systems. Our biodigesters are designed to be odorless, space-saving, and environmentally conscious, replacing traditional high-maintenance septic tanks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-background-light dark:bg-slate-800 rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Space Saving</h4>
                  <p className="text-sm">Requires 1/4 the space of traditional tanks.</p>
                </div>
                <div className="p-4 bg-background-light dark:bg-slate-800 rounded-xl">
                  <h4 className="font-bold text-primary mb-2">Eco-Friendly</h4>
                  <p className="text-sm">Produces clean water for irrigation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Plumbing Services */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Section 03</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Plumbing Services</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Comprehensive plumbing solutions for both residential and commercial properties. We handle everything from emergency repairs to full-scale system installations.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold">Leak Detection</span>
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold">Pipe Fitting</span>
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold">Heater Installation</span>
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-semibold">Drain Cleaning</span>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img className="w-full h-full object-cover" alt="Plumber working on metal pipes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZNe3gqUaiJ-moQu0VipfDc8ZuJfCc8w76A8zHTEqyLjfVGNAtoo7XslOJKBm3D7cTYLxP1BENKgjNf511PrfbM62wZXoijNk45mBlWxqy2Om2wDlWtgHirB-uf_GrCthVAOGO_aNJMRXjEPvLtlnm1syPPbmyKbMcWSxeiYaQ_3_X-XqIO7aOKWqwZlg4DptNdRvvD4DuybE77SSTK_q9t3gWvD0G2QLdXegXaqnU_McIBkX5GzpZXAzn7sDDl6z_esa24kQSZ8"/>
              </div>
            </div>
          </div>

          {/* Cleaning Services & Classes */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background-light dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">cleaning_services</span>
              <h3 className="text-2xl font-bold mb-4">Cleaning Services</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Professional sanitation and deep cleaning for industrial sites, offices, and residential complexes following construction or renovation.
              </p>
              <div className="h-48 w-full rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover" alt="Janitorial cleaning team in office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMwKZCSRY9jXo5GwY9FS3FWoZXvYjCrB_V5d3T_TLkfG59CVPwD9Hc-qOitWZCqv25-onTz4JyT9XJnRgrnwnBI16KuKqhOy3RFbsILHmjVCi0Qrx_-_gRrxy4Yd2qCBFzlfnbSqQKNIgme-kJjUf4UFdzLBfwu5jRFF80eMs6O9Hc0U4iUhuu-V7egM0H9auq8wuB4m1pIVNEVmI__7N-ef7iJfjFO6KJDc5csjKmGl8FFBvlhijpjMEuWl8d2Jm7MnFHzAZAyOE"/>
              </div>
            </div>
            <div className="bg-background-light dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">school</span>
              <h3 className="text-2xl font-bold mb-4">Online Classes</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Expert-led certification courses in plumbing, sanitation management, and construction safety. Empowering the next generation of builders.
              </p>
              <div className="h-48 w-full rounded-lg overflow-hidden mb-6">
                <img className="w-full h-full object-cover" alt="Student learning construction online" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfQeb8KN6VJ5NfpY1Ycpirt023EUShhgWlzP5_6UC2e-3Tt2dDMDSardWBwDK585cLo_pIOXJoiWHKJ98QnGx_EGia15cdEfR5Nb56PP7vmpfResR_i_ypY8nAI7-9RgZGGAryirzwkZHVmx81eQZmMwh8bNl_u6Cyf_rWyQkodtsttCjaTH3vXqDzSsi5ehG_htYW9--VaTTlKk3w0QwbzMEZXEgLRrT9ZrDR1Qtut_eKnsGTJrVrsGGnAKajCPSF3XIocWnlkHg"/>
              </div>
            </div>
          </div>

          {/* General Supply */}
          <div className="mt-12 bg-slate-900 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-black mb-4">General Supply Solutions</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Procurement and supply of high-grade construction materials, sanitation equipment, and hardware at competitive prices for projects of all sizes.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <button className="bg-primary text-white w-full py-4 rounded-xl font-bold hover:bg-red-600 transition-colors">Request Catalog</button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-background-light dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">How We Work</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative group text-center">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-primary/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-3xl text-primary">contact_support</span>
              </div>
              <h4 className="text-xl font-bold mb-3">01. Contact</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Reach out via phone, email, or our online form to discuss your project needs.</p>
            </div>
            <div className="relative group text-center">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-primary/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-3xl text-primary">groups</span>
              </div>
              <h4 className="text-xl font-bold mb-3">02. Consultation</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Our experts conduct site visits and provide a detailed strategy and quote.</p>
            </div>
            <div className="relative group text-center">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-primary/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-3xl text-primary">engineering</span>
              </div>
              <h4 className="text-xl font-bold mb-3">03. Execution</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Our professional crew executes the project with strict adherence to quality standards.</p>
            </div>
            <div className="relative group text-center">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-primary/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-3xl text-primary">task_alt</span>
              </div>
              <h4 className="text-xl font-bold mb-3">04. Delivery</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Final inspection and hand-over of the completed project to your satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to start your next project?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Get a free consultation and customized quote from our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:bg-slate-100 transition-colors">Request a Quote</Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
