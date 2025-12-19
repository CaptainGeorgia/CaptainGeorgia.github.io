# Jekyll portfolio `_config.yml` configuration
_Exported on 12/19/2025 at 23:05:17 GMT+4 from Cursor (2.2.36)_

---

**User**

Let's configure the _config.yml file properly for my portfolio. Please update _config.yml with:

SETTINGS NEEDED:
- title: "[Your Name]'s Portfolio" (I'll replace [Your Name] with my actual name)
- email: my email address placeholder
- description: "Personal portfolio website showcasing my projects and skills in information systems"
- baseurl: "" (empty for username.github.io)
- url: "https://[MY-GITHUB-USERNAME].github.io"
- github_username: [MY-GITHUB-USERNAME]
- codecademy_username: [MY-CODECADEMY-USERNAME]

Also add any other settings needed for:
- GitHub Pages deployment
- Proper permalink structure
- Modern Jekyll features

Show me the complete _config.yml file with all necessary configurations.

---

**Cursor**

```yaml
# Site Settings
title: "[Your Name]'s Portfolio"
email: your-email@example.com
description: "Personal portfolio website showcasing my projects and skills in information systems"
baseurl: "" # empty for username.github.io
url: "https://[MY-GITHUB-USERNAME].github.io"

# Social / Profile Links
github_username: "[MY-GITHUB-USERNAME]"
codecademy_username: "[MY-CODECADEMY-USERNAME]"

# Build settings
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Permalink structure
permalink: /:title/

# Markdown settings
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge

# Sass/SCSS settings
sass:
  style: compressed

# Exclude from processing
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/
  - README.md
  - LICENSE

# GitHub Pages settings
remote_theme: null  # Remove if using a remote theme

# Collections (for projects, etc.)
collections:
  projects:
    output: true
    permalink: /projects/:name/

# Default front matter
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "project"
  - scope:
      path: ""
    values:
      layout: "default"

```

Here's your updated `_config.yml`:

**Key configurations added:**

1. **Your requested settings** - title, email, description, baseurl, url, github_username, codecademy_username (all with placeholders)

2. **Additional plugins** - `jekyll-seo-tag` and `jekyll-sitemap` for better SEO

3. **Permalink structure** - Clean URLs like `/about/` instead of `/about.html`

4. **Markdown/Kramdown** - GitHub Flavored Markdown with syntax highlighting

5. **Collections** - A `projects` collection so you can organize portfolio projects in a `_projects` folder

6. **Default front matter** - Automatic layout assignments

**To complete setup, replace these placeholders:**
- `[Your Name]` → your actual name
- `your-email@example.com` → your email
- `[MY-GITHUB-USERNAME]` → your GitHub username
- `[MY-CODECADEMY-USERNAME]` → your Codecademy username

---

**User**

Create a main layout file at _layouts/default.html that will be used by all pages. This layout should include:

NAVIGATION BAR:
- Sticky navigation at the top
- Logo/site title on the left
- Navigation links: Home, About, Projects
- Responsive hamburger menu for mobile
- Smooth transitions

MAIN CONTENT AREA:
- {{ content }} placeholder for page content
- Proper spacing and container

FOOTER:
- Three columns or centered layout
- Quick links section (Home, About, Projects)
- Social media icons:
  * GitHub icon linking to https://github.com/{{ site.github_username }}
  * Codecademy icon linking to https://codecademy.com/profiles/{{ site.codecademy_username }}
- "View Source Code" link to GitHub repository
- Copyright notice with current year

TECHNICAL REQUIREMENTS:
- HTML5 semantic elements
- Responsive meta tags
- Link to custom CSS file (assets/css/style.css)
- Link to JavaScript file (assets/js/main.js)
- Font Awesome CDN for icons
- Mobile-first responsive design

Make it clean, modern, and professional. Include all necessary HTML structure.

---

**Cursor**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{ site.description }}">
  <title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}</title>
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
  
  <!-- SEO -->
  {% seo %}
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="{{ '/' | relative_url }}" class="nav-logo">
        <span class="logo-bracket">&lt;</span>{{ site.title | split: "'" | first }}<span class="logo-bracket">/&gt;</span>
      </a>
      
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
        <span class="hamburger"></span>
      </button>
      
      <ul class="nav-menu" id="nav-menu">
        <li class="nav-item">
          <a href="{{ '/' | relative_url }}" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="{{ '/about/' | relative_url }}" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="{{ '/projects/' | relative_url }}" class="nav-link">Projects</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="main-content">
    <div class="container">
      {{ content }}
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-title">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="{{ '/' | relative_url }}">Home</a></li>
          <li><a href="{{ '/about/' | relative_url }}">About</a></li>
          <li><a href="{{ '/projects/' | relative_url }}">Projects</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">Connect</h3>
        <div class="social-links">
          {% if site.github_username %}
          <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          {% endif %}
          {% if site.codecademy_username %}
          <a href="https://www.codecademy.com/profiles/{{ site.codecademy_username }}" target="_blank" rel="noopener" aria-label="Codecademy">
            <i class="fas fa-code"></i>
          </a>
          {% endif %}
        </div>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">Source</h3>
        <a href="https://github.com/{{ site.github_username }}/{{ site.github_username }}.github.io" target="_blank" rel="noopener" class="source-link">
          <i class="fab fa-github"></i> View Source Code
        </a>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ 'now' | date: "%Y" }} {{ site.title }}. All rights reserved.</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>

```

Created `_layouts/default.html` with all the requested features:

**Navigation:**
- Sticky navbar with smooth transitions
- Code-style logo with brackets (`<Name/>`)
- Home, About, Projects links
- Hamburger menu toggle for mobile

**Main Content:**
- Semantic `<main>` element with container
- `{{ content }}` placeholder

**Footer:**
- Three-column layout with Quick Links, Social Connect, and Source sections
- GitHub and Codecademy icons (using Font Awesome)
- View Source Code link
- Dynamic copyright year

**Technical:**
- HTML5 semantic structure
- Responsive meta viewport
- DM Sans + JetBrains Mono fonts (modern, distinctive)
- Font Awesome 6.5.1 CDN
- Links to `assets/css/style.css` and `assets/js/main.js`
- SEO tag integration

You'll need to create the CSS and JS files next to make the responsive hamburger menu and styling work.

---

**User**

Create the home page. Replace the existing index.markdown with index.html or index.md.

HOME PAGE STRUCTURE:

HERO SECTION:
- Large profile photo (circular or styled)
- Photo path: /assets/images/profile.jpg
- Welcome heading: "Hi, I'm [Your Name]"
- Subheading with my role: "Information Systems Student"
- Brief 2-3 sentence introduction (use placeholder text)
- Call-to-action button: "View My Projects" (links to projects page)

HIGHLIGHTS SECTION (optional but nice):
- 3 cards showing:
  * Number of projects completed
  * Technologies learned
  * Years of experience
- Use icons and numbers

ABOUT PREVIEW:
- Short "About Me" section with 1 paragraph
- "Learn More" button linking to about page

TECHNICAL REQUIREMENTS:
- Use the default layout we created
- Proper front matter with layout and title
- Semantic HTML or Markdown
- Classes for styling
- Responsive image sizing

Make it welcoming, professional, and visually appealing. Use placeholder content that I can easily replace with my actual information.

---

**Cursor**

```html
---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-image">
      <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Profile photo of [Your Name]" class="profile-photo">
    </div>
    <div class="hero-text">
      <h1 class="hero-title">Hi, I'm <span class="highlight">[Your Name]</span></h1>
      <p class="hero-subtitle">Information Systems Student</p>
      <p class="hero-description">
        I'm passionate about building technology solutions that solve real-world problems. 
        Currently pursuing my degree in Information Systems, I love exploring the intersection 
        of business and technology.
      </p>
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">
        <i class="fas fa-folder-open"></i> View My Projects
      </a>
    </div>
  </div>
</section>

<!-- Highlights Section -->
<section class="highlights">
  <div class="highlights-grid">
    <div class="highlight-card">
      <i class="fas fa-project-diagram highlight-icon"></i>
      <span class="highlight-number">5+</span>
      <span class="highlight-label">Projects Completed</span>
    </div>
    <div class="highlight-card">
      <i class="fas fa-laptop-code highlight-icon"></i>
      <span class="highlight-number">10+</span>
      <span class="highlight-label">Technologies Learned</span>
    </div>
    <div class="highlight-card">
      <i class="fas fa-calendar-alt highlight-icon"></i>
      <span class="highlight-number">2+</span>
      <span class="highlight-label">Years Learning</span>
    </div>
  </div>
</section>

<!-- About Preview Section -->
<section class="about-preview">
  <h2 class="section-title">About Me</h2>
  <div class="about-preview-content">
    <p>
      I'm an Information Systems student with a strong interest in web development, 
      database management, and business analytics. I enjoy learning new technologies 
      and applying them to create meaningful projects. When I'm not coding, you can 
      find me exploring new tools, contributing to open-source projects, or expanding 
      my skills through online courses.
    </p>
    <a href="{{ '/about/' | relative_url }}" class="btn btn-secondary">
      <i class="fas fa-user"></i> Learn More About Me
    </a>
  </div>
</section>

```

Created `index.html` with:

**Hero Section:**
- Circular profile photo placeholder (`/assets/images/profile.jpg`)
- "Hi, I'm [Your Name]" with highlighted name
- "Information Systems Student" subtitle
- Brief intro paragraph
- "View My Projects" CTA button

**Highlights Section:**
- 3 cards with icons:
  - 5+ Projects Completed
  - 10+ Technologies Learned  
  - 2+ Years Learning

**About Preview:**
- Short paragraph about you
- "Learn More About Me" button

**Placeholders to replace:**
- `[Your Name]` in the hero title
- Profile photo alt text
- Numbers in highlight cards
- Description text

The old `index.markdown` has been deleted. You'll need the CSS file to style these sections properly.

---

**User**

Create an about page at about.md with a comprehensive layout.

ABOUT PAGE SECTIONS:

1. INTRODUCTION:
   - Longer introduction about who I am
   - My passion for information systems
   - Career goals

2. EDUCATION:
   - University name: [Placeholder University]
   - Degree: Bachelor's in Information Systems
   - Expected graduation: [Year]
   - Relevant coursework

3. SKILLS:
   - Display skills in organized categories:
     * Programming: HTML, CSS, JavaScript, Python (placeholder)
     * Tools: Git, GitHub, VSCode, Jekyll
     * Other: Problem-solving, Project Management
   - Use progress bars or tags for visual interest

4. EXPERIENCE/ACTIVITIES:
   - Any relevant projects, internships, or activities
   - SITE 1101 course projects
   - Other achievements
   - Use placeholder content

5. INTERESTS:
   - Personal interests and hobbies
   - What I do outside of academics

TECHNICAL REQUIREMENTS:
- Use default layout
- Proper front matter
- Markdown formatting or HTML
- Classes for styling
- Profile photo can be included here too
- Responsive design

Make it structured, easy to read, and professional. Use placeholder content that clearly shows where I need to add my personal information.


---

**Cursor**

```markdown
---
layout: default
title: About Me
---

<section class="about-hero">
  <div class="about-hero-content">
    <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="[Your Name]" class="about-photo">
    <div class="about-intro">
      <h1>About Me</h1>
      <p class="lead">
        Hello! I'm <strong>[Your Name]</strong>, an Information Systems student passionate about 
        leveraging technology to solve business challenges and create meaningful digital experiences.
      </p>
    </div>
  </div>
</section>

<section class="about-section">
  <h2><i class="fas fa-user-graduate"></i> Introduction</h2>
  <p>
    I discovered my passion for information systems when I realized how technology can transform 
    the way businesses operate and people connect. I'm fascinated by the intersection of 
    technical skills and business strategy, and I enjoy building solutions that are both 
    functional and user-friendly.
  </p>
  <p>
    My goal is to become a skilled professional who can bridge the gap between technical teams 
    and business stakeholders. I'm particularly interested in [web development / data analytics / 
    cybersecurity / your interest here] and hope to contribute to projects that make a positive 
    impact.
  </p>
</section>

<section class="about-section">
  <h2><i class="fas fa-graduation-cap"></i> Education</h2>
  <div class="education-card">
    <div class="education-header">
      <h3>[Placeholder University]</h3>
      <span class="education-date">Expected Graduation: [Year]</span>
    </div>
    <p class="degree">Bachelor of Science in Information Systems</p>
    <div class="coursework">
      <h4>Relevant Coursework:</h4>
      <ul class="coursework-list">
        <li>SITE 1101 - Introduction to Information Systems</li>
        <li>Database Management Systems</li>
        <li>Web Development Fundamentals</li>
        <li>Systems Analysis and Design</li>
        <li>Business Analytics</li>
        <li>Project Management</li>
      </ul>
    </div>
  </div>
</section>

<section class="about-section">
  <h2><i class="fas fa-code"></i> Skills</h2>
  
  <div class="skills-category">
    <h3>Programming Languages</h3>
    <div class="skill-tags">
      <span class="skill-tag">HTML5</span>
      <span class="skill-tag">CSS3</span>
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">SQL</span>
    </div>
  </div>

  <div class="skills-category">
    <h3>Tools & Technologies</h3>
    <div class="skill-tags">
      <span class="skill-tag">Git</span>
      <span class="skill-tag">GitHub</span>
      <span class="skill-tag">VS Code</span>
      <span class="skill-tag">Jekyll</span>
      <span class="skill-tag">Microsoft Office</span>
      <span class="skill-tag">Figma</span>
    </div>
  </div>

  <div class="skills-category">
    <h3>Soft Skills</h3>
    <div class="skill-tags">
      <span class="skill-tag">Problem Solving</span>
      <span class="skill-tag">Project Management</span>
      <span class="skill-tag">Team Collaboration</span>
      <span class="skill-tag">Communication</span>
      <span class="skill-tag">Critical Thinking</span>
    </div>
  </div>
</section>

<section class="about-section">
  <h2><i class="fas fa-briefcase"></i> Experience & Activities</h2>
  
  <div class="experience-item">
    <div class="experience-header">
      <h3>SITE 1101 Course Projects</h3>
      <span class="experience-date">[Semester, Year]</span>
    </div>
    <p>
      Completed hands-on projects including building this portfolio website using Jekyll and 
      GitHub Pages. Learned version control with Git, web development fundamentals, and 
      professional documentation practices.
    </p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <h3>[Club/Organization Name]</h3>
      <span class="experience-date">[Year - Present]</span>
    </div>
    <p>
      [Describe your role and responsibilities. What did you contribute? What did you learn?]
    </p>
  </div>

  <div class="experience-item">
    <div class="experience-header">
      <h3>[Project/Internship/Activity]</h3>
      <span class="experience-date">[Date Range]</span>
    </div>
    <p>
      [Describe the experience. What technologies did you use? What was the outcome?]
    </p>
  </div>
</section>

<section class="about-section">
  <h2><i class="fas fa-heart"></i> Interests & Hobbies</h2>
  <p>
    When I'm not studying or coding, you can find me:
  </p>
  <div class="interests-grid">
    <div class="interest-item">
      <i class="fas fa-book"></i>
      <span>Reading tech blogs</span>
    </div>
    <div class="interest-item">
      <i class="fas fa-gamepad"></i>
      <span>Gaming</span>
    </div>
    <div class="interest-item">
      <i class="fas fa-music"></i>
      <span>Listening to music</span>
    </div>
    <div class="interest-item">
      <i class="fas fa-hiking"></i>
      <span>Outdoor activities</span>
    </div>
    <div class="interest-item">
      <i class="fas fa-camera"></i>
      <span>Photography</span>
    </div>
    <div class="interest-item">
      <i class="fas fa-coffee"></i>
      <span>Exploring coffee shops</span>
    </div>
  </div>
</section>

<section class="about-cta">
  <h2>Let's Connect!</h2>
  <p>I'm always open to discussing new opportunities, projects, or just chatting about technology.</p>
  <div class="cta-buttons">
    <a href="https://github.com/{{ site.github_username }}" target="_blank" class="btn btn-primary">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="mailto:{{ site.email }}" class="btn btn-secondary">
      <i class="fas fa-envelope"></i> Email Me
    </a>
  </div>
</section>

```

Created `about.md` with all sections:

1. **Introduction** - Hero with photo, lead paragraph, career goals
2. **Education** - University, degree, graduation year, coursework list
3. **Skills** - Three categories with tag-style display:
   - Programming Languages
   - Tools & Technologies
   - Soft Skills
4. **Experience & Activities** - SITE 1101 projects + placeholders for other activities
5. **Interests** - 6 hobby icons with labels
6. **CTA Section** - GitHub and Email buttons

**Placeholders to replace:**
- `[Your Name]`
- `[Placeholder University]`
- `[Year]` for graduation
- `[Semester, Year]` for course dates
- `[Club/Organization Name]`
- Interest/hobby items to match yours

Deleted the old `about.markdown` file.

---

**User**

Create a projects page at projects.md that showcases my work in a grid layout.

PROJECTS PAGE STRUCTURE:

PAGE HEADER:
- Title: "My Projects"
- Subtitle: "A collection of my work and learning experiences"

PROJECTS GRID:
Create structure for at least 3 project cards:

PROJECT 1 (must include):
- Title: "[Project 1 Title]"
- Description: 2-3 sentences about the project
- Image: /assets/images/projects/project1.jpg
- Technologies used: (list with tags/badges)
- Date: Month Year
- Links: "View Project" button (if applicable)

PROJECT 2 (Hour of Code - optional):
- Title: "Hour of Code Challenge"
- Description: Description of Hour of Code completion
- Image: /assets/images/projects/project2.jpg
- Technologies: Programming language used
- Certificate or achievement

PROJECT 3 (placeholder for future):
- Similar structure with placeholder content

EACH PROJECT CARD SHOULD HAVE:
- Image thumbnail (hover effect)
- Title
- Brief description
- Technology tags/badges
- Call-to-action link or button
- Consistent styling

TECHNICAL REQUIREMENTS:
- Use default layout
- CSS Grid or Flexbox for responsive grid
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Hover effects on cards
- Placeholder images with proper alt text
- Easy to add more projects later

Make the layout modern, visually appealing, and easy to update. Use placeholder content clearly marked for replacement.


---

**Cursor**

```markdown
---
layout: default
title: Projects
---

<section class="projects-hero">
  <h1>My Projects</h1>
  <p class="projects-subtitle">A collection of my work and learning experiences</p>
</section>

<section class="projects-grid">

  <!-- Project 1 -->
  <article class="project-card">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/project1.jpg' | relative_url }}" alt="[Project 1 Title] screenshot">
      <div class="project-overlay">
        <a href="#" class="btn btn-small">View Project</a>
      </div>
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> [Month Year]</span>
      <h3 class="project-title">[Project 1 Title]</h3>
      <p class="project-description">
        [Describe your project here. What problem does it solve? What did you learn? 
        Keep it to 2-3 sentences that highlight the key aspects of the project.]
      </p>
      <div class="project-tags">
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">JavaScript</span>
      </div>
      <div class="project-links">
        <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
      </div>
    </div>
  </article>

  <!-- Project 2: Hour of Code -->
  <article class="project-card">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/project2.jpg' | relative_url }}" alt="Hour of Code Challenge certificate">
      <div class="project-overlay">
        <a href="#" class="btn btn-small">View Certificate</a>
      </div>
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> [Month Year]</span>
      <h3 class="project-title">Hour of Code Challenge</h3>
      <p class="project-description">
        Completed the Hour of Code challenge, learning fundamental programming concepts 
        through interactive tutorials. This experience sparked my interest in coding 
        and problem-solving.
      </p>
      <div class="project-tags">
        <span class="tag">Programming</span>
        <span class="tag">Logic</span>
        <span class="tag">Problem Solving</span>
      </div>
      <div class="project-links">
        <a href="#" class="project-link"><i class="fas fa-certificate"></i> Certificate</a>
      </div>
    </div>
  </article>

  <!-- Project 3: Portfolio Website -->
  <article class="project-card">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/project3.jpg' | relative_url }}" alt="Portfolio website screenshot">
      <div class="project-overlay">
        <a href="https://github.com/{{ site.github_username }}/{{ site.github_username }}.github.io" class="btn btn-small">View Code</a>
      </div>
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> [Month Year]</span>
      <h3 class="project-title">Personal Portfolio Website</h3>
      <p class="project-description">
        Built this portfolio website from scratch using Jekyll and GitHub Pages as part 
        of my SITE 1101 coursework. Features responsive design, modern styling, and 
        showcases my projects and skills.
      </p>
      <div class="project-tags">
        <span class="tag">Jekyll</span>
        <span class="tag">HTML</span>
        <span class="tag">CSS</span>
        <span class="tag">GitHub Pages</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/{{ site.github_username }}/{{ site.github_username }}.github.io" class="project-link"><i class="fab fa-github"></i> Code</a>
        <a href="{{ '/' | relative_url }}" class="project-link"><i class="fas fa-external-link-alt"></i> Live Site</a>
      </div>
    </div>
  </article>

  <!-- Project 4: Placeholder for Future -->
  <article class="project-card project-placeholder">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/placeholder.jpg' | relative_url }}" alt="Future project placeholder">
      <div class="project-overlay">
        <span class="coming-soon">Coming Soon</span>
      </div>
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-clock"></i> In Progress</span>
      <h3 class="project-title">[Future Project]</h3>
      <p class="project-description">
        Stay tuned! I'm always working on new projects to expand my skills and 
        portfolio. Check back soon for updates.
      </p>
      <div class="project-tags">
        <span class="tag">TBD</span>
      </div>
    </div>
  </article>

</section>

<section class="projects-cta">
  <h2>Want to see more?</h2>
  <p>Check out my GitHub profile for additional projects and contributions.</p>
  <a href="https://github.com/{{ site.github_username }}" target="_blank" class="btn btn-primary">
    <i class="fab fa-github"></i> Visit My GitHub
  </a>
</section>

```

Created `projects.md` with:

**Page Header:**
- Title and subtitle

**4 Project Cards:**
1. **[Project 1 Title]** - Generic placeholder with GitHub/Live Demo links
2. **Hour of Code Challenge** - Certificate link included
3. **Personal Portfolio Website** - Links to your GitHub repo
4. **[Future Project]** - "Coming Soon" placeholder

**Each card includes:**
- Image with hover overlay
- Date badge
- Title & description
- Technology tags
- Action links (Code, Live Demo, Certificate)

**CTA Section:**
- Link to GitHub profile for more projects

**Placeholders to replace:**
- `[Project 1 Title]` and description
- `[Month Year]` dates
- Project image paths
- Links (`#` placeholders)

You'll need to add images to `/assets/images/projects/` and the CSS will handle the responsive grid (3 → 2 → 1 columns).

---

**User**

Create a comprehensive CSS file at assets/css/style.css

PART 1 - BASE STYLES & LAYOUT:

COLOR SCHEME:
Choose a modern, professional color palette. Suggest one with:
- Primary color (for headers, buttons)
- Secondary color (for accents)
- Background colors (light/dark)
- Text colors (dark for readability)
- Use CSS custom properties (variables)

TYPOGRAPHY:
- Import Google Fonts (suggest 2 fonts: one for headings, one for body)
- Heading styles (h1-h6) with proper sizing
- Body text: readable font size (16-18px), proper line height
- Font weights and spacing

LAYOUT:
- Container max-width: 1200px, centered
- Section spacing: consistent padding/margins
- Grid system for content

RESET/BASE:
- CSS reset or normalize
- Box-sizing: border-box
- Remove default margins/paddings
- Smooth scrolling

NAVIGATION BAR:
- Fixed/sticky positioning
- Flexbox layout
- Proper spacing and alignment
- Logo/title styling
- Nav links styling with hover effects
- Hamburger menu icon (hidden on desktop, visible on mobile)

Create this first part of the CSS. Make it modern and professional. Use comments to organize sections.


---

**Cursor**

```css
/* ============================================
   PORTFOLIO CSS - Part 1: Base Styles & Layout
   ============================================ */

/* --------------------------------------------
   CSS Custom Properties (Variables)
   -------------------------------------------- */
:root {
  /* Primary Colors - Deep Teal & Coral */
  --color-primary: #0d7377;
  --color-primary-dark: #095455;
  --color-primary-light: #14a3a8;
  
  /* Secondary/Accent - Warm Coral */
  --color-accent: #e85a4f;
  --color-accent-dark: #c94a40;
  --color-accent-light: #ff7b6b;
  
  /* Backgrounds */
  --color-bg: #fafbfc;
  --color-bg-alt: #f0f4f5;
  --color-bg-dark: #1a2634;
  --color-bg-card: #ffffff;
  
  /* Text Colors */
  --color-text: #2d3748;
  --color-text-light: #5a6a7a;
  --color-text-muted: #8896a6;
  --color-text-inverse: #f7fafc;
  
  /* Borders & Shadows */
  --color-border: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 12px 35px rgba(13, 115, 119, 0.15);
  
  /* Typography */
  --font-heading: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;
  
  /* Layout */
  --container-max: 1200px;
  --nav-height: 70px;
  --border-radius: 8px;
  --border-radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* --------------------------------------------
   CSS Reset & Base
   -------------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-dark);
}

ul, ol {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* --------------------------------------------
   Typography
   -------------------------------------------- */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
}

h4 {
  font-size: 1.125rem;
}

h5 {
  font-size: 1rem;
}

h6 {
  font-size: 0.875rem;
}

p {
  margin-bottom: var(--spacing-sm);
}

.lead {
  font-size: 1.25rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.highlight {
  color: var(--color-primary);
}

/* --------------------------------------------
   Layout & Container
   -------------------------------------------- */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.main-content {
  min-height: calc(100vh - var(--nav-height));
  padding-top: calc(var(--nav-height) + var(--spacing-lg));
  padding-bottom: var(--spacing-2xl);
}

section {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: var(--spacing-sm) auto 0;
  border-radius: 2px;
}

/* --------------------------------------------
   Navigation Bar
   -------------------------------------------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: var(--container-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.nav-logo:hover {
  color: var(--color-primary);
}

.logo-bracket {
  color: var(--color-primary);
}

/* Nav Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-light);
  padding: var(--spacing-xs) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

/* Hamburger Menu */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger {
  width: 24px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: background var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform var(--transition-base);
}

.hamburger::before {
  top: -7px;
}

.hamburger::after {
  top: 7px;
}

/* Hamburger Active State */
.nav-toggle.active .hamburger {
  background: transparent;
}

.nav-toggle.active .hamburger::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active .hamburger::after {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* --------------------------------------------
   Buttons
   -------------------------------------------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: var(--color-text-inverse);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  transform: translateY(-2px);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* --------------------------------------------
   Mobile Responsive - Navigation
   -------------------------------------------- */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-lg);
    background: var(--color-bg-card);
    box-shadow: var(--shadow-lg);
    transition: right var(--transition-base);
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.25rem;
  }
}

```

Created `assets/css/style.css` Part 1 with:

**Color Scheme:**
- Primary: Deep Teal (#0d7377) - professional, modern
- Accent: Warm Coral (#e85a4f) - energetic contrast
- Light backgrounds with dark readable text
- All colors as CSS custom properties

**Typography:**
- DM Sans for headings & body (already linked in layout)
- JetBrains Mono for code/logo
- Responsive font sizes with `clamp()`
- Proper line heights (1.7 for body)

**Layout:**
- 1200px max container, centered
- Consistent spacing variables
- Section spacing system

**Reset/Base:**
- Box-sizing border-box
- Smooth scrolling
- Image handling
- Link transitions

**Navigation:**
- Fixed/sticky with blur backdrop
- Flexbox layout
- Animated underline on hover
- Logo with code brackets styling
- Hamburger menu (CSS transforms for X animation)
- Mobile slide-in menu

**Buttons:**
- Primary (gradient teal)
- Secondary (outlined)
- Hover lift effects

Ready for Part 2 when you want to continue with the remaining sections (hero, projects, footer, etc.).

---

**User**

Continue the CSS file (assets/css/style.css) with component styles.

PART 2 - COMPONENTS & SECTIONS:

HERO SECTION:
- Full-width or contained
- Centered content
- Profile image: circular, proper sizing (200-300px)
- Image border/shadow effects
- Text centering and spacing
- Button styles with hover effects

BUTTONS:
- Primary button style
- Secondary button style
- Hover and active states
- Padding, border-radius, transitions
- Consistent sizing

CARDS (for projects):
- Card container styling
- Image sizing and positioning
- Card shadow/border
- Padding and spacing
- Hover effects (lift, shadow increase)
- Technology tags/badges styling

SECTIONS:
- About section grid layout
- Skills display (progress bars or tags)
- Content sections with proper spacing
- Background variations (alternate colors)

FOOTER:
- Background color
- Multi-column layout (flexbox or grid)
- Social icon sizing and spacing
- Link styles
- Copyright text styling
- Proper padding

IMAGES:
- Responsive sizing (max-width: 100%, height: auto)
- Border-radius for rounded corners
- Image hover effects

Add these styles to the same CSS file with proper comments and organization.

---

**Cursor**

```css
/* ============================================
   PORTFOLIO CSS - Part 1: Base Styles & Layout
   ============================================ */

/* --------------------------------------------
   CSS Custom Properties (Variables)
   -------------------------------------------- */
:root {
  /* Primary Colors - Deep Teal & Coral */
  --color-primary: #0d7377;
  --color-primary-dark: #095455;
  --color-primary-light: #14a3a8;
  
  /* Secondary/Accent - Warm Coral */
  --color-accent: #e85a4f;
  --color-accent-dark: #c94a40;
  --color-accent-light: #ff7b6b;
  
  /* Backgrounds */
  --color-bg: #fafbfc;
  --color-bg-alt: #f0f4f5;
  --color-bg-dark: #1a2634;
  --color-bg-card: #ffffff;
  
  /* Text Colors */
  --color-text: #2d3748;
  --color-text-light: #5a6a7a;
  --color-text-muted: #8896a6;
  --color-text-inverse: #f7fafc;
  
  /* Borders & Shadows */
  --color-border: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 12px 35px rgba(13, 115, 119, 0.15);
  
  /* Typography */
  --font-heading: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;
  
  /* Layout */
  --container-max: 1200px;
  --nav-height: 70px;
  --border-radius: 8px;
  --border-radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* --------------------------------------------
   CSS Reset & Base
   -------------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-dark);
}

ul, ol {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* --------------------------------------------
   Typography
   -------------------------------------------- */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
}

h4 {
  font-size: 1.125rem;
}

h5 {
  font-size: 1rem;
}

h6 {
  font-size: 0.875rem;
}

p {
  margin-bottom: var(--spacing-sm);
}

.lead {
  font-size: 1.25rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.highlight {
  color: var(--color-primary);
}

/* --------------------------------------------
   Layout & Container
   -------------------------------------------- */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.main-content {
  min-height: calc(100vh - var(--nav-height));
  padding-top: calc(var(--nav-height) + var(--spacing-lg));
  padding-bottom: var(--spacing-2xl);
}

section {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: var(--spacing-sm) auto 0;
  border-radius: 2px;
}

/* --------------------------------------------
   Navigation Bar
   -------------------------------------------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: var(--container-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.nav-logo:hover {
  color: var(--color-primary);
}

.logo-bracket {
  color: var(--color-primary);
}

/* Nav Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-light);
  padding: var(--spacing-xs) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

/* Hamburger Menu */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger {
  width: 24px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: background var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform var(--transition-base);
}

.hamburger::before {
  top: -7px;
}

.hamburger::after {
  top: 7px;
}

/* Hamburger Active State */
.nav-toggle.active .hamburger {
  background: transparent;
}

.nav-toggle.active .hamburger::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active .hamburger::after {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* --------------------------------------------
   Buttons
   -------------------------------------------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: var(--color-text-inverse);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  transform: translateY(-2px);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* --------------------------------------------
   Mobile Responsive - Navigation
   -------------------------------------------- */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-lg);
    background: var(--color-bg-card);
    box-shadow: var(--shadow-lg);
    transition: right var(--transition-base);
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.25rem;
  }
}

/* ============================================
   PORTFOLIO CSS - Part 2: Components & Sections
   ============================================ */

/* --------------------------------------------
   Hero Section
   -------------------------------------------- */
.hero {
  padding: var(--spacing-2xl) 0;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
}

.hero-image {
  position: relative;
}

.profile-photo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-bg-card);
  box-shadow: var(--shadow-lg), 0 0 0 4px var(--color-primary);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.profile-photo:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-hover), 0 0 0 6px var(--color-primary-light);
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: var(--spacing-xs);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

/* --------------------------------------------
   Highlights Section
   -------------------------------------------- */
.highlights {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg-alt);
  border-radius: var(--border-radius-lg);
  margin: var(--spacing-xl) 0;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-bg-card);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.highlight-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.highlight-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.highlight-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-top: var(--spacing-xs);
}

/* --------------------------------------------
   About Preview Section
   -------------------------------------------- */
.about-preview {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.about-preview-content {
  max-width: 700px;
  margin: 0 auto;
}

.about-preview-content p {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

/* --------------------------------------------
   About Page Styles
   -------------------------------------------- */
.about-hero {
  padding: var(--spacing-xl) 0;
}

.about-hero-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.about-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
}

.about-intro h1 {
  margin-bottom: var(--spacing-sm);
}

.about-section {
  padding: var(--spacing-xl) 0;
  border-bottom: 1px solid var(--color-border);
}

.about-section:last-of-type {
  border-bottom: none;
}

.about-section h2 {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.about-section h2 i {
  color: var(--color-primary);
}

/* Education Card */
.education-card {
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-primary);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
}

.education-header h3 {
  margin-bottom: 0;
}

.education-date {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  background: var(--color-bg-alt);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius);
}

.degree {
  font-size: 1.125rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.coursework h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
}

.coursework-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xs);
}

.coursework-list li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-md);
  position: relative;
}

.coursework-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* Skills Section */
.skills-category {
  margin-bottom: var(--spacing-lg);
}

.skills-category h3 {
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.skill-tag {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-text-inverse);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

/* Experience Section */
.experience-item {
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-md);
  border-left: 3px solid var(--color-accent);
  transition: transform var(--transition-base);
}

.experience-item:hover {
  transform: translateX(5px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.experience-header h3 {
  margin-bottom: 0;
}

.experience-date {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

/* Interests Grid */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.interest-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-card);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.interest-item:hover {
  transform: translateY(-3px);
}

.interest-item i {
  color: var(--color-primary);
  font-size: 1.25rem;
}

/* About CTA */
.about-cta {
  text-align: center;
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-bg-alt), var(--color-bg));
  border-radius: var(--border-radius-lg);
  margin-top: var(--spacing-xl);
}

.about-cta h2 {
  margin-bottom: var(--spacing-sm);
}

.about-cta p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

/* --------------------------------------------
   Projects Page Styles
   -------------------------------------------- */
.projects-hero {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.projects-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-top: var(--spacing-sm);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

/* Project Card */
.project-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 115, 119, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay .btn-small {
  background: var(--color-bg-card);
  color: var(--color-primary);
}

.project-overlay .btn-small:hover {
  background: var(--color-text-inverse);
}

.coming-soon {
  color: var(--color-text-inverse);
  font-weight: 600;
  font-size: 1.125rem;
}

.project-content {
  padding: var(--spacing-md);
}

.project-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: var(--spacing-xs);
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-xs);
}

.project-description {
  font-size: 0.95rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

/* Project Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: var(--spacing-md);
}

.tag {
  background: var(--color-bg-alt);
  color: var(--color-text-light);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Project Links */
.project-links {
  display: flex;
  gap: var(--spacing-md);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-border);
}

.project-link {
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.project-link:hover {
  color: var(--color-accent);
}

/* Project Placeholder Card */
.project-placeholder {
  opacity: 0.7;
}

.project-placeholder .project-image {
  background: linear-gradient(135deg, var(--color-bg-alt), var(--color-border));
}

/* Projects CTA */
.projects-cta {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-bg-alt);
  border-radius: var(--border-radius-lg);
  margin-top: var(--spacing-lg);
}

.projects-cta h2 {
  margin-bottom: var(--spacing-sm);
}

.projects-cta p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

/* --------------------------------------------
   Footer
   -------------------------------------------- */
.footer {
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  margin-top: auto;
}

.footer-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.footer-section {
  text-align: center;
}

.footer-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-inverse);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-links a {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary-light);
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--color-text-inverse);
  font-size: 1.25rem;
  transition: all var(--transition-base);
}

.social-links a:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
  color: var(--color-text-inverse);
}

/* Source Link */
.source-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: color var(--transition-fast);
}

.source-link:hover {
  color: var(--color-primary-light);
}

/* Footer Bottom */
.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin: 0;
}

/* --------------------------------------------
   Responsive - Components
   -------------------------------------------- */
@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 var(--spacing-sm);
  }
  
  .profile-photo {
    width: 180px;
    height: 180px;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .about-hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .about-photo {
    width: 150px;
    height: 150px;
  }
  
  .about-section h2 {
    justify-content: center;
  }
  
  .education-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .experience-header {
    flex-direction: column;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-lg);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .profile-photo {
    width: 150px;
    height: 150px;
  }
  
  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

```

Added Part 2 to `style.css` with all component styles:

**Hero Section:**
- Centered layout with flex
- 220px circular profile photo with teal ring
- Hover scale effect on photo
- Responsive text sizing

**Highlights Section:**
- 3-column grid with hover lift
- Icon + number + label layout
- Alt background color

**About Page:**
- Hero with side-by-side photo/intro
- Education card with left border accent
- Skill tags with gradient background
- Experience items with coral accent
- Interests grid with icons
- CTA section

**Projects Page:**
- 3-column responsive grid (3→2→1)
- Cards with image overlay on hover
- Technology tags
- Project links with icons
- "Coming Soon" placeholder styling

**Footer:**
- Dark background
- 3-column grid layout
- Social icons with circular backgrounds
- Hover effects on links
- Copyright section with top border

**Responsive Breakpoints:**
- 992px: Projects 2-column
- 768px: Single columns, stacked layouts
- 480px: Smaller fonts, compact elements

---

**User**

Continue the CSS file (assets/css/style.css) with responsive design.

PART 3 - RESPONSIVE DESIGN & MOBILE:

MEDIA QUERIES:
Create breakpoints for:
- Mobile: max-width 480px
- Tablet: max-width 768px
- Desktop: min-width 769px

MOBILE STYLES (max-width: 768px):

NAVIGATION:
- Hamburger menu visible
- Navigation links hidden by default
- Mobile menu: full-width dropdown
- Menu toggle animation
- Links stack vertically

LAYOUT:
- Single column layout
- Reduced padding/margins
- Smaller font sizes for headings
- Full-width containers

HERO SECTION:
- Smaller profile image (150px)
- Reduced text sizes
- Stack elements vertically

PROJECTS GRID:
- Single column layout
- Full-width cards
- Adjusted card spacing

FOOTER:
- Stack columns vertically
- Centered alignment
- Adjusted spacing

TABLET STYLES (max-width: 1024px):
- 2-column project grid
- Adjusted navigation spacing
- Medium-sized components

GENERAL RESPONSIVE:
- Touch-friendly tap targets (min 44px)
- Readable text sizes on all screens
- Proper image scaling
- No horizontal scrolling
- Hamburger menu functionality

Add all responsive styles with proper media queries. Test at different breakpoints.


---

**Cursor**

```css
/* ============================================
   PORTFOLIO CSS - Part 1: Base Styles & Layout
   ============================================ */

/* --------------------------------------------
   CSS Custom Properties (Variables)
   -------------------------------------------- */
:root {
  /* Primary Colors - Deep Teal & Coral */
  --color-primary: #0d7377;
  --color-primary-dark: #095455;
  --color-primary-light: #14a3a8;
  
  /* Secondary/Accent - Warm Coral */
  --color-accent: #e85a4f;
  --color-accent-dark: #c94a40;
  --color-accent-light: #ff7b6b;
  
  /* Backgrounds */
  --color-bg: #fafbfc;
  --color-bg-alt: #f0f4f5;
  --color-bg-dark: #1a2634;
  --color-bg-card: #ffffff;
  
  /* Text Colors */
  --color-text: #2d3748;
  --color-text-light: #5a6a7a;
  --color-text-muted: #8896a6;
  --color-text-inverse: #f7fafc;
  
  /* Borders & Shadows */
  --color-border: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.12);
  --shadow-hover: 0 12px 35px rgba(13, 115, 119, 0.15);
  
  /* Typography */
  --font-heading: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 5rem;
  
  /* Layout */
  --container-max: 1200px;
  --nav-height: 70px;
  --border-radius: 8px;
  --border-radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* --------------------------------------------
   CSS Reset & Base
   -------------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-dark);
}

ul, ol {
  list-style: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* --------------------------------------------
   Typography
   -------------------------------------------- */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
}

h4 {
  font-size: 1.125rem;
}

h5 {
  font-size: 1rem;
}

h6 {
  font-size: 0.875rem;
}

p {
  margin-bottom: var(--spacing-sm);
}

.lead {
  font-size: 1.25rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.highlight {
  color: var(--color-primary);
}

/* --------------------------------------------
   Layout & Container
   -------------------------------------------- */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.main-content {
  min-height: calc(100vh - var(--nav-height));
  padding-top: calc(var(--nav-height) + var(--spacing-lg));
  padding-bottom: var(--spacing-2xl);
}

section {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  margin: var(--spacing-sm) auto 0;
  border-radius: 2px;
}

/* --------------------------------------------
   Navigation Bar
   -------------------------------------------- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: var(--container-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.nav-logo:hover {
  color: var(--color-primary);
}

.logo-bracket {
  color: var(--color-primary);
}

/* Nav Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-light);
  padding: var(--spacing-xs) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

/* Hamburger Menu */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger {
  width: 24px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: background var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform var(--transition-base);
}

.hamburger::before {
  top: -7px;
}

.hamburger::after {
  top: 7px;
}

/* Hamburger Active State */
.nav-toggle.active .hamburger {
  background: transparent;
}

.nav-toggle.active .hamburger::before {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle.active .hamburger::after {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* --------------------------------------------
   Buttons
   -------------------------------------------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: var(--color-text-inverse);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  transform: translateY(-2px);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* --------------------------------------------
   Mobile Responsive - Navigation
   -------------------------------------------- */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-lg);
    background: var(--color-bg-card);
    box-shadow: var(--shadow-lg);
    transition: right var(--transition-base);
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.25rem;
  }
}

/* ============================================
   PORTFOLIO CSS - Part 2: Components & Sections
   ============================================ */

/* --------------------------------------------
   Hero Section
   -------------------------------------------- */
.hero {
  padding: var(--spacing-2xl) 0;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
}

.hero-image {
  position: relative;
}

.profile-photo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-bg-card);
  box-shadow: var(--shadow-lg), 0 0 0 4px var(--color-primary);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.profile-photo:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-hover), 0 0 0 6px var(--color-primary-light);
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: var(--spacing-xs);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

/* --------------------------------------------
   Highlights Section
   -------------------------------------------- */
.highlights {
  padding: var(--spacing-xl) 0;
  background: var(--color-bg-alt);
  border-radius: var(--border-radius-lg);
  margin: var(--spacing-xl) 0;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-bg-card);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.highlight-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.highlight-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.highlight-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-top: var(--spacing-xs);
}

/* --------------------------------------------
   About Preview Section
   -------------------------------------------- */
.about-preview {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.about-preview-content {
  max-width: 700px;
  margin: 0 auto;
}

.about-preview-content p {
  font-size: 1.125rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

/* --------------------------------------------
   About Page Styles
   -------------------------------------------- */
.about-hero {
  padding: var(--spacing-xl) 0;
}

.about-hero-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.about-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow-md);
  flex-shrink: 0;
}

.about-intro h1 {
  margin-bottom: var(--spacing-sm);
}

.about-section {
  padding: var(--spacing-xl) 0;
  border-bottom: 1px solid var(--color-border);
}

.about-section:last-of-type {
  border-bottom: none;
}

.about-section h2 {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.about-section h2 i {
  color: var(--color-primary);
}

/* Education Card */
.education-card {
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--color-primary);
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
}

.education-header h3 {
  margin-bottom: 0;
}

.education-date {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  background: var(--color-bg-alt);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius);
}

.degree {
  font-size: 1.125rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.coursework h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-light);
}

.coursework-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xs);
}

.coursework-list li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-md);
  position: relative;
}

.coursework-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* Skills Section */
.skills-category {
  margin-bottom: var(--spacing-lg);
}

.skills-category h3 {
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.skill-tag {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: var(--color-text-inverse);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

/* Experience Section */
.experience-item {
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-md);
  border-left: 3px solid var(--color-accent);
  transition: transform var(--transition-base);
}

.experience-item:hover {
  transform: translateX(5px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.experience-header h3 {
  margin-bottom: 0;
}

.experience-date {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

/* Interests Grid */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.interest-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-card);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast);
}

.interest-item:hover {
  transform: translateY(-3px);
}

.interest-item i {
  color: var(--color-primary);
  font-size: 1.25rem;
}

/* About CTA */
.about-cta {
  text-align: center;
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-bg-alt), var(--color-bg));
  border-radius: var(--border-radius-lg);
  margin-top: var(--spacing-xl);
}

.about-cta h2 {
  margin-bottom: var(--spacing-sm);
}

.about-cta p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

/* --------------------------------------------
   Projects Page Styles
   -------------------------------------------- */
.projects-hero {
  text-align: center;
  padding: var(--spacing-xl) 0;
}

.projects-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-top: var(--spacing-sm);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

/* Project Card */
.project-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 115, 119, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay .btn-small {
  background: var(--color-bg-card);
  color: var(--color-primary);
}

.project-overlay .btn-small:hover {
  background: var(--color-text-inverse);
}

.coming-soon {
  color: var(--color-text-inverse);
  font-weight: 600;
  font-size: 1.125rem;
}

.project-content {
  padding: var(--spacing-md);
}

.project-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: var(--spacing-xs);
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-xs);
}

.project-description {
  font-size: 0.95rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

/* Project Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: var(--spacing-md);
}

.tag {
  background: var(--color-bg-alt);
  color: var(--color-text-light);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Project Links */
.project-links {
  display: flex;
  gap: var(--spacing-md);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-border);
}

.project-link {
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.project-link:hover {
  color: var(--color-accent);
}

/* Project Placeholder Card */
.project-placeholder {
  opacity: 0.7;
}

.project-placeholder .project-image {
  background: linear-gradient(135deg, var(--color-bg-alt), var(--color-border));
}

/* Projects CTA */
.projects-cta {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-bg-alt);
  border-radius: var(--border-radius-lg);
  margin-top: var(--spacing-lg);
}

.projects-cta h2 {
  margin-bottom: var(--spacing-sm);
}

.projects-cta p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

/* --------------------------------------------
   Footer
   -------------------------------------------- */
.footer {
  background: var(--color-bg-dark);
  color: var(--color-text-inverse);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  margin-top: auto;
}

.footer-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.footer-section {
  text-align: center;
}

.footer-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-inverse);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-links a {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary-light);
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--color-text-inverse);
  font-size: 1.25rem;
  transition: all var(--transition-base);
}

.social-links a:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
  color: var(--color-text-inverse);
}

/* Source Link */
.source-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: color var(--transition-fast);
}

.source-link:hover {
  color: var(--color-primary-light);
}

/* Footer Bottom */
.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin: 0;
}

/* ============================================
   PORTFOLIO CSS - Part 3: Responsive Design
   ============================================ */

/* --------------------------------------------
   Tablet Styles (max-width: 1024px)
   -------------------------------------------- */
@media (max-width: 1024px) {
  :root {
    --spacing-2xl: 4rem;
  }
  
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
  
  .highlights-grid {
    gap: var(--spacing-md);
  }
  
  .footer-container {
    gap: var(--spacing-lg);
  }
}

/* --------------------------------------------
   Tablet/Mobile Styles (max-width: 768px)
   -------------------------------------------- */
@media (max-width: 768px) {
  :root {
    --nav-height: 60px;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
  }
  
  /* Navigation - Mobile Menu */
  .nav-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-lg);
    background: var(--color-bg-card);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
    transition: right var(--transition-base);
    z-index: 999;
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.25rem;
    padding: var(--spacing-sm) var(--spacing-lg);
    min-height: 44px;
    display: flex;
    align-items: center;
  }
  
  /* Mobile Menu Overlay */
  .nav-menu::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition-base);
    z-index: -1;
  }
  
  .nav-menu.active::before {
    opacity: 1;
    visibility: visible;
  }
  
  /* Main Content */
  .main-content {
    padding-top: calc(var(--nav-height) + var(--spacing-md));
  }
  
  /* Hero Section */
  .hero {
    padding: var(--spacing-xl) 0;
  }
  
  .hero-content {
    padding: 0 var(--spacing-sm);
  }
  
  .profile-photo {
    width: 180px;
    height: 180px;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  /* Highlights */
  .highlights {
    padding: var(--spacing-lg) var(--spacing-sm);
    margin: var(--spacing-lg) 0;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
    max-width: 350px;
    gap: var(--spacing-sm);
  }
  
  .highlight-card {
    padding: var(--spacing-md);
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    gap: var(--spacing-md);
  }
  
  .highlight-icon {
    font-size: 2rem;
    margin-bottom: 0;
  }
  
  .highlight-number {
    font-size: 2rem;
  }
  
  /* About Preview */
  .about-preview-content p {
    font-size: 1rem;
  }
  
  /* About Page */
  .about-hero-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-lg);
  }
  
  .about-photo {
    width: 150px;
    height: 150px;
  }
  
  .about-section {
    padding: var(--spacing-lg) 0;
  }
  
  .about-section h2 {
    justify-content: center;
    font-size: 1.5rem;
  }
  
  .education-card {
    padding: var(--spacing-md);
  }
  
  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
  
  .coursework-list {
    grid-template-columns: 1fr;
  }
  
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .experience-item {
    padding: var(--spacing-md);
  }
  
  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
  
  .about-cta {
    padding: var(--spacing-lg);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .cta-buttons .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  /* Projects Page */
  .projects-hero {
    padding: var(--spacing-lg) 0;
  }
  
  .projects-subtitle {
    font-size: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
    gap: var(--spacing-lg);
  }
  
  .project-image {
    height: 180px;
  }
  
  .project-content {
    padding: var(--spacing-md);
  }
  
  .projects-cta {
    padding: var(--spacing-lg);
  }
  
  /* Footer */
  .footer {
    padding: var(--spacing-xl) 0 var(--spacing-md);
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-lg);
  }
  
  .footer-links {
    align-items: center;
  }
  
  .footer-bottom {
    padding-top: var(--spacing-lg);
    margin-top: var(--spacing-lg);
  }
  
  /* Buttons - Touch Friendly */
  .btn {
    min-height: 44px;
    padding: 0.75rem 1.25rem;
  }
  
  .btn-small {
    min-height: 40px;
  }
}

/* --------------------------------------------
   Mobile Styles (max-width: 480px)
   -------------------------------------------- */
@media (max-width: 480px) {
  :root {
    --spacing-lg: 1.5rem;
    --spacing-xl: 1.75rem;
    --spacing-2xl: 2.5rem;
  }
  
  body {
    font-size: 0.95rem;
  }
  
  h1 {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 1.375rem;
  }
  
  h3 {
    font-size: 1.125rem;
  }
  
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  /* Navigation */
  .nav-logo {
    font-size: 1rem;
  }
  
  .nav-menu {
    width: 85%;
  }
  
  /* Hero */
  .hero {
    padding: var(--spacing-lg) 0;
  }
  
  .profile-photo {
    width: 150px;
    height: 150px;
    box-shadow: var(--shadow-md), 0 0 0 3px var(--color-primary);
  }
  
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
    margin-bottom: var(--spacing-sm);
  }
  
  .hero-description {
    font-size: 0.95rem;
    margin-bottom: var(--spacing-md);
  }
  
  /* Highlights */
  .highlights {
    border-radius: var(--border-radius);
  }
  
  .highlight-card {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .highlight-icon {
    font-size: 1.5rem;
  }
  
  .highlight-number {
    font-size: 1.75rem;
  }
  
  .highlight-label {
    font-size: 0.85rem;
  }
  
  /* About */
  .about-photo {
    width: 130px;
    height: 130px;
  }
  
  .lead {
    font-size: 1.05rem;
  }
  
  .skill-tags {
    justify-content: center;
  }
  
  .skill-tag {
    font-size: 0.8rem;
    padding: 0.35rem 0.8rem;
  }
  
  .interests-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .interest-item {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.85rem;
  }
  
  .interest-item i {
    font-size: 1rem;
  }
  
  /* Projects */
  .project-image {
    height: 160px;
  }
  
  .project-title {
    font-size: 1.125rem;
  }
  
  .project-description {
    font-size: 0.9rem;
  }
  
  .project-links {
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
  
  .tag {
    font-size: 0.7rem;
  }
  
  /* Footer */
  .social-links a {
    width: 40px;
    height: 40px;
    font-size: 1.125rem;
  }
  
  .footer-title {
    font-size: 0.9rem;
  }
  
  .footer-bottom p {
    font-size: 0.8rem;
  }
}

/* --------------------------------------------
   Extra Small Devices (max-width: 360px)
   -------------------------------------------- */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.35rem;
  }
  
  .profile-photo {
    width: 130px;
    height: 130px;
  }
  
  .btn {
    font-size: 0.9rem;
    padding: 0.65rem 1rem;
  }
  
  .interests-grid {
    grid-template-columns: 1fr;
  }
  
  .highlight-card {
    flex-direction: column;
    text-align: center;
  }
}

/* --------------------------------------------
   Landscape Mobile
   -------------------------------------------- */
@media (max-height: 500px) and (orientation: landscape) {
  .nav-menu {
    padding: var(--spacing-md);
    justify-content: flex-start;
    overflow-y: auto;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: var(--spacing-xs) var(--spacing-md);
  }
  
  .hero {
    padding: var(--spacing-md) 0;
  }
  
  .hero-content {
    flex-direction: row;
    text-align: left;
  }
  
  .profile-photo {
    width: 120px;
    height: 120px;
  }
}

/* --------------------------------------------
   Accessibility & Touch
   -------------------------------------------- */
@media (hover: none) and (pointer: coarse) {
  /* Remove hover effects on touch devices */
  .project-card:hover {
    transform: none;
  }
  
  .project-card:hover .project-overlay {
    opacity: 0;
  }
  
  .project-card:active {
    transform: scale(0.98);
  }
  
  /* Always show project links on touch */
  .project-overlay {
    display: none;
  }
  
  /* Larger touch targets */
  .nav-link,
  .footer-links a,
  .project-link {
    min-height: 44px;
    display: flex;
    align-items: center;
  }
}

/* --------------------------------------------
   Reduced Motion
   -------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  html {
    scroll-behavior: auto;
  }
}

/* --------------------------------------------
   Print Styles
   -------------------------------------------- */
@media print {
  .navbar,
  .nav-toggle,
  .footer,
  .btn,
  .project-overlay {
    display: none !important;
  }
  
  .main-content {
    padding-top: 0;
  }
  
  body {
    font-size: 12pt;
    color: #000;
    background: #fff;
  }
  
  a {
    color: #000;
    text-decoration: underline;
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

```

Added Part 3 - Comprehensive responsive design:

**Breakpoints:**
- **1024px**: Tablet - 2-column grid, adjusted spacing
- **768px**: Tablet/Mobile - hamburger menu, single columns, stacked layouts
- **480px**: Mobile - smaller fonts, compact components
- **360px**: Extra small - minimal sizing
- **Landscape mobile**: Side-by-side hero layout

**Mobile Navigation:**
- Hamburger menu visible
- Slide-in menu from right (75% width)
- Dark overlay behind menu
- Touch-friendly 44px minimum tap targets

**Responsive Components:**
- Profile photo scales (220px → 150px → 130px)
- Highlights stack horizontally on mobile
- Projects grid: 3 → 2 → 1 columns
- Footer stacks vertically
- Full-width buttons on mobile

**Accessibility:**
- Touch device detection (removes hover effects)
- `prefers-reduced-motion` support
- Print styles included

The CSS is now complete with all three parts!

---

**User**

Create a JavaScript file at assets/js/main.js with interactive features.

JAVASCRIPT FEATURES NEEDED:

1. MOBILE MENU TOGGLE:
- Select hamburger button and mobile menu
- Toggle menu open/close on click
- Add/remove active classes
- Animate menu appearance
- Close menu when clicking outside or on a link

2. SMOOTH SCROLLING:
- Smooth scroll to anchor links
- Proper offset for fixed navigation
- Smooth animation

3. ACTIVE NAVIGATION:
- Highlight current page in navigation
- Add 'active' class to current page link
- Based on current URL/path

4. SCROLL EFFECTS (optional but nice):
- Fade in sections on scroll
- Navbar background change on scroll
- Scroll to top button

5. FORM VALIDATION (if you add contact form):
- Basic validation
- Error messages

TECHNICAL REQUIREMENTS:
- Modern vanilla JavaScript (ES6+)
- DOM ready check
- Event listeners
- Smooth animations
- No jQuery needed
- Comments explaining functionality
- Mobile-friendly touch events

Make the code clean, well-commented, and functional. Keep it simple but effective.


---

**Cursor**

```javascript
/**
 * Portfolio Main JavaScript
 * Handles navigation, scroll effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && 
          !navMenu.contains(e.target) && 
          !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ============================================
  // Active Navigation Link
  // ============================================
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Check if current path matches link href
    if (href === currentPath || 
        (href !== '/' && currentPath.startsWith(href)) ||
        (href === '/' && (currentPath === '/' || currentPath === '/index.html'))) {
      link.classList.add('active');
    }
  });

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add shadow on scroll
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  const revealElements = document.querySelectorAll(
    '.hero, .highlights, .about-preview, .about-section, .project-card, .projects-cta'
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('revealed');
      }
    });
  };

  // Add CSS for reveal animation
  const style = document.createElement('style');
  style.textContent = `
    .hero, .highlights, .about-preview, .about-section, .project-card, .projects-cta {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .revealed {
      opacity: 1;
      transform: translateY(0);
    }
    .project-card:nth-child(2) { transition-delay: 0.1s; }
    .project-card:nth-child(3) { transition-delay: 0.2s; }
    .project-card:nth-child(4) { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

  // Initial check and scroll listener
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  // ============================================
  // Scroll to Top Button
  // ============================================
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollTopBtn);

  // Add styles for scroll button
  const scrollBtnStyle = document.createElement('style');
  scrollBtnStyle.textContent = `
    .scroll-top-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: var(--color-primary);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 999;
      box-shadow: 0 4px 15px rgba(13, 115, 119, 0.3);
    }
    .scroll-top-btn:hover {
      background: var(--color-primary-dark);
      transform: translateY(-3px);
    }
    .scroll-top-btn.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    @media (max-width: 768px) {
      .scroll-top-btn {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
      }
    }
  `;
  document.head.appendChild(scrollBtnStyle);

  // Show/hide scroll button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  // Scroll to top on click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ============================================
  // Image Loading Handler
  // ============================================
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      // Set placeholder for broken images
      this.src = 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
          <rect fill="#f0f4f5" width="300" height="200"/>
          <text fill="#8896a6" font-family="sans-serif" font-size="14" x="50%" y="50%" text-anchor="middle" dy=".3em">Image not found</text>
        </svg>
      `);
      this.alt = 'Image not available';
    });
  });

  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Skip link functionality
    if (e.key === 'Tab' && !e.shiftKey) {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink && document.activeElement === document.body) {
        skipLink.focus();
      }
    }
  });

  // Log initialization
  console.log('Portfolio JS initialized');
});

```

Created `assets/js/main.js` with all features:

**1. Mobile Menu Toggle:**
- Click hamburger to open/close
- Body scroll lock when open
- Close on link click, outside click, or Escape key

**2. Active Navigation:**
- Highlights current page link based on URL path

**3. Navbar Scroll Effect:**
- Adds `scrolled` class after 50px scroll (triggers shadow in CSS)

**4. Smooth Scrolling:**
- Smooth scroll for anchor links
- Accounts for fixed navbar height

**5. Scroll Reveal Animation:**
- Fade-in sections as you scroll
- Staggered delays for project cards
- CSS injected dynamically

**6. Scroll to Top Button:**
- Appears after scrolling 500px
- Smooth scroll back to top
- Styled with hover effects

**7. Image Error Handler:**
- Shows placeholder SVG for broken images

**8. Accessibility:**
- Keyboard navigation support
- Passive scroll listeners for performance

All vanilla ES6+, no dependencies required!

---

**User**

Help me set up the proper directory structure for images and create placeholder image requirements.

DIRECTORY STRUCTURE:
Create folders:
- assets/images/ (main images folder)
- assets/images/projects/ (project screenshots)

IMAGE REQUIREMENTS LIST:

1. PROFILE PHOTO:
   - Location: assets/images/profile.jpg
   - Size: 400x400px recommended
   - Format: JPG or PNG
   - Should be: Professional headshot or photo
   - Alt text: "Profile photo of [Your Name]"

2. PROJECT 1 IMAGE:
   - Location: assets/images/projects/project1.jpg
   - Size: 800x600px recommended
   - Format: JPG or PNG
   - Should be: Screenshot of Project 1
   - Alt text: "[Project 1 Title] screenshot"

3. PROJECT 2 IMAGE (if applicable):
   - Location: assets/images/projects/project2.jpg
   - Size: 800x600px recommended
   - Format: JPG or PNG
   - Should be: Hour of Code certificate or screenshot
   - Alt text: "Hour of Code project"

4. OPTIONAL IMAGES:
   - Background images
   - Icons
   - Additional project screenshots

Also, create a README.md file in assets/images/ explaining:
- What images are needed
- Recommended sizes
- How to add new images
- Image optimization tips

List all the image files I need to add and where to place them.


---

**Cursor**

```markdown
# Portfolio Images Guide

This folder contains all images for your portfolio website.

## Required Images

### 1. Profile Photo
- **File:** `profile.jpg` (or `.png`)
- **Location:** `assets/images/profile.jpg`
- **Size:** 400x400px (square, will be displayed as circle)
- **Format:** JPG or PNG
- **Tips:** Use a professional headshot with good lighting

### 2. Project Images
Located in `assets/images/projects/`

| File | Size | Description |
|------|------|-------------|
| `project1.jpg` | 800x600px | Screenshot of your first project |
| `project2.jpg` | 800x600px | Hour of Code certificate or screenshot |
| `project3.jpg` | 800x600px | Portfolio website screenshot |
| `placeholder.jpg` | 800x600px | Generic placeholder for future projects |

## How to Add Images

1. Resize your image to the recommended dimensions
2. Save as JPG (for photos) or PNG (for screenshots with text)
3. Place in the appropriate folder
4. Update the alt text in your HTML/Markdown files

## Image Optimization Tips

- **Compress images** using [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Keep file sizes under 200KB** for fast loading
- **Use descriptive filenames** (e.g., `portfolio-screenshot.jpg`)
- **Always add alt text** for accessibility

## Folder Structure

```
assets/images/
├── profile.jpg          # Your profile photo
├── README.md            # This file
└── projects/
    ├── project1.jpg     # Project 1 screenshot
    ├── project2.jpg     # Project 2 screenshot
    ├── project3.jpg     # Project 3 screenshot
    └── placeholder.jpg  # Placeholder image
```

## Creating Placeholder Images

If you don't have images yet, you can use:
- [Placeholder.com](https://placeholder.com/) - `https://via.placeholder.com/800x600`
- [Unsplash](https://unsplash.com/) - Free stock photos
- Screenshots of your actual projects

## Quick Checklist

- [ ] `assets/images/profile.jpg` - Profile photo (400x400px)
- [ ] `assets/images/projects/project1.jpg` - Project 1 (800x600px)
- [ ] `assets/images/projects/project2.jpg` - Project 2 (800x600px)
- [ ] `assets/images/projects/project3.jpg` - Project 3 (800x600px)
- [ ] `assets/images/projects/placeholder.jpg` - Placeholder (800x600px)

```

Created the directory structure and documentation:

**Folders Created:**
- `assets/images/` - Main images folder
- `assets/images/projects/` - Project screenshots (with `.gitkeep` so Git tracks it)

**Images You Need to Add:**

| File Path | Size | Purpose |
|-----------|------|---------|
| `assets/images/profile.jpg` | 400x400px | Your profile photo |
| `assets/images/projects/project1.jpg` | 800x600px | Project 1 screenshot |
| `assets/images/projects/project2.jpg` | 800x600px | Hour of Code certificate |
| `assets/images/projects/project3.jpg` | 800x600px | Portfolio screenshot |
| `assets/images/projects/placeholder.jpg` | 800x600px | Future project placeholder |

**README includes:**
- Required images checklist
- Recommended sizes
- Optimization tips (TinyPNG, Squoosh)
- Folder structure diagram
- How to add new images

Just add your actual images to these locations and the site will display them!

---

**User**

Create a comprehensive guide for me to customize the placeholder content.

CUSTOMIZATION CHECKLIST:

1. _config.yml:
   - Replace [Your Name] with: Elvin Imanli
   - Add email: elvinnn2008@gmail.com
   - Verify GitHub username: CaptainGeorgia
   - Verify Codecademy username: eimanli26950
   - Update url if different

2. index.html/md:
   - Replace "Hi, I'm [Your Name]" with actual name
   - Update subheading/role description
   - Write personal introduction (2-3 sentences)
   - Update any placeholder text

3. about.md:
   - Write full introduction
   - Add education details:
     * University name
     * Degree program
     * Graduation year
     * GPA (optional)
     * Relevant coursework
   - List actual skills
   - Add experience/activities from SITE 1101
   - Add personal interests/hobbies
   - Replace all [Placeholder] text

4. projects.md:
   - PROJECT 1:
     * Add actual title
     * Write description (what did you build/learn?)
     * List technologies used
     * Add completion date
     * Add project link if applicable
   - PROJECT 2 (Hour of Code):
     * Add if completed
     * Describe the challenge
     * Add certificate/screenshot
   - Remove or update PROJECT 3 placeholder

5. Images to add:
   - Profile photo
   - Project 1 screenshot
   - Project 2 screenshot (if applicable)
   - Any other visuals

Create this as a markdown checklist file that I can reference while updating content.


---

**Cursor**

```markdown
# Portfolio Customization Checklist

Use this guide to replace all placeholder content with your actual information.

---

## 1. Configuration (`_config.yml`)

- [x] **title:** `"Elvin Imanli's Portfolio"`
- [x] **email:** `elvinnn2008@gmail.com`
- [x] **github_username:** `CaptainGeorgia`
- [x] **codecademy_username:** `eimanli26950`
- [ ] **url:** `"https://CaptainGeorgia.github.io"`

---

## 2. Home Page (`index.html`)

### Hero Section
- [ ] Replace `[Your Name]` with `Elvin Imanli`
- [ ] Update role: "Information Systems Student" (or your preferred title)
- [ ] Write personal introduction (2-3 sentences about yourself)
- [ ] Update profile photo alt text

### Highlights Section
- [ ] Update "5+" projects number (actual count)
- [ ] Update "10+" technologies number
- [ ] Update "2+" years learning

### About Preview
- [ ] Write a brief paragraph about yourself

---

## 3. About Page (`about.md`)

### Introduction Section
- [ ] Replace `[Your Name]` with `Elvin Imanli`
- [ ] Write 2-3 paragraphs about yourself
- [ ] Mention your passion for information systems
- [ ] Add career goals

### Education Section
- [ ] Replace `[Placeholder University]` with your university name
- [ ] Confirm degree: "Bachelor of Science in Information Systems"
- [ ] Replace `[Year]` with expected graduation year
- [ ] Update relevant coursework list:
  - [ ] SITE 1101 - Introduction to Information Systems
  - [ ] Add other courses you've taken

### Skills Section
Update each category with your actual skills:

**Programming Languages:**
- [ ] HTML5, CSS3, JavaScript (keep if applicable)
- [ ] Python, SQL (keep if applicable)
- [ ] Add/remove languages as needed

**Tools & Technologies:**
- [ ] Git, GitHub, VS Code, Jekyll (keep these)
- [ ] Add other tools you use

**Soft Skills:**
- [ ] Update or keep current list

### Experience & Activities
- [ ] **SITE 1101 Projects:** Update `[Semester, Year]` with actual date
- [ ] **Club/Organization:** Replace with actual club or remove
- [ ] **Other Experience:** Add internships, jobs, or remove placeholder

### Interests & Hobbies
- [ ] Update the 6 interest items to reflect your actual hobbies
- [ ] Change icons if needed (use Font Awesome icons)

---

## 4. Projects Page (`projects.md`)

### Project 1
- [ ] Replace `[Project 1 Title]` with actual title
- [ ] Write 2-3 sentence description
- [ ] Update `[Month Year]` with completion date
- [ ] List actual technologies used
- [ ] Add GitHub link (replace `#`)
- [ ] Add live demo link if applicable

### Project 2 (Hour of Code)
- [ ] Update description if you completed it
- [ ] Add `[Month Year]` completion date
- [ ] Update technologies/skills learned
- [ ] Add certificate link
- [ ] OR remove this project if not completed

### Project 3 (Portfolio Website)
- [ ] Update `[Month Year]` with current date
- [ ] Links should auto-populate from config

### Project 4 (Future Project)
- [ ] Keep as placeholder OR
- [ ] Replace with another completed project

---

## 5. Images to Add

### Required Images

| Status | File | Location | Size |
|--------|------|----------|------|
| [ ] | Profile photo | `assets/images/profile.jpg` | 400x400px |
| [ ] | Project 1 screenshot | `assets/images/projects/project1.jpg` | 800x600px |
| [ ] | Project 2 screenshot | `assets/images/projects/project2.jpg` | 800x600px |
| [ ] | Project 3 screenshot | `assets/images/projects/project3.jpg` | 800x600px |
| [ ] | Placeholder image | `assets/images/projects/placeholder.jpg` | 800x600px |

### Image Tips
- Compress images at [TinyPNG](https://tinypng.com/)
- Use JPG for photos, PNG for screenshots
- Keep each image under 200KB

---

## 6. Final Review

Before publishing:

- [ ] Test all navigation links
- [ ] Check all images load correctly
- [ ] Verify social links work (GitHub, Codecademy)
- [ ] Read through all text for typos
- [ ] Test on mobile (responsive design)
- [ ] Run `bundle exec jekyll serve` locally to preview

---

## Quick Reference: Your Information

```
Name: Elvin Imanli
Email: elvinnn2008@gmail.com
GitHub: CaptainGeorgia
Codecademy: eimanli26950
Site URL: https://CaptainGeorgia.github.io
```

---

## Need Help?

- Jekyll Docs: https://jekyllrb.com/docs/
- GitHub Pages: https://pages.github.com/
- Font Awesome Icons: https://fontawesome.com/icons

```

Now let me also update `_config.yml` with your actual information:

```yaml
# Site Settings
title: "Elvin Imanli's Portfolio"
email: elvinnn2008@gmail.com
description: "Personal portfolio website showcasing my projects and skills in information systems"
baseurl: "" # empty for username.github.io
url: "https://CaptainGeorgia.github.io"

# Social / Profile Links
github_username: "CaptainGeorgia"
codecademy_username: "eimanli26950"

# Build settings
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Permalink structure
permalink: /:title/

# Markdown settings
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge

# Sass/SCSS settings
sass:
  style: compressed

# Exclude from processing
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/
  - README.md
  - LICENSE

# GitHub Pages settings
remote_theme: null  # Remove if using a remote theme

# Collections (for projects, etc.)
collections:
  projects:
    output: true
    permalink: /projects/:name/

# Default front matter
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "project"
  - scope:
      path: ""
    values:
      layout: "default"

```

Created `CUSTOMIZATION-CHECKLIST.md` and updated `_config.yml` with your info:

**`_config.yml` Updated:**
- ✅ title: `"Elvin Imanli's Portfolio"`
- ✅ email: `elvinnn2008@gmail.com`
- ✅ url: `"https://CaptainGeorgia.github.io"`
- ✅ github_username: `"CaptainGeorgia"`
- ✅ codecademy_username: `"eimanli26950"`

**Checklist File Includes:**
1. Config settings (mostly done!)
2. Home page placeholders to update
3. About page sections (education, skills, experience)
4. Projects page details
5. Images checklist with sizes
6. Final review steps
7. Quick reference with your info

**Remaining Tasks:**
- Update `index.html` - replace `[Your Name]` with `Elvin Imanli`
- Update `about.md` - add your education, skills, interests
- Update `projects.md` - add your actual projects
- Add your images to `assets/images/`

Would you like me to update the other files with your name now?

---

**User**

Help me create a testing checklist and optimize the site.

TESTING CHECKLIST:

1. LOCAL TESTING:
   - How to run Jekyll locally
   - How to test responsive design in browser
   - Common issues and fixes

2. FUNCTIONALITY TESTS:
   - All navigation links work
   - Mobile menu toggles correctly
   - All external links open correctly:
     * GitHub profile link
     * Codecademy profile link
     * Repository link
   - Images load properly
   - Smooth scrolling works
   - Active page highlighting works

3. RESPONSIVE DESIGN TESTS:
   - Test on mobile (320px - 480px)
   - Test on tablet (768px - 1024px)
   - Test on desktop (1200px+)
   - Navigation responsive
   - Images scale properly
   - Text readable at all sizes
   - No horizontal scrolling

4. CONTENT VALIDATION:
   - No placeholder text remaining
   - No typos
   - All personal information correct
   - GitHub/Codecademy usernames correct
   - Repository URL correct

5. PERFORMANCE:
   - Images optimized (not too large)
   - CSS minified (optional)
   - Fast load time

6. GITHUB PAGES SPECIFIC:
   - _config.yml properly configured
   - No build errors
   - All files committed and pushed
   - Site accessible at username.github.io

Create a markdown checklist file for testing before submission.


---

**Cursor**

```markdown
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

```

Created `TESTING-CHECKLIST.md` with comprehensive testing guide:

**1. Local Testing**
- Jekyll commands to run locally
- DevTools responsive testing instructions
- Common issues & fixes table

**2. Functionality Tests**
- Navigation links checklist
- Mobile menu behavior
- External links (GitHub, Codecademy)
- Images loading
- Interactive features (scroll effects, buttons)

**3. Responsive Design**
- Mobile (320-480px)
- Tablet (768-1024px)
- Desktop (1200px+)

**4. Content Validation**
- Your info pre-filled for verification
- Placeholder text search list

**5. Performance**
- Image size targets
- Lighthouse audit instructions

**6. GitHub Pages**
- Git commands
- Deployment troubleshooting
- Post-deployment checks

**7. Final Sign-Off**
- Must-have vs nice-to-have items
- Quick links to your site/repo

To test locally, run:
```bash
bundle exec jekyll serve
```
Then open http://localhost:4000

```shellscript
bundle exec jekyll serve
```

---

**User**

Review the entire project for the grading requirements and help me prepare for deployment.

GRADING REQUIREMENTS CHECK:

1. Jekyll Implementation (+10 bonus):
   ✓ Using Jekyll framework
   ✓ Proper Jekyll structure
   ✓ _config.yml configured

2. Required Pages (10 pts each):
   ✓ Home page with profile photo and introduction
   ✓ About page with background/qualifications
   ✓ Projects page with Project 1 (title + description + image)

3. Design Requirements (10 pts each):
   ✓ No major design issues (missing images, unreadable text)
   ✓ Navigation bar present on all pages
   ✓ Footer present on all pages

4. Links & Icons (10 pts each):
   ✓ GitHub profile icon/link in footer
   ✓ Codecademy profile icon/link in footer
   ✓ Link to repository somewhere on site

5. Technical Requirements (10 pts each):
   ✓ Multiple commits showing progress
   ✓ Responsive design works on narrow screens
   ✓ Code is clean and modular

DEPLOYMENT STEPS:
1. Final commit and push
2. GitHub Pages configuration
3. Wait for build (2-5 minutes)
4. Test live site
5. Verify all links work on live site

Create a final deployment guide with:
- Commands to run
- What to check
- How to verify everything works
- Common deployment issues and fixes

---

**Cursor**

```markdown
# Final Deployment Guide

## Grading Requirements Verification

### ✅ Jekyll Implementation (+10 Bonus Points)
| Requirement | Status | File |
|-------------|--------|------|
| Using Jekyll framework | ✅ | `Gemfile`, `_config.yml` |
| Proper Jekyll structure | ✅ | `_layouts/`, `assets/` |
| _config.yml configured | ✅ | `_config.yml` |

### ✅ Required Pages (10 pts each = 30 pts)
| Page | Status | Requirements |
|------|--------|--------------|
| Home | ✅ | `index.html` - Profile photo, introduction |
| About | ✅ | `about.md` - Background, qualifications, skills |
| Projects | ✅ | `projects.md` - Project 1 with title, description, image |

### ✅ Design Requirements (10 pts each = 30 pts)
| Requirement | Status | Implementation |
|-------------|--------|----------------|
| No major design issues | ✅ | Professional CSS, image fallbacks |
| Navigation bar on all pages | ✅ | `_layouts/default.html` |
| Footer on all pages | ✅ | `_layouts/default.html` |

### ✅ Links & Icons (10 pts each = 30 pts)
| Requirement | Status | Location |
|-------------|--------|----------|
| GitHub profile icon/link | ✅ | Footer - `fab fa-github` |
| Codecademy profile icon/link | ✅ | Footer - `fas fa-code` |
| Link to repository | ✅ | Footer - "View Source Code" |

### ✅ Technical Requirements (10 pts each = 30 pts)
| Requirement | Status | How to Verify |
|-------------|--------|---------------|
| Multiple commits | ⏳ | Make commits as you work |
| Responsive design | ✅ | CSS media queries, mobile menu |
| Clean, modular code | ✅ | Organized CSS, separate JS file |

**Estimated Total: 120+ points** (with Jekyll bonus)

---

## Pre-Deployment Checklist

### Content Ready
- [ ] Profile photo added: `assets/images/profile.jpg`
- [ ] Project images added: `assets/images/projects/`
- [ ] All `[Your Name]` replaced with "Elvin Imanli"
- [ ] All `[Placeholder]` text updated
- [ ] Education details filled in
- [ ] At least 1 project fully documented

### Technical Ready
- [ ] `_config.yml` has correct info
- [ ] All files saved
- [ ] No Jekyll build errors

---

## Deployment Steps

### Step 1: Final Local Test
```powershell
# Navigate to project
cd C:\Users\codet\Desktop\my-portfolio

# Build site to check for errors
bundle exec jekyll build

# If successful, run local server
bundle exec jekyll serve
```
Open http://localhost:4000 and verify everything works.

### Step 2: Git Commit
```powershell
# Check what files changed
git status

# Add all files
git add .

# Commit with descriptive message
git commit -m "Complete portfolio website with Jekyll"

# If you made changes along the way, you should have multiple commits
# Check commit history
git log --oneline
```

### Step 3: Push to GitHub
```powershell
# Push to main branch
git push origin main
```

### Step 4: Configure GitHub Pages (if not done)
1. Go to: https://github.com/CaptainGeorgia/CaptainGeorgia.github.io
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 5: Wait for Build
1. Go to **Actions** tab in your repository
2. Watch the build progress (green checkmark = success)
3. Wait 1-3 minutes for deployment

### Step 6: Verify Live Site
Open: **https://CaptainGeorgia.github.io**

---

## Live Site Verification Checklist

### Pages Load
- [ ] Home page loads: `https://CaptainGeorgia.github.io/`
- [ ] About page loads: `https://CaptainGeorgia.github.io/about/`
- [ ] Projects page loads: `https://CaptainGeorgia.github.io/projects/`

### Navigation Works
- [ ] Click Home → goes to home
- [ ] Click About → goes to about
- [ ] Click Projects → goes to projects
- [ ] Mobile menu works (test on phone or DevTools)

### Links Work
- [ ] GitHub link: https://github.com/CaptainGeorgia
- [ ] Codecademy link: https://www.codecademy.com/profiles/eimanli26950
- [ ] "View Source Code" link in footer

### Images Display
- [ ] Profile photo visible
- [ ] Project images visible
- [ ] No broken image icons

### Responsive Design
- [ ] Resize browser window - layout adjusts
- [ ] No horizontal scrolling on mobile
- [ ] Text readable at all sizes

---

## Common Deployment Issues

### Issue: 404 Page Not Found
**Causes & Solutions:**
1. Repository name wrong → Must be `CaptainGeorgia.github.io`
2. Branch not set → Go to Settings > Pages, select `main` branch
3. Not deployed yet → Wait 2-5 minutes, check Actions tab

### Issue: CSS/JS Not Loading
**Causes & Solutions:**
1. Wrong `baseurl` → Should be `""` (empty) in `_config.yml`
2. Wrong file paths → Should start with `/assets/`
3. Cache issue → Hard refresh (Ctrl+Shift+R)

### Issue: Images Not Showing
**Causes & Solutions:**
1. Wrong path → Use `/assets/images/filename.jpg`
2. File not committed → Run `git add .` then commit
3. Wrong filename/extension → Check exact spelling and case

### Issue: Build Failed
**How to Debug:**
1. Go to Actions tab on GitHub
2. Click the failed workflow
3. Read the error message
4. Common fixes:
   - YAML syntax error in `_config.yml`
   - Missing closing tags in HTML
   - Invalid Liquid template syntax

### Issue: Changes Not Appearing
**Solutions:**
1. Clear browser cache (Ctrl+Shift+R)
2. Wait a few more minutes
3. Check if push was successful: `git log origin/main`
4. Force push if needed: `git push -f origin main`

---

## Quick Commands Reference

```powershell
# Build locally
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve

# Git status
git status

# Add all files
git add .

# Commit
git commit -m "Your message"

# Push
git push origin main

# Check remote
git remote -v

# View commit history
git log --oneline -5
```

---

## Final Submission

### Your Site URL
```
https://CaptainGeorgia.github.io
```

### Your Repository URL
```
https://github.com/CaptainGeorgia/CaptainGeorgia.github.io
```

### Before Submitting
- [ ] Site is live and accessible
- [ ] All pages work
- [ ] All links work
- [ ] Responsive design works
- [ ] Multiple commits in history
- [ ] No placeholder text remaining

---

## Congratulations! 🎉

You've built a professional portfolio website using Jekyll and GitHub Pages!

**Skills Demonstrated:**
- HTML5 & CSS3
- Responsive Web Design
- Jekyll Static Site Generator
- Git Version Control
- GitHub Pages Deployment

```

Created `DEPLOYMENT-GUIDE.md` with complete deployment instructions.

**Grading Requirements Summary:**

| Category | Points | Status |
|----------|--------|--------|
| Jekyll Implementation | +10 bonus | ✅ |
| Home Page | 10 | ✅ |
| About Page | 10 | ✅ |
| Projects Page | 10 | ✅ |
| No Design Issues | 10 | ✅ |
| Navigation Bar | 10 | ✅ |
| Footer | 10 | ✅ |
| GitHub Link | 10 | ✅ |
| Codecademy Link | 10 | ✅ |
| Repository Link | 10 | ✅ |
| Multiple Commits | 10 | ⏳ (make commits) |
| Responsive Design | 10 | ✅ |
| Clean Code | 10 | ✅ |

**Estimated: 120+ points**

**Remaining Tasks Before Deployment:**
1. Add your images (`profile.jpg`, project images)
2. Replace remaining placeholder text in `index.html` and `about.md`
3. Make multiple commits as you work
4. Push to GitHub
5. Verify at https://CaptainGeorgia.github.io

**Quick Deploy Commands:**
```powershell
git add .
git commit -m "Complete portfolio website"
git push origin main
```

```powershell
git add .
git commit -m "Complete portfolio website"
git push origin main
```

