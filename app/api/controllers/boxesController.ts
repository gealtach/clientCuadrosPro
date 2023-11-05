import prisma from "@/libs/Prisma";

export async function getBoxesFromPurchase(id:string) {    
    return prisma.box.findMany({
      where: { purchaseId: id }
    });
  }