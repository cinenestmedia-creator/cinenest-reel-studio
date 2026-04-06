

## Plan: Full Website Rebrand for Real Estate Post-Production

This is a comprehensive content and structure update targeting real estate agents and media teams in US/Canada. The layout structure stays the same, but all content shifts to performance-driven, results-focused messaging. Wedding content and pricing are removed entirely.

---

### Files to Modify

**1. `src/components/Navbar.tsx`**
- Remove dropdown menu entirely — "Portfolio" becomes a single link scrolling to `#gallery`
- Menu order: Home, Services, Portfolio, Testimonials, About, Contact
- Replace "Get Started" CTA with "Book a Call" linking to Calendly
- Remove `ChevronDown`, `DropdownMenu` imports
- Update "Nest" text color for scrolled state visibility

**2. `src/components/HeroSection.tsx`**
- Headline: "Your Post-Production Partner for High-Converting Real Estate Videos"
- Subheadline: "We help real estate agents and media teams turn raw footage into cinematic, high-performing videos that attract buyers, build trust, and drive results."
- Buttons: "Book a Call" (Calendly link) + "View Portfolio" (scrolls to gallery)
- Trust line below buttons: "Trusted by agents & media teams across US & Canada"
- Optional line: "Built for agents who take their brand seriously."

**3. `src/components/AboutSection.tsx`**
- Update main paragraph with the provided performance-focused copy
- Update highlight cards to reflect real estate focus (e.g., "Fast Turnaround," "Consistent Quality," "Reliable Communication")
- Replace "Our Story" block with new "More Than Editors — We're Your Growth Partner" section with the provided content

**4. `src/components/ServicesSection.tsx`**
- Rename section title to "Post-Production Solutions"
- Only 2 service cards:
  - "Real Estate Video Editing" with provided features
  - "Short-Form Content (Reels / Ads)" with provided features
- Remove third service (Content & Engagement Planning)
- Update CTA text to performance-focused language

**5. `src/components/GallerySection.tsx`**
- Remove wedding videos and category filter tabs entirely (only real estate content)
- Add filter tabs: "All", "Real Estate", "Social Content"
- Add subtitle: "A selection of real estate and social media videos crafted to engage, convert, and stand out."
- Add dark overlay + play icon on hover for thumbnails
- Remove pricing button and wedding pricing modal import
- Remove `WeddingPricingModal` references

**6. Create `src/components/TrustedBySection.tsx`** (new)
- Title: "Trusted by Growing Brands & Agencies"
- Subtitle: "Partnered with real estate professionals, media teams, and creators worldwide."
- Auto-scrolling infinite logo carousel (placeholder logos with CSS animation)

**7. Create `src/components/HowItWorksSection.tsx`** (new)
- Three steps with icons:
  1. "Send Your Footage" — "Upload your raw clips and share your vision."
  2. "We Edit & Optimize" — "We craft your video with cinematic quality and performance in mind."
  3. "You Review & Scale" — "Request revisions if needed and start using your content to grow your business."

**8. `src/components/TestimonialsSection.tsx`**
- Update title to "What Our Clients Say"
- Subtitle: "Don't just take our word for it — hear from professionals who trust CineNest Media."
- Remove wedding testimonials, keep/update real estate ones
- Update stats section: "1000+ Videos Delivered", "500+ Happy Clients", "25+ Countries Served", "5-star Average Rating"
- Add count-up animation on scroll using IntersectionObserver
- Add line: "Helping clients create content that performs — not just looks good."

**9. Create `src/components/FinalCTASection.tsx`** (new)
- Headline: "Ready to Elevate Your Content?"
- Subtext: "Let's turn your footage into videos that actually perform and help you stand out in your market."
- "Book a Call" button (Calendly)
- Urgency line: "Limited onboarding slots each month"

**10. `src/components/ContactSection.tsx`**
- Update copy to performance-focused language
- Keep existing structure with WhatsApp, Instagram, and Book a Call buttons

**11. `src/components/Footer.tsx`**
- Update tagline from wedding/real estate to real estate post-production focus
- Update Quick Links to match new nav order (Portfolio instead of Gallery)

**12. `src/pages/Index.tsx`**
- Add new sections in order: Hero → About → TrustedBy → Services → Gallery → HowItWorks → Testimonials → FinalCTA → Contact → Footer

**13. Delete files**
- `src/components/WeddingPricingModal.tsx`
- `src/components/RealEstatePricingModal.tsx`

**14. `src/index.css`**
- Add keyframe for infinite logo scroll animation

---

### Section Order on Page
1. Hero
2. About (includes "Growth Partner" subsection)
3. Trusted By (logo carousel)
4. Post-Production Solutions (Services)
5. Portfolio (Gallery)
6. How It Works
7. Testimonials (with stats)
8. Final CTA
9. Contact
10. Footer

