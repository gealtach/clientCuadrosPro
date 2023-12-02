import prisma from '@/libs/Prisma';

export async function getPurchasesByEmail(email:string) {
  return prisma.purchase.findMany({
    where: { buyer: email }
  });
}

export async function getAllPurchases() {
  return prisma.purchase.findMany({
    include: {
      boxes: true,
    }
  })
};

export async function putDone(setdone:string) {
  return prisma.purchase.update({
    where: { id: setdone},
    data: {
      done: true
    }
  })
}

interface SelectedItem {
  url: string;
  selectedSize: string; // Adjust the type according to your actual data type
  price: any;
  dataForm: File;
}

export async function postPurchases({
  selectedItems,
  totalPrice,
  email,
  adress
}: {
  selectedItems: {
    url: string;
    selectedSize: string;
    price: number;
    dataForm: File;
  }[];
  totalPrice: number; // Asegúrate de usar el tipo correcto aquí
  email: string;
  adress: string;
}) {
  try {
    const newPurchase = await prisma.purchase.create({
      data: {
        boxes: { create: selectedItems },
        totalPrice: totalPrice,
        buyer: email,
        adress,
        done: false
      }
    });
    return newPurchase
  } catch (error) {
    console.log(error)
  }
  
}

  
  