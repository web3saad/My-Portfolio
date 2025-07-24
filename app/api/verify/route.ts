import { type NextRequest, NextResponse } from 'next/server';
import supabaseClient from '@/app/lib/supabase/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { success: false, error: 'Invalid token' },
      { status: 400 },
    );
  }

  const { data, error } = await supabaseClient()
    .from('contacts')
    .update({ verification_token: null, status: 'AWAITING_RESPONSE' })
    .match({ verification_token: token })
    .select()
    .single();

  if (error || !data) {
    return NextResponse.json(
      { success: false, error: 'Verification failed' },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true });
}
