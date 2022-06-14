import { Request, Response, NextFunction } from "express";
import db from "../../db";

interface UserInput {}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const users = await db.models.Users.findAll();
  res.status(200).json([]);
}
