import SectionHeader from "../shared/SectionHeader";

import ProgressBar from "../common/ProgressBar";
import StandardCard from "../common/StandardCard";

const Cruise = ({ params }) => {
  console.log(params);
  const data = {
    cruiseSpeed: {
      Knots: {
        value1: {
          value: "252",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        value2: {
          value: "200",
          color: "#5247C6",
          width: 70,
          height: 20,
        },
      },

      MPH: {
        value1: {
          value: "252",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        value2: {
          value: "200",
          color: "#5247C6",
          width: 70,
          height: 20,
        },
      },

      Mach: {
        value1: {
          value: "252",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        value2: {
          value: "200",
          color: "#5247C6",
          width: 70,
          height: 20,
        },
      },
    },

    altitude: {
      initialCruise: {
        value: "252",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 70,
        height: 20,
      },
      maxAltitude: {
        value: "300",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 85,
        height: 20,
      },
      rateOfClimb: {
        value: "242",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 65,
        height: 20,
      },
      fuelBurn: {
        value: "200",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 45,
        height: 20,
      },
    },

    groundPerformance: {
      value1: {
        value: "2,000 feet",
        color: "#5DC5C2",
        width: 70,
        height: 20,
      },
      value2: {
        value: "1,500 feet",
        color: "#5247C6",
        width: 60,
        height: 20,
      },
    },
  };
  return (
    <StandardCard className="w-full px-[22px] py-[29px]">
      <div className="grid grid-cols-12">
        <div className="col-span-5 mt-[5px]">
          <div className="mb-[38px]">
            <SectionHeader title="Cruise Speed" />
          </div>

          <div className="grid grid-cols-12 mb-11">
            <h6 className="col-span-2 text-[#000000]">knots</h6>

            <div className="col-span-10 pl-[10px]">
              <ProgressBar data={data.cruiseSpeed.Knots.value1} />
              <ProgressBar data={data.cruiseSpeed.Knots.value2} />
            </div>
          </div>

          <div className="grid grid-cols-12 mb-11">
            <h6 className="col-span-2 text-[#000000]">MPH</h6>

            <div className="col-span-10 pl-[10px]">
              <ProgressBar data={data.cruiseSpeed.MPH.value1} />
              <ProgressBar data={data.cruiseSpeed.MPH.value2} />
            </div>
          </div>

          <div className="grid grid-cols-12 ">
            <h6 className="col-span-2 text-[#000000]">Mach</h6>

            <div className="col-span-10 pl-[10px]">
              <ProgressBar data={data.cruiseSpeed.Mach.value1} />
              <ProgressBar data={data.cruiseSpeed.Mach.value2} />
            </div>
          </div>
        </div>

        <div className="col-span-1 justify-center">
          <span className="w-[2px] bg-[#DEDEDE] h-[348px] m-auto block"></span>
        </div>

        <div className="col-span-6 pl-[26px] mt-[5px]">
          <div className="mb-[38px]">
            <SectionHeader title="Altitudes" />
          </div>

          <div className="mb-[12px]">
            <h6 className="mb-[3px] text-[#000000]">
              Initial Cruise Altitude (Feet)
            </h6>

            <ProgressBar data={data.altitude.initialCruise} />
          </div>

          <div className="mb-[12px]">
            <h6 className="mb-[3px] text-[#000000]">Max Altitude (Feet)</h6>

            <ProgressBar data={data.altitude.maxAltitude} />
          </div>

          <div className="mb-[12px]">
            <h6 className="mb-[3px] text-[#000000]">
              Rate of Climb (Feet per Minute)
            </h6>

            <ProgressBar data={data.altitude.rateOfClimb} />
          </div>

          <div className="">
            <h6 className="mb-[3px] text-[#000000]">
              Fuel Burn (Gallons per Hour)
            </h6>

            <ProgressBar data={data.altitude.fuelBurn} />
          </div>
        </div>
      </div>

      <div className="mt-[42px]">
        <SectionHeader title="Ground Performance" />

        <div className="mb-[5px]">
          <ProgressBar data={data.groundPerformance.value1} />
        </div>
        <ProgressBar data={data.groundPerformance.value2} />
      </div>
    </StandardCard>
  );
};

export default Cruise;
