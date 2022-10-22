import React, { } from "react";
import "./App.css";
import { Box, CssBaseline, Divider } from "@mui/material";
import Increament from "./components/increament";
import ComponentA from "./components/useContext/a/ComponentA";

function App() {


	return (
		<>
			<CssBaseline />
			<ComponentA />
			<Box my={4}>
				<Divider />
			</Box>
			<Increament />
		</>
	);
}

export default App;
