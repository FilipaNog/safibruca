import React from "react";
import {Pager} from "react-bootstrap";
import ReactPageScroller from "./scroll";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";


import "./index.css";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];
        const valueItem = [
            "",
            "HOME",
            "QUEM SOMOS",
            "PORTFÓLIO ",
            "CONTACTOS"
        ];
        for (let i = 1; i <= valueItem.length - 1; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{valueItem[i]}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent />
                <FourthComponent/>
            </ReactPageScroller>
            <Pager className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pager>
        </React.Fragment>
    }
}