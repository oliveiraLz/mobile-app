import { createStackNavigator } from "@react-navigation/stack";

// Pages
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Stack = createStackNavigator();
export const Routes: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
};

export default Routes;
