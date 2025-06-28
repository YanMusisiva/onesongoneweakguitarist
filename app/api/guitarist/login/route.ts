import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Guitarist from '@/models/guitarist';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();

  const guitarist = await Guitarist.findOne({ email });
  if (!guitarist) {
    return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, guitarist.password);
  if (!isMatch) {
    return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
  }

  // Générer un token JWT
  const token = jwt.sign(
    { userId: guitarist._id, role: 'guitarist' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  return NextResponse.json({ message: 'Connexion réussie !', token, role: 'guitarist' });
}