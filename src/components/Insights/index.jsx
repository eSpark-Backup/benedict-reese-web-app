import React from "react";
import StandardCard from "../common/StandardCard";
import { Button } from "@mui/material";
import { FaFilter } from "react-icons/fa";

export const Insights = () => {
  return (
    <StandardCard className="p-5 w-full ">
      <div className="flex justify-between mb-10">
        <div className="flex">
          <h2 className="text-2xl font-semibold flex">AI Insights</h2>
          <Button
            sx={{
              width: "83px",
              height: "28px",
              borderRadius: "12px",
              border: "2px solid #4c2fff",
              backgroundColor: "#907eff",
              fontSize: "16px",
              color: "#1800ad",
              marginLeft: "20px",
              textTransform: "none",
            }}
          >
            Beta
          </Button>
        </div>
        <Button
          variant="contained"
          sx={{
            height: "38px",
            borderRadius: "12px",
            border: "1px solid #EBECF2",
            background: "#FFF",
            boxShadow: "0px 21px 19.7px -9px rgba(0, 0, 0, 0.05)",
            color: "#000",
            fontSize: "15px",
            fontWeight: "500",
            textTransform: "none",
          }}
        >
          <FaFilter color="grey" fill="grey" className="mr-1" />
          Regenerate
        </Button>
      </div>
      <div>
        <StandardCard className="border py-5 px-2 rounded-lg">
          What are some anomalies with the flight activity of this aircraft? Is
          it a good investment? Should I be concerned about anything I see about
          it?
        </StandardCard>
        <p className="py-5 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget ipsum bibendum, sodales tortor vel, dignissim enim. Mauris
          condimentum erat augue, id bibendum elit pretium non. Ut vel mi quis
          mi tristique rutrum ut eget nibh. Curabitur neque erat, tincidunt et
          est nec, feugiat sagittis justo. Fusce malesuada, turpis quis bibendum
          efficitur, risus mi aliquam felis, ac rutrum felis diam ac mi. Integer
          lobortis sapien turpis, eget faucibus quam elementum dapibus. Mauris
          laoreet lorem a aliquam mattis. Ut tellus tellus, faucibus id tellus
          sed, rutrum tempus dolor.
        </p>
        <p className="py-5 px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eget ipsum bibendum, sodales tortor vel, dignissim enim. Mauris
          condimentum erat augue, id bibendum elit pretium non. Ut vel mi quis
          mi tristique rutrum ut eget nibh. Curabitur neque erat, tincidunt et
          est nec, feugiat sagittis justo. Fusce malesuada, turpis quis bibendum
          efficitur, risus mi aliquam felis, ac rutrum felis diam ac mi. Integer
          lobortis sapien turpis, eget faucibus quam elementum dapibus. Mauris
          laoreet lorem a aliquam mattis. Ut tellus tellus, faucibus id tellus
          sed, rutrum tempus dolor.
        </p>
      </div>
    </StandardCard>
  );
};
