import { Controller, Get, Param, Query } from "@nestjs/common";
import { prismaClient } from "lib/prisma";


@Controller("categories")
export class CategoryController {
  @Get()
  findAll() {
    const categories = prismaClient.category.findMany();
    return categories;
  }
  
  @Get(":name")
  findByName(@Param("name") name : string) {
    const categorie = prismaClient.category.findMany({
      where: {
        name
      },
      select: {
        id: true,
        name: true,
        elements: true
      }
    });

    return categorie;
  }
}
