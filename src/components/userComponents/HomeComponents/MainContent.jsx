import Fuana from "../../../HomeImg/FAÜNA.jpeg";
import MainImg from "../../../assets/userAssets/mainImage2.jpeg";
// import Face from "../../../assets/userAssets/download (2).jpeg";
import { Button } from "@material-tailwind/react";
import Card from "../../Common/UsercommonComponent/Card";
import { useNavigate } from "react-router-dom";

export default function MainContent() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {/* main head*/}

        <div className="bg-[#F2EEE3] grid grid-cols-1 text-center h-screen place-items-center gap-4 md:grid-cols-2 md:text-left">
          <div>
            <div>
              <h1 className=" text-4xl leading-relaxed tracking-wider font-serif ">
                THE ART OF <br /> HIRING
              </h1>
            </div>
            <div className="py-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum has been the Industrys{" "}
              </p>
            </div>
            <div className="pt-5">
              <Button
                onClick={() => navigate("/explore")}
                className="mr-5 "
                variant="gradient"
              >
                Hire Artist
              </Button>
              <Button onClick={() => navigate("/artist/")} variant="outlined">
                Are you An ARTISt
              </Button>
            </div>
          </div>
          <div className="hidden sm:block">
            <div>
              <img className="h-screen" src={Fuana} alt="" />
            </div>
          </div>
        </div>

        <div className="w-screen bg-[#ffffff] my-10">
          <div className="flex justify-center py-7">
            <h1 className="text-4xl   font-serif font-semibold ">
              Explore With Us
            </h1>
          </div>
          <div>
            <div className="flex justify-around">
              <Card />
            </div>
          </div>
        </div>

        <div className="bg-[#e5e5e5] grid grid-cols-1 text-center h-96 place-items-center gap-4 md:grid-cols-2 md:text-left">
          <div className="hidden sm:block">
            <div>
              <img className="h-96" src={MainImg} alt="" />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-4xl leading-relaxed tracking-wider font-serif">
                THE ART OF <br /> HIRING
              </h1>
            </div>
            <div className="py-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> Lorem Ipsum has been the Industrys{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
