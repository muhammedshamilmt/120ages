import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This may include your name, email address, postal address, phone number, and payment information."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to process your orders, maintain your account, and provide you with information about our products and services. We may also use this information to improve our website and customer service."
    },
    {
      title: "Sharing of Information",
      content: "We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf, such as payment processing and shipping."
    },
    {
      title: "Your Choices",
      content: "You can access and update your account information at any time by logging into your account. You may also opt out of receiving promotional emails from us by following the instructions in those emails."
    },
    {
      title: "Security",
      content: "We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access. However, no security system is impenetrable, and we cannot guarantee the security of our systems."
    },
    {
      title: "Cookies",
      content: "We use cookies to collect information about your browsing activity and to enhance your experience on our website. You can disable cookies in your browser settings, but some features of our website may not function properly."
    }
  ];

  return (
    <main className="min-h-screen bg-vintage-cream text-muted-brown">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-ultra text-xs tracking-[0.5em] text-forest-green uppercase mb-4 block">
              LEGAL DOCUMENT
            </span>
            <h1 className="font-ultra text-5xl md:text-7xl uppercase leading-none tracking-tighter mb-8">
              Privacy Policy
            </h1>
            <p className="font-ultra text-[10px] tracking-widest uppercase opacity-40">
              Last Updated: January 28, 2026
            </p>
          </div>

          <div className="space-y-16">
            <p className="text-xl leading-relaxed italic opacity-80 border-l-4 border-forest-green pl-8 mb-16">
              At 120 Ages, we value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share information when you use our website and services.
            </p>

            <div className="grid gap-16">
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="font-ultra text-2xl uppercase tracking-widest flex items-center gap-4">
                    <span className="text-forest-green text-sm">0{index + 1}</span>
                    {section.title}
                  </h2>
                  <div className="h-0.5 bg-muted-brown/10 w-full" />
                  <p className="text-muted-brown/70 leading-relaxed text-lg pt-2">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 p-12 bg-muted-brown/5 border-2 border-muted-brown/10 text-center space-y-6">
              <h3 className="font-ultra text-xl uppercase tracking-widest">Questions?</h3>
              <p className="text-muted-brown/60 max-w-md mx-auto">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <a 
                href="mailto:privacy@120ages.com" 
                className="inline-block font-ultra text-lg text-forest-green border-b-2 border-forest-green hover:text-muted-brown hover:border-muted-brown transition-all"
              >
                privacy@120ages.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
