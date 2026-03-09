import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC0YGn8KB-M_9OTCAkHvU-kEddhO0d_qKYYmWHO-mprpwjTKcTA7I1bOPhgYMADZJAVebIft2AYkgJ9vNQ-7UYxBoBecL3CJqu2vRlTVxuJ3Y_DdQjDv2TXbIMaKPlY6p-_1iAYDbsH04M3wRdgjipIw0mQ51JUGJUZikRC_Ypc11nEj2JbSjXe0iY5C90tvC2nV8uNFX5UFDwx18tq6mQ_uUYijcWPtkFL2H-Cw7oxhfDm1yAJpKzxGU-5viS2rPw5YCjjdjsy_Q')"}}></div>
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Contact Us - We'd Love to Hear from You.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Professional sanitation and waste management services across Juba. Reach out to us anytime for a cleaner community.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full -mt-16 relative z-30 px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-8 shadow-xl dark:bg-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">Juba, South Sudan</p>
              <p className="text-sm text-slate-500">Hai Jalaba, Main Street</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-8 shadow-xl dark:bg-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">phone_in_talk</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="mt-1 text-xl font-bold text-primary">0911 459 117</p>
              <p className="text-sm text-slate-500">Available for emergencies</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-white p-8 shadow-xl dark:bg-slate-800 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Working Hours</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">24/7 Service Available</p>
              <p className="text-sm text-slate-500">Every day of the week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="w-full px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Send us a Message</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Fill out the form below and our professional team will get back to you within 24 hours.</p>
            </div>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <input className="rounded-lg border-primary/20 bg-white p-4 focus:border-primary focus:ring-primary dark:bg-slate-800" placeholder="John Doe" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input className="rounded-lg border-primary/20 bg-white p-4 focus:border-primary focus:ring-primary dark:bg-slate-800" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Phone Number</label>
                  <input className="rounded-lg border-primary/20 bg-white p-4 focus:border-primary focus:ring-primary dark:bg-slate-800" placeholder="09XX XXX XXX" type="tel"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Service Interest</label>
                  <select className="rounded-lg border-primary/20 bg-white p-4 focus:border-primary focus:ring-primary dark:bg-slate-800">
                    <option>Waste Collection</option>
                    <option>Industrial Sanitation</option>
                    <option>Recycling Services</option>
                    <option>Septic Tank Emptying</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Message</label>
                <textarea className="rounded-lg border-primary/20 bg-white p-4 focus:border-primary focus:ring-primary dark:bg-slate-800" placeholder="How can we help you?" rows={4}></textarea>
              </div>
              <button className="w-full rounded-lg bg-primary py-4 text-center text-lg font-bold text-white transition-opacity hover:opacity-90" type="submit">
                Submit Request
              </button>
            </form>
          </div>
          {/* Map */}
          <div className="h-[500px] overflow-hidden rounded-2xl border border-primary/10 shadow-lg lg:h-auto">
            <div className="h-full w-full bg-slate-200 dark:bg-slate-700 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <img alt="Map showing Juba region" className="absolute inset-0 h-full w-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmxK9ikaSS58hEkMklXPqD4S0CVZS03TF18hYjSz6nqGGtbzm21RC0IjlUK3c-uModtwva7V0gAnD4aejiFOlMNywwBLunZe4ygS3qeZ4AZ9nCCI39Wwd-TJzIGxRiI_R3zBCxgoaLVoT7960_dzV0O6eNL_mEpcSUbd0Tk6-fLoiozqiwjS8Ca2QIstWCUimugHm9rhcKW1DYS86wtog80X9ml2NjGXH4iZMuN2V7TfuRg5H9CoYqJx3TgV_pBX-bVp8FVpWuw6Q"/>
                <div className="relative z-10 rounded-xl bg-white/90 p-6 shadow-xl backdrop-blur dark:bg-slate-800/90">
                  <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
                  <h4 className="mt-2 text-xl font-bold">Our Headquarters</h4>
                  <p className="text-slate-600 dark:text-slate-400">Juba, South Sudan</p>
                  <button className="mt-4 text-sm font-bold text-primary underline">Open in Google Maps</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
