import '../pages.css';
export interface IAboutPageProps{};
const Aboutpage:React.FC<IAboutPageProps> = (props) => {
  return (
    <div className="about">
      <h3 className="about__title">ABOUT PAGE</h3>
      <div className="about__info">
        <p>React, TypeScript, Ant-design and SASS APP</p>
        <div>
          <p>Things learnt from app build:</p>
          <ul className="aboutpage_ul">
            <li>React (create-react-app)</li>
            <li>TypeScript</li>
            <li>Axios AJAX Request</li>
            <li>TVMAZE API (https://www.tvmaze.com/api)</li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>SASS(SCSS)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Aboutpage;
