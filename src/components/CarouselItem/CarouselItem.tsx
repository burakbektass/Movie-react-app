import { Carousel } from "antd";
import "./CarouselItem.scss";

const contentStyle = {
  height: "560px",
  color: "#fff",
  lineHeight: "510px",
  // textAlign: "center",
  background: "	#607D8B",
};
export interface ICarouselItemProps {
  contentStyle: any;
}
const CarouselItem: React.FC<ICarouselItemProps | any> = (props) => {
  return (
    <Carousel className="carousel" autoplay>
      <div>
        <h3 style={contentStyle}>YAPILACAKLAR SIRASIYLA ;</h3>
      </div>
      <div>
        <h3 style={contentStyle}>"Search butonundan alınan prop CardItem a iletilecek"</h3>
      </div>
      <div>
        <h3 style={contentStyle}>CardItem içerisindeki movie_id SinglePage e iletilecek</h3>
      </div>
      <div>
        <h3 style={contentStyle}>SCSS güzelleştirmesi yapılabilir.</h3>
      </div>
    </Carousel>
  );
};

export default CarouselItem;
