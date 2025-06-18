# 🎬 Tom-Com — AI-Powered Movie & TV Recommender

Tom-Com is a personalized, AI-powered movie and TV recommendation web platform. Built with **Next.js App Router**, **Supabase**, and **GPT embeddings + RAG**, Tom-Com learns from your preferences and evolves your "taste profile" over time — giving you smarter suggestions every time you visit.


---

## 🚀 Features

- 🎯 **Hyper-Personalized Recommendations**  
  Curated movie/TV suggestions based on your genre taste + evolving AI feedback loop.

- 🤖 **AI-Powered Q&A Assistant**  
  Chat with an AI on each movie detail page: _"Is this emotional?"_, _"Will I enjoy this?"_, etc.

- 📥 **User-Driven Feedback System**  
  Upvote, downvote, and comment to refine your recommendations.

- 🔐 **Authentication with Supabase**  
  Secure signup/login using email + password or Google OAuth.

- 📈 **Admin Dashboard (Planned)**  
  Analytics and insights for tracking usage, feedback, and AI performance.

---

## 🛠️ Tech Stack

| Tech             | Role                                    |
|------------------|-----------------------------------------|
| **Next.js 14+**   | App Router, SSR, Modern layouts         |
| **Supabase**      | Auth, Realtime DB, RLS-based profiles   |
| **Tailwind CSS**  | UI styling + layout                     |
| **shadcn/ui**     | Component library (cards, buttons, etc) |
| **OpenAI GPT**    | Embeddings, RAG-style recommendations   |
| **TypeScript**    | Fully typed stack                       |

---

## 🧠 How It Works

1. **Login or Signup**  
   Users create an account with Supabase auth (Google or email).

2. **Set Genre Preferences**  
   Genre choices seed your personal recommendation engine.

3. **Scraper + RAG Engine**  
   Backend scrapes movie metadata + reviews. GPT + embeddings power your "taste profile."

4. **Ongoing Feedback Loop**  
   User votes/comments feed back into your profile — evolving suggestions over time.

5. **Ask the Movie AI**  
   For each movie, get intelligent answers from a GPT-based assistant trained on real review data.

---

## 🔧 Dev Setup

```bash
# Clone the repo
git clone https://github.com/05sanjaykumar/Tom-Com
cd tom-com

# Install dependencies
pnpm install  # or npm / yarn

# Set up environment variables
cp .env.example .env.local
# Add your Supabase URL and anon key

# Run the dev server
pnpm dev
````

---

## 🗂️ Folder Structure

```
/app
  /login
  /signup
  /auth
  /dashboard
/components
  AuthForm.tsx
  GoogleSignIn.tsx
/lib
  supabase.ts
```

---

## 📅 Roadmap

* [x] Supabase Auth + Google OAuth
* [x] Genre-based onboarding
* [ ] Taste Profile Auto-generation
* [ ] AI-powered Q\&A per movie
* [ ] Admin Dashboard with Analytics
* [ ] Caching + Performance tuning
* [ ] Mobile-first UI polish

---

## 👨‍💻 Author

**Sanjay Kumar**
Self-taught developer, builder of AI platforms, Indie Hacker, and curious explorer from age 12.

📫 Reach out: [X](https://x.com/sanjaykuma49595) | [Portfolio](https://your-website.com)

---

## 🛡 License

MIT License
