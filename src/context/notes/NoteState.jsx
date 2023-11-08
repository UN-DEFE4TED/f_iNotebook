
import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props)=>{
    const initialNotes = [
        {
          "_id": "6549b248c4d456b026b32982",
          "user": "654997d224b664a86e0b2c0a",
          "title": "new note 324 updated",
          "description": "please accsess the playlist 324 updated...",
          "tag": "youtube updated",
          "date": "1699328584508",
          "__v": 0
        },
        {
          "_id": "6549b2d4c4d456b026b32986",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328724695",
          "__v": 0
        },
        {
          "_id": "6549b2d4c4d456b026b32988",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328724895",
          "__v": 0
        },
        {
          "_id": "6549b2d5c4d456b026b3298a",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328725081",
          "__v": 0
        },
        {
          "_id": "6549b2d5c4d456b026b3298c",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328725283",
          "__v": 0
        },
        {
          "_id": "6549b2d5c4d456b026b3298e",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328725462",
          "__v": 0
        },
        {
          "_id": "6549b2d5c4d456b026b32990",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328725667",
          "__v": 0
        },
        {
          "_id": "6549b2d5c4d456b026b32992",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328725834",
          "__v": 0
        },
        {
          "_id": "6549b2d6c4d456b026b32994",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328726231",
          "__v": 0
        },
        {
          "_id": "6549b2d6c4d456b026b32996",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328726390",
          "__v": 0
        },
        {
          "_id": "6549b2d6c4d456b026b32998",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328726607",
          "__v": 0
        },
        {
          "_id": "6549b2d6c4d456b026b3299a",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328726760",
          "__v": 0
        },
        {
          "_id": "6549b2d6c4d456b026b3299c",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328726990",
          "__v": 0
        },
        {
          "_id": "6549b2d7c4d456b026b3299e",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328727214",
          "__v": 0
        },
        {
          "_id": "6549b2d7c4d456b026b329a0",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328727371",
          "__v": 0
        },
        {
          "_id": "6549b2d7c4d456b026b329a2",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328727498",
          "__v": 0
        },
        {
          "_id": "6549b2d7c4d456b026b329a4",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328727743",
          "__v": 0
        },
        {
          "_id": "6549b2d8c4d456b026b329a6",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328728827",
          "__v": 0
        },
        {
          "_id": "6549b2d8c4d456b026b329a8",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328728982",
          "__v": 0
        },
        {
          "_id": "6549b2d9c4d456b026b329aa",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328729133",
          "__v": 0
        },
        {
          "_id": "6549b2d9c4d456b026b329ac",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328729286",
          "__v": 0
        },
        {
          "_id": "6549b2d9c4d456b026b329ae",
          "user": "654997d224b664a86e0b2c0a",
          "title": "my title",
          "description": "please wake up early",
          "tag": "persnol",
          "date": "1699328729524",
          "__v": 0
        },
        {
          "_id": "6549bef625d7ad67b0b693f2",
          "user": "654997d224b664a86e0b2c0a",
          "title": "new note",
          "description": "please accsess the playlist...",
          "tag": "youtube",
          "date": "1699331830091",
          "__v": 0
        }
      ]

      const [notes, setnotes] = useState(initialNotes)
    return(
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState