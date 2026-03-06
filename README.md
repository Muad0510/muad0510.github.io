# Your Name — Portfolio & Resume Site

A modern, minimalistic Jekyll portfolio hosted on GitHub Pages.  
Dark editorial aesthetic, ATS-compliant PDF resume, and ArtStation integration.

---

## 📁 Project Structure

```
.
├── _config.yml          ← Site config + author info + navigation
├── _data/
│   └── resume.yml       ← All CV content lives here (edit this!)
├── _layouts/
│   └── default.html     ← Master page template
├── _includes/
│   ├── header.html      ← Navigation bar
│   └── footer.html      ← Footer
├── assets/
│   ├── css/main.scss    ← All styles (including print/ATS)
│   └── js/main.js       ← Mobile menu + scroll animations
├── index.html           ← Home page
├── resume.html          ← Resume / CV page (auto-generates from resume.yml)
├── about.html           ← About me page
├── work.html            ← Projects / portfolio page
└── contact.html         ← Contact page
```

---

## 🚀 Setup (GitHub Pages — No Build Step Needed)

### Step 1 — Create your GitHub repository

1. Go to [github.com](https://github.com) and create a new repository
2. For a personal site: name it `yourusername.github.io`
   - Or for a project site: any name (e.g. `portfolio`)

### Step 2 — Push these files

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select `main` branch, `/ (root)` folder
3. Click Save
4. Your site will be live at `https://yourusername.github.io` in ~2 minutes

### Step 4 — Update `_config.yml`

Open `_config.yml` and fill in your details:
```yaml
author:
  name: "Jane Smith"
  first: "Jane"
  last: "Smith"
  initials: "JS"
  title: "Senior 3D Artist"
  tagline: "Your catchy one-liner here."
  email: "jane@email.com"
  location: "Amsterdam, NL"
  artstation: "https://www.artstation.com/janesmith"
  linkedin: "https://linkedin.com/in/janesmith"
  github: "https://github.com/janesmith"
```

**Important:** If your repo is NOT named `yourusername.github.io`, set:
```yaml
baseurl: "/your-repo-name"
url: "https://yourusername.github.io"
```

### Step 5 — Update your resume data

Open `_data/resume.yml` and replace all placeholder content with your real experience, skills, and education.

---

## 📄 Downloading your Resume as PDF

The resume page has a **"Download PDF"** button. This triggers your browser's print dialog.

**For best results:**
1. Click "Download PDF" on the `/resume` page
2. In the print dialog: **Destination → Save as PDF**
3. Disable headers/footers in the print options
4. Scale: **100%**

The print CSS strips all dark theme decoration and outputs a clean, **ATS-compliant** resume with:
- Arial font (ATS-safe)
- Black text on white background
- Standard heading hierarchy
- No images or complex layouts
- Proper section names (Work Experience, Education, Skills)

---

## 📸 Adding Your Photo (About Page)

1. Add your photo to `assets/img/photo.jpg`
2. In `about.html`, replace the placeholder block with:
```html
<img src="{{ '/assets/img/photo.jpg' | relative_url }}" 
     alt="{{ site.author.name }}" 
     style="width:100%; height:100%; object-fit:cover;">
```

## 🖼 Adding Project Images (Work Page)

For each project in `work.html`, replace the placeholder div:
```html
<!-- Find this: -->
<div class="project-card__img-inner">
  <span>Add screenshot</span>
</div>

<!-- Replace with: -->
<img src="{{ '/assets/img/project-01.jpg' | relative_url }}" 
     alt="Project Title" 
     style="width:100%; height:100%; object-fit:cover;">
```

---

## ✉️ Activating the Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier available):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form, verify your email
3. Copy your form ID (looks like `xpwzaabk`)
4. In `contact.html`, update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🎨 Customization

### Change accent color
In `assets/css/main.scss`, update:
```css
--accent: #d95e28;  /* Change to any color */
```

### Change fonts
In `_layouts/default.html`, update the Google Fonts `<link>` and in `main.scss`:
```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Add/remove nav pages
In `_config.yml`:
```yaml
nav:
  - title: Home
    url: /
  - title: Resume
    url: /resume
  # Add or remove items here
```

---

## 🧪 Running Locally (Optional)

```bash
# Install Ruby and Bundler first
gem install bundler
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

---

## 📝 License

This project is for personal use. Replace all placeholder content with your own.
