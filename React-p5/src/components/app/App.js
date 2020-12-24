import React, {useState} from 'react';
import uniqid from 'uniqid';
import Navbar from '../Navbar/Navbar';
import {getRandomPart} from "../../utils";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./App.scss"

const MySwal = withReactContent(Swal)

const generators = {
    generator1: {
        part1: ["La seule façon", "La meilleure des façons", "Le meilleur moyen"],
        part2: ["pour réussir,", "d'être heureux,", "de vivre,"],
        part3: ["c'est d'aimer ce que vous faites", "ne dépend que de vous", "c'est de s'obstiner"],
    },
    generator2: {
        part1: ["Au printemps,", "j’aime bien regarder du haut des remparts au lever du soleil..., ", "c'est pas faux !"],
        part2: ["Dans le Languedoc, ils m'appellent Provençal ", "le vocabulaire et les épinards, ", "y’a une belle vue !"],
        part3: ["Dans la vie, j'avais deux ennemis : ", "par exemple, Sire, Léodagan et moi on fait semblant de vous prendre en otage \", \"vous pouvez être sûr que le Graal, ", "mais c'est moi qui m'suis gouré en disant mon nom."],
    }
};

const Citations = ({ citations }) => {

    return <ul>
        {citations.map(c => <li key={c.id}>{c.value}</li>)}
    </ul>

}

 
const Footer2 = () => {
    return (
        <footer className="footer">
            <div className="flex-center">
                <p>JMG 2020 - Générateur de citations v.2 VanillaJS -</p>
            </div>
        </footer>
    )
}

const App = () => {

    const [generator, setGenerator] = useState('generator1');
    const [nbCitations, setNbCitations] = useState(1);
    const [citations, setCitations] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()

        const _citations = []
        for(let i = 0; i < nbCitations; i++){
            const c = {
                id: uniqid(),
                value: `${getRandomPart(generators, generator, 'part1')} ${getRandomPart(generators, generator, 'part2')} ${getRandomPart(generators, generator, 'part3')}`
            }
            _citations.push(c)
        }
        setCitations(_citations);
        
        const htmlCitation2 = '<ul>' +
        _citations.map((citation) => '<li>' + citation.value + '</li>') +
    '</ul>';
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'JMG - Projet  5 OCR',
        html: htmlCitation2
      }).then(() => {
        return MySwal.fire(<p>Appuyer pour rejouer</p>)
      })
    }


    return (
        <div>
            <Navbar />
            <div className="container flex">
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <h2 className="uppercase">Type de citations :</h2>
                            <div className="flex">
                                <label htmlFor="type1">
                                <input
                                    id="type1"
                                    name="catgeory"
                                    type="radio"
                                    value="generator1"
                                    onChange={() => setGenerator('generator1')}
                                />
                                <span>philosophie</span>
                                </label>
                                <label htmlFor="type2">
                                <input
                                    id="type2"
                                    name="catgeory"
                                    type="radio"
                                    value="generator2"
                                    onChange={() => setGenerator('generator2')}
                                />
                                <span>classique</span>
                                </label>
                            </div>
                        <h2 className="uppercase">Nombre de citations :</h2>
                            <div className="flex">
                    <label htmlFor="1">
                        <input type="radio" name="nbitations" value="1" id="1" checked onClick={() => setNbCitations(1)}></input>
                        <span>1</span>
                    </label>
                    <label htmlFor="2">
                        <input type="radio" name="nbitations" value="2" id="2" checked onClick={() => setNbCitations(2)}></input>
                        <span>2</span>
                    </label>                    
                    <label htmlFor="3">
                        <input type="radio" name="nbitations" value="3" id="3" checked onClick={() => setNbCitations(3)}></input>
                        <span>3</span>
                    </label>                    
                    <label htmlFor="4"> 
                        <input type="radio" name="nbitations" value="4" id="4" checked onClick={() => setNbCitations(4)}></input>
                        <span>4</span>
                    </label>                    
                    <label htmlFor="5">
                        <input type="radio" name="nbitations" value="5" id="5" checked onClick={() => setNbCitations(5)}></input>
                        <span>5</span>
                    </label>

                </div>

                            </div>
                <button className="generate" type="submit">Générer</button>
            </form>

            <Citations
                citations={citations}
            />
            </div>
            <Footer2 />

        </div>
    );
}

export default App;
