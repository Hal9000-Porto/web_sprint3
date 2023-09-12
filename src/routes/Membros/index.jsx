import React from 'react';

const membrosDaEquipe = [

    {
        nome: 'Diogo Gallina (98605)',
        foto: '../../src/assets/diogo.jpg',
    },

    {
        nome: 'João Dubas Leal Kleye - (76153)',
        foto: '../../src/assets/dubas.jpg',
    },

    {
        nome: 'Pedro Henrique Archilha (550450)',
        foto: '../../src/assets/pedro.png',
    },

    {
        nome: 'Pedro Henrique Lourenço (98402)',
        foto: '../../src/assets/henrique.png',    
    },

    {
        nome: 'Rafael Klanfer Nunes (99791)',
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
            
                <div className="bloco-criadores">
                    <div className="perfil">
                        <img src="../../src/assets/github-mark.png" alt="Logo gitHub" className="img-perfil" />
                        <p><a href="https://github.com/Hal9000-Porto/web_sprint3" target="_blank">Link github</a></p>
                    </div>
                </div>
        </div>
        
    );
}
