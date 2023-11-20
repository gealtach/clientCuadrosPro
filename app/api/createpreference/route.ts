import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const cart = await req.json()
        const preferenceInfo = {
            id: cart.selectedItems[0].url,
            title: cart.email,
            quantity: 1,
            currency_id: 'CLP',
            unit_price: cart.totalPrice
        }
        console.log(preferenceInfo);
        
        const response = await fetch('https://api.mercadopago.com/checkout/preferences',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.acmp}`
            },
            body: JSON.stringify(preferenceInfo),
        })
        const data = await response.json();
        console.log(data);
        
      return NextResponse.json(data);
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.error();
    }
  }