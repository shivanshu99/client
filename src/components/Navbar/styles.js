import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles(theme => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "none",
		height:"80px",
		backgroundColor: "rgba(209, 250, 229,1)"
	},
	heading: {
		color: "rgba(0,183,255, 1)",
		textDecoration: "none"
	},
	image: {
		marginLeft: "15px",
		borderRadius: "50%"
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		overflow:"heading",
		marginRight:"20px"
	},
	profile: {
		display: "flex",
	
	},
	userName: {
		display: "flex",
		marginLeft: "20px",
		marginRight: "100px",
		alignItems: "center"
	},
	button1: {
		backgroundColor: "transparent",
		textAlign: "center",
		display: "flex",
		marginRight: "100px"
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
		marginLeft:"20px",
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500]
	}
}));
