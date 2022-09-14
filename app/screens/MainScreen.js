import React from "react";
import { Button,Image, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms/index";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function MainScreen({ navigation }) {
	return (
		<Screen style={styles.container}>
			<Button
				style={styles.button}
				title="< Regresar"
				onPress={() => navigation.navigate('WelcomeScreen')}/>

			<Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				<AppFormField
					autoCorrect={false}
					textContentType="emailAddress"
					keyboardType="email-address"
					name="email"
					autoCapitalize="none"
					placeholder="Dato1"
				/>

				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					name="password"
					placeholder="Dato2"
					secureTextEntry
					textContentType="password"
				/>

				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					name="password"
					placeholder="Dato3"
					secureTextEntry
					textContentType="password"
				/>


				<Text
					style={styles.result}>	
					Hola
				</Text>

				<AppButton 
					style={styles.button}
					title="Calcular"
					onPress={() => navigation.navigate('WelcomeScreen')}/>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: colors.background
	},

	logo: {
		width: 120,
		height: 120,
		alignSelf: "center",
		marginTop: 30,
		marginBottom: 20,
	},

	button:{
		backgroundColor: 'red'
	},

	result:{
		fontSize: 15,
		alignSelf: 'center',
		color: colors.text
	}
});

export default MainScreen;