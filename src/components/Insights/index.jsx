import React from "react";
import StandardCard from "../common/StandardCard";
import { Button } from "@mui/material";
import { FaFilter } from "react-icons/fa";

export const Insights = ({ mainParagraph, secondaryParagraphs, heading  }) => {
  return (
    <div className="w-full ">
      <div className="flex justify-between mb-10">
        <div className="flex">
          <h2 className="text-3xl font-normal flex">{heading}</h2>
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
              marginTop:"6px"
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
            '&:hover': {
              backgroundColor: '#28ACE2', 
            },
          }}
        >
          <FaFilter color="grey" fill="grey" className="mr-1" />
          Regenerate
        </Button>
      </div>
      <div>
        <StandardCard className="text-black text-base font-normal border py-5 px-2 rounded-lg">
          {mainParagraph}
        </StandardCard>
        {secondaryParagraphs.map((paragraph, index) => (
          <p key={index} className="text-black text-base font-normal py-5 px-2">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
