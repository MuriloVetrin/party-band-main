import axios from 'axios'
import { useEffect, useState } from 'react'

export const Cards = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/servicos')
            .then((resposta) => {
                setCards(resposta.data)
            })
    }, [])
    return (
        <>
       <div
                    className='d-flex justify-content-around'
                >
                    {
                        cards.map((element, index) => {
                            return (
                                <div
                                    className='card text-center'
                                    key={index}
                                    style={{
                                        width: '18rem'
                                    }}
                                >
                                    <div
                                        className='card-body'
                                    >
                                        <h5 className='card-title'>
                                            {element.titulo}
                                        </h5>
                                        <p className='card-text'>
                                           {element.descricao}
                                        </p>

                                    </div>

                                </div>

                            )
                        })
                    }


                </div>

            
        </>
    )
}