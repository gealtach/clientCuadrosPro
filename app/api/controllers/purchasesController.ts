import prisma from '@/libs/Prisma';
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dwj6wtgtb', 
  api_key: '531595987488224', 
  api_secret: 'fFJIW26Wn7VvG1_1cIaX22iGwFc' 
});

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
}

export async function postPurchases({
  selectedItems,
  totalPrice,
  email,
  adress
}: {
  selectedItems: {
    url: never;
    selectedSize: never;
    price: any;
  }[];
  totalPrice: number; // Asegúrate de usar el tipo correcto aquí
  email: string;
  adress: string;
}) {
  try {

    selectedItems.forEach(async (item: SelectedItem) =>{
      const response = await cloudinary.uploader.upload(item.url);
      item.url = response.secure_url;
    })


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

  
  