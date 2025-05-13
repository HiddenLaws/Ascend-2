import { supabase } from '../../../lib/supabase';

export async function POST(req: Request) {
  const { module, journal, insight } = await req.json();
  const { data, error } = await supabase.from('journal_entries').insert([{ module, entry: journal, insight }]);
  return Response.json({ success: !error });
}
