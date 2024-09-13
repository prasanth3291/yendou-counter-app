import React, { useState } from "react";
import { Button, useToast, Box, Text, Icon } from "@chakra-ui/react";
import './Counter.css';

// define custiom icon
const CustomCheckIcon = (props: any) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" fill="#486648" stroke="#4CAF50" strokeWidth="2" />
    <path
      fill="none"
      stroke="#4CAF50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12l2 2 4-4"
    />
  </Icon>
);

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const toast = useToast();

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);

    toast({
      duration: 1000,
      isClosable: true,
      position: 'top-right',
      render: () => (
        <Box
          className="custom-toast-border" 
          display="flex"
          alignItems="center"
          justifyContent="start"
          p={3}
          bgGradient='linear-gradient(to right, #486648, black)' 
          borderRadius="md"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"  
          color="white"
        >
          <CustomCheckIcon boxSize={6} color="green.400" />  
          <Box ml={3}>
            <Text fontSize="lg" fontWeight="semibold">Incremented</Text>
            <Text fontSize="md">Counter is now {newCount}</Text>
          </Box>
        </Box>
      )
    });
    
  };

  return (
    <div className="counter-container">
      <h1>Current count {count}</h1>
      
      <Button onClick={increment} colorScheme="green">
        +1
      </Button>
    </div>
  );
};

export default Counter;
