import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const product1 = await prisma.product.create({
    data: {
      name: "iPhone 15"
    }
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Samsung TV"
    }
  });

  const warehouse1 = await prisma.warehouse.create({
    data: {
      name: "Chennai Warehouse"
    }
  });

  const warehouse2 = await prisma.warehouse.create({
    data: {
      name: "Bangalore Warehouse"
    }
  });

  await prisma.stock.create({
    data: {
      productId: product1.id,
      warehouseId: warehouse1.id,
      totalUnits: 10,
      reservedUnits: 0
    }
  });

  await prisma.stock.create({
    data: {
      productId: product2.id,
      warehouseId: warehouse2.id,
      totalUnits: 5,
      reservedUnits: 0
    }
  });

  console.log("Seed data added!");
}

main();