import { Prisma, User } from "@prisma/client";
import prisma from "./prisma";

export async function createUser(data: Prisma.UserCreateInput): Promise<User>{
    const newUser = await prisma.user.create({ data });
    if (!newUser) {
        throw new Error("User not created");
    }
    return newUser;
}

export async function getUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
        return user;
    }
}
