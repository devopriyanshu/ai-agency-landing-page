# AI Agent Studio

A production-ready, enterprise-grade Next.js website for an AI Agent Engineering Studio. Built with modern web technologies and optimized for performance, SEO, and scalability.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Server-side rendering, metadata API, sitemap, robots.txt
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Modular Architecture**: Feature-based structure for easy maintenance
- **Type-Safe**: Full TypeScript implementation
- **Accessible**: Built with accessibility best practices
- **Performance**: Optimized images, fonts, and Core Web Vitals

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-agency
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/app
  /(marketing)       # Marketing pages (home, about, services, etc.)
  /(content)         # Content pages (blog, case studies)
  /(legal)           # Legal pages (privacy, terms)
  /api               # API routes
/components
  /ui                # shadcn/ui components
  /layout            # Layout components (Header, Footer)
  /sections          # Page sections (Hero, Services, etc.)
  /common            # Reusable components
/lib                 # Utilities and configurations
/types               # TypeScript type definitions
/public              # Static assets
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## 📝 Content Management

The project is structured to easily integrate with a CMS:

- Blog posts: `/app/(content)/blog`
- Case studies: `/app/(content)/case-studies`

Replace placeholder content with your CMS data.

## 🎨 Customization

### Colors

Edit `app/globals.css` to customize the color scheme.

### Content

Update constants in `lib/constants.ts`:
- Site configuration
- Services
- Use cases
- Tech stack
- Process steps

### Components

All components are in `/components` and can be customized as needed.

## 📧 Contact Form

The contact form uses a Next.js API route (`/app/api/contact/route.ts`). To enable email sending:

1. Choose an email service (Resend, SendGrid, etc.)
2. Add API key to `.env.local`
3. Implement email sending in the API route

## 🔒 Security

- Security headers configured in `next.config.js`
- Form validation and spam protection
- Environment variables for sensitive data

## 📊 SEO

- Dynamic metadata generation
- Sitemap.xml generation
- Robots.txt configuration
- OpenGraph and Twitter cards
- JSON-LD schema support

## 🧪 Testing

```bash
# Build test
npm run build

# Type checking
npm run type-check
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, contact: hello@aiagent.studio
# ai-agency-landing-page
