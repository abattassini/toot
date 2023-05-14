import "./Innates.scss";

import ActiveImg from "../assets/images/active.gif";
import ReactImg from "../assets/images/react.gif";
import SupportImg from "../assets/images/support.gif";
import MoveImg from "../assets/images/move.gif";

export const Innates = () => {
  return (
    <div className="innates">
      <div>
        <div>
          <img className="active-img" src={ActiveImg} alt="TODO" />
        </div>
        <span>Yin Yan Magic</span>
      </div>
      <div>
        <div>
          <img className="active-img" src={ActiveImg} alt="TODO" />
        </div>
        <span>Draw Out</span>
      </div>
      <div>
        <div>
          <img className="react-img" src={ReactImg} alt="TODO" />
        </div>
        <span>PA Save</span>
      </div>
      <div>
        <div>
          <img src={SupportImg} alt="TODO" />
        </div>
        <span>Equip Sword</span>
      </div>
      <div>
        <div>
          <img src={MoveImg} alt="TODO" />
        </div>
        <span>Move+2</span>
      </div>
    </div>
  );
};
