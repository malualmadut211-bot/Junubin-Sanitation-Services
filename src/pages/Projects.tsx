import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(34, 16, 17, 0.7) 0%, rgba(34, 16, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3_eRRXUF0gvDzJRRRHwOYinsatmC3MYTLIRHSuVSqTf_fooHkQ-HvXxrDtm6SV7DSxFO_ZG9IOHRkj-9rQeSVEx11jQ4djJd7N1ryguXz6lj35JEkhQKdr4Oo7sVjCXZ3R5-TC88J0YO-0zm2GjhF0gh6MvxWrRp38cNcMkDKh8aJJYP04EntqlufelVMbOmsOeVehFDutm43f-A-sUiVoKPXHPKsCGbxI4QqoPbXhZIFfvijlK9e5-diqekZJ5fa1W8MPNb_t9w")'}}></div>
        <div className="relative w-full flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Our Projects - Quality Work That Stands the Test of Time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Showcasing our commitment to excellence in sanitation, infrastructure, and sustainable waste management across the region.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-white hover:scale-105 transition-transform">
              View Portfolio
            </button>
            <Link to="/about" className="rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all">
              Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-white py-12 dark:bg-slate-900/50 border-y border-primary/5">
        <div className="w-full px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-primary">250+</span>
              <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-widest">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-primary">180+</span>
              <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-widest">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-primary">10+</span>
              <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-widest">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl font-black text-primary">45+</span>
              <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-widest">Team Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Gallery */}
      <section className="w-full px-6 py-20">
        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-white shadow-md shadow-primary/20">All Projects</button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-600 border border-slate-200 hover:border-primary hover:text-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 transition-all">Construction</button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-600 border border-slate-200 hover:border-primary hover:text-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 transition-all">Biodigester</button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-600 border border-slate-200 hover:border-primary hover:text-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 transition-all">Plumbing</button>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-slate-600 border border-slate-200 hover:border-primary hover:text-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 transition-all">Cleaning</button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl bg-slate-200">
            <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Urban drainage system installation site" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZZ9lWpYQ52lrDC_KmRwSQzWFYAgZ3V7lqqC1eTZ2Z0ORLbXqgtWqcLYKYYN5qAt8-oIVhtCd9HL1wtW7lPC8SMYBS_bE9C64waFNfMQRIaVGIz4iSOIEJwwB9JsmzHguOmJgmcnRpZINuynykFSt_206y5wYFs1lzKi_kVQNcfaAUHFYqSjMmOPdYdE6EIHgx3KyWppmwRN2SfLsTDJGq8gfvvtfHDgIVLFvhv8ZKcT1S5K3R-v41huZcUbSC1kTGoh9lr9cWK7w"/>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Construction</span>
              <h3 className="text-xl font-bold text-white">Central Market Drainage</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-0 group-hover:line-clamp-2 overflow-hidden transition-all duration-300">Complete overhaul of the municipal drainage network serving over 5,000 daily visitors.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-slate-200">
            <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Modern biodigester system in a residential garden" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnf7645DJ7e3nd2kvlXxl1UO2i3HTVhVTQ9GuH0Z9fON-3TVYZgxhRWBpfHpObZEzVuJJVpXOxc4DNf0jzuqdnqxQxgbr9l2i9CuzkMfBWq_pk5f2DcADL5JLJa_xiHOdzCGMAEAIEMQG4Eu3q7iCfRZm0v864lwG27l_rrq4C-NRlvAjEWdG7vvTfZSCdQAy5_jgKF3WfHblrGQFyJj2xA8aSGMFQNA5X58iQjKRqOcGKMdJ6a0CCFimPEXj9wLxVsBtjy2A4yaY"/>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Biodigester</span>
              <h3 className="text-xl font-bold text-white">Modern Villa Biodigester</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-0 group-hover:line-clamp-2 overflow-hidden transition-all duration-300">Eco-friendly waste management solution for a luxury residential estate.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-slate-200">
            <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Industrial copper plumbing pipes network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPj4-DLC8HRK_6Wtb7C8V0gaMfbuaRf_AjFs3DUsNmttxqVWcTrWzcTMjSgdTrBj_gIpQKDJ_sxF_2xfQddL-78nQ0xjdXLd2FmKmL9IgEFUXJEl0eErfXLSGzLH0Q3lVXQYB8Aa_ghrNJ-qZWXkVT-n3-dkJH38BG5csUmkwh4xczHuz_bVv9Rk6swE7HeJUk_xnQ65T2_u2ajji1XIPN8EHs255EAEzRGWrcExrg71EGE0imCkMdDOiRhSKb_Rh4i3AO7Ke-DA"/>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Plumbing</span>
              <h3 className="text-xl font-bold text-white">Urban Pipe Network</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-0 group-hover:line-clamp-2 overflow-hidden transition-all duration-300">Rerouting and maintenance of major municipal water supply lines.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-slate-200">
            <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sanitized hospital hallway with shiny floors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo8BEulOp1oYa1B0JFK9oZniePWqvXaaRh2oPgf4OSHAkaCMC7qQgH-HG3Id0IV_qDgo5rHoP8Dlld5GvpujzIHAIg2hLZSYwN5JtiEEB5tMhRyR89mW9au3waz58STm9iWgk39T4mLB5AyC5k6SQfJP87keqgkN16SvwyFUYLX49McE7GPr60YuKkRxkKEjzxPaC8A_6fBjLiLCJ8m22V66gyH9P5AFdnJ2nopDAZFHGMSR1eTveJ7oDkRixaDvHUZIzyQD0naZI"/>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Cleaning</span>
              <h3 className="text-xl font-bold text-white">Hospital Deep Cleaning</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-0 group-hover:line-clamp-2 overflow-hidden transition-all duration-300">Bi-annual deep sanitation and disinfection of critical care units.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-slate-200">
            <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Community water pump in an African village" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeceKuaUiqt-RyXToapmZLopwuYMEIP85VxOaMFWg7oZe1E9XkfCLwdFVb3hXjSEsMWt71Cf29j3TF3yK5JJu6HbUZxLaQIBTkLs_DvAWGbexvxd9O8zFSQeAm2UKyCSoNJLJfRtQxhRNAheqleVVp_RI_l-PSaYyfCcL65aj2N4jAwFos9u6rs5cGW9ov_zTir5NGEaFXbxocq2M5CLHbzInVD3N_W9zY8AkBRjqQ0T9JtA7gQWBcyeuzeQbQiCk7mVkTKlInEug"/>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Construction</span>
              <h3 className="text-xl font-bold text-white">Community Water Point</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-0 group-hover:line-clamp-2 overflow-hidden transition-all duration-300">Solar-powered water extraction and distribution for rural communities.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-slate-200">
            <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Industrial waste treatment facility aerial view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0SYuOvZeDwCQ1j3dO0fJGK5-VXo9XOyY-jbyWMZLxFS2fCKz8jBxw_t6_ueOFDhWzsQIdFVmQew81vjH_NlK7KnFmac0cGyAWHeYDUXHl7lnEPH8Pswo-nmYO-3KKuFifx6G6hpe5ageFJWwpY388I2zwjTyfkSwkfAO9doO_w1FVwziC7dODvn6z8kdai4vNWEz2NTyI1-mvvTLz325eDrfKC7XhjDa4q6BePPrIuyAMbsUsvWgFNxsIg_EkJYgHSDuI4KrzPw"/>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Biodigester</span>
              <h3 className="text-xl font-bold text-white">Industrial Waste System</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-0 group-hover:line-clamp-2 overflow-hidden transition-all duration-300">Large-scale commercial anaerobic digester for food processing waste.</p>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 rounded-lg border-2 border-slate-200 px-8 py-3 text-sm font-bold text-slate-600 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-400 transition-all">
            <span className="material-symbols-outlined text-sm">refresh</span>
            Load More Projects
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-white md:px-16">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-black/10 blur-3xl"></div>
          <h2 className="relative z-10 text-3xl font-black md:text-5xl">Ready to Start Your Project?</h2>
          <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-white/90">
            Whether it's a small repair or a large-scale construction, our team of experts is ready to deliver quality results.
          </p>
          <div className="relative z-10 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="rounded-xl bg-white px-10 py-4 text-base font-bold text-primary shadow-xl hover:scale-105 transition-transform">
              Contact Us Now
            </Link>
            <Link to="/services" className="rounded-xl border-2 border-white/30 bg-white/10 px-10 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
