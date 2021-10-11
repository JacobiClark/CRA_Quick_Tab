import { useState, useEffect } from "react";
import { Box, Center, Text, Button } from "@chakra-ui/react";
import LinkCard from "./LinkCard";
import { websites } from "../utils/websites";
import SiteModificationBox from "../components/SiteModificationBox";

const Home = () => {
  const [showModifyBox, setShowModifyBox] = useState(false);

  const handleModifySearchSitesButton = (e) => {
    e.preventDefault();
    setShowModifyBox(!showModifyBox);
  };
  return (
    <Box ml="2%" mr="2%">
      <Center>
        <Button onClick={handleModifySearchSitesButton}>
          Modify Search Sites
        </Button>
      </Center>
      {showModifyBox && <SiteModificationBox />}
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
