import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Guitarist from '@/models/guitarist';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { name, email, password } = await req.json();

  const existing = await Guitarist.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: 'Email déjà utilisé.' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const guitarist = await Guitarist.create({ name, email, password: hashedPassword });
  return NextResponse.json({ message: 'Guitarist enregistré !', guitarist: { name: guitarist.name, email: guitarist.email } });
}