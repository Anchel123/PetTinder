'use client'

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useState } from 'react';

const links = [
    "my dogs",
    "profile details",
    "contacts",
    "taste profile",
]

export default function Page() {

    const [collapsed, setCollapsed] = useState(false);
    const [currentTab, setCurrentTab] = useState('ProfileDetails')



    return (

        <ResizablePanelGroup direction='horizontal'>
            <ResizablePanel
                defaultSize={15}
                minSize={10}
                maxSize={50}
                onCollapse={() => setCollapsed(true)}
                onExpand={() => setCollapsed(false)}
                collapsible
            >
                <div className='h-full p-4 flex flex-col gap-4'>
                    <button
                        className='text-start underline underline-offset-2'
                        title='Profile'
                        type='button'
                        onClick={() => setCurrentTab('ProfileDetails')}
                    >
                        <p>Profile Details</p>
                    </button>
                    <button
                        className='text-start underline underline-offset-2'
                        title='Taste Profile'
                        type='button'
                        onClick={() => setCurrentTab('TasteProfile')}
                    >
                        <p>Taste Profile</p>
                    </button>
                    <button
                        className='text-start underline underline-offset-2'
                        title='My Pets'
                        type='button'
                        onClick={() => setCurrentTab('MyPets')}
                    >
                        <p>My Pets</p>
                    </button>
                    <button
                        className='text-start underline underline-offset-2'
                        title='Liked Pets'
                        type='button'
                        onClick={() => setCurrentTab('LikedPets')}
                    >
                        <p>Liked Pets</p>
                    </button>
                </div>
            </ResizablePanel>

            <ResizableHandle withHandle />
            <ResizablePanel
                defaultSize={70}
                minSize={50}
                maxSize={100}
            >
                <Tabs value={currentTab}>
                    <TabsContent value='ProfileDetails'>
                        <h1>Profile Details</h1>
                    </TabsContent>
                    <TabsContent value='LikedPets'>
                        <h1>Liked Pets</h1>
                    </TabsContent>
                    <TabsContent value='TasteProfile'>
                        <h1>Taste Profile</h1>
                    </TabsContent>
                    <TabsContent value='MyPets'>
                        <h1>My Pets</h1>
                    </TabsContent>
                </Tabs>
            </ResizablePanel>
        </ResizablePanelGroup>

    );
};