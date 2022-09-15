import React, { useState } from "react";
import { Button,Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms/index";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { FlatList, Switch, TextInput } from "react-native-gesture-handler";
import Slider from '@react-native-community/slider';
import Checkbox from "expo-checkbox";
import ModalDropdown from "react-native-modal-dropdown";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function MainScreen({ navigation }) {
	const [isChecked, setChecked] = useState(false);


	return (
		<Screen style={styles.container}>
			<Button
				style={styles.button}
				title="< Regresar"
				onPress={() => navigation.navigate('WelcomeScreen')}/>

			<Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
			<FlatList
				data={[
				{name: 'textinput', title: 'Room Service', defvalue: 1600},
				{name: 'checkbox', title: 'CryoSleep'},
				{name: 'slider', title: 'Spa'},
				{name: 'textinput', title: 'VR Deck', defvalue: 1600},
				{name: 'switch', title: 'VIP'},
				{name: 'textinput', title: 'FoodCourt', defvalue: 1600},
				{name: 'dropdown', title: 'Cabin', options: ['A','C','E','D','B','T'], defVal: 'C'},
				{name: 'slider', title: 'Age'},
				{name: 'dropdown', title: 'Home Planet', options: ['Europa','Earth','Mars'], defVal: 'Mars'},
				{name: 'textinput', title: 'Total Bill', defvalue: 1600},
				{name: 'dropdown', title: 'Side', options: ['Port','Starboard'], defVal: 'Port'},
				{name: 'dropdown', title: 'Destination', options: ['55 Cancrie','PSOJ318.5-22','TRAPPIST-1e'], defVal: '55 Cancrie'},
				{name: 'dropdown', title: 'Group ID', options: ['01','08'], defVal: '01'},
				]}
        		renderItem={({item}) => {
					if(item.name === "textinput"){
						return(
						<View style={styles.viewContainer}>
							<Text style={styles.itemcenter}>{item.title}</Text>
							<TextInput style={styles.textinput}>{item.defvalue}</TextInput>
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
					}else if(item.name === 'checkbox'){
						return(
							<View style={styles.viewContainer}>
								<Text style={styles.item}>{item.title}</Text>
								<Checkbox 
									style={styles.checkbox}
									value={isChecked}
          							onValueChange={setChecked}
									color={isChecked ? '#4630EB' : undefined}
								/>
							</View>
						)
					}else if(item.name === 'dropdown'){
						return(
							<View style={styles.viewContainer}>
								<Text style={styles.itemcenter}>{item.title}</Text>
								<ModalDropdown 
									style = {styles.dropdown}
									options = {item.options}
									textStyle = {styles.dropdowntext}
									defaultValue = {item.defVal}
									dropdownStyle = {styles.dropdownmenu}
									dropdownTextStyle = {styles.dropdowntextstyle}
								/>
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

	itemcenter:{
		alignSelf: 'center',
		color: colors.text,
	},

	result:{
		fontSize: 15,
		alignSelf: 'center',
		color: colors.text
	},

	checkbox: {
		margin: 8,
	  },
	
	textinput: {
		alignSelf: 'center',
		marginTop: 8,
		paddingVertical: 8,
		paddingHorizontal: 30,
		backgroundColor: colors.background3,
		borderRadius:25,
		color: colors.text
	},

	dropdown: {
		alignSelf: 'center',
		marginTop: 8,
		paddingVertical: 8,
		paddingHorizontal: 30,
		backgroundColor: colors.background2,
		borderRadius:25,
		color: colors.text
	},

	dropdownmenu: {
		marginTop: 8,
		paddingVertical: 8,
		paddingHorizontal: 30,
		backgroundColor: colors.backgroundtransparent,
		borderRadius:25,
		color: colors.text
	},

	dropdowntext: {
		alignSelf: 'center',
		color: colors.text,
		fontSize: 15,
	},

	dropdowntextstyle:{
		backgroundColor: 'transparent',
		color: colors.text,
		fontSize: 15
	}
});

export default MainScreen;