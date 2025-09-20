import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma'; // pastikan ada prisma client

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // cek user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: 'User tidak ditemukan' }, { status: 401 });
    }

    // validasi password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ message: 'Password salah' }, { status: 401 });
    }

    // buat token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!, 
      { expiresIn: '1d' }
    );

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
