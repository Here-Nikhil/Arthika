# Arthika — Financial Literacy for Every Indian 🇮🇳

> Master your money in your language. Gamified personal finance education supporting all 22 Indian languages.

**Live Demo → [arthika.netlify.app](https://arthika.netlify.app)**

---

## What is Arthika?

India has one of the lowest financial literacy rates in the world — less than 27% of adults are financially literate. The people who need this education the most — students, first-generation earners, people in tier 2 and tier 3 cities — either can't access it in their language or find it too complex and boring to stick with.

**Arthika** solves this by making personal finance education feel like a game, delivered in all 22 Indian languages.

---

## Features

- 📚 **12 Modules, 77 Lessons** covering savings, budgeting, investing, insurance, tax, credit, loans, UPI, and more
- 🤖 **AI Chatbot** powered by Google Gemini — ask any finance question in your language
- 🏆 **Gamification** — XP points, daily streaks, gems, and a live leaderboard
- 🌐 **22 Indian Languages** — Hindi, Tamil, Telugu, Marathi, Bengali, and more
- 🔐 **Authentication** — email/password signup and login via Supabase
- 📊 **Progress Tracking** — lesson completion, quiz scores, and XP saved per user
- 🎯 **3 Learning Modes** — Beginner, Normal, and Advanced

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Database & Auth | Supabase (PostgreSQL) |
| AI Chatbot | Google Gemini API |
| Deployment | Netlify (CI/CD via GitHub) |
| Version Control | GitHub |

---

## Architecture

```
User → Netlify (React App) → Supabase (Auth + PostgreSQL)
                           → Google Gemini API (Chatbot)
```

- **React** handles all UI and routing across 10 screens
- **Supabase Auth** manages email/password sessions
- **PostgreSQL** stores user profiles, lesson progress, quiz scores, and chat history
- **localStorage** caches language and mode preferences for instant UI loads
- **Gemini API** powers the financial chatbot with topic restrictions to prevent off-topic answers

---

## Database Schema

```sql
profiles          -- user info, XP, streak, language, avatar
lesson_progress   -- completed lessons per user
quiz_scores       -- quiz attempts, scores, pass/fail
chat_history      -- chatbot conversations per user
leaderboard       -- view ranking users by XP
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- A [Supabase](https://supabase.com) account (free)
- A [Google Gemini](https://aistudio.google.com/app/apikey) API key (free)

### 1. Clone the repository

```bash
git clone https://github.com/Here-Nikhil/Arthika.git
cd Arthika
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_GEMINI_API_KEY=your-gemini-api-key
```

### 4. Set up the Supabase database

Run the following SQL in your Supabase **SQL Editor**:

```sql
-- Profiles
create table profiles (
  id uuid references auth.users primary key,
  display_name text,
  avatar_url text,
  avatar_emoji text default '⭐',
  xp integer default 0,
  gems integer default 0,
  streak_count integer default 0,
  last_active date,
  language text default 'en',
  mode text default 'beginner',
  onboarded boolean default false,
  created_at timestamp default now()
);

-- Lesson progress
create table lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  lesson_id text,
  module_id text,
  xp_earned integer,
  completed_at timestamp default now(),
  unique(user_id, lesson_id)
);

-- Quiz scores
create table quiz_scores (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  lesson_id text,
  module_id text,
  score integer,
  total integer,
  lives_left integer,
  xp_earned integer,
  passed boolean,
  attempted_at timestamp default now()
);

-- Chat history
create table chat_history (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  role text,
  message text,
  topic text,
  language text default 'en',
  mode text default 'beginner',
  created_at timestamp default now()
);

-- Leaderboard view
create view leaderboard as
  select id, display_name, avatar_emoji, avatar_url, xp, streak_count
  from profiles
  order by xp desc;

-- XP award function (updates streak atomically)
create or replace function award_xp(p_user_id uuid, p_xp integer)
returns void as $$
begin
  update profiles
  set
    xp = xp + p_xp,
    last_active = current_date,
    streak_count = case
      when last_active = current_date - interval '1 day' then streak_count + 1
      when last_active = current_date then streak_count
      else 1
    end
  where id = p_user_id;
end;
$$ language plpgsql;
```

### 5. Run locally

```bash
npm run dev
```

App opens at **http://localhost:5173**

---

## Deployment

This project is deployed on **Netlify** with automatic deploys from GitHub.

To deploy your own:
1. Push the repo to GitHub
2. Connect the repo on [Netlify](https://netlify.com)
3. Set build command: `npm run build`, publish directory: `dist`
4. Add the 3 environment variables in **Site settings → Environment variables**
5. Deploy

---

## Project Structure

```
src/
├── screens/          # 10 app screens (Auth, Home, Modules, Lesson, Quiz, Chatbot, etc.)
├── components/       # Reusable components (PhoneShell, BottomNav, Toast)
├── hooks/            # Custom React hooks (useAuth, useProfile)
├── lib/              # Supabase client, DB functions, translation
├── data/             # Lessons, quizzes, knowledge graph, strings
└── styles/           # Theme tokens (colors, fonts, spacing)
```

---

## Engineering Challenges

**1. Data not saving after deployment**
New users had no profile row in the database, causing foreign key constraint errors when saving progress. Fixed by switching from `.single()` to `.maybeSingle()` in Supabase queries and using `upsert()` to auto-create profile rows.

**2. Progress resetting on refresh**
The app was navigating to the home screen before `loadProfile()` finished fetching data from Supabase. Fixed by awaiting the profile load before the screen transition.

**3. Missing database columns**
The `avatar_emoji` and `streak_count` columns were missing from the original table setup, causing 400 errors on all profile writes. Fixed with `ALTER TABLE` and updating the `award_xp` PostgreSQL function to use the correct column names.

**4. RLS policy configuration**
Enabling Row Level Security blocked all data writes until correct per-user policies were created for each table.

---

## What I'd Build in V2

- 🔔 Push notifications for daily streak reminders
- 💬 Multi-turn AI chatbot with conversation memory
- 📈 Analytics dashboard showing lesson drop-off rates
- 🧪 Financial health quiz for personalised learning paths
- ⚙️ Custom Node.js backend for full business logic control

---

## Author

**Nikhil** — [@Here-Nikhil](https://github.com/Here-Nikhil)

---

## License

This project is for educational purposes.
