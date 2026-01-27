import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Welcome to 120 AGES!",
      content: [
        "These terms and conditions outline the rules and regulations for the use of 120 AGES’s Website, located at https://120ages.com/.",
        "By accessing this website, we assume you accept these terms and conditions. Do not continue to use 120 AGES if you do not agree to take all of the terms and conditions stated on this page."
      ]
    },
    {
      title: "Cookies",
      content: [
        "The website uses cookies to help personalize your online experience. By accessing 120 AGES, you agree to use the required cookies.",
        "A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.",
        "We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional cookies. There are some required cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required cookies, you also accept third-party cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website."
      ]
    },
    {
      title: "License",
      content: [
        "Unless otherwise stated, 120 AGES and/or its licensors own the intellectual property rights for all material on 120 AGES. All intellectual property rights are reserved. You may access this from 120 AGES for your own personal use subjected to restrictions set in these terms and conditions.",
        "You must not:",
        "• Copy or republish material from 120 AGES",
        "• Sell, rent, or sub-license material from 120 AGES",
        "• Reproduce, duplicate, or copy material from 120 AGES",
        "• Redistribute content from 120 AGES",
        "This Agreement shall begin on the date hereof."
      ]
    },
    {
      title: "Comments",
      content: [
        "Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. 120 AGES does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of 120 AGES, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.",
        "To the extent permitted by applicable laws, 120 AGES shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
        "120 AGES reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.",
        "You warrant and represent that:",
        "• You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.",
        "• The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party.",
        "• The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.",
        "• The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
        "You hereby grant 120 AGES a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media."
      ]
    },
    {
      title: "Hyperlinking to our Content",
      content: [
        "The following organizations may link to our Website without prior written approval:",
        "• Government agencies",
        "• Search engines",
        "• News organizations",
        "• Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses",
        "• System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website",
        "These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.",
        "We may consider and approve other link requests from the following types of organizations:",
        "• Commonly-known consumer and/or business information sources",
        "• Dot.com community sites",
        "• Associations or other groups representing charities",
        "• Online directory distributors",
        "• Internet portals",
        "• Accounting, law, and consulting firms",
        "• Educational institutions and trade associations",
        "We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of 120 AGES; and (d) the link is in the context of general resource information."
      ]
    },
    {
      title: "Content Liability",
      content: [
        "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend 120 AGES against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."
      ]
    },
    {
      title: "Reservation of Rights",
      content: [
        "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
      ]
    },
    {
      title: "Removal of links from our website",
      content: [
        "If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly.",
        "We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date."
      ]
    },
    {
      title: "Disclaimer",
      content: [
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:",
        "• Limit or exclude our or your liability for death or personal injury",
        "• Limit or exclude our or your liability for fraud or fraudulent misrepresentation",
        "• Limit any of our or your liabilities in any way that is not permitted under applicable law",
        "• Exclude any of our or your liabilities that may not be excluded under applicable law",
        "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.",
        "As long as the website and the information and services on the website are provided free of charge, 120 AGES will not be liable for any loss or damage of any nature."
      ]
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
              Privacy Matters
            </h1>
            <p className="font-ultra text-sm md:text-base tracking-widest uppercase opacity-60 max-w-2xl mx-auto">
              Your data is safe with 120ages. Clear, simple privacy policies tailored for you.
            </p>
            <div className="mt-8 font-ultra text-[10px] tracking-[0.3em] uppercase opacity-40">
              Last Updated: January 28, 2026
            </div>
          </div>

          <div className="space-y-16">
            <div className="grid gap-16">
              {sections.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="font-ultra text-2xl uppercase tracking-widest flex items-center gap-4">
                    <span className="text-forest-green text-sm">0{index + 1}</span>
                    {section.title}
                  </h2>
                  <div className="h-0.5 bg-muted-brown/10 w-full" />
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-brown/70 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 p-12 bg-muted-brown/5 border-2 border-muted-brown/10 text-center space-y-6">
              <h3 className="font-ultra text-xl uppercase tracking-widest">Questions?</h3>
              <p className="text-muted-brown/60 max-w-md mx-auto">
                If you have any questions about these Terms & Conditions or our Privacy Policy, please contact us at:
              </p>
              <a 
                href="mailto:hello@120ages.com" 
                className="inline-block font-ultra text-lg text-forest-green border-b-2 border-forest-green hover:text-muted-brown hover:border-muted-brown transition-all"
              >
                hello@120ages.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
