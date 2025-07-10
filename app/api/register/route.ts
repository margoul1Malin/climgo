import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Nom d\'utilisateur et mot de passe sont requis' }, { status: 400 });
    }

    const existingUser = await prismadb.user.findUnique({
      where: { username }
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Utilisateur déjà existant' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismadb.user.create({
      data: {
        username,
        password: hashedPassword
      }
    });

    return NextResponse.json({ message: 'Utilisateur créé avec succès', user: { id: user.id, username: user.username } });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
    return NextResponse.json({ error: 'Erreur serveur lors de l\'enregistrement' }, { status: 500 });
  }
} 