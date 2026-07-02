# Toozyx — Launch Checklist

## Pre-Launch

### Domain & DNS
- [ ] Domain `toozyx.com` points to production server
- [ ] `www.toozyx.com` redirects to `toozyx.com`
- [ ] DNS records propagated (TTL check)
- [ ] Domain expires > 30 days from launch

### SSL
- [ ] SSL certificate active and valid
- [ ] Automatic renewal configured
- [ ] No mixed content warnings

### Environment Variables
- [ ] `.env.local` populated on production server
- [ ] `NEXT_PUBLIC_SITE_URL` set to `https://toozyx.com`
- [ ] `NEXT_PUBLIC_ENV` set to `production`
- [ ] `NEXT_PUBLIC_GA4_ID` set
- [ ] `NEXT_PUBLIC_CLARITY_ID` set
- [ ] `NEXT_PUBLIC_GOOGLE_VERIFICATION` set
- [ ] `NEXT_PUBLIC_BING_VERIFICATION` set

### Analytics
- [ ] GA4 property created for `toozyx.com`
- [ ] GA4 events verified in DebugView
- [ ] Microsoft Clarity project created
- [ ] Clarity recording verified
- [ ] Events configured: page_view, form_submit, cta_click, product_click, outbound_link, blog_open, nav_click

### Search Console
- [ ] Google Search Console property verified (via meta tag)
- [ ] Sitemap submitted
- [ ] `robots.txt` publicly accessible
- [ ] Index coverage reviewed

### Bing Webmaster
- [ ] Bing Webmaster Tools property verified
- [ ] Sitemap submitted
- [ ] Index coverage reviewed

### Robots
- [ ] `robots.txt` allows `/` and disallows `/api/`
- [ ] `crawlDelay: 10` set
- [ ] Sitemap referenced in `robots.txt`
- [ ] Host directive set

### Sitemap
- [ ] `sitemap.xml` accessible
- [ ] All public pages included (EN + AR)
- [ ] Blog posts included
- [ ] `lastModified` dates accurate
- [ ] Priority and changeFrequency appropriate

### Manifest
- [ ] `manifest.webmanifest` accessible
- [ ] Icons correct (192x192, 512x512)
- [ ] start_url, name, description, theme colors correct

### Favicon
- [ ] Favicon visible in browser tab
- [ ] Apple touch icon configured
- [ ] `icon.svg` exists in public/

### OpenGraph
- [ ] `og-image.png` exists and renders correctly
- [ ] All pages have unique OG title, description, image
- [ ] Social preview tested (Twitter, LinkedIn, Facebook, WhatsApp)

### Twitter Cards
- [ ] All pages have `twitter:card` set to `summary_large_image`
- [ ] `twitter:site` set to `@toozyx`
- [ ] Preview tested on cards.twitter.com

### Schema
- [ ] Organization schema on homepage
- [ ] WebSite schema on homepage
- [ ] BreadcrumbList on all pages
- [ ] AboutPage + Organization on /about
- [ ] ContactPage + ContactPoint on /contact
- [ ] Blog + BlogPosting on /blog
- [ ] Article (with dateModified, publisher) on blog articles
- [ ] CollectionPage + ItemList + Product on /products

### Performance
- [ ] Lighthouse score > 90 on all metrics
- [ ] All images optimized
- [ ] No render-blocking resources
- [ ] Core Web Vitals pass
- [ ] Lazy loading implemented where appropriate

### Accessibility
- [ ] Heading hierarchy logical (h1 > h2 > h3)
- [ ] All images have alt text or aria-hidden
- [ ] All buttons/links have accessible names
- [ ] Keyboard navigation works
- [ ] Form fields have labels
- [ ] Color contrast passes WCAG AA
- [ ] ARIA landmarks present

### Error Pages
- [ ] 404 page branded and helpful
- [ ] Error page (500) branded with retry option
- [ ] Global error page covers critical failures
- [ ] Loading state visible during navigation

### Security
- [ ] No secrets in source code
- [ ] No hardcoded credentials
- [ ] Form validation on contact form
- [ ] HTTPS enforced

## Launch Day

### Final Checks
- [ ] Production build passes (0 errors)
- [ ] All pages render correctly
- [ ] All links work (no broken links)
- [ ] Arabic / RTL layout correct
- [ ] Mobile responsive
- [ ] Console has no errors
- [ ] Analytics data flowing

### Post-Launch
- [ ] Monitor GA4 Real-time for activity
- [ ] Check Search Console for index status
- [ ] Verify Clarity recordings
- [ ] Check server logs for errors

## Rollback Plan

### If something goes wrong:
1. Revert to previous deployment
2. Identify root cause from logs
3. Fix in development, test, redeploy
4. Notify stakeholders

### Rollback commands:
```bash
git revert HEAD --no-edit
git push origin main
```
