## Absolutely intimidated by the project at the start until realising what the assignment required. Sigh of relief.

Supabase's layout change threw me off, and ultimately settled on fixing the error earlier than anticipated, I just hadn't chosen the correct pooler.

Implemented env for NextAuth
const userName = session?.user?.name; - added to check if anything is undefined before running, if not found, assigned undefined
Reset Supabase passwords and tidied up due to previous issues with this.
Pooler corrected, oauth via git now runs.

Reminder for future: DOUBLE CHECK YOU HAVE THE RIGHT POOLER FROM THE START
