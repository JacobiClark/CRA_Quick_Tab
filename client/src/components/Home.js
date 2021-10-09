import { useState, useEffect } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import LinkCard from "./LinkCard";
import { websites } from "../utils/websites";

const Home = () => {
  return (
    <Box ml="2%" mr="2%">
      {websites.map((website) => (
        <LinkCard
          key={website.websiteName}
          websiteName={website.websiteName}
          url={website.url}
          icon={website.icon}
        />
      ))}
    </Box>
  );
};

export default Home;
