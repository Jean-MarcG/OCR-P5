import React from "react";

const Navbar = () => {
    return (
        <div>
            <navbar>
                <div className="navbar navbar__background--react">
                    <div className="container">
                    <div className="navbar__inner flex">
                        <h1 className="react-color"> Générateur de Citations React</h1>
                        <nav>
                            <ul>
                                <li className="navbar__link--vanilla"><a href="https://ocr-p5-vanillajs.folio-jmg.fr/">VanillaJS</a></li>
                                <li className="navbar__link--vuejs"><a href="https://ocr-p5-vuejs.folio-jmg.fr/">Vuejs</a></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                </div>
  </navbar>
            
        </div>
    )
}

export default Navbar
