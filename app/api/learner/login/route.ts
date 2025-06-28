import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Learner from '@/models/learner';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();

  const learner = await Learner.findOne({ email });
  if (!learner) {
    return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, learner.password);
  if (!isMatch) {
    return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
  }

  // Générer un token JWT
  const token = jwt.sign(
    { userId: learner._id, role: 'learner' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return NextResponse.json({ message: 'Connexion réussie !', token, role: 'learner' });
}