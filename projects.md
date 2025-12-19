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
      <img src="{{ '/assets/images/projects/project1.jpeg' | relative_url }}" alt="Project 1: How does hardware work screenshot">
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> 20 October 2025</span>
      <h3 class="project-title">Project 1: How does hardware work</h3>
      <p class="project-description">
        A project implementing XOR, OR, and AND bitwise operations typically involves building functions or circuits that perform logical operations on binary numbers at the bit level. These operations compare corresponding bits of two operands: AND returns 1 only when both bits are 1, OR returns 1 when at least one bit is 1, and XOR returns 1 when bits differ. Such projects are fundamental in computer science education, teaching how computers process binary data for tasks like encryption, data manipulation, and digital circuit design.
      </p>
      <div class="project-tags">
        <span class="tag">Bitwise operations</span>
        <span class="tag">Xor/Or/And</span>
      </div>
      <div class="project-links">
        <a href="https://www.youtube.com/watch?v=UrdR3Lhp_JM" class="project-link"><i class="fas fa-project1"></i> Xor gate</a>
        <a href="https://www.youtube.com/watch?v=sVX4yq-9aFw" class="project-link"><i class="fas fa-project1"></i> And/Or gates</a>
      </div>
    </div>
  </article>

  <!-- Project 2: Hour of Code -->
  <article class="project-card">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/achivement2.jpeg' | relative_url }}" alt="Codecademy Achienements">
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> 23 October 2025</span>
      <h3 class="project-title">Codecademy</h3>
      <p class="project-description">
        Completed the Codecademy, gaining hands-on experience with fundamental programming concepts through interactive tutorials in languages like Python and C++. This introductory experience ignited my passion for coding and computational problem-solving. The challenge provided a solid foundation for understanding how different programming languages approach basic logic and syntax.
      </p>
      <div class="project-tags">
        <span class="tag">C++</span>
        <span class="tag">Python</span>
        <span class="tag">Problem Solving</span>
      </div>
      <div class="project-links">
        <a href="https://www.codecademy.com/users/eimanli26950/achievements" class="project-link"><i class="fas fa-certificate"></i> Achievements</a>
      </div>
    </div>
  </article>

  <!-- Project 3: Portfolio Website -->
  <article class="project-card">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/project2.jpeg' | relative_url }}" alt="Project 2: Hour of Code">
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> 20 December 2025</span>
      <h3 class="project-title">Hour of Code</h3>
      <p class="project-description">
        Led educational workshops teaching fundamental algorithms and computer science concepts to children through interactive activities and tutorials. Guided young learners through programming basics using accessible platforms like Hour of Code, helping them grasp core computational thinking skills. Recognized participants' achievements by awarding certificates upon successful completion of the coding challenges.
      </p>
      <div class="project-tags">
        <span class="tag">Problem Solving</span>
        <span class="tag">Teaching</span>
      </div>
      <div class="project-links">
        <a href="https://www.youtube.com/watch?v=Ao8wsVjbm0Q" class="project-link"><i class="fab fa-github"></i> Video</a>
      </div>
    </div>
  </article>

  <!-- Project 4: Portfolio Website -->
  <article class="project-card">
    <div class="project-image">
      <img src="{{ '/assets/images/projects/project3.jpeg' | relative_url }}" alt="Portfolio website screenshot">
    </div>
    <div class="project-content">
      <span class="project-date"><i class="fas fa-calendar"></i> 20 December 2025</span>
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
        <a href="https://github.com/CaptainGeorgia/CaptainGeorgia.github.io" class="project-link"><i class="fab fa-github"></i> Code</a>
        <a href="https://captaingeorgia.github.io/" class="project-link"><i class="fas fa-external-link-alt"></i> Live Site</a>
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

