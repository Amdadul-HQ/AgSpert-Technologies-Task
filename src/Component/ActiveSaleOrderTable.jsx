import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import {
    IconButton,
    Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { IoMdMore } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";

const ActiveSaleOrderTable = () => {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["proucts"],
    queryFn: async () => {
      const res = await fetch("/productschema.json");
      return res.json();
    },
  });

  console.log(data);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Customer Name</Th>
            <Th isNumeric>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{user?.displayName}</Td>
                <Td align="center">200</Td>
                <Td>{item.updated_on}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Options"
                      icon={<IoMdMore />}
                      variant="outline"
                    />
                    <MenuList>
                      <MenuItem icon={<MdOutlineEditNote />} command="⌘T">
                        EDIT
                      </MenuItem>
                      <MenuItem icon={<BsEyeFill />} command="⌘N">
                        VIEW
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ActiveSaleOrderTable;
