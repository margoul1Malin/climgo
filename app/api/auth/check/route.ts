import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../[...nextauth]/route';

export async function GET() {
  try {
    const session = await getServerSession();
    if (session) {
      return NextResponse.json({ isAuthenticated: true });
    } else {
      return NextResponse.json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'authentification:', error);
    return NextResponse.json({ isAuthenticated: false }, { status: 500 });
  }
} 