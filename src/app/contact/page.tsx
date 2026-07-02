import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import AnimatedSection from '@/components/animated-section';
// import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="overflow-hidden relative pt-32 pb-48 bg-primary text-primary-foreground">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 bg-white/5" />
        <div className="container relative z-10 px-6 mx-auto">
          <AnimatedSection direction="up" className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
              Get in Touch
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Have a question about our manufacturing capabilities or want to
              discuss a partnership? Our team of experts is ready to help you
              push the boundaries of performance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container relative z-20 px-6 mx-auto -mt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            <AnimatedSection direction="right" delay={0.1}>
              <div className="p-8 rounded-3xl border shadow-xl bg-card border-border shadow-black/5">
                <h3 className="flex gap-3 items-center mb-8 text-2xl">
                  <MessageSquare className="text-primary" /> Contact Details
                </h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-foreground">Our Location</p>
                      <p className="text-sm text-secondary-foreground">
                        Semarang - Solo Toll Road No.19, RT.001/RW.001, Samban,
                        Bawen, Semarang Regency, Central Java 50661
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-foreground">Phone Number</p>
                      <p className="text-sm text-secondary-foreground">
                        +6298 523 715
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-foreground">Email Address</p>
                      <p className="text-sm text-secondary-foreground">
                        dinar@mgmglove.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-foreground">Business Hours</p>
                      <p className="text-sm text-secondary-foreground">
                        Mon to Fri: 07:30 - 15:30 (GMT+7)
                      </p>
                      <p className="text-sm text-secondary-foreground">
                        Saturday: 07:30 - 13:00 (GMT+7)
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
              className="p-8 rounded-3xl border bg-primary/5 border-primary/20"
            >
              <h4 className="mb-2 text-lg">Technical Support</h4>
              <p className="mb-4 text-sm text-secondary-foreground">
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
              className="p-10 h-full rounded-3xl border shadow-xl bg-card border-border shadow-black/5"
            >
              <h3 className="mb-8 text-3xl font-extrabold">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-sm text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="px-5 py-4 w-full rounded-xl border-transparent transition outline-none bg-muted focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="px-5 py-4 w-full rounded-xl border-transparent transition outline-none bg-muted focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm text-foreground">
                    Subject
                  </label>
                  <select className="px-5 py-4 w-full rounded-xl border-transparent transition appearance-none outline-none bg-muted focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary">
                    <option>Manufacturing Inquiry</option>
                    <option>Bulk Ordering</option>
                    <option>Sustainability Partnerships</option>
                    <option>Career Opportunities</option>
                    <option>General Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your requirements..."
                    className="px-5 py-4 w-full rounded-xl border-transparent transition outline-none resize-none bg-muted focus:bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-extrabold py-5 rounded-xl hover:bg-primary/90 transition hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                >
                  <Send size={20} /> Submit Details
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container px-6 mx-auto">
        <AnimatedSection
          direction="up"
          className="rounded-3xl overflow-hidden h-100 border border-border relative group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.0532852920298!2d110.41774553380962!3d-7.205079955989248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7086afe10c65e5%3A0x6df2459fe32a536d!2sPT.%20Mercindo%20Global%20Manufaktur!5e0!3m2!1sen!2sid!4v1775719225170!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AnimatedSection>
      </section>
    </div>
  );
}
