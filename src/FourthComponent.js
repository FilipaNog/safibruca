import React from "react";
import home from "./img/casa.png";
import email from "./img/email.jpg";
import contact from "./img/contacto.png";
import localizacao from "./img/localizacao.png";
import chaves from "./img/chaves.png"

export default () => {
    return (
        <div className="component fourth-component">
            <div class="container">
                <h2 style={{ marginBottom: 50, marginTop: 140, padding: 6, color: '#000000' }}> CONTACTE-NOS </h2>
                <div class="row">
                    <div class="column">
                        <form action="/action_page.php">
                            <h4><img style={{ height: 50, padding: 6 }} src={home} ></img>
                                CASA
                                </h4>
                            <p> Chaves, Vila Real, Portugal</p>
                            <h4><img style={{ height: 50, padding: 10 }} src={contact} ></img>
                                CONTACTOS
                                </h4>
                            <p> +351 964 801 867</p>
                            <h4><img style={{ height: 50, padding: 10 }} src={email} ></img>
                                EMAIL
                                </h4>
                            <p> sircarlosnogueira@gmail.com</p>
                            <h4><img style={{ height: 50, padding: 10 }} src={localizacao} ></img>
                                COORDENADAS GPS
                                </h4>
                            <p>
                                41.7411° N,
                                7.4706° W
                                </p>
                        </form>
                        </div>
                        <div class="column">
                            <img src={chaves} style={{ height: 400, padding: 10 }}></img>
                            <form action="mailto:filipanog94@gmail.com" method="GET" target="_blank">
                                <input style={{ marginTop: 50, marginLeft: 100 }} type="submit" value="Envie-nos um email com a sua preferência" class="button is-primary" />
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )

}



