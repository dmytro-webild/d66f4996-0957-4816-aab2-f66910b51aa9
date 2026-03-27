"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CheckCircle, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Solution", id: "solution" },
        { name: "Features", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "FAQ", id: "faq" },
      ]}
      brandName="AI Receptionist"
      button={{ text: "Get a Demo", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "radial-gradient" }}
      title="Your 24/7 AI Receptionist: The Voice of Tomorrow"
      description="Transform customer interactions with our cutting-edge AI voice agent, offering natural, human-like conversations around the clock."
      kpis={[
        { value: "99%", label: "Customer Satisfaction" },
        { value: "24/7", label: "Availability" },
        { value: "60%", label: "Cost Savings" },
      ]}
      enableKpiAnimation={true}
      tag="Premium AI Agency"
      tagIcon={Sparkles}
      buttons={[
        { text: "Book a Demo", href: "#contact" },
        { text: "Learn More", href: "#solution" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-futuristic-ai-receptionist-interface-s-1774495678348-058d3396.jpg"
      imageAlt="AI receptionist interface showing voice agent interactions"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="solution" data-section="solution">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Seamless, Intelligent, Always On."
      description={[
        "Our AI receptionist voice agent is more than just an automated system; it's an intelligent conversational partner designed to handle your customer interactions with unparalleled naturalness and efficiency.",        "Leveraging advanced natural language processing and voice synthesis, it understands nuances, provides accurate information, and resolves queries, ensuring your clients always feel heard and valued. Experience the future of customer service, today."
      ]}
      buttons={[{ text: "Discover How It Works", href: "#features" }]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Key Capabilities"
      description="Explore how our AI voice agent integrates seamlessly into your operations, providing intelligent support and enhancing customer satisfaction."
      tag="Premium Capabilities"
      tagIcon={CheckCircle}
      accordionItems={[
        { id: "1", title: "Intelligent Automation", content: "Automate routine tasks and workflows, allowing your human team to focus on high-value interactions." },
        { id: "2", title: "Seamless Outbound Calling", content: "Proactively reach out to leads and customers with human-like voice synthesis for follow-ups and appointment scheduling." },
        { id: "3", title: "Smart Lead Qualification", content: "Instantly qualify incoming leads based on custom criteria, ensuring your team only spends time on high-potential opportunities." },
        { id: "4", title: "Efficient Inbound Calling", content: "Provide immediate, 24/7 support for all incoming calls, resolving queries instantly with context-aware responses." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/an-illustration-of-an-ai-voice-agent-int-1774495676217-a1ad5521.png"
      imageAlt="AI voice agent interacting with a customer"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        { id: "1", value: "+40%", title: "Lead Qualification", items: ["Improved lead nurturing", "Faster response times", "Reduced manual effort"] },
        { id: "2", value: "-30%", title: "Call Volume", items: ["Automated routine tasks", "Reduced agent workload", "Efficient query resolution"] },
        { id: "3", value: "+20%", title: "Agent Productivity", items: ["Agents focus on complex cases", "Better resource allocation", "Enhanced team performance"] },
      ]}
      title="Impact & Results"
      description="See the tangible benefits our AI receptionist brings to businesses like yours, driving efficiency and enhancing experience."
      tag="Proven Performance"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Johnson", handle: "@SarahTechCEO", testimonial: "Our customer engagement has never been smoother. The AI receptionist handles calls so naturally, our clients often don't realize it's AI!", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-smiling-fem-1774495675593-fca351f0.png" },
        { id: "2", name: "Michael Chen", handle: "@InnovationHub", testimonial: "The 24/7 availability is a game-changer. We've seen a significant increase in lead qualification and customer satisfaction.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-male-busine-1774495675240-ec7adc6e.png" },
        { id: "3", name: "Emily Rodriguez", handle: "@GrowthMarketer", testimonial: "Implementation was seamless, and the results speak for themselves. This AI is a powerful tool for modern businesses.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-female-mark-1774495675848-1c700ecf.png" },
      ]}
      showRating={true}
      title="What Our Clients Say"
      description="Hear from businesses that have transformed their operations with our AI receptionist."
      animationType="blur-reveal"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      logos={[
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-minimalist-sleek-logo-for-a-global-tec-1774495675177-1d7006db.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-sophisticated-logo-for-a-data-analytic-1774495676145-4d916f28.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-dynamic-logo-for-a-startup-focused-on--1774495675921-5279e341.png"
      ]}
      title="Industry Partners"
      description="We collaborate with visionary companies to define the future of AI communication."
      names={[]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "What makes your AI voice natural?", content: "Our AI uses advanced neural networks and deep learning models to generate speech patterns that mimic human intonation." },
        { id: "2", title: "How difficult is it to integrate?", content: "Integration is designed to be seamless. We offer robust APIs and dedicated support." },
        { id: "3", title: "Can the AI handle complex customer issues?", content: "Yes, our AI is trained on vast datasets and continuously learns to handle complex queries." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/an-illustration-of-a-friendly-ai-chatbot-1774495676474-5e97a515.png"
      mediaAnimation="opacity"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our AI receptionist voice agent."
      tag="Assistance"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "rotated-rays-animated" }}
      tag="Ready to Transform?"
      title="Book Your Free Demo Today"
      description="Experience the power of a 24/7 natural AI receptionist voice agent firsthand. Schedule a demonstration to see how we can elevate your customer experience."
      tagIcon={Zap}
      mediaPosition="left"
      buttonText="Get a Free Demo"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="AI Receptionist"
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "Solution", href: "#solution" }, { label: "Features", href: "#features" }] },
        { items: [{ label: "Testimonials", href: "#testimonials" }, { label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
