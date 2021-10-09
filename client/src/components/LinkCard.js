import { useState, useEffect } from "react";
import { buildSearchQuery } from "../utils/helpers";
import { Link } from "react-router-dom";
import { Button, Flex, Input, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const LinkCard = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.location.assign(buildSearchQuery(props.websiteName, searchInput));
  };

  return (
    <Flex alignItems="center" mt="5px">
      <Link to={props.url}>
        <a>{props.icon}</a>
      </Link>

      <InputGroup>
        <Input
          placeholder={"Search " + props.websiteName}
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              window.location.assign(
                buildSearchQuery(props.websiteName, searchInput)
              );
            }
          }}
          flexGrow="1"
          m="1%"
        />
      </InputGroup>

      <Button onClick={handleClick} mr="1%">
        <FaSearch />
      </Button>
    </Flex>
  );
};

export default LinkCard;
