import React from "react";
import { useState } from "react";
import UploadAndDisplayImage from "./uploadAndDisplayImage";
import InputCounter from "./inputCounter";


const Hero = (socket) => {
  // State for tracking input values
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [veg, setVeg] = useState(0);
  const [nonVeg, setNonVeg] = useState(0);
  const [chappati, setChappati] = useState(0);
  const [rice, setRice] = useState(0);

  // Event handlers for incrementing and decrementing values
  const increment = (setter, value) => () => setter(value + 1);
  const decrement = (setter, value) => () =>
    setter(value > 0 ? value - 1 : value);

  let submitData = () => {
    console.log(socket.socket)
    const data = {
      name:"tirth",
      phone:phone,
      address:address,
      veg:veg,
      nonVeg:nonVeg,
      chappati:chappati,
      rice:rice,
    }
    console.log(data)
    socket.socket.emit("foodInfo",(data))
  };

  return (
    <>
        <div className="font-bold">
            Connection status -
        </div>
      <div className="flex font-mono items-center justify-center flex-col">
        <div className="mt-[5%] text-lg">
          <div>
            Please enter your phone number - {""}
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-md"
            />
          </div>
          <br />
          <div>
            Please enter your address - <br />
            <textarea
              name="address"
              id="address"
              cols="40"
              rows="5"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-md"
            />
          </div>
        </div>

        <div className="ml-30 mt-5 text-lg space-y-4">
          <p className="mb-7">
            {" "}
            Please enter the number of people you could feed -{" "}
          </p>

          <InputCounter
            title="VEG"
            value={veg}
            increment={increment(setVeg, veg)}
            decrement={decrement(setVeg, veg)}
          />
          <InputCounter
            title="NON-VEG"
            value={nonVeg}
            increment={increment(setNonVeg, nonVeg)}
            decrement={decrement(setNonVeg, nonVeg)}
          />
          <InputCounter
            title="CHAPPATI"
            value={chappati}
            increment={increment(setChappati, chappati)}
            decrement={decrement(setChappati, chappati)}
          />
          <InputCounter
            title="RICE"
            value={rice}
            increment={increment(setRice, rice)}
            decrement={decrement(setRice, rice)}
          />
        </div>
        <div>
          Please upload your aadhar card picture -
          <UploadAndDisplayImage />
        </div>

        <div className="flex justify-center space-x-10">
          <button
            onClick={submitData}
            className="px-4 py-2 text-[#EDF5E1] bg-[#05386B] rounded hover:bg-[#042d56] mt-16 mb-10"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;