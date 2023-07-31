import { createStyles, makeStyles } from "@mui/styles";


export default makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-around',
      height: "5vh",
      backgroundColor:"#f5f5f5",
      alignItems:"center",
    },
    rightHeader: {
        width:"730px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",

    },
  })
);
