import { NextResponse } from "next/server";
import { putDone } from "../../controllers/purchasesController";

export async function PUT(req: any, params:any) {
  try {
    const boxes = await putDone(params.params.setdone);
    return NextResponse.json(boxes);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.error();
  }
}