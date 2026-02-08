# Pranit Adhangle - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS.
<<<<<<< HEAD
# MyPortfolio
A collection of projects, research papers, and hands-on implementations in Data Structures, DBMS, Operating Systems, and Machine Learning. Showcasing problem-solving, creative solutions, and practical coding skills using Git, GitHub, VS Code, and Postman.
=======
# Pranit Adhangle - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS.

## Features


## Tech Stack


## Prerequisites

Before you begin, ensure you have the following installed:

## Installation & Setup
commmit
1. **Navigate to the project directory:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Add your profile photo:**
   - Place your professional photo in the `Public` folder
   - Name it `pranit.jpg` (or update the image reference in `app/components/Hero.js`)

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Setup (Optional - For Production)

The testimonials feature currently uses in-memory storage for development. To use MySQL in production:

### Step 1: Install MySQL Package

```bash
npm install mysql2
```

### Step 2: Create MySQL Database

Run the SQL schema file to create the database and table:

```bash
mysql -u root -p < database/schema.sql
```

Or manually execute the SQL in `database/schema.sql`

### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=portfolio
   ```

### Step 4: Enable MySQL in Code

Uncomment the MySQL code in:

### Managing Testimonials

**To approve testimonials** (MySQL console):
```sql
UPDATE testimonials SET approved = TRUE WHERE id = 1;
```

**To view pending testimonials**:
```sql
SELECT * FROM testimonials WHERE approved = FALSE ORDER BY createdAt DESC;
```

You can build an admin panel later to manage approvals via a web interface.

## Customization

### Update Personal Information

1. **Hero Section** (`app/components/Hero.js`):
   - Update social media links (GitHub, LinkedIn, Email)
   - Modify the introduction text

2. **About Section** (`app/components/About.js`):
   - Update your bio and statistics
   - Customize the about me content

3. **Skills Section** (`app/components/Skills.js`):
   - Add or remove skills
   - Update skill categories

4. **Projects Section** (`app/components/Projects.js`):
   - Replace with your actual projects
   - Update project titles, descriptions, tech stacks, and links
   - Add project images to the `Public` folder

5. **Achievements Section** (`app/components/Achievements.js`):
   - Add your certifications and achievements
   - Update dates and descriptions

6. **Testimonials Section** (`app/components/Testimonials.js`):
   - Displays approved testimonials from the database
   - Visitors can submit testimonials via the form
   - New testimonials require approval (see Database Setup section)

7. **Contact Section** (`app/components/Contact.js`):
   - Update the email address in the mailto link
   - Currently set to: pranitadhangle908@gmail.com

### Color Scheme

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#8b5cf6',  // Purple
  dark: '#0f172a',       // Dark blue
  light: '#f1f5f9',      // Light gray
}
```

## Project Structure

```
Portfolio/
├── app/
│   ├── api/
│   │   └── testimonials/
│   │       └── route.js      # API route for testimonials (GET/POST)
│   ├── components/
│   │   ├── Navbar.js         # Navigation bar with smooth scroll
│   │   ├── Hero.js           # Hero section with intro
│   │   ├── About.js          # About me section
│   │   ├── Skills.js         # Skills showcase
│   │   ├── Projects.js       # Project cards
│   │   ├── Achievements.js   # Achievements & certifications
│   │   ├── Testimonials.js   # Testimonials display & submission form
│   │   └── Contact.js        # Contact Me button with mailto
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   └── page.js               # Home page
├── database/
│   └── schema.sql            # MySQL database schema
├── lib/
│   └── db.js                 # Database connection (optional)
├── Public/                   # Static assets (images)
├── .env.example              # Environment variables template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── README.md                 # This file
```

## Building for Production

1. **Create a production build:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Other Platforms

This Next.js app can be deployed to:

## Performance Tips


## Troubleshooting

**Issue: Port 3000 already in use**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Issue: Images not loading**

**Issue: Styling not applied**
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or feedback, reach out to:


**Built with ❤️ by Pranit Adhangle**
>>>>>>> a60c669 (Initial commit)
