import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  revalidatePath('/', 'layout');

  return NextResponse.json({ success: true });
}
