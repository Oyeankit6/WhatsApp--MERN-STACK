import { Box  , styled } from '@mui/material'
import React from 'react'
import {Search as SearchIcon} from "@mui/icons-material"
import InputBase from '@mui/material/InputBase';


const Component = styled(Box)`
background: #fff;
height:45px;
border-bottom: 1px solid #f2f2f2;
 display:flex;
align-items:center;
`

const Wrap = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 10px;
`;


const Icon = styled(Box)`

 position:absolute;
 height:100%;
 padding: 6px 10px;
 color: #919191;

`

const InputField = styled (InputBase)`
height:15px;
width:100%;
padding:16px;
padding-left:65px;
font-size:14px;
`

const Search = ({setText}) => {
  return (
    <div>
       <Component >
           <Wrap>
                <Icon>
                   <SearchIcon fontSize='small'/>
                  
                </Icon>
                <InputField placeholder='Search or start a new chat'
                 onChange={(e)=> setText(e.target.value)}
                />

           </Wrap>
       </Component >
    </div>
  )
}

export default Search
