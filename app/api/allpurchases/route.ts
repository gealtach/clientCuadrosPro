import { NextResponse } from "next/server";
import { getAllPurchases } from "../controllers/purchasesController";

export async function GET() {
  try {
    const purchases = await getAllPurchases();
    return NextResponse.json(purchases);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}