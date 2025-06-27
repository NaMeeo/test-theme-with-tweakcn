"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Palette, Sparkles, Settings, Heart, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">ThemeForge</h1>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Beautiful Themes, 
            <br />
            Endless Possibilities
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the power of dynamic theming with our collection of carefully crafted color schemes. 
            Switch between themes and light/dark modes seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Settings className="mr-2 h-5 w-5" />
              Customize
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose ThemeForge?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>5 Beautiful Themes</CardTitle>
              <CardDescription>
                Choose from our curated collection of modern, elegant themes including Default, Ocean Blue, Forest Green, Royal Purple, and Rose Gold.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Instant Switching</CardTitle>
              <CardDescription>
                Change themes and toggle between light and dark modes instantly with our optimized theme engine powered by CSS custom properties.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>User Experience</CardTitle>
              <CardDescription>
                Designed with accessibility and user experience in mind. All themes maintain proper contrast ratios and readability standards.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Demo Cards */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">See It In Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Interactive Components
              </CardTitle>
              <CardDescription>
                All UI components adapt perfectly to any theme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  This is a muted background area that adapts to your theme selection.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Theme Persistence
              </CardTitle>
              <CardDescription>
                Your theme choice is remembered across sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent rounded">
                  <span className="text-sm">Auto-save preferences</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent rounded">
                  <span className="text-sm">System theme detection</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent rounded">
                  <span className="text-sm">Smooth transitions</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Try switching themes using the controls in the top-right corner!
          </p>
        </div>
      </footer>
    </div>
  );
}
