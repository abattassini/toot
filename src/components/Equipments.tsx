import "./Equipments.scss";

import HandImg from "../assets/images/hand.png";
import BodyImg from "../assets/images/body.png";
import AccessoryImg from "../assets/images/accessory.png";
import HeadImg from "../assets/images/head.png";

import DiamondSword from "../assets/images/DiamondSword.gif";
import CrystalShield from "../assets/images/CrystalShield.gif";
import DiamondHelmet from "../assets/images/DiamondHelmet.gif";
import LeatherOutfit from "../assets/images/LeatherOutfit.gif";
import PowerWrist from "../assets/images/PowerWrist.gif";

export const Equipments = () => {
  return (
    <div className="equipments">
      <div>
        <div>
          <img src={HandImg} alt="Hand Slot 1" />
        </div>
        <div>
          <img src={DiamondSword} alt="Diamond Sword" />
        </div>
        <span>Diamond Sword (55)</span>
      </div>
      <div>
        <div>
          <img src={HandImg} alt="Hand Slot 2" />
        </div>
        <div>
          <img src={CrystalShield} alt="Crystal Shield" />
        </div>
        <span>Crystal Shield </span>
      </div>
      <div>
        <div>
          <img src={HeadImg} alt="Head Slot" />
        </div>
        <div>
          <img src={DiamondHelmet} alt="Diamond Helmet" />
        </div>
        <span>Diamond Helmet</span>
      </div>
      <div>
        <div>
          <img src={BodyImg} alt="Body Slot" />
        </div>
        <div>
          <img src={LeatherOutfit} alt="Leather Outfit" />
        </div>
        <span>Leather Outfit</span>
      </div>
      <div>
        <div>
          <img src={AccessoryImg} alt="Accessory Slot" />
        </div>
        <div>
          <img src={PowerWrist} alt="Power Wrist" />
        </div>
        <span>Power Wrist</span>
      </div>
    </div>
  );
};
