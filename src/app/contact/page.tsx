import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
import Image from 'next/image';
// import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-48 text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection direction="up" className="max-w-2xl">
            <h1 className="text-4xl font-extrabold md:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Have a question about our manufacturing capabilities or want to
              discuss a partnership? Our team of experts is ready to help you
              push the boundaries of performance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-6 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-card border border-border p-8 rounded-3xl shadow-xl shadow-black/5">
                <h3 className="text-2xl mb-8 flex items-center gap-3">
                  <MessageSquare className="text-primary" /> Contact Details
                </h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-foreground mb-1">Our Location</p>
                      <p className="text-secondary-foreground text-sm">
                        123 Manufacturing Way, Tech District, IC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-foreground mb-1">Phone Number</p>
                      <p className="text-secondary-foreground text-sm">
                        +1 (234) 567-890
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-foreground mb-1">Email Address</p>
                      <p className="text-secondary-foreground text-sm">
                        sales@mgmsports.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-foreground mb-1">Business Hours</p>
                      <p className="text-secondary-foreground text-sm">
                        Mon - Fri: 08:00 - 18:00 (GMT+7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Support Box */}
            <AnimatedSection
              direction="right"
              delay={0.2}
              className="bg-primary/5 border border-primary/20 p-8 rounded-3xl"
            >
              <h4 className="text-lg mb-2">Technical Support</h4>
              <p className="text-secondary-foreground text-sm mb-4">
                Are you an existing client needing support for custom gear?
              </p>
              <a
                href="mailto:support@mgmsports.com"
                className="text-primary hover:underline"
              >
                support@mgmsports.com
              </a>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection
              direction="left"
              delay={0.2}
              className="bg-card border border-border p-10 rounded-3xl shadow-xl shadow-black/5 h-full"
            >
              <h3 className="text-3xl font-extrabold mb-8">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-foreground ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-muted border-transparent rounded-xl px-5 py-4 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full bg-muted border-transparent rounded-xl px-5 py-4 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-foreground ml-1">
                    Subject
                  </label>
                  <select className="w-full bg-muted border-transparent rounded-xl px-5 py-4 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none appearance-none">
                    <option>Manufacturing Inquiry</option>
                    <option>Bulk Ordering</option>
                    <option>Sustainability Partnerships</option>
                    <option>Career Opportunities</option>
                    <option>General Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-foreground ml-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-muted border-transparent rounded-xl px-5 py-4 focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-extrabold py-5 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                >
                  <Send size={20} /> Send Inquiry
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6">
        <AnimatedSection
          direction="up"
          className="rounded-3xl overflow-hidden h-[400px] border border-border relative group"
        >
          <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=70&w=1200"
            alt="Global Map"
            fill
            className="object-cover grayscale opacity-50 transition-all group-hover:grayscale-0 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="relative h-full flex items-center justify-center">
            <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 animate-bounce">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl mb-2">Visit Our Factory</h4>
              <p className="text-sm text-secondary-foreground">
                Interactive map coming soon...
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
