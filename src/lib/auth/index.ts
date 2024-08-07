import { db } from "$src/db";
import { profileTable } from "$src/db/schema";
import { eq } from "drizzle-orm";

export const getOrCreateUserProfile = async (locals: App.Locals ) => {
    if (!locals.user){
        return null;
    }
    
    const curProfile = await db.query.profileTable.findFirst({
        where: eq(profileTable.id, locals.user.id)
    })

    if(curProfile){
        return curProfile;
    }

    await db.insert(profileTable).values({
        id: locals.user.id,
        firstName: "",
        lastName: "",
        email: locals.user.email ?? ""
    });

    const newProfile = await db.query.profileTable.findFirst({
        where: eq(profileTable.id, locals.user.id)
    });

    if(!newProfile){
        error(500, "Could not create profile");
    }

    return newProfile;
}