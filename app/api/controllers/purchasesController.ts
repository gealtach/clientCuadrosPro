import prisma from '@/libs/Prisma';

export async function getPurchasesByEmail(email:string) {
  return prisma.purchase.findMany({
    where: { buyer: email }
  });
}


export async function postPurchases({
  selectedItems,
  totalPrice,
  email
}: {
  selectedItems: {
    url: never;
    selectedSize: never;
    price: any;
  }[];
  totalPrice: number; // Asegúrate de usar el tipo correcto aquí
  email: string;
}) {
  try {
    const newPurchase = await prisma.purchase.create({
      data: {
        boxes: { create: selectedItems },
        totalPrice: totalPrice,
        buyer: email
      }
    });
    return newPurchase
  } catch (error) {
    console.log(error)
  }
  
}

  
  