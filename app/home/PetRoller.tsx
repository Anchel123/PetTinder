`use client`

import { useState } from "react";
import PetCard from "./PetCard";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function PetRoller() {

    const [pets, setPets] = useState<any[]>([
        {
            id: 0,
            type: 'Dog',
            name: 'Roxy',
            description: `Hey i'm Roxy and i would loved to be you dog`,
            age: 4,
            sex: 'male',
        },
        {
            id: 1,
            type: 'Cat',
            name: 'Kitty',
            description: `Hey i'm Kitty and i would loved to be you cat`,
            age: 1,
            sex: 'female',
        },
    ])
    const [currentPetId, setCurrentPetId] = useState<string>(pets[0].id.toString())

    return (
            <Tabs className="h-full flex items-center justify-center" value={currentPetId}>
                {
                    pets.map((pet) => {
                        return (
                            <TabsContent key={pet.id} value={pet.id.toString()}>
                                <PetCard
                                    pet={pet}
                                />
                            </TabsContent>
                        )
                    }
                    )
                }
            </Tabs>
    )
}