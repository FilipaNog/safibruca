import React from "react";
import imgLogo from "./img/imgLogo.png"

export default () => {
    return (
        <div className="component second-component">
            <div class="container">
                <div style={{ marginBottom: 100, marginTop: 165, padding: 6, color: '#F0FFFF', fontSize: "500%" }}> SOBRE NÓS </div>
                <div class="row">
                    <div class="column" style={{ marginTop: -80}}>
                        <p style={{ marginLeft: 4, color: '#F0FFFF', marginBottom: 50}}>
                            O Grupo SAFIBRUCA tem um percurso empresarial longo, marcado por uma cultura de empreendedorismo e de inovação na procura permanente de novos horizontes. Com a sua nova restruturação, o Grupo SAFIBRUCA é hoje uma empresa com atividade centrada na construção, gestão e restauro de infraestruturas segmentada pelas áreas de Engenharia e Construção, mantendo sempre altos standards de rigor, qualidade e capacidade de execução alinhadas com as melhores práticas e numa conduta empresarial assente em princípios éticos e suportados numa visão estratégica única.
                        </p>
                        <p style={{ marginLeft: 4, color: '#F0FFFF' }}>
                            SABIBRUCA desenvolve um vasto leque de atividades associado à concepção, construção, gestão, acabamento e manutenção de infraestruturas.
                            Associado a um grupo de trabalho unido e responsável, com uma vasta sabedoria e experiência na área onde o mote é a satisfação dos clientes. Exemplar na afirmação, tanto na competência técnica demonstrada em cada projeto, como construindo uma reputação de excelência em áreas técnicas da construção civil e obras públicas.
                        </p>
                    </div>
                    <div class="column">
                        <img src={imgLogo} style={{ height: 240, marginLeft: 100, marginTop: -58 }}  ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}