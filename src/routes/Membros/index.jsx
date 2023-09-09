import React from 'react';

 

// Crie um array com informações de 5 membros da equipe

 

const membrosDaEquipe = [

 

    //membro 1

 

    {

 

        nome: 'Diogo Gallina - 98605',


        foto: '../../src/assets/diogo.jpg',

    },

 

    //membro 2

 

    {

 

        nome: 'João Dubas Leal Kleye - 76153',

 

        foto: '../../src/assets/dubas.jpg',

 



 

    },

 

    //membro 3

 

    {

 

        nome: 'Pedro Henrique Archilha - 550450',

 

        foto: '../../src/assets/pedro.png',

 

    
 

    },

 

    //membro 4

 

    {

 

        nome: 'Pedro Henrique Lourenço - 98402',

 

        foto: '../../src/assets/henrique.png',

 

 

    },

 

    //membro 5

 

    {

 

        nome: 'Rafael Klanfer Nunes - 99791',

 

        foto: '../../src/assets/rafa.jpg',

 

 

    },

 

];

 

 

 

export default function Membros() {

 

    return (

 

        <div className="membros">

 

            {membrosDaEquipe.map((membro, index) => (

 

                <div className="bloco-criadores" key={index}>

 

                    <div className="perfil">

 

                        <img src={membro.foto} alt={`Foto do colaborador ${membro.nome}`} className="img-perfil" />
                        <p>{membro.nome}</p>
                        </div>

                    </div>
            ))}
        </div>

 

    );

 

}
