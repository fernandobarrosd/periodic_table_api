import { Controller, Get } from "@nestjs/common";
import { prismaClient } from "lib/prisma";


@Controller("elements")
export class ElementController {
  @Get()
  findAll() {
    const elements = prismaClient.element.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        symbol: true,
        atomic_number: true,
        atomic_weight: true
      }
    });

    return elements;
  }
}
