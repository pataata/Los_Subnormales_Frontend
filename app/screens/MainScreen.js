import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms/index";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function MainScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCorrect={false}
					textContentType="emailAddress"
					keyboardType="email-address"
					icon="email"
					name="email"
					autoCapitalize="none"
					placeholder="Email"
				/>

				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>

				<AppButton 
					title="Regresar"
					onPress={() => navigation.navigate('WelcomeScreen')}/>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},

	logo: {
		width: 120,
		height: 120,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

export default MainScreen;