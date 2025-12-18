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

