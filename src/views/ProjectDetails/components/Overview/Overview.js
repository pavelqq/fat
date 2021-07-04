import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Card, CardContent} from '@material-ui/core';

import {ChartLine, ChartRadar, Holder, Members} from './components'
import {convertFromRaw, Editor, EditorState} from "draft-js";


const useStyles = makeStyles(theme => ({
    root: {},
    deliverables: {
        marginTop: theme.spacing(3)
    },
    members: {
        marginTop: theme.spacing(3)
    },
    description: {
        padding: theme.spacing(2, 2, 1, 3),
    },
    chartsGroup: {
        display: "flex",
    },
    chart1: {
        marginTop: theme.spacing(3)
    },
    chart2: {
        marginTop: theme.spacing(3)
    }

}));


const Overview = props => {
    const {members, projectId, userId, description, className, ...rest} = props;

    const classes = useStyles();

    let increase = {
        increaseNeck: '1',
        increaseShoulders: '2',
        increaseChest: '5',
        increaseWaist: '4',
        increaseBooty: '6',
        increaseLeftBiceps: '2',
        increaseRightBiceps: '3',
        increaseLeftHip: '5',
        increaseRightHip: '6',
        increaseLeftWrist: '0',
        increaseRightWrist: '0',
        increaseLeftForearm: '3',
        increaseRightForearm: '2',
        increaseLeftCalf: '3',
        increaseRightcCalf: '4',
    }

    let usersAnthropometry = {
        usersNeck: '40',
        usersShoulders: '120',
        usersChest: '110',
        usersWaist: '80',
        usersBooty: '95',
        usersLeftBiceps: '37',
        usersRightBiceps: '38',
        usersLeftHip: '59',
        usersRightHip: '60',
        usersLeftWrist: '20',
        usersRightWrist: '20',
        usersLeftForearm: '30',
        usersRightForearm: '28',
        usersLeftCalf: '38',
        usersRightCalf: '39',
    }

    let anthropometry = `
    Шея: ${usersAnthropometry.usersNeck} + '${increase.increaseNeck}',
    Плечи: ${usersAnthropometry.usersShoulders} + '${increase.increaseShoulders}', 
    Грудь: ${usersAnthropometry.usersChest} + '${increase.increaseChest}',
    Талия: ${usersAnthropometry.usersWaist} + '${increase.increaseWaist}',
    Таз: ${usersAnthropometry.usersBooty} + '${increase.increaseBooty}',
    Левый бицепс: ${usersAnthropometry.usersLeftBiceps} + '${increase.increaseLeftBiceps}',
    Правый бицепс: ${usersAnthropometry.usersRightBiceps} + '${increase.increaseRightBiceps}',
    Левое бедро: ${usersAnthropometry.usersLeftHip} + '${increase.increaseLeftHip}',
    Правое бедро: ${usersAnthropometry.usersRightHip} + '${increase.increaseRightHip}',
    Левая кисть: ${usersAnthropometry.usersLeftWrist} + '${increase.increaseLeftWrist}',
    Правая кисть: ${usersAnthropometry.usersRightWrist} + '${increase.increaseRightWrist}',
    Левое предплечье: ${usersAnthropometry.usersLeftForearm} + '${increase.increaseLeftForearm}',
    Правое предплечье: ${usersAnthropometry.usersRightForearm} + '${increase.increaseRightForearm}',
    Левая икроножная: ${usersAnthropometry.usersLeftCalf} + '${increase.increaseLeftCalf}',
    Правая икроножная: ${usersAnthropometry.usersRightCalf} + '${increase.increaseRightcCalf}',
    `

    const anthropometryData = {
        labels: ['Шея', 'Плечи', 'Грудь', 'Талия', 'Таз', 'Левый бицепс',
            'Правое предплечье', 'Левое предплечье','Правый бицепс', 'Правая кисть', 'Левая кисть',
            'Правое бедро', 'Левое бедро', 'Правая икра', 'Левая икра'],
        datasets: [
            {
                label: 'Ваши объёмы на старте проекта',
                data: [39, 120, 105, 88, 95, 38, 38, 33, 33, 19, 19, 58, 60, 38, 37],
                backgroundColor: 'rgba(99,138,255,0.91)',
                borderColor: 'rgba(99,120,255,0.15)',
                borderWidth: 1,
            },
            {
                label: 'Средняя прибавка по окончанию проекта',
                data: [41, 125, 110, 90, 100, 40, 39, 34, 33, 19, 19, 61, 63, 40, 39],
                backgroundColor: 'rgb(255,99,130)',
                borderColor: 'rgba(255,99,99,0.15)',
                borderWidth: 1,
            },
        ],
    };

    let dynamicWeightData = {
        labels: ['1 ', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'Средняя прибавка по весу в течении проекта',
                data: [70, 72, 72.4, 73.3, 74, 73.8, 76, 78, 80.5, 81, 80, 80],
                backgroundColor: 'rgb(255,99,130)',
                borderColor: 'rgba(255,99,99,0.15)',
                borderWidth: 1,
            },
        ],
    };

    let completeProjectData = {
        labels: ['1 ', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'Число закончивших проект за неделю',
                data: [53, 46, 42, 40, 33, 32, 31, 24, 20, 12, 10, 10],
                backgroundColor: 'rgba(99,138,255,0.91)',
                borderColor: 'rgba(99,120,255,0.15)',
                borderWidth: 1,
            },
            {
                label: 'Число подписавшихся на проект за неделю',
                data: [10, 22, 43, 48, 62, 63, 70, 72, 73, 81, 80, 82],
                backgroundColor: 'rgb(255,99,130)',
                borderColor: 'rgba(255,99,99,0.15)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Grid
            {...rest}
            className={clsx(classes.root, className)}
            container
            spacing={3}
        >
            <Grid
                item
                lg={8}
                xl={9}
                xs={12}
                className={classes.description}
            >
                <Card>
                    <CardContent>
                        <Editor
                            editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(props.description)))}
                            readOnly={true}
                        />
                    </CardContent>
                </Card>
                <Grid
                    container
                    className={classes.chartsGroup}
                    spacing={3}
                >
                    <Grid
                        item
                        lg={6}
                        xl={6}
                        xs={12}
                    >
                        <ChartRadar
                            className={classes.chart1}
                            title='Средний прирост в объемах у пользователей в См'
                            desc={anthropometry}
                            projectId={projectId}
                            userId={userId}
                            data={anthropometryData}
                        />
                    </Grid>
                    <Grid
                        item
                        direction={"column"}
                        lg={6}
                        xl={6}
                        xs={12}
                    >
                        <Grid
                            item
                            lg={12}
                            xl={6}
                            xs={12}
                        >
                            <ChartLine
                                className={classes.chart2}
                                title='Динамика веса в Кг'
                                desc='По оси Y - потенциальная динамика вашего веса, по оси X - номер недели на проекте'
                                projectId={projectId}
                                userId={userId}
                                data={dynamicWeightData}
                            />
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            xl={6}
                            xs={12}
                        >
                            <ChartLine
                                className={classes.chart2}
                                title='Статистика пользователей'
                                desc='По оси Y - число пользователей, по оси X - номер недели на проекте'
                                projectId={projectId}
                                userId={userId}
                                data={completeProjectData}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                lg={4}
                xl={3}
                xs={12}
            >
                <Holder
                    projectId={projectId}
                    userId={userId}
                />
                <Members
                    className={classes.members}
                    members={props.members}
                />
            </Grid>
        </Grid>
    );
};


export default Overview;
