import { describe, it, expect } from 'vitest'
import featureData from '../data/feature.json'
import howItWorksData from '../data/how-it-works.json'
import priceData from '../data/price.json'
import faqData from '../data/faq.json'
import leanInboxData from '../data/lean-inbox.json'
import founderData from '../data/founder.json'

const nonBlank = (value) => typeof value === 'string' && value.trim().length > 0

describe('home page content data', () => {
  it('has 5 benefit cards, matching the bento grid slots', () => {
    expect(featureData.features).toHaveLength(5)
    for (const f of featureData.features) {
      expect(nonBlank(f.title)).toBe(true)
      expect(nonBlank(f.detail)).toBe(true)
      expect(f.icon).toMatch(/^fa-/)
    }
  })

  it('has 3 how-it-works steps', () => {
    expect(howItWorksData.steps).toHaveLength(3)
    for (const s of howItWorksData.steps) {
      expect(nonBlank(s.title)).toBe(true)
      expect(nonBlank(s.detail)).toBe(true)
      expect(s.icon).toMatch(/^fa-/)
    }
    expect(nonBlank(howItWorksData.callout.title)).toBe(true)
    expect(howItWorksData.callout.detail).toContain('Allow Incoming Emails')
  })

  it('has Free, Basic and Add-ons price plans with valid buttons', () => {
    expect(priceData.prices.map(p => p.title)).toEqual(['Free', 'Basic', 'Add-ons'])
    for (const p of priceData.prices) {
      expect(nonBlank(p.price)).toBe(true)
      expect(p.features.length).toBeGreaterThan(0)
      expect(['url', 'notification']).toContain(p.button.type)
      if (p.button.type === 'url') expect(p.button.link).toMatch(/^https:\/\//)
      else expect(nonBlank(p.button.notice)).toBe(true)
    }
  })

  it('has matching without/with rows in the one-inbox comparison', () => {
    for (const side of [leanInboxData.without, leanInboxData.with]) {
      expect(nonBlank(side.title)).toBe(true)
      expect(side.icon).toMatch(/^fa-/)
      expect(side.items.every(nonBlank)).toBe(true)
    }
    expect(leanInboxData.with.items).toHaveLength(leanInboxData.without.items.length)
    expect(nonBlank(leanInboxData.closing)).toBe(true)
  })

  it('has founder copy, contact email and https links', () => {
    expect(founderData.paragraphs.every(nonBlank)).toBe(true)
    expect(founderData.email).toBeUndefined()
    expect(founderData.feedbackEmail).toBe('tao.dong_feedback@duotail.com')
    expect(founderData.emailNote).toContain(founderData.feedbackEmail)
    expect(founderData.links.map(l => l.url)).toEqual([
      'https://www.linkedin.com/in/taodong/',
      'https://medium.com/@tao.dong_spr/how-to-secure-every-email-inbox-on-the-internet-f72391b81a81'
    ])
  })

  it('has FAQ entries with a question and an answer', () => {
    expect(faqData.faqs.length).toBeGreaterThan(0)
    for (const q of faqData.faqs) {
      expect(nonBlank(q.question)).toBe(true)
      expect(nonBlank(q.answer)).toBe(true)
    }
  })
})
