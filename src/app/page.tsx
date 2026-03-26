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
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Solution",          id: "solution"},
        {
          name: "Features",          id: "features"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "FAQ",          id: "faq"},
      ]}
      brandName="AI Receptionist"
      button={{
        text: "Get a Demo",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "sparkles-gradient"}}
      title="Your 24/7 AI Receptionist: The Voice of Tomorrow"
      description="Transform customer interactions with our cutting-edge AI voice agent, offering natural, human-like conversations around the clock."
      kpis={[
        {
          value: "99%",          label: "Customer Satisfaction"},
        {
          value: "24/7",          label: "Availability"},
        {
          value: "60%",          label: "Cost Savings"},
      ]}
      enableKpiAnimation={true}
      tag="Elevate Your Business"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Book a Demo",          href: "#contact"},
        {
          text: "Learn More",          href: "#solution"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-futuristic-ai-receptionist-interface-s-1774495678348-058d3396.jpg"
      imageAlt="AI receptionist interface showing voice agent interactions"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="solution" data-section="solution">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Seamless, Intelligent, Always On."
      description={[
        "Our AI receptionist voice agent is more than just an automated system; it's an intelligent conversational partner designed to handle your customer interactions with unparalleled naturalness and efficiency.",        "Leveraging advanced natural language processing and voice synthesis, it understands nuances, provides accurate information, and resolves queries, ensuring your clients always feel heard and valued. Experience the future of customer service, today."]}
      buttons={[
        {
          text: "Discover How It Works",          href: "#features"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Key Capabilities"
      description="Explore how our AI voice agent integrates seamlessly into your operations, providing intelligent support and enhancing customer satisfaction."
      tag="Unmatched Performance"
      tagIcon={CheckCircle}
      accordionItems={[
        {
          id: "1",          title: "Natural Language Understanding",          content: "Our AI comprehends complex queries and context, delivering human-like responses that feel genuinely conversational."},
        {
          id: "2",          title: "Multi-Channel Integration",          content: "Deploy your AI receptionist across phone, web, and chat platforms, ensuring consistent and accessible support."},
        {
          id: "3",          title: "24/7 Global Availability",          content: "Never miss a call or inquiry, our AI operates tirelessly around the clock, catering to international time zones."},
        {
          id: "4",          title: "Scalable & Cost-Effective",          content: "Scale your customer service without limits, reducing operational costs while maintaining high-quality interactions."},
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
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "+40%",          title: "Lead Qualification",          items: [
            "Improved lead nurturing",            "Faster response times",            "Reduced manual effort"],
        },
        {
          id: "2",          value: "-30%",          title: "Call Volume",          items: [
            "Automated routine tasks",            "Reduced agent workload",            "Efficient query resolution"],
        },
        {
          id: "3",          value: "+20%",          title: "Agent Productivity",          items: [
            "Agents focus on complex cases",            "Better resource allocation",            "Enhanced team performance"],
        },
      ]}
      title="Impact & Results"
      description="See the tangible benefits our AI receptionist brings to businesses like yours, driving efficiency and enhancing experience."
      tag="Proven Success"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          handle: "@SarahTechCEO",          testimonial: "Our customer engagement has never been smoother. The AI receptionist handles calls so naturally, our clients often don't realize it's AI!",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-smiling-fem-1774495675593-fca351f0.png",          imageAlt: "Sarah Johnson, CEO"},
        {
          id: "2",          name: "Michael Chen",          handle: "@InnovationHub",          testimonial: "The 24/7 availability is a game-changer. We've seen a significant increase in lead qualification and customer satisfaction.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-male-busine-1774495675240-ec7adc6e.png",          imageAlt: "Michael Chen, Business Owner"},
        {
          id: "3",          name: "Emily Rodriguez",          handle: "@GrowthMarketer",          testimonial: "Implementation was seamless, and the results speak for themselves. This AI is a powerful tool for modern businesses.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-female-mark-1774495675848-1c700ecf.png",          imageAlt: "Emily Rodriguez, Marketing Director"},
        {
          id: "4",          name: "David Kim",          handle: "@OpsEfficiency",          testimonial: "Our team can now focus on more strategic tasks. The AI handles routine inquiries efficiently, boosting our overall productivity.",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-professional-portrait-of-a-male-operat-1774495675322-4da28f57.png",          imageAlt: "David Kim, Operations Manager"},
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
      useInvertedBackground={false}
      logos={[
        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-minimalist-sleek-logo-for-a-global-tec-1774495675177-1d7006db.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-sophisticated-logo-for-a-data-analytic-1774495676145-4d916f28.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-dynamic-logo-for-a-startup-focused-on--1774495675921-5279e341.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-minimalist-logo-for-a-financial-techno-1774495676069-a66e3345.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-bold-and-clean-logo-for-an-e-commerce--1774495676818-b93ba415.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/an-elegant-and-abstract-logo-for-a-creat-1774495675227-ff1e4239.png",        "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-futuristic-logo-for-a-cybersecurity-fi-1774495676195-e8c1ccbb.png"]}
      title="Trusted by Industry Leaders"
      description="Our AI receptionist solution is empowering businesses of all sizes to achieve unparalleled customer engagement."
      speed={35}
      showCard={false}
      names={[]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What makes your AI voice natural?",          content: "Our AI uses advanced neural networks and deep learning models to generate speech patterns that mimic human intonation, rhythm, and emotional nuances, making conversations feel highly natural and engaging."},
        {
          id: "2",          title: "How difficult is it to integrate?",          content: "Integration is designed to be seamless. We offer robust APIs and dedicated support to ensure a smooth setup with your existing CRM, communication, and scheduling systems."},
        {
          id: "3",          title: "Can the AI handle complex customer issues?",          content: "Yes, our AI is trained on vast datasets and continuously learns. It can handle a wide range of complex queries, escalate when necessary, and provide personalized solutions based on learned customer interactions."},
        {
          id: "4",          title: "Is my data secure with your AI solution?",          content: "Absolutely. We prioritize data privacy and security with end-to-end encryption, strict access controls, and compliance with global data protection regulations like GDPR and CCPA."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/an-illustration-of-a-friendly-ai-chatbot-1774495676474-5e97a515.png"
      imageAlt="AI chatbot providing customer support"
      mediaAnimation="opacity"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our AI receptionist voice agent."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static-grid"}}
      tag="Ready to Transform?"
      title="Book Your Free Demo Today"
      description="Experience the power of a 24/7 natural AI receptionist voice agent firsthand. Fill out the form below to schedule a personalized demonstration."
      tagIcon={Zap}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B6hxR9KmiqFEvcYhnaTk3O3joT/a-conceptual-image-of-an-ai-agent-s-hand-1774495675977-1cb56652.png"
      imageAlt="AI agent and human hands connecting"
      mediaAnimation="slide-up"
      mediaPosition="left"
      inputPlaceholder="Your business email"
      buttonText="Get a Free Demo"
      termsText="By clicking 'Get a Free Demo' you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "Solution",              href: "#solution"},
            {
              label: "Features",              href: "#features"},
          ],
        },
        {
          items: [
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="AI Receptionist"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
