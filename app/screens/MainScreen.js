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



function MainScreen({ navigation }) {
	const defaultValues = {'Room Service': '100', 'CryoSleep': true, 'Spa':150,'VR Deck': '50', 'VIP': false, 'Food Court': '150', 'Cabin': 'D',
							'Age':30,'Home Planet':'Earth','Side':'Port','Shopping Mall':'40','Destination':'55 Cancrie','Group ID':'08'}

	const [RoomService, setRoomService] = useState(defaultValues['Room Service'])
	const [CryoSleep, setCryoSleep] = useState(defaultValues['CryoSleep'])
	const [Spa, setSpa] = useState(defaultValues['Spa'])
	const [VRDeck, setVRDeck] = useState(defaultValues['VR Deck'])
	const [VIP, setVIP] = useState(defaultValues['VIP'])
	const [FoodCourt, setFoodCourt] = useState(defaultValues['Food Court'])
	const [Cabin, setCabin] = useState(defaultValues['Cabin'])
	const [Age, setAge] = useState(defaultValues['Age'])
	const [HomePlanet, setHomePlanet] = useState(defaultValues['Home Planet'])
	const [Side, setSide] = useState(defaultValues['Side'])
	const [ShoppingMall, setShoppingMall] = useState(defaultValues['Shopping Mall'])
	const [Destination, setDestination] = useState(defaultValues['Destination'])
	const [GroupId, setGroupId] = useState(defaultValues['Group ID'])

	function changeValues(title,val){
		switch(title){
			case 'Room Service':
				setRoomService(val) 
				break;
			case 'CryoSleep':
				setCryoSleep(val)
				break;
			case 'Spa':
				setSpa(val) 
				break;
			case 'VR Deck':
				setVRDeck(val)
			case 'VIP':
				setVIP(val) 
				break;
			case 'Food Court':
				setFoodCourt(val) 
				break;
			case 'Cabin':
				setCabin(val) 
				break;
			case 'Age':
				setAge(val) 
				break;
			case 'Home Planet':
				setHomePlanet(val) 
				break;
			case 'Side':
				setSide(val) 
				break;
			case 'Destination':
				setDestination(val) 
				break;
			case 'Group ID':
				setGroupId(val) 
				break;
		}
	}

	function setText(title){
		if(title==='Spa')
			return Spa
		else
			return Age
	}

	return (
		<Screen style={styles.container}>
			<Button
				style={styles.button}
				title="< Regresar"
				onPress={() => navigation.navigate('WelcomeScreen')}/>

			<Image style={styles.logo} source={require("../assets/titanic-espacial.png")} />
			<FlatList
				data={[
				{name: 'textinput', title: 'Room Service'},
				{name: 'checkbox', title: 'CryoSleep'},
				{name: 'slider', title: 'Spa', 'min': 0, 'max': 200},
				{name: 'textinput', title: 'VR Deck'},
				{name: 'switch', title: 'VIP'},
				{name: 'textinput', title: 'Food Court'},
				{name: 'dropdown', title: 'Cabin', options: ['A','C','E','D','B','T']},
				{name: 'slider', title: 'Age', 'min': 0, 'max': 100},
				{name: 'dropdown', title: 'Home Planet', options: ['Europa','Earth','Mars']},
				{name: 'dropdown', title: 'Side', options: ['Port','Starboard']},
				{name: 'textinput', title: 'Shopping Mall'},
				{name: 'dropdown', title: 'Destination', options: ['55 Cancrie','PSOJ318.5-22','TRAPPIST-1e']},
				{name: 'dropdown', title: 'Group ID', options: ['01','08']},
				]}
        		renderItem={({item}) => {
					if(item.name === "textinput"){
						return(
						<View style={styles.viewContainer}>
							<Text style={styles.itemcenter}>{item.title}</Text>
							<TextInput 
								style={styles.textinput}
								onChangeText={text => changeValues(item.title,text)}
								defaultValue={defaultValues[item.title]}
								></TextInput>
						</View>
						)
					}else if(item.name === 'switch'){
						return(
						<View style={styles.viewContainer}>
							<Text style={styles.item}>{item.title}</Text>
							<Switch
								style={styles.switch}
								trackColor={{ false: "#767577", true: "#81b0ff" }}
								thumbColor={VIP ? "#f5dd4b" : "#f4f3f4"}
								ios_backgroundColor="#3e3e3e"
								onValueChange={val => changeValues(item.title, val)}
								value={VIP}
								/>
						</View>
						)
					}else if(item.name === 'slider'){
						return(
							<View style={styles.viewContainer}>
								<Text style={styles.item}>{item.title}</Text>
								<Slider
									value={defaultValues[item.title]}
									minimumValue={item.min}
									maximumValue={item.max}
									step={1}
									onValueChange={sliderValue => changeValues(item.title, sliderValue)}
								/>
								<Text style={styles.textSlider}>{setText(item.title)}</Text>
							</View>
						)
					}else if(item.name === 'checkbox'){
						return(
							<View style={styles.viewContainer}>
								<Text style={styles.item}>{item.title}</Text>
								<Checkbox 
									style={styles.checkbox}
									value={CryoSleep}
          							onValueChange={val => changeValues(item.title, val)}
									color={CryoSleep ? '#4630EB' : undefined}
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
									defaultValue = {defaultValues[item.title]}
									dropdownStyle = {styles.dropdownmenu}
									dropdownTextStyle = {styles.dropdowntextstyle}
									onSelect={val => changeValues(item.title, item.options[val])}
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
			</Text>

			<AppButton 
				style={styles.button}
				title="Calcular"
				onPress={() => {
					//navigation.navigate('Results')
				
					console.log(
						{
							'RoomService': RoomService,
							'CryoSleep': CryoSleep,
							'Spa': Spa,
							'VRDeck': VRDeck,
							'VIP': VIP,
							'FoodCourt': FoodCourt,
							'Cabin': Cabin,
							'HomePlanet': HomePlanet,
							'Age': Age,
							'Side': Side,
							'ShoppingMall': ShoppingMall,
							'Destination': Destination,
							'GroupID': GroupId
						}
					)
				}}/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	textSlider:{
		color: colors.text,
		alignSelf: 'center'
	},

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

	switch: {
		marginTop: 8,
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