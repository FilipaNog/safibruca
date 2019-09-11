
import photo1 from './img/foto1.jpg';
import photo2 from './img/foto2.jpg';
import photo3 from './img/foto3.jpg';
import photo4 from './img/foto4.jpg';
import photo5 from './img/foto5.jpg';
import photo6 from './img/photo6.jpg';
import photo7 from './img/photo7.jpg';
import photo8 from './img/photo8.jpg';
import photo9 from './img/photo9.jpg';
import photo10 from './img/photo10.jpg';
import photo11 from './img/photo11.jpg';
import photo12 from './img/photo12.jpg';
import photo13 from './img/photo13.jpg';
import photo14 from './img/photo14.jpg';
import photo15 from './img/photo15.jpg';
import photo16 from './img/photo16.jpg';
import photo17 from './img/photo17.jpg';
import video1 from './img/video1.mp4';
import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="glyphicon glyphicon-glass" />;
    rightIcon = rightIcon ? undefined : <span className="glyphicon glyphicon-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div style={{ background: '#b4C8E2', height: '100%', padding: 200, width: '100%' }}>
        <h2 style={{ marginBottom: 80, marginTop: -54, padding: 0, color: '#F0FFFF' }} > PORTFÓLIO </h2>
        <div className="container-fluid">
          <Row>
            <Col span={12} style={{ marginTop: 20 }}>
              <RBCarousel
                animation={true}
                autoplay={this.state.autoplay}
                slideshowSpeed={2000}
                defaultActiveIndex={0}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r => (this.slider = r)}
              >
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo1}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo2}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo3}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo4}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo5}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo6}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo7}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo8}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo9}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo10}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo11}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ ...styles, backgroundColor: "aqua" }}>
                  <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                    <source src={video1} type="video/mp4" />
                  </video>
                  <div className="carousel-caption">Video</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo12}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo13}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo14}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo15}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo16}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 400 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={photo17}
                  />
                  <div className="carousel-caption">Image</div>
                </div>
              </RBCarousel>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-xs-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};