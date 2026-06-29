import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Waitlist",
    "href": "#waitlist"
  },
  {
    "name": "Study Rooms",
    "href": "#lounge"
  },
  {
    "name": "Community",
    "href": "#community"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Menu",
    "href": "#menu"
  }
];

  return (
    <StyleProvider buttonVariant="elastic" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="THE STUDY CAFÉ"
      ctaButton={{
        text: "Get Updates",
        href: "#waitlist",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="THE STUDY CAFÉ"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Waitlist",
              href: "#waitlist",
            },
            {
              label: "Vision",
              href: "#about",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "LinkedIn",
              href: "#",
            },
          ],
        },
        {
          title: "Partnerships",
          items: [
            {
              label: "Invest & Partner",
              href: "mailto:invest@thestudycafe.com",
            },
          ],
        },
      ]}
      copyright="© 2027 The Study Café. All rights reserved."
      imageSrc="http://img.b2bpic.net/free-photo/light-room-living-interior-sofa_1203-6332.jpg"
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
