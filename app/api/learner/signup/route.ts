import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Learner from '@/models/learner';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { name, email, password } = await req.json();

  const existing = await Learner.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: 'Email déjà utilisé.' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const learner = await Learner.create({ name, email, password: hashedPassword });
  return NextResponse.json({ message: 'Learner enregistré !', learner: { name: learner.name, email: learner.email } });
}