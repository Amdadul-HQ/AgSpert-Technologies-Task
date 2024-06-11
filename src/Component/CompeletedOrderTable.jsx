import {
    IconButton,
    Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useAuth from "../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
const CompeletedOrderTable = () => {
    const { user } = useAuth();
    const { data } = useQuery({
      queryKey: ["proucts"],
      queryFn: async () => {
        const res = await fetch("/productschema.json");
        return res.json();
      },
    });
    return (
        <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Customer Name</Th>
            <Th isNumeric>Price</Th>
            <Th>Last Modified</Th>
            <Th>Payment</Th>
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
                <Td>Completed</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
    );
};

export default CompeletedOrderTable;