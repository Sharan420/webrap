import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function registerUser(req: Request, res: Response, db: any) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await db.collection('users').insertOne({ email, password: hashedPassword });
    res.status(201).send({ id: result.insertedId });
  } catch (error) {
    console.log(error)
    res.status(500).send('Error registering user');
  }
}

export async function authenticateUser(req: Request, res: Response, db: any) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  try {
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '10' });
    res.json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).send('Error authenticating user');
  }
}
