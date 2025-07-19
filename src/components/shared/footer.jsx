"use client";

import Link from "next/link";
import {
  Compass,
  MapPin,
  Mail,
  Phone,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Shield,
  CreditCard,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Explore",
      links: [
        { href: "/destinations", label: "Popular Destinations" },
        { href: "/discover", label: "Discover Places" },
        { href: "/attractions", label: "Top Attractions" },
        { href: "/activities", label: "Activities" },
        { href: "/restaurants", label: "Restaurants" },
      ],
    },
    {
      title: "Plan",
      links: [
        { href: "/trip-planner", label: "AI Trip Planner" },
        { href: "/itineraries", label: "Sample Itineraries" },
        { href: "/travel-guides", label: "Travel Guides" },
        { href: "/budget-calculator", label: "Budget Calculator" },
        { href: "/packing-lists", label: "Packing Lists" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/help", label: "Help Center" },
        { href: "/contact", label: "Contact Us" },
        { href: "/faq", label: "FAQ" },
        { href: "/travel-tips", label: "Travel Tips" },
        { href: "/community", label: "Community" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press" },
        { href: "/partners", label: "Partners" },
        { href: "/blog", label: "Blog" },
      ],
    },
  ];

  const trustFeatures = [
    { icon: Shield, text: "Secure Booking" },
    { icon: Users, text: "24/7 Support" },
    { icon: CreditCard, text: "Best Price Guarantee" },
    { icon: Heart, text: "Trusted by Millions" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="py-8 border-b">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 text-center"
              >
                <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="relative">
                <Compass className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
                <MapPin className="absolute -top-1 -right-1 h-4 w-4 text-blue-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  Atlas<span className="text-primary">AI</span>
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  AI Trip Planner
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Discover amazing destinations and plan your perfect trip with our
              AI-powered travel assistant. Create personalized itineraries in
              minutes.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@atlasai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-b bg-accent/20 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Get Travel Inspiration
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Subscribe to our newsletter for the latest travel tips,
              destination guides, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} AtlasAI. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
