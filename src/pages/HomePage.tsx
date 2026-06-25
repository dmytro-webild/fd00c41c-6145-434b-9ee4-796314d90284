import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import { Battery, Book, Coffee, Leaf, MessageSquare, User, Wifi, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="More Than Coffee."
      description="A place to study, create, and connect. Coming Spring 2027."
      primaryButton={{
        text: "Join the Waitlist",        href: "#waitlist"}}
      secondaryButton={{
        text: "Explore Our Vision",        href: "#about"}}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-cozy-office-with-laptop_23-2149636249.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBento
      tag="Experience"
      title="Why Choose The Study Café"
      description="Sophisticated spaces crafted for productivity."
      features={[
        {
          title: "Specialty Coffee",          description: "Handcrafted perfection.",          bentoComponent: "info-card-marquee",          infoCards: [
            {
              icon: Coffee,
              label: "Espresso",              value: "Premium"},
            {
              icon: Zap,
              label: "Cold Brew",              value: "Bold"},
            {
              icon: Leaf,
              label: "Matcha",              value: "Organic"},
          ],
        },
        {
          title: "Study Spaces",          description: "Quiet rooms and private pods.",          bentoComponent: "tilted-stack-cards",          stackCards: [
            {
              icon: Book,
              title: "Rooms",              subtitle: "Study",              detail: "Private rooms"},
            {
              icon: Wifi,
              title: "Internet",              subtitle: "High Speed",              detail: "Ultra fast"},
            {
              icon: Battery,
              title: "Power",              subtitle: "Outlets",              detail: "Everywhere"},
          ],
        },
        {
          title: "Community",          description: "Where ideas meet.",          bentoComponent: "chat-marquee",          aiIcon: MessageSquare,
          userIcon: User,
          exchanges: [
            {
              userMessage: "Study night event?",              aiResponse: "Weekly gatherings!"},
            {
              userMessage: "Networking?",              aiResponse: "Monthly mixers!"},
          ],
          placeholder: "Events..."},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Where Great Coffee Meets Great Ideas."
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesImageBento
      tag="Menu Preview"
      title="Full Menu Launching Spring 2027"
      description="Exquisite pastries, healthy bites, and premium roasts."
      items={[
        { title: "Espresso", description: "Single Origin", imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-working-coffee-machine_23-2148366641.jpg" },
        { title: "Signature Lattes", description: "Handcrafted art", imageSrc: "http://img.b2bpic.net/free-photo/work-place-creative-person-with-variety-colorful-stationery-objects_93675-134131.jpg" },
        { title: "Healthy Wraps", description: "Fresh and local", imageSrc: "http://img.b2bpic.net/free-photo/woman-reading-book-reading-club-library_23-2150293527.jpg" },
        { title: "Pastries", description: "Daily baked", imageSrc: "http://img.b2bpic.net/free-photo/close-up-process-making-espresso-professional-coffee-machine_169016-18251.jpg" },
        { title: "Matcha", description: "Ceremonial grade", imageSrc: "http://img.b2bpic.net/free-photo/children-desk-interior-design_23-2148569187.jpg" },
        { title: "Breakfast", description: "Artisan bagels", imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118894.jpg" },
        { title: "Desserts", description: "Elegant treats", imageSrc: "http://img.b2bpic.net/free-photo/barista-grind-coffee-bean-with-grinder-machine-barista-prepares-coffee_169016-61314.jpg" }
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="lounge" data-section="lounge">
    <SectionErrorBoundary name="lounge">
          <MetricsMediaCards
      tag="Lounge"
      title="Study Focused Environment"
      description="Productivity-first design."
      metrics={[
        {
          value: "10+",          title: "Study Rooms",          description: "Soundproof",          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-books-dark-background_23-2148898276.jpg"},
        {
          value: "100%",          title: "Outlet Coverage",          description: "Work anywhere",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164786.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="community" data-section="community">
    <SectionErrorBoundary name="community">
          <TestimonialMarqueeCards
      tag="Community"
      title="The Study Society"
      description="Join our growing member community."
      testimonials={[
        {
          name: "Sarah Chen",          role: "PhD Candidate",          quote: "Finally, a place that takes study seriously.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cup-coffee_23-2148494608.jpg"},
        {
          name: "David Miller",          role: "Entrepreneur",          quote: "The perfect remote work environment.",          imageSrc: "http://img.b2bpic.net/free-photo/wifi-signal-icon-blue-color_187299-46876.jpg"},
        {
          name: "Elena Ross",          role: "Freelancer",          quote: "Love the networking events here.",          imageSrc: "http://img.b2bpic.net/free-photo/room-domestic-lifestyle-couch-residential_1203-4120.jpg"},
        {
          name: "James Smith",          role: "Faculty",          quote: "Elegant and professional atmosphere.",          imageSrc: "http://img.b2bpic.net/free-photo/young-male-barista-preparing-coffee-coffee-shop_1303-31776.jpg"},
        {
          name: "Maria Lopez",          role: "Creative",          quote: "My favorite creative hub.",          imageSrc: "http://img.b2bpic.net/free-photo/blank-screen-laptop-desk_53876-42866.jpg"},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="FAQ"
      title="Common Questions"
      description="Everything you need to know about our upcoming location."
      items={[
        {
          question: "Where are you located?",          answer: "Currently securing our flagship location near a major Long Island university."},
        {
          question: "When do you open?",          answer: "We are proud to announce our opening in Spring 2027."},
        {
          question: "Do you offer membership?",          answer: "Yes, The Study Society program will launch with our opening."},
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="waitlist" data-section="waitlist">
    <SectionErrorBoundary name="waitlist">
          <ContactCta
      tag="Waitlist"
      text="Be First in Line for Spring 2027."
      primaryButton={{
        text: "Join the Waitlist",        href: "#"}}
      secondaryButton={{
        text: "Follow on IG",        href: "#"}}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
