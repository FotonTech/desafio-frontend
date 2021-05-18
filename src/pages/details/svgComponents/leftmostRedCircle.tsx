import React from "react";
import { Box } from "@chakra-ui/react";

const Circle: React.FC = () => {
   return (
      <Box margin="125px 314px 142px 47px" position="absolute">
         <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6978" />
         </svg>
      </Box>
   );
};

export default Circle;
