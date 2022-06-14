import { Request, Response, NextFunction } from "express";
import db from "../../db";

interface FoodsInput {
  startDateISO: string;
  endDateISO: string;
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  const foods = await db.models.Foods.findAll();
  res.status(200).json(foods);
}
