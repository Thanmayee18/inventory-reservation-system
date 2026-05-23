import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: {
    params: { id: string }
  }
) {

  const reservationId =
    Number(params.id);

  const reservation =
    await prisma.reservation.findUnique({
      where: {
        id: reservationId
      },
      include: {
        product: true,
        warehouse: true
      }
    });

  if (!reservation) {

    return NextResponse.json(
      {
        error: "Reservation not found"
      },
      {
        status: 404
      }
    );
  }

  return NextResponse.json(
    reservation
  );
}