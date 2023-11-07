import { NextResponse } from "next/server";
import { postPurchases } from "../controllers/purchasesController";

export async function POST(req: any) {
  try {
    const data = await req.json();
    const newPurchase = await postPurchases(data);
    return NextResponse.json(newPurchase);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}