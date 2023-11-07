import { NextResponse } from "next/server";
import { getBoxesFromPurchase } from "../controllers/boxesController";

export async function GET(req: any, params:any) {
  try {
    const boxes = await getBoxesFromPurchase(params.boxes);
    return NextResponse.json(boxes);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}