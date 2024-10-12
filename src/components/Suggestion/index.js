import { useState } from 'react';
import './style.css';

export function Suggestion() {
    const suggestions = [
        { id: 1, login: 'Justin Bieber', name: 'Justin Bieber', following: 'Demi Lovato', img: 'https://i.pinimg.com/originals/e5/1e/24/e51e2421cb987b9c6ee0ff12968ca871.jpg' },
        { id: 2, login: 'Lauren Jauregui', name: 'Lauren Jauregui', following: 'Ed Sheeran', img: 'https://64.media.tumblr.com/1f4ad9f6579b3d7c9886b6a4c3778641/1c03c2eed754a519-1f/s400x600/8203e1d171db4f55dd0626bc3d449ccae456555c.jpg' },
        { id: 3, login: 'Ariana Grande', name: 'Ariana Grande', following: 'Billie Elish', img: 'https://i.pinimg.com/474x/17/f3/c1/17f3c1f1efdcf72e9b1f48b8a483fcf1.jpg' },
        { id: 4, login: 'Charlie Puth', name: 'Charlie Puth', following: 'Nick Minaj', img: 'https://i.pinimg.com/736x/a9/5f/79/a95f79c1c3d01ff14b802a6d138f90a0.jpg' },
        { id: 5, login: 'Jão', name: 'Jão', following: 'Pedro Tofáni', img: 'https://i.pinimg.com/474x/79/24/6b/79246bbf4cbea1be1de96a1d1fed60d0.jpg' },
    ];

    return (
        <div className="container-suggestion">
            <div className="header-suggestion">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZ76tQOAWiYbr4cKw67fuXkqsToE6-4sETQ&s" 
                    alt="Sabrina Carpenter"
                />
                <div className="user-infos-suggestion">
                    <div className="infos">
                        <span>sabrinacptr</span>
                        <p>Sabrina Carpenter</p>
                    </div>
                    <button className="switch">Mudar</button>
                </div>
            </div>

            <div className="header-main-suggestion">
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className="user-suggestion">
                {suggestions.map((suggestion) => (
                    <div className="infos-suggestion" key={suggestion.id}>
                        <img 
                            src={suggestion.img} 
                            alt={suggestion.login}
                        />
                        <div className="info-suggestion">
                            <span>{suggestion.login}</span>
                            <p>Seguido por {suggestion.following}</p>
                        </div>
                        <button className='follow'>Seguir</button>
                    </div>
                ))}
            </div>

            <footer className="footer-suggestion">
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2024 Caroline Fernandes</p>
            </footer>
        </div>
    );
}
