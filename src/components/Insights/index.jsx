import React from "react";
import StandardCard from "../common/StandardCard";
import { Button } from "@mui/material";
import { FaFilter } from "react-icons/fa";

export const Insights = ({ mainParagraph, secondaryParagraphs }) => {
  return (
    <div className="w-full ">
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
          {mainParagraph}
        </StandardCard>
        {secondaryParagraphs.map((paragraph, index) => (
          <p key={index} className="py-5 px-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
