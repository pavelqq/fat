import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker} from "@material-ui/pickers";
import ItemsTable from "./components/ItemsTable";
import ProteinsFatsCarbohydrates from "./components/ProteinsFatsCarbohydrates";
import Typography from "@material-ui/core/Typography";
import General from "./components/General";
import ProjectCalendar from "../Calendar/ProjectCalendar";


const useStyles = makeStyles(theme => ({
    root: {},
}));

const Diet = props => {
    const {className, projectId, projectAuthorId, authUserId, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <ProjectCalendar
                titlePage={'Диета'}
                type={'diet'}
                editMode={(projectAuthorId === authUserId)}
                projectId={projectId}
            />
        </div>
    );
};


export default Diet;

// const {diet, className, ...rest} = props;
//
// const classes = useStyles();
//
// const [selectedDate, setSelectedDate] = React.useState(moment());
//
// const handleDateChange = (date) => {
//     setSelectedDate(date);
// };
// <Grid
//     container
//     justify="space-between"
//     spacing={2}
// >
//     <Grid
//         item
//         direction="column"
//         lg={8}
//         xs={12}
//     >
//         <Typography variant="subtitle2" className={classes.desc}>
//             Здесь можно посмотреть подробную информацию про содержание, стоимость, энергетическую ценность рациона на каждый день диеты.
//         </Typography>
//         <Typography variant="subtitle2" className={classes.desc}>
//             Выберете дату в форме справа для начала.
//         </Typography>
//         {/*<ItemsTable selectedDate={selectedDate} diet={diet}/>*/}
//     </Grid>
//     <Grid
//         className={classes.dates}
//         direction="column"
//         item
//         lg={4}
//         xs={12}
//     >
//         <KeyboardDatePicker
//             margin="normal"
//             id="date-picker-dialog"
//             label="Выберете дату"
//             format="dd/MM/yyyy"
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//                 'aria-label': 'Изменить',
//             }}
//         />
//         <ProteinsFatsCarbohydrates
//             className={classes.pfc}
//         />
//         <General />
//     </Grid>
// </Grid>