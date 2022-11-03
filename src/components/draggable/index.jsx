import { Container, Typography } from "@mui/material";
import React, { useState } from "react";

const clsDrag = {
  background: "#d1cccc",
  borderRadius: 1,
  padding: 0.2,
  marginBottom: 0.2,
};

const initFruits = ["Apple", "Manggo", "Banana", "Grapes"];

const Draggable = () => {
  const [fruits] = useState(initFruits);
  console.log("fruits", fruits);

  return (
    <Container>
      {fruits.map((ind) => (
        <div key={ind} draggable>
          <Typography sx={clsDrag} variant="h4">
            Drag
          </Typography>
        </div>
      ))}
    </Container>
  );
};

export default Draggable;
