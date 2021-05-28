
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1)
		}
	},
	paper: {
		padding: theme.spacing(2),
		backgroundColor: "rgba(255, 230, 255, 1);"
	},
	papers: {
		padding: theme.spacing(2),
		backgroundColor: "rgba(255, 230, 255, 1);",
		position: "relative",
		marginLeft: "500px ",
		marginTop: "100px",
		width: "400px"
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center"
	},

	fileInput: {
		width: "97%",
		margin: "10px 0"
	},
	buttonSubmit:
		{
			marginBottom: 10
		}
	
}));
