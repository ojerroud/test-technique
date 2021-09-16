import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

function Buttons({ api, setCurrApi, setChars }) {
	const classes = useStyles();

	return (
		<div className="autoselect__buttons">
			<Button
				variant="contained"
				size="small"
				color="primary"
				className={classes.margin}
				onClick={() => {
					setCurrApi(api.prev);
					setChars([]);
				}}
			>
				Prev.
			</Button>
			<Button
				variant="contained"
				size="small"
				color="primary"
				className={classes.margin}
				onClick={() => {
					setCurrApi(api.next);
					setChars([]);
				}}
			>
				Next.
			</Button>
		</div>
	);
}

export default Buttons;
