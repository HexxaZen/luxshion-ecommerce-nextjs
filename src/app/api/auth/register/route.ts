// src/app/api/auth/register/route.ts

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import {prisma} from '../../../lib/prisma';
import { Role } from '@prisma/client';

export async function POST(request: Request) {
  const { name, email, password, role } = await request.json();

  // Validate the role
  if (!Object.values(Role).includes(role)) {
    return NextResponse.json({ message: 'Invalid role provided' }, { status: 400 });
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
  }

  // Hash password for security
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user with the specified role
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });

  return NextResponse.json({
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    message: 'User registered successfully',
  }, { status: 201 });
}