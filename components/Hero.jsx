import React from 'react';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useUser} from "@auth0/nextjs-auth0/client"
import { useState } from "react";

import Gallery from "../public/images.png"


  function Hero() {



   

  const { user, error, isLoading} = useUser();
  if  (isLoading) return  <div>Loading...</div>
  if  (error) return <div>{error.message}</div>

  if (user) {
   

    const imagesBox = [
  {
    id: "1",
    tag: "bike",
    thumb: "/images/bike1.jpg"
  },
  {
    id: "2",
    tag: "bike",
    thumb: "/images/bike2.jpg"
  },
  {
    id: "3",
    tag: "bike",
    thumb:"/images/bike3.jpg"
  },
  {
    id: "4",
    tag: "car",
    thumb:"/images/car1.jpg"
  },
  {
    id: "5",
    tag: "car",
    thumb:"/images/car2.jpg"
  },
  {
    id: "6",
    tag: "car",
    thumb:"/images/car3.jpg"
  },
  {
    id: "7",
    tag: "car",
    thumb:"/images/car4.jpg"
  },
  {
    id: "8",
    tag: "food",
    thumb:"/images/food1.jpg"
  },
  {
    id: "9",
    tag: "food",
    thumb:"/images/food2.jpg"
  },
  {
    id: "10",
    tag: "food",
    thumb:"/images/food3.jpg"
  },
  {
    id: "11",
    tag: "sport",
    thumb:"/images/sport1.jpg"
  },
  {
    id: "12",
    tag: "sport",
    thumb:"/images/sport2.jpg"
  },
  {
    id: "13",
    tag: "travel",
    thumb:"/images/travel1.jpg"
  },
  {
    id: "14",
    tag: "travel",
    thumb:"/images/travel2.jpg"
  },
  {
    id: "15",
    tag: "travel",
    thumb:"/images/travel3.jpg"
  },
  {
    id: "16",
    tag: "travel",
    thumb:"/images/travel4.jpg"
  }
  
]

      const [characters, updateCharacters] = useState(imagesBox);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

    return (
      <div>
        <h2>image gallery</h2>
     <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                 { imagesBox.map((image, index) => {
                  return (
                    <Draggable key={image.id} draggableId={image.id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                             <Image className='daimage' src={image.thumb} alt={`Image ${image.id}`} width={200} height={200} data-tag={image.tag} />
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }

  return (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1>Image</h1>
    <Image className='heroImage' src={Gallery} alt="gallery logo"/>
  </div>
  )
  }

export default Hero;
