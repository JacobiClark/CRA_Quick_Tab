import { useState, useEffect } from "react";
import { Box, Center, Text, Flex } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { websites } from "../utils/websites";

const SiteModificationBox = () => {
  const { user, isAuthenticated, authLoading } = useAuth0();
  return (
    <Center bg="red" mt="10px">
      <Flex wrap="wrap">
        {websites.map((website) => (
          <Box m="10px">{website.icon}</Box>
        ))}
      </Flex>
    </Center>
  );
};

export default SiteModificationBox;
