"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

export async function actionCreateNote(formData: FormData) {
  try {
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));
    const prisma = new PrismaClient();

    await prisma.$connect();

    await prisma.notes.create({
      data: {
        title,
        content,
      },
    });

    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }

  redirect("/notes");
}

export async function actionReadNote(id: string) {
  try {
    const prisma = new PrismaClient();

    await prisma.$connect();

    const note = await prisma.notes.findUnique({
      where: {
        id,
      },
    });

    await prisma.$disconnect();

    return note;
  } catch (error) {
    console.error(error);
  }
}

export async function actionUpdateNote(formData: FormData) {
  try {
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));
    const id = String(formData.get("id"));
    const prisma = new PrismaClient();

    await prisma.$connect();

    await prisma.notes.update({
      data: {
        title,
        content,
      },
      where: {
        id,
      },
    });

    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }

  redirect("/notes");
}

export async function actionDeleteNote(formData: FormData) {
  try {
    const id = String(formData.get("id"));
    const prisma = new PrismaClient();

    await prisma.$connect();

    await prisma.notes.delete({
      where: {
        id,
      },
    });

    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
  }

  redirect("/notes");
}

export async function actionReadAllNotes() {
  try {
    const prisma = new PrismaClient();

    await prisma.$connect();

    const notes = await prisma.notes.findMany();

    await prisma.$disconnect();

    return notes;
  } catch (error) {
    console.error(error);
  }
}

export async function actionSearchNotes(query: string) {
  try {
    const prisma = new PrismaClient();

    await prisma.$connect();

    const notes = await prisma.notes.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
            },
          },
          {
            content: {
              contains: query,
            },
          },
        ],
      },
    });

    await prisma.$disconnect();

    return notes;
  } catch (error) {
    console.error(error);
  }
}

export async function actionGetQuery(formData: FormData) {
  const query = String(formData.get("query"));
  redirect(`/notes/search/${encodeURIComponent(query)}`);
}
