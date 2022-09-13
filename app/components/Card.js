import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText numberOfLines={1} style={styles.title}>
					{title}
				</AppText>
				<AppText numberOfLines={1} style={styles.subTitle}>
					{subTitle}
				</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	detailsContainer: {
		paddingTop: 20,
	},
	title: {
		marginBottom: 7,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: "bold",
	},
});

export default Card;
