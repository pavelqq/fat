import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        width: 350,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        marginBottom: theme.spacing(2),
    },
    pos: {
        marginBottom: 12,
    },
}));

const General = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.title}>
                    <Typography color="textSecondary" gutterBottom>
                        Итого:
                    </Typography>
                    <Typography variant="h5" component="h2">
                        За период прохождения проекта будет съедено / выпито:
                    </Typography>
                </div>
                <Typography className={classes.pos} color="textSecondary">
                    {bull} 30 кг риса
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {bull} 20 кг куринной грудки
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {bull} 10 кг огурцов
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {bull} 8 кг томатов
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {bull} 9 кг спаржи
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {bull} 70 литров воды
                </Typography>
                <Typography variant="body2" component="p">
                    Кликни ниже, чтобы подсчитать примерную стоимость продуктов.
                </Typography>
                <CardActions>
                    <Button size="small" color="primary">Рассчитать стоимость продуктов</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};


export default General;
