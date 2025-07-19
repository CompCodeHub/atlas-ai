"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Star,
  Compass,
  Brain,
  Globe,
  Calendar,
  CreditCard,
  Shield,
  Sparkles,
  Play,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description:
        "Let our intelligent AI create personalized itineraries based on your preferences and travel style.",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Plan your entire trip in minutes, not hours. Our AI does the research so you don't have to.",
    },
    {
      icon: Globe,
      title: "Global Destinations",
      description:
        "Explore thousands of destinations worldwide with local insights and hidden gems.",
    },
    {
      icon: CreditCard,
      title: "Budget Optimization",
      description:
        "Get the best value for your money with smart budget recommendations and deals.",
    },
  ];

  const destinations = [
    {
      name: "Tokyo, Japan",
      image: "/api/placeholder/400/300",
      description: "Modern metropolis meets ancient tradition",
      rating: 4.9,
      trips: "2.1k",
    },
    {
      name: "Paris, France",
      image: "/api/placeholder/400/300",
      description: "The city of lights and romance",
      rating: 4.8,
      trips: "3.5k",
    },
    {
      name: "Bali, Indonesia",
      image: "/api/placeholder/400/300",
      description: "Tropical paradise with rich culture",
      rating: 4.7,
      trips: "1.8k",
    },
    {
      name: "New York, USA",
      image: "/api/placeholder/400/300",
      description: "The city that never sleeps",
      rating: 4.6,
      trips: "4.2k",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California, USA",
      text: "AtlasAI planned our perfect European honeymoon in just 10 minutes. The itinerary was spot-on!",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      text: "As a frequent business traveler, AtlasAI helps me discover local experiences wherever I go.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Emily Rodriguez",
      location: "Madrid, Spain",
      text: "The AI understood my budget constraints and created an amazing South America adventure.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
  ];

  const stats = [
    { number: "500K+", label: "Happy Travelers" },
    { number: "150+", label: "Countries" },
    { number: "1M+", label: "Trips Planned" },
    { number: "4.9", label: "Average Rating" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                AI-Powered Travel Planning
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Plan Your Dream Trip with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AtlasAI
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Discover amazing destinations and create personalized
                itineraries in minutes. Let our AI travel assistant handle the
                planning while you focus on the adventure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                >
                  Start Planning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Plan Your Trip</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Where to?
                    </label>
                    <div className="mt-1 p-3 border rounded-lg bg-accent/20">
                      <MapPin className="inline h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Anywhere amazing</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Duration
                      </label>
                      <div className="mt-1 p-3 border rounded-lg bg-accent/20">
                        <Calendar className="inline h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">7 days</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Budget
                      </label>
                      <div className="mt-1 p-3 border rounded-lg bg-accent/20">
                        <CreditCard className="inline h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">$2,000</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Generate Itinerary
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AtlasAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of travel planning with our intelligent AI
              assistant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the world's most amazing places with AI-crafted
              itineraries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Image placeholder
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-2 py-1 text-xs font-medium">
                    <Star className="inline h-3 w-3 text-yellow-500 mr-1" />
                    {destination.rating}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    <Users className="inline h-4 w-4 mr-1" />
                    {destination.trips} trips
                  </span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Travelers Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our community says about their AtlasAI experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Adventure Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start planning for free or unlock unlimited possibilities with Pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border shadow-sm relative">
              <div className="text-center mb-8">
                <div className="text-4xl mb-3">🗺️</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Explorer
                </h3>
                <div className="text-3xl font-bold text-foreground mb-1">
                  $0
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Perfect for getting started
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>3 AI itinerary generations</strong> per month
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>1 "Vibe" image generation</strong> (one-time)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>1 smart tip request</strong> per trip
                    (Cultural/Packing)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>Save up to 3 trips</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-muted-foreground line-through">
                    Collaborative planning
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>PDF export</strong> (with "Powered by AtlasAI"
                    watermark)
                  </span>
                </li>
              </ul>

              <Button className="w-full" variant="outline" size="lg">
                Get Started Free
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Voyager
                </h3>
                <div className="text-3xl font-bold text-foreground mb-1">
                  $7
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground">For serious travelers</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>Unlimited AI itinerary generations</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>10 "Vibe" image generations</strong> per month
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>Unlimited smart tip requests</strong>{" "}
                    (Cultural/Packing)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>Unlimited saved trips</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>Collaborative planning</strong> - Invite friends &
                    family
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-foreground">
                    <strong>PDF export</strong> (no watermark)
                  </span>
                </li>
              </ul>

              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                Start Pro Trial
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              All plans include basic customer support. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust AtlasAI to create
            unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 bg-white text-blue-600 hover:bg-gray-100 hover:cursor-pointer"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-blue-600 hover:bg-gray-100 hover:text-blue-600 transition-colors hover:cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
