import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

const DatabaseTool = () => {
  const [n, setN] = useState('');
  const [h, setH] = useState([]);
  const [k, setK] = useState([]);
  const [s, setS] = useState([]);

  const produce = () => {
    let obj = {
      name: n,
      characters: []
    }

    h.map((x, i) => {
      obj.characters.push({
        hiragana: x,
        katagana: k[i],
        sound: s[i]
      })
    })

    console.log(obj)
  }

  return (
    <Box className='p-8 flex flex-col gap-4'>
      <Input placeholder='Name' onChange={e => setN(e.target.value)}></Input>
      <Input placeholder='Hirgana' onChange={e => setH(e.target.value.split(''))}></Input>
      <Input placeholder='Katagana' onChange={e => setK(e.target.value.split(''))}></Input>
      <Input placeholder='Sound' onChange={e => setS(e.target.value.split(' '))}></Input>
      <Button onClick={produce}>Go</Button>
    </Box>
  )
}

export default DatabaseTool;