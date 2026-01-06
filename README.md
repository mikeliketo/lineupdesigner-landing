# LineupDesigner Landing Page

Coming Soon page for lineupdesigner.com

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Fill in your Supabase credentials (same as main app)

4. Run the migration in Supabase:
   ```sql
   -- See: ../lineupdesigner/supabase/migrations/20250105_create_waitlist.sql
   ```

5. Start dev server:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Connect domain: lineupdesigner.com

## Email Newsletter

The waitlist emails are stored in the `waitlist` table in Supabase.

To send newsletters later, you can:
1. **Resend.com** - Simple API, good free tier (3,000/month)
2. **Buttondown** - Newsletter-focused, good for simple updates
3. **Mailchimp** - More features, free tier up to 500 contacts

Export emails from Supabase:
```sql
SELECT email FROM waitlist WHERE is_active = true;
```
