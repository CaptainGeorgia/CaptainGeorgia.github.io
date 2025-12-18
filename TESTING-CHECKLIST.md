# Portfolio Testing Checklist

Complete this checklist before submitting your portfolio.

---

## 1. Local Testing

### Running Jekyll Locally

```bash
# Navigate to your project folder
cd my-portfolio

# Install dependencies (first time only)
bundle install

# Run the local server
bundle exec jekyll serve

# View your site at: http://localhost:4000
```

### Testing Responsive Design in Browser

1. Open Chrome/Firefox DevTools (F12 or Right-click → Inspect)
2. Click the "Toggle Device Toolbar" icon (or Ctrl+Shift+M)
3. Test at these widths:
   - 320px (small mobile)
   - 375px (iPhone)
   - 768px (tablet)
   - 1024px (small desktop)
   - 1440px (large desktop)

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Jekyll won't start | Run `bundle install` first |
| CSS not loading | Check file path in `_layouts/default.html` |
| Images not showing | Verify paths start with `/assets/images/` |
| Changes not appearing | Restart Jekyll server (Ctrl+C, then run again) |
| Build errors | Check `_config.yml` for YAML syntax errors |

---

## 2. Functionality Tests

### Navigation
- [ ] Home link works → goes to home page
- [ ] About link works → goes to about page
- [ ] Projects link works → goes to projects page
- [ ] Logo/site title links to home

### Mobile Menu
- [ ] Hamburger icon appears on mobile (<768px)
- [ ] Menu opens when clicking hamburger
- [ ] Menu closes when clicking a link
- [ ] Menu closes when clicking outside
- [ ] Menu closes when pressing Escape
- [ ] Body doesn't scroll when menu is open

### External Links
- [ ] GitHub profile: `https://github.com/CaptainGeorgia`
- [ ] Codecademy profile: `https://www.codecademy.com/profiles/eimanli26950`
- [ ] Repository link in footer works
- [ ] All external links open in new tab (`target="_blank"`)

### Images
- [ ] Profile photo loads on home page
- [ ] Profile photo loads on about page
- [ ] Project 1 image loads
- [ ] Project 2 image loads
- [ ] Project 3 image loads
- [ ] Placeholder image loads (if used)
- [ ] Broken images show fallback

### Interactive Features
- [ ] Smooth scrolling works for anchor links
- [ ] Scroll-to-top button appears after scrolling
- [ ] Scroll-to-top button works
- [ ] Navbar gets shadow on scroll
- [ ] Sections fade in on scroll
- [ ] Project cards have hover effects

---

## 3. Responsive Design Tests

### Mobile (320px - 480px)
- [ ] Navigation shows hamburger menu
- [ ] Hero section stacks vertically
- [ ] Profile photo is appropriately sized
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable (44px minimum)
- [ ] Highlights cards stack vertically
- [ ] Project cards are full width
- [ ] Footer stacks vertically
- [ ] No horizontal scrolling

### Tablet (768px - 1024px)
- [ ] Navigation may show hamburger or full menu
- [ ] Projects grid shows 2 columns
- [ ] Content has appropriate padding
- [ ] Images scale properly

### Desktop (1200px+)
- [ ] Full navigation visible
- [ ] Projects grid shows 3 columns
- [ ] Content centered with max-width
- [ ] Hover effects work
- [ ] All sections properly spaced

---

## 4. Content Validation

### Personal Information
- [ ] Name is correct: "Elvin Imanli"
- [ ] Email is correct: `elvinnn2008@gmail.com`
- [ ] GitHub username: `CaptainGeorgia`
- [ ] Codecademy username: `eimanli26950`

### Placeholder Text Check
Search for these and replace if found:
- [ ] `[Your Name]` - should be "Elvin Imanli"
- [ ] `[Placeholder University]` - add your university
- [ ] `[Year]` - add actual years
- [ ] `[Month Year]` - add actual dates
- [ ] `[Project 1 Title]` - add project name
- [ ] `your-email@example.com` - should be your email
- [ ] Any `#` links that should be real URLs

### Proofreading
- [ ] No spelling errors
- [ ] No grammar issues
- [ ] Consistent formatting
- [ ] Professional tone

---

## 5. Performance Optimization

### Images
- [ ] Profile photo under 100KB
- [ ] Project images under 200KB each
- [ ] All images compressed (use TinyPNG)
- [ ] Images are correct dimensions (not oversized)

### Quick Performance Check
1. Open DevTools → Network tab
2. Refresh page
3. Check total page size (aim for under 2MB)
4. Check load time (aim for under 3 seconds)

### Lighthouse Audit (Optional)
1. Open DevTools → Lighthouse tab
2. Run audit for "Performance" and "Accessibility"
3. Aim for scores above 80

---

## 6. GitHub Pages Deployment

### Before Pushing
- [ ] All files saved
- [ ] `_config.yml` has correct `url` and `baseurl`
- [ ] No build errors locally (`bundle exec jekyll build`)
- [ ] `.gitignore` excludes `_site/`, `.jekyll-cache/`

### Git Commands
```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Complete portfolio website"

# Push to GitHub
git push origin main
```

### After Pushing
- [ ] Check GitHub Actions for build status
- [ ] Wait 1-2 minutes for deployment
- [ ] Visit `https://CaptainGeorgia.github.io`
- [ ] Verify site loads correctly
- [ ] Test all links on live site

### Troubleshooting GitHub Pages
| Issue | Solution |
|-------|----------|
| 404 error | Check repository name matches `username.github.io` |
| Site not updating | Clear browser cache, wait a few minutes |
| Build failed | Check Actions tab for error messages |
| CSS not loading | Verify `baseurl` is empty `""` in `_config.yml` |

---

## 7. Final Checklist

### Must Have
- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Mobile menu works
- [ ] All images display
- [ ] External links work
- [ ] No placeholder text remaining
- [ ] Site is live at GitHub Pages URL

### Nice to Have
- [ ] Lighthouse performance score > 80
- [ ] Lighthouse accessibility score > 90
- [ ] All images optimized
- [ ] Smooth animations work
- [ ] Scroll-to-top button works

---

## Quick Links

- **Local Site:** http://localhost:4000
- **Live Site:** https://CaptainGeorgia.github.io
- **GitHub Repo:** https://github.com/CaptainGeorgia/CaptainGeorgia.github.io
- **GitHub Actions:** https://github.com/CaptainGeorgia/CaptainGeorgia.github.io/actions

---

## Sign-Off

- [ ] **I have tested all functionality**
- [ ] **I have verified all content is correct**
- [ ] **I have tested on mobile and desktop**
- [ ] **The site is live and accessible**

**Date Completed:** _______________

**Notes:**

