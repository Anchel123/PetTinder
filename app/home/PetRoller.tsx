`use client`

import { useState } from "react";
import PetCard from "./PetCard";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    const [counter, setCounter] = useState(0);

    const [currentPetId, setCurrentPetId] = useState(pets[0].id);

    return (
        <Tabs className="h-full flex items-center justify-center" value={currentPetId}>
            <button className="border border-black p-6 rounded hover:scale-110" onClick={() => currentPetId !== 0 && setCurrentPetId((currentPetId - 1) % pets.length)} ><ChevronLeft /></button>
            {
                pets.map((pet) => {
                    return (
                        <TabsContent key={pet.id} value={pet.id}>
                            <PetCard
                                pet={pet}
                            />
                        </TabsContent>
                    )
                }
                )
            }
            <button className="border border-black p-6 rounded hover:scale-110" onClick={() => setCurrentPetId((currentPetId + 1) % pets.length)} ><ChevronRight /></button>
        </Tabs>
    )
}