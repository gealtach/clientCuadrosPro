import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const cart = await req.json()
        const preferenceInfo = {
            items:
            [{id: cart.selectedItems[0].url,
            title: cart.email,
            quantity: 1,
            currency_id: 'CLP',
            unit_price: cart.totalPrice}]
        }
        
        const response = await fetch('https://api.mercadopago.com/checkout/preferences',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.acmp}`
            },
            body: JSON.stringify(preferenceInfo),
        })
        const data = await response.json();
        console.log(data.init_point);
        
      return NextResponse.redirect(`${data.init_point}`);
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.error();
    }
  }