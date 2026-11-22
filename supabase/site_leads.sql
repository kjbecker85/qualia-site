-- Leads from the contact form on www.engagequalia.com.
-- Run once on the Qualia Trace Supabase project (zaczqcaorublmdndtbbe). Not applied yet.
-- Visitors can insert a row and nothing else. Read the rows in the Supabase dashboard
-- or with the service role.

create table if not exists public.site_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 200 and position('@' in email) > 1),
  company text check (company is null or char_length(company) <= 160),
  message text not null check (char_length(message) between 1 and 4000),
  source text not null default 'website' check (char_length(source) <= 120),
  created_at timestamptz not null default now()
);

alter table public.site_leads enable row level security;

-- Insert only. No select, update or delete policy exists, so anon can do none of those.
drop policy if exists "site_leads_insert_anon" on public.site_leads;
create policy "site_leads_insert_anon" on public.site_leads
  for insert to anon, authenticated
  with check (true);

revoke all on public.site_leads from anon, authenticated;
grant insert (name, email, company, message, source) on public.site_leads to anon, authenticated;

create index if not exists site_leads_created_at_idx on public.site_leads (created_at desc);
