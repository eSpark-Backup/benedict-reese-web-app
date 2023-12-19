import cn from "classnames";
import global from "..//styles/global.module.scss";
import styles from "./styles/styles.module.scss";
import SectionHeader from "../shared/SectionHeader";
import { Link } from "react-router-dom";
import StandardCard from "../common/StandardCard";

const Similar = ({ params }) => {
  return (
    <StandardCard className={"mt-5 p-10 w-full"}>
      <h1 className="text-[32px]">Similar Aircraft</h1>
      <section className="flex justify-center">
        {params?.length ? (
          params?.map((aircraft) => (
            <Link
              to={`/${aircraft.aircraft_name.replace(/\s/g, "-")}`}
              state={{
                aircraftData: aircraft,
              }}
            >
              <div key={aircraft.aircraft_id}>
                <div className="">
                  <img
                    className="h-[230px] w-[300px]"
                    src={`${aircraft?.image_name}`}
                    alt=""
                  />
                </div>
                <h5 className="font-semibold text-center">
                  {aircraft.aircraft_name}
                </h5>
              </div>
            </Link>
          ))
        ) : (
          <p>No Similar Aircraft</p>
        )}
      </section>
    </StandardCard>
  );
};

export default Similar;
