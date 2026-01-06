"use client"

import { useState } from "react"
import { Check, Users, Shuffle, Share2, Zap, Shield, Clock, Save, FolderOpen, Upload } from "lucide-react"

export default function ComingSoonPage() {
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
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f12]/80 backdrop-blur-md border-b border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#d4a574] rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">LD</span>
            </div>
            <span className="font-semibold text-lg">LineupDesigner</span>
          </div>
          <div className="text-sm text-[#a1a1aa]">Coming Q1 2026</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-[#d4a574]/10 text-[#d4a574] text-sm font-medium rounded-full border border-[#d4a574]/20 mb-6">
              Early Access Coming Soon
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-in delay-100 text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build lineups. Plan camps.
            <br />
            <span className="text-[#d4a574] glow-text">Export schedules.</span>
          </h1>

          <p className="opacity-0 animate-fade-in delay-200 text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10">
            Everything hockey teams need — in one place. Visual lineup builder,
            camp management for 100-250+ players, smart scheduling, and professional exports.
          </p>

          <p className="opacity-0 animate-fade-in delay-250 text-sm text-[#a1a1aa] mb-6">
            Available in 9 languages: English, Svenska, Suomi, Deutsch, Čeština, Français, Italiano, Dansk, Norsk
          </p>

          {/* Email Signup */}
          <div className="opacity-0 animate-fade-in delay-300 max-w-md mx-auto mb-16">
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-[#d4a574] bg-[#d4a574]/10 rounded-lg px-6 py-4 border border-[#d4a574]/20">
                <Check className="w-5 h-5" />
                <span>You're on the list! We'll notify you when we launch.</span>
              </div>
            ) : (
              <div className="space-y-2">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-[#1a1a1f] border border-[#27272a] rounded-lg text-white placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#d4a574] transition-colors"
                  />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[#d4a574] text-black font-semibold rounded-lg hover:bg-[#c49464] transition-colors disabled:opacity-50"
                >
                  {loading ? "..." : "Notify Me"}
                  </button>
                </form>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* App Preview - Desktop */}
      <section className="pb-24 px-6 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="opacity-0 animate-fade-in delay-400 relative">
            {/* Browser frame with fixed aspect ratio */}
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] overflow-hidden glow-box">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#27272a] rounded px-3 py-1 text-sm text-[#a1a1aa] text-center max-w-xs mx-auto">
                    lineupdesigner.com
                  </div>
                </div>
              </div>

              {/* App mockup with proper aspect ratio - scaled down screenshot */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <div className="absolute top-0 left-0 w-[1400px] h-[875px] bg-gradient-to-br from-[#0f0f12] to-[#1a1a1f] p-6 origin-top-left scale-[0.70] lg:scale-[0.80]">
                  <AppMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview - Mobile */}
      <section className="pb-16 px-6 md:hidden">
        <div className="max-w-sm mx-auto">
          <div className="opacity-0 animate-fade-in delay-400">
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] overflow-hidden glow-box p-4">
              <h3 className="text-sm font-medium text-[#a1a1aa] mb-3">Preview: 5v5 Lineup Builder</h3>

              {/* Simplified mobile preview */}
              <div className="space-y-2">
                <div className="text-xs text-[#a1a1aa] mb-1">Line 1</div>
                <div className="grid grid-cols-3 gap-2">
                  <MobilePlayerCard number="12" name="VIRTANEN" pos="LW" />
                  <MobilePlayerCard number="23" name="BERGMAN" pos="C" />
                  <MobilePlayerCard number="16" name="NOVAK" pos="RW" />
                </div>

                <div className="text-xs text-[#a1a1aa] mb-1 mt-3">Defense 1</div>
                <div className="grid grid-cols-2 gap-2">
                  <MobilePlayerCard number="3" name="LINDQVIST" pos="LD" />
                  <MobilePlayerCard number="5" name="HORVAT" pos="RD" />
                </div>

                <div className="text-xs text-[#a1a1aa] mb-1 mt-3">Goalie</div>
                <div className="grid grid-cols-2 gap-2">
                  <MobilePlayerCard number="30" name="NIEMINEN" pos="G" />
                  <div className="border border-dashed border-[#27272a] rounded p-2 flex items-center justify-center">
                    <span className="text-xs text-[#a1a1aa]">G</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#27272a] flex justify-between items-center">
                <span className="text-xs text-[#a1a1aa]">Drag & drop to build lineups</span>
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-[#d4a574] rounded flex items-center justify-center">
                    <Save className="w-3 h-3 text-black" />
                  </div>
                  <div className="w-6 h-6 bg-[#27272a] rounded flex items-center justify-center">
                    <Share2 className="w-3 h-3 text-[#a1a1aa]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Teams & Clubs */}
      <section className="py-24 px-6 bg-[#0f0f12]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            For Teams & Clubs
          </h2>
          <p className="text-[#a1a1aa] text-center mb-16 max-w-2xl mx-auto">
            Everything coaches need to manage their team efficiently.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
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
              description="Create recurring weekly schedules for the entire season. Flexible group sizes and colors."
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
              description="Color-coded PDF schedules, player lists, name tags, and iCal sync to calendars."
            />
          </div>
        </div>
      </section>

      {/* Features - Camps & Tournaments */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            For Camps & Tournaments
          </h2>
          <p className="text-[#a1a1aa] text-center mb-16 max-w-2xl mx-auto">
            Manage 100-250+ players with ease. From registration to final whistle.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Mass Player Import"
              description="Import from Google Forms or Excel. Automatic group assignment by birth year."
            />
            <FeatureCard
              icon={<Shuffle className="w-6 h-6" />}
              title="Visual Schedule Builder"
              description="Drag-drop activities on a timeline. Collision detection and resource management built-in."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Smart Grouping"
              description="Auto-group by birth year with manual adjustments for play-up/play-down situations."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Match Scheduler"
              description="Round robin, cup brackets, swiss-system. Automatic game generation and standings."
            />
            <FeatureCard
              icon={<Share2 className="w-6 h-6" />}
              title="Print-Ready Exports"
              description="PDF schedules, name badges, match sheets. Ready for print or digital distribution."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Multi-Rink Support"
              description="Schedule across multiple ice surfaces. Avoid conflicts and optimize ice time."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0f0f12]/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be the first to know</h2>
          <p className="text-[#a1a1aa] mb-8">
            Join the waitlist and get early access when we launch.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-[#d4a574]">
              <Check className="w-5 h-5" />
              <span>You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-[#1a1a1f] border border-[#27272a] rounded-lg text-white placeholder:text-[#a1a1aa] focus:outline-none focus:border-[#d4a574] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#d4a574] text-black font-semibold rounded-lg hover:bg-[#c49464] transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Built by Coaches, for Coaches</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-6">
              <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center text-[#d4a574] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Swedish Based</h3>
              <p className="text-[#a1a1aa] text-sm">
                LineupDesigner is developed in Sweden — a country with deep hockey traditions
                and a passion for the sport at every level, from youth teams to the pros.
              </p>
            </div>

            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-6">
              <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center text-[#d4a574] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real Experience</h3>
              <p className="text-[#a1a1aa] text-sm">
                We've been in your shoes — managing rosters, balancing ice time, organizing
                training groups, and creating fair lineups. We know the struggles firsthand.
              </p>
            </div>

            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-6">
              <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center text-[#d4a574] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Camp & Cup Veterans</h3>
              <p className="text-[#a1a1aa] text-sm">
                From hockey camps with 200+ participants to weekend tournaments with
                multiple age groups — we've planned them all and built tools to make it easier.
              </p>
            </div>

            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-6">
              <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center text-[#d4a574] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Made with Passion</h3>
              <p className="text-[#a1a1aa] text-sm">
                This isn't just software — it's a tool we wished existed when we were
                spending hours with spreadsheets and whiteboards. Now we're building it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#a1a1aa]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#d4a574] rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">LD</span>
            </div>
            <span>LineupDesigner</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <a href="mailto:info@lineupdesigner.com" className="hover:text-[#d4a574] transition-colors">
              info@lineupdesigner.com
            </a>
            <div>&copy; 2026 LineupDesigner. All rights reserved.</div>
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
    <div className="p-6 bg-[#1a1a1f] rounded-lg border border-[#27272a] hover:border-[#d4a574]/30 transition-colors">
      <div className="w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center text-[#d4a574] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#a1a1aa] text-sm">{description}</p>
    </div>
  )
}

// App mockup component with fake data - matches real platform design
function AppMockup() {
  const mockPlayers = {
    line1: [
      { name: "VIRTANEN", number: "12", pos: "LW" },
      { name: "BERGMAN", number: "23", pos: "C" },
      { name: "NOVAK", number: "16", pos: "RW" },
    ],
    line2: [
      { name: "KORHONEN", number: "9", pos: "LW" },
      { name: "SMITH", number: "27", pos: "C" },
      { name: "MUELLER", number: "11", pos: "RW" },
    ],
    defense1: [
      { name: "LINDQVIST", number: "3", pos: "LD" },
      { name: "HORVAT", number: "5", pos: "RD" },
    ],
    defense2: [
      { name: "PETROV", number: "8", pos: "LD" },
      { name: "LAPOINTE", number: "24", pos: "RD" },
    ],
    goalies: [
      { name: "NIEMINEN", number: "30", pos: "G" },
      { name: "SVOBODA", number: "35", pos: "G" },
    ],
    staff: [
      { name: "ERIKSSON", role: "HC" },
      { name: "MÄKINEN", role: "AC" },
      { name: "BRODEUR", role: "GT" },
    ],
    skaters: [
      { name: "HANSEN", number: "17", pos: "LW" },
      { name: "DUBOIS", number: "22", pos: "C" },
      { name: "KOZLOV", number: "15", pos: "RW" },
      { name: "STRÖM", number: "18", pos: "LD" },
    ],
  }

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-48 shrink-0 hidden md:block">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-[#d4a574] rounded flex items-center justify-center">
            <span className="text-black font-bold text-xs">LD</span>
          </div>
          <span className="font-semibold text-sm">LineupDesigner</span>
        </div>
        <nav className="space-y-1">
          {["Dashboard", "Team", "5v5 Lineup", "3v3 Lineup", "Training", "Camp", "Cup"].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-2 rounded text-sm ${
                i === 2
                  ? "bg-[#27272a] text-white"
                  : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Header with Save/Load buttons */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">5v5 Lineup</h2>
            <p className="text-sm text-[#a1a1aa]">12 of 23 players placed</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-[#27272a] rounded hover:border-[#a1a1aa] transition-colors">
              <FolderOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Load</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#d4a574] text-black rounded font-medium">
              <Save className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-[#d4a574] text-black rounded font-medium">
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[#1a1a1f] p-1 rounded-lg w-fit">
          {["5v5 Lineup", "Powerplay", "Penalty Kill", "Overtime 3v3", "Shootout", "Empty Net"].map(
            (tab, i) => (
              <div
                key={tab}
                className={`px-3 py-1.5 rounded text-sm ${
                  i === 0
                    ? "bg-[#27272a] text-white"
                    : "text-[#a1a1aa]"
                }`}
              >
                {tab}
              </div>
            )
          )}
        </div>

        <div className="flex gap-6">
          {/* Lines */}
          <div className="flex-1 space-y-4">
            {/* Forwards */}
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-4">
              <h3 className="text-sm font-medium text-[#a1a1aa] mb-3">Forwards</h3>

              <div className="space-y-3">
                <LineRow label="Line 1" players={mockPlayers.line1} />
                <LineRow label="Line 2" players={mockPlayers.line2} />
                <LineRow label="Line 3" players={[]} empty />
                <LineRow label="Line 4" players={[]} empty />
              </div>
            </div>

            {/* Defense */}
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-4">
              <h3 className="text-sm font-medium text-[#a1a1aa] mb-3">Defense</h3>

              <div className="space-y-3">
                <DefenseRow label="Defense 1" players={mockPlayers.defense1} />
                <DefenseRow label="Defense 2" players={mockPlayers.defense2} />
                <DefenseRow label="Defense 3" players={[]} empty />
              </div>
            </div>

            {/* Goalies */}
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-4">
              <h3 className="text-sm font-medium text-[#a1a1aa] mb-3">Goalies</h3>
              <div className="grid grid-cols-2 gap-2">
                {mockPlayers.goalies.map((p) => (
                  <PlayerCard key={p.number} {...p} />
                ))}
              </div>
            </div>

            {/* Staff section */}
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-4">
              <h3 className="text-sm font-medium text-[#a1a1aa] mb-3">Staff</h3>
              <div className="grid grid-cols-3 gap-2">
                {mockPlayers.staff.map((s) => (
                  <StaffCard key={s.role} name={s.name} role={s.role} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar with Players/Staff toggle */}
          <div className="w-56 shrink-0 hidden lg:block space-y-4">
            {/* Players/Staff toggle */}
            <div className="bg-[#1a1a1f] rounded-lg border border-[#27272a] p-4">
              <div className="flex rounded-lg bg-[#27272a] p-0.5 mb-3">
                <button className="flex-1 text-xs font-medium py-1.5 rounded-md bg-[#d4a574] text-black">
                  Players
                </button>
                <button className="flex-1 text-xs font-medium py-1.5 rounded-md text-[#a1a1aa]">
                  Staff
                </button>
              </div>
              <div className="space-y-1">
                {mockPlayers.skaters.map((p) => (
                  <SidebarPlayerCard key={p.number} {...p} />
                ))}
                <div className="text-xs text-center text-[#a1a1aa] pt-2">
                  + 15 more players
                </div>
              </div>
            </div>

            {/* Logo upload indicator */}
            <div className="border border-dashed border-[#d4a574]/40 rounded-lg p-4 flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#d4a574]/10 rounded-lg flex items-center justify-center">
                <Upload className="w-5 h-5 text-[#d4a574]" />
              </div>
              <span className="text-xs text-[#a1a1aa]">Upload team logo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LineRow({
  label,
  players,
  empty,
}: {
  label: string
  players: { name: string; number: string; pos: string }[]
  empty?: boolean
}) {
  return (
    <div>
      <div className="text-xs text-[#a1a1aa] mb-1">{label}</div>
      <div className="grid grid-cols-3 gap-2">
        {empty ? (
          <>
            <EmptySlot pos="LW" />
            <EmptySlot pos="C" />
            <EmptySlot pos="RW" />
          </>
        ) : (
          players.map((p) => <PlayerCard key={p.number} {...p} />)
        )}
      </div>
    </div>
  )
}

function DefenseRow({
  label,
  players,
  empty,
}: {
  label: string
  players: { name: string; number: string; pos: string }[]
  empty?: boolean
}) {
  return (
    <div>
      <div className="text-xs text-[#a1a1aa] mb-1">{label}</div>
      <div className="grid grid-cols-2 gap-2">
        {empty ? (
          <>
            <EmptySlot pos="LD" />
            <EmptySlot pos="RD" />
          </>
        ) : (
          players.map((p) => <PlayerCard key={p.number} {...p} />)
        )}
      </div>
    </div>
  )
}

// Player card matching real platform: number (left), name (middle), position (right with border)
function PlayerCard({ name, number, pos }: { name: string; number: string; pos: string }) {
  return (
    <div className="bg-gradient-to-br from-[#0f0f12] to-[#1a1a1f] border border-[#27272a] rounded p-2 flex items-center gap-2">
      <span className="text-[#d4a574] font-black text-sm tabular-nums shrink-0" style={{ textShadow: "0 0 10px rgba(212,165,116,0.4)" }}>
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold uppercase tracking-tight truncate text-white">{name}</div>
      </div>
      <span className="text-[10px] px-1.5 py-0.5 border border-[#d4a574] text-[#d4a574] shrink-0">
        {pos}
      </span>
    </div>
  )
}

// Staff card matching real platform: name (left), role badge (right with border)
function StaffCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-gradient-to-br from-[#0f0f12] to-[#1a1a1f] border border-[#27272a] rounded p-2 flex items-center gap-2">
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold uppercase tracking-tight truncate text-white">{name}</div>
      </div>
      <span className="text-[10px] px-1.5 py-0.5 border border-[#d4a574] text-[#d4a574] shrink-0">
        {role}
      </span>
    </div>
  )
}

// Sidebar player card matching real platform compact format
function SidebarPlayerCard({ name, number, pos }: { name: string; number: string; pos: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-[#27272a] cursor-move">
      <span className="text-[#d4a574] font-black text-sm tabular-nums shrink-0">{number}</span>
      <span className="text-xs font-bold uppercase tracking-tight text-white flex-1 truncate">{name}</span>
      <span className="text-[8px] px-1 py-0.5 border border-[#d4a574] text-[#d4a574] shrink-0">
        {pos}
      </span>
    </div>
  )
}

function EmptySlot({ pos }: { pos: string }) {
  return (
    <div className="border border-dashed border-[#27272a] rounded p-2 flex items-center justify-center">
      <span className="text-xs text-[#a1a1aa]">{pos}</span>
    </div>
  )
}

// Mobile-optimized player card for smaller screens
function MobilePlayerCard({ name, number, pos }: { name: string; number: string; pos: string }) {
  return (
    <div className="bg-gradient-to-br from-[#0f0f12] to-[#1a1a1f] border border-[#27272a] rounded p-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[#d4a574] font-black text-sm" style={{ textShadow: "0 0 10px rgba(212,165,116,0.4)" }}>
          {number}
        </span>
        <span className="text-[8px] px-1 py-0.5 border border-[#d4a574] text-[#d4a574]">
          {pos}
        </span>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-tight text-white truncate">{name}</div>
    </div>
  )
}
