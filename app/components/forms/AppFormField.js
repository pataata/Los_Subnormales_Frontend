import React from "react";
import { useFormikContext } from "formik";

import ApptextInput from "../ApptextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	return (
		<>
			<ApptextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				width={width}
				{...otherProps}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormField;
