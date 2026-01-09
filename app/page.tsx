"use client"

import { useState } from "react"
import { Check, Users, Shuffle, Share2, Zap, Shield, Clock, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Something went wrong")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Failed to subscribe. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-deep)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-deep)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-light tracking-[0.3em] uppercase text-[var(--color-text-primary)]">
            Lineup<span className="text-[var(--color-accent-glow)]">Designer</span>
          </span>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[var(--color-text-muted)] hidden sm:block">Coming Q1 2026</span>
            <a
              href="#signup"
              className="cta-button px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen with Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Teal Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hockey-action-1.jpg"
            alt="Hockey action"
            fill
            className="object-cover"
            priority
          />
          {/* Teal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-deep)]/70 via-[var(--color-bg-primary)]/60 to-[var(--color-bg-deep)]" />
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]/30 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-[var(--color-accent)]/20 text-[var(--color-accent-glow)] text-sm font-medium rounded-full border border-[var(--color-accent)]/30 mb-8">
              Built by coaches, for coaches
            </span>
          </div>

          <h1 className="opacity-0 animate-slide-up delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-[1.1] tracking-tight">
            <span className="text-[var(--color-text-primary)]">Build lineups.</span>
            <br />
            <span className="gradient-text glow-text">Win games.</span>
          </h1>

          <p className="opacity-0 animate-fade-in delay-200 text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            The modern lineup builder for hockey coaches. Drag, drop, and share beautiful lineup graphics with your team.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-in delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="#signup"
              className="cta-button px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 group"
            >
              Get Early Access
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#preview"
              className="px-8 py-4 rounded-lg text-lg font-semibold text-[var(--color-text-primary)] border border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </a>
          </div>

          <p className="opacity-0 animate-fade-in delay-400 text-sm text-[var(--color-text-muted)]">
            Available in 9 languages: English, Svenska, Suomi, Deutsch, Cesstina, Francais, Italiano, Dansk, Norsk
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500 z-20">
          <div className="w-6 h-10 border-2 border-[var(--color-accent)]/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[var(--color-accent-glow)] rounded-full mt-2 animate-bounce" />
          </div>
        </div>

        {/* Bottom fade to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[var(--color-bg-deep)] z-10" />
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 bg-[var(--color-bg-deep)]">
        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-[var(--color-bg-primary)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
              Everything coaches need
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Stop wasting time with spreadsheets. Build, manage, and share your lineups in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shuffle className="w-6 h-6" />}
              title="Visual Lineup Builder"
              description="Drag-drop players to positions. Save multiple lineup configurations for different game situations."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Player Management"
              description="All player info in one place: position, number, photo, contact details, and development notes."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Training Groups"
              description="Create flexible training groups with custom colors. Perfect for practice sessions."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Special Teams"
              description="Powerplay, penalty kill, overtime 3v3, shootout order, and empty net scenarios."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Team Branding"
              description="Upload your logo and colors. All exports match your club's visual identity."
            />
            <FeatureCard
              icon={<Share2 className="w-6 h-6" />}
              title="Professional Export"
              description="Beautiful lineup graphics ready for WhatsApp, Instagram, or printing."
            />
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="py-32 px-6 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
              See how it works
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Drag and drop players to build your perfect lineup. Export beautiful graphics in seconds.
            </p>
          </div>

          {/* App Preview Image */}
          <div className="relative rounded-lg overflow-hidden border border-[var(--color-border)] shadow-2xl">
            <Image
              src="/images/preview-lineup.png"
              alt="LineupDesigner app preview showing lineup builder interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            {/* Subtle gradient overlay for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="text-center mt-12">
            <a
              href="#signup"
              className="cta-button inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold group"
            >
              Join Waitlist
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-32 px-6 bg-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
              Built for real hockey
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              From youth teams to elite clubs. We understand the game.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <Image
                src="/images/hero/player-17.jpg"
                alt="Hockey player #17"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.7] brightness-[0.85]"
              />
              {/* Teal color tint layers */}
              <div className="absolute inset-0 bg-[#0f2a32]/50 mix-blend-color" />
              <div className="absolute inset-0 bg-[#0f2a32]/30 mix-blend-multiply" />
              {/* Edge fades - all sides */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-bg-primary)]/40 via-transparent to-transparent" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <Image
                src="/images/hero/coach-trophy.jpg"
                alt="Coach and player with trophy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.7] brightness-[0.85]"
              />
              {/* Teal color tint layers */}
              <div className="absolute inset-0 bg-[#0f2a32]/50 mix-blend-color" />
              <div className="absolute inset-0 bg-[#0f2a32]/30 mix-blend-multiply" />
              {/* Edge fades - all sides */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-bg-primary)]/40 via-transparent to-transparent" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group col-span-2 md:col-span-1">
              <Image
                src="/images/hero/team-bench.jpg"
                alt="Hockey team on bench"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 saturate-[0.7] brightness-[0.85]"
              />
              {/* Teal color tint layers */}
              <div className="absolute inset-0 bg-[#0f2a32]/50 mix-blend-color" />
              <div className="absolute inset-0 bg-[#0f2a32]/30 mix-blend-multiply" />
              {/* Edge fades - all sides */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-bg-primary)]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6 bg-[var(--color-bg-primary)]">
        {/* Top fade from Image Gallery */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--color-bg-primary)] to-transparent" />
        {/* Bottom fade to CTA section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[var(--color-bg-deep)]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center text-[var(--color-text-primary)] mb-16">
            Built by coaches, for coaches
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <AboutCard
              title="Swedish Based"
              description="LineupDesigner is developed in Sweden - a country with deep hockey traditions and a passion for the sport at every level."
            />
            <AboutCard
              title="Real Experience"
              description="We've been in your shoes - managing rosters, balancing ice time, and creating fair lineups. We know the struggles firsthand."
            />
            <AboutCard
              title="Youth Hockey Focus"
              description="Designed specifically for youth hockey teams - from U8 to U18. We understand the unique challenges of coaching young players."
            />
            <AboutCard
              title="Made with Passion"
              description="This isn't just software - it's a tool we wished existed when we were spending hours with spreadsheets and whiteboards."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-32 px-6 bg-[var(--color-bg-deep)] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] mb-6">
            Be the first to know
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-12">
            Join the waitlist and get early access when we launch.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-[var(--color-accent-glow)] bg-[var(--color-accent)]/10 rounded-lg px-8 py-6 border border-[var(--color-accent)]/20 glow-border">
              <Check className="w-6 h-6" />
              <span className="text-lg">You're on the list! We'll notify you when we launch.</span>
            </div>
          ) : (
            <div className="space-y-3">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="cta-button px-8 py-4 rounded-lg font-semibold disabled:opacity-50"
                >
                  {loading ? "..." : "Join Waitlist"}
                </button>
              </form>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg-deep)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[var(--color-text-muted)]">
          <span className="font-display text-base font-light tracking-[0.25em] uppercase text-[var(--color-text-secondary)]">
            Lineup<span className="text-[var(--color-accent-glow)]">Designer</span>
          </span>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="mailto:info@lineupdesigner.com" className="hover:text-[var(--color-accent-glow)] transition-colors">
              info@lineupdesigner.com
            </a>
            <span>Developed by LMCEDEV</span>
            <span>2026 LineupDesigner. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="glass-card p-8 rounded-lg hover:border-[var(--color-accent)]/30 transition-all duration-300 group">
      <div className="w-14 h-14 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center text-[var(--color-accent-glow)] mb-6 group-hover:bg-[var(--color-accent)]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{title}</h3>
      <p className="text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
    </div>
  )
}

function AboutCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="glass-card p-8 rounded-lg">
      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{title}</h3>
      <p className="text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
    </div>
  )
}
