import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import ActiveSaleOrderTable from "../Component/ActiveSaleOrderTable";
import CompeletedOrderTable from "../Component/CompeletedOrderTable";
const animatedComponents = makeAnimated();
const SalesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = [
    { value: 209, label: "Product 22" },
    { value: 248, label: "Product 5" },
    { value: 247, label: "Stroked Product |" },
    { value: 246, label: "Stroked Tea |" }
  ];

  return (
    <section className="container mx-auto mt-10">
      <Tabs variant="soft-rounded" colorScheme="teal">
        <Flex>
          <TabList>
            <Tab>Active Sale Order</Tab>
            <Tab>Completed Sale Order</Tab>
          </TabList>
          <Spacer />
          <TabList>
            <Button onClick={onOpen}>+ Sale Order</Button>
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <ActiveSaleOrderTable/>
          </TabPanel>
          <TabPanel>
            <CompeletedOrderTable/>
          </TabPanel>
          <TabPanel>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>All Products</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}
                  />
                  <Flex gap={2} marginTop={2}>
                  <Input type="number" placeholder='Enter Selling Rate' />

                  <Input type="number" placeholder='Enter Quantity' />
                  </Flex>
                  <Input marginTop={2} type="number" placeholder='Enter Total Items' />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Add to Sale</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default SalesPage;
