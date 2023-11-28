import React from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AutofpsSelectIcon from "@mui/icons-material/AutofpsSelect";
import image1 from "../Image/75291.jpg";
import image2 from "../Image/4882066.jpg";

import image4 from "../Image/5747802.jpg";
import image5 from "../Image/kvtx_cz5f_191104.jpg";
function Theme(props) {
  const handleFontClick = (font) => {
    props.setSelectedFont(font);
  };
  const handleColorClick = (color) => {
    props.setSelectedColor(color);
  };
  const handleImageClick1 = (image4) => {
    props.setImage(image4);
  };
  const handleImageClick3 = (image3) => {
    props.setImage(image3);
  };
  const handleImageClick2 = (image2) => {
    props.setImage(image2);
  };
  const handleImageClick5 = (image5) => {
    props.setImage(image5);
  };

  return (
    <div>
      <div
        className="  rounded-lg font-bold text-3xl  flex justify-center py-48  text-white max-w-[400px] min-w-[290px]"
        style={{
          fontFamily: props.selectedFont,
          color: props.selectedColor,
          backgroundImage: `url(${props.image})`,
          
          
          height: "150px",

          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ccc",
        }}
      >
        <div>
          <textarea
            type="text"
            className="flex justify-center text-center outline-none bg-inherit rows-[5]  "
            style={{
              resize: "none",
              overflowY: "hidden",
              width: "100%",
              height: "100px",
              outline: "none",

              padding: "5px",
            }}
            value={props.edit}
            onChange={(e) => {
              props.setEdit(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="text-gray-400 font-medium ml-2 ">Themes</div>
      <div className="grid grid-cols-4 gap-3 ">
        <div>
          <img src={image4} alt="" onClick={() => handleImageClick3(image4)} />
          <div className="flex justify-center text-sm font-medium ">
            Holiday
          </div>
        </div>
        <div>
          <img src={image1} alt="" onClick={() => handleImageClick1(image1)} />
          <div className="flex justify-center text-sm font-medium ">
            Abstract
          </div>
        </div>
        <div>
          <img src={image2} alt="" onClick={() => handleImageClick2(image2)} />
          <div className="flex justify-center text-sm font-medium ">
            Malimal
          </div>
        </div>

        <div>
          <img src={image5} alt="" onClick={() => handleImageClick5(image5)} />
          <div className="flex justify-center text-sm font-medium pt-1 ">
            Caramel
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md w-full max-w-sm text-gray-500 m-2 sha">
        <div className="grid grid-cols-2 pt-1 pb-1">
          <div className="ml-5">
            <ColorLensIcon sx={{ marginRight: "10px" }} />
            Color
          </div>

          <div className="lg:w-32 md:wd-28 grid grid-cols-1 rounded ml-12 pl-8">
            <select
              className="outline-none border-none"
              value={props.selectedColor}
              onChange={(e) => {
                props.setSelectedColor(e.target.value);
              }}
            >
              <option value="red" onClick={() => handleColorClick("red")}>
                Red
              </option>
              <option value="blue" onClick={() => handleColorClick("blue")}>
                Blue
              </option>
              <option value="green" onClick={() => handleColorClick("green")}>
                Green
              </option>
              <option value="purple" onClick={() => handleColorClick("purple")}>
                Purple
              </option>
              <option value="pink" onClick={() => handleColorClick("pink")}>
                Pink
              </option>
              <option value="brown" onClick={() => handleColorClick("brown")}>
                Brown
              </option>
              <option value="white" onClick={() => handleColorClick("white")}>
                White
              </option>
              <option value="black" onClick={() => handleColorClick("black")}>
                Black
              </option>
              <option
                value=" yellow"
                onClick={() => handleColorClick("yellow")}
              >
                Yellow
              </option>
              <option
                value="orange "
                onClick={() => handleColorClick("orange")}
              >
                Orange
              </option>
            </select>
          </div>
        </div>

        <hr className="bg-white ml-5 mr-5" style={{ height: "2px" }} />
        <div className="grid grid-cols-2 pt-1 pb-1">
          <div className="ml-5">
            <AutofpsSelectIcon sx={{ marginRight: "10px" }} />
            Typeface
          </div>

          <div className="lg:w-32 md:wd-28 grid grid-cols-1 rounded ml-12 pl-8">
            <select
              className="outline-none border-none"
              value={props.selectedFont}
              onChange={(e) => {
                props.setSelectedFont(e.target.value);
              }}
            >
              <option value="serif " onClick={() => handleFontClick("serif")}>
                Serif
              </option>
              <option
                value="Calibri "
                onClick={() => handleFontClick("Calibri")}
              >
                Calibri
              </option>

              <option
                value="monospace"
                onClick={() => handleFontClick("monospace")}
              >
                Monospace
              </option>

              <option
                value="cursive"
                onClick={() => handleFontClick("cursive")}
              >
                Cursive
              </option>

              <option
                value="fantasy"
                onClick={() => handleFontClick("fantasy")}
              >
                Fantasy
              </option>
              <option
                value="Georgia
 "
                onClick={() => handleFontClick("Georgia")}
              >
                Georgia
              </option>
              <option
                value="sans-serif "
                onClick={() => handleFontClick("sans-serif")}
              >
                Sans-Serif
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
