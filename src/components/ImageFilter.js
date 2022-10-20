import React from 'react';
import logo from '../images/p_b.png'

 const ImageFilter = ({color,id}) => {

    const pieces = []
    for(let i=9; i <= 16; i++) {
        pieces.push({image:{logo}, id:{i}})
    }
    for(let i=49; i<=56; i++) {
        pieces.push({image:{logo}, id:{i}})
    }
    pieces.push({image:{logo}, id:59})
    pieces.push({image:{logo}, id:3})
    pieces.push({image:{logo}, id:6})
    pieces.push({image:{logo}, id:62})
    pieces.push({image:{logo}, id:2})
    pieces.push({image:{logo}, id:58})
    pieces.push({image:{logo}, id:7})
    pieces.push({image:{logo}, id:63})
    pieces.push({image:{logo}, id:1})
    pieces.push({image:{logo}, id:57})
    pieces.push({image:{logo}, id:8})
    pieces.push({image:{logo}, id:64})
    pieces.push({image:{logo}, id:5})
    pieces.push({image:{logo}, id:61})
    pieces.push({image:{logo}, id:4})
    pieces.push({image:{logo}, id:60})

        
    const divStyles = {
        backgroundColor: color
    }

    const imgExtractor = (id) => {
        console.log(pieces);
        pieces.forEach((piece) => {
            if (piece.id === parseInt(id)) {
                console.log('entered');
                return <img src={piece.image} alt='logo' />
            }
        });

    }

    return (
        <>
        <div className='h-15 w-15' id={id} style={divStyles}>
            {imgExtractor(id)}
        </div>
        </>
    )
}

export default ImageFilter;