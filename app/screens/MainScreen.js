import React from "react";
import { Button,Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms/index";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { FlatList, Switch, TextInput } from "react-native-gesture-handler";
import Slider from '@react-native-community/slider';

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
			<FlatList
				data={[
				{name: 'slider', title: 'Room Service'},
				{name: 'switch', title: 'CryoSleep'},
				{name: 'slider', title: 'Spa'},
				{name: 'slider', title: 'VR Deck'},
				{key: 'Jackson'},
				{key: 'James'},
				{key: 'Joel'},
				{key: 'John'},
				{key: 'Jillian'},
				{key: 'Jimmy'},
				{key: 'Julie'},
				]}
        		renderItem={({item}) => {
					if(item.name === "textinput"){
						return(
						<View style={styles.viewContainer}>
							<TextInput style={styles.item}>{item.title}</TextInput>
						</View>
						)
					}else if(item.name === 'switch'){
						return(
						<View style={styles.viewContainer}>
							<Text style={styles.item}>{item.title}</Text>
							<Switch/>
						</View>
						)
					}else if(item.name === 'slider'){
						return(
							<View style={styles.viewContainer}>
								<Text style={styles.item}>{item.title}</Text>
								<Slider/>
							</View>
						)
					}
					else{
						return
					}
					}
				}
      		/>
			<Text
				style={styles.result}>	
				Hola
			</Text>

			<AppButton 
				style={styles.button}
				title="Calcular"
				onPress={() => navigation.navigate('WelcomeScreen')}/>
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

	viewContainer:{
		//backgroundColor: colors.white,
		padding: 10
	},

	item:{
		color: colors.text,
	},

	result:{
		fontSize: 15,
		alignSelf: 'center',
		color: colors.text
	}
});

export default MainScreen;