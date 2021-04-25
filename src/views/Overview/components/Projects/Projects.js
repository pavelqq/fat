import React, {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, colors} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ProjectCard from "../../../../components/ProjectCard";
import moment from "moment";
import {v4 as uuidv4} from 'uuid';

// import axios from 'utils/axios';


const useStyles = makeStyles(theme => ({
    root: {},
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2)
    },
    title: {
        position: 'relative',
        '&:before': {
            position: 'absolute',
            bottom: -8,
            left: 0,
            content: '" "',
            height: 3,
            width: 48,
            backgroundColor: theme.palette.primary.main
        }
    },
    arrowIcon: {
        marginLeft: theme.spacing(1)
    },
    projectCard: {
        marginBottom: theme.spacing(3)
    }
}));

const Projects = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    // const [projects, setProjects] = useState([]);
    //
    // useEffect(() => {
    //   let mounted = true;
    //
    //   const fetchProjects = () => {
    //     axios.get('/api/account/projects').then(response => {
    //       if (mounted) {
    //         setProjects(response.data.projects);
    //       }
    //     });
    //   };
    //
    //   fetchProjects();
    //
    //   return () => {
    //     mounted = false;
    //   };
    // }, []);

    const projectsMock = [
        {
            id: uuidv4(),
            title: '"Череда-10" - программа тренировок от Дениса Борисова',
            duration: '6',
            type: 'Тренировка',
            difficult: '5 из 10',
            description: 'Тренировочная программа Борисова является системой набора мышечной массы. Как и любая система, она основывается на некоторых принципах, соблюдая которые атлет сможет нарастить солидный мышечный объем. Большим плюсом данной системы тренировок является то, что она учитывает уровень подготовленности атлетов, а так же их восстановительные возможности.',
            author: {
                name: 'Денис Борисов',
                avatar: 'https://i0.wp.com/denis-borisov.com/wp-content/uploads/2014/03/silovyie-parametryi.jpg'
            },
            tags: [
                {
                    id: uuidv4(),
                    text: 'Мясо',
                    color: colors.green[600]
                },
                {
                    id: uuidv4(),
                    text: 'Матюки',
                    color: colors.purple[600]
                },
                {
                    id: uuidv4(),
                    text: 'Саня',
                    color: colors.blue[600]
                },
                {
                    id: uuidv4(),
                    text: 'Силовая',
                    color: colors.red[600]
                },
                {
                    id: uuidv4(),
                    text: 'Тренировка на массу',
                    color: colors.yellow[600]
                },
                {
                    id: uuidv4(),
                    text: 'Денис Борисов',
                    color: colors.cyan[600]
                },
                {
                    id: uuidv4(),
                    text: 'Борисов',
                    color: colors.pink[600]
                },
                {
                    id: uuidv4(),
                    text: '+10кг',
                    color: colors.orange[600]
                }
            ],
            updated_at: moment().subtract(24, 'minutes')
        },
        {
            id: uuidv4(),
            title: 'Королевский рацион Дениса Семенихина',
            duration: '6',
            type: 'Диета',
            difficult: '8 из 10',
            description: 'Мне давно предлагали разработать свой "фирменный рацион" или набор блюд, чтобы упростить людям построение питания и избавить от этих забот. Чтобы все их внимание было направлено именно на тренировки. Наконец это удалось совершить.',
            author: {
                name: 'Денис Семенихин',
                avatar: 'https://lh3.googleusercontent.com/proxy/3Q7ACVeQ243tSzl923TbTnsuinD-rOlwlH5kLoFPHnc1LkSXXn_Hwlyx4O7vYQ1zj69hmZFEOix16dqas3SrikA'
            },
            tags: [
                {
                    id: uuidv4(),
                    text: 'Мясо',
                    color: colors.lightGreen[600]
                },
                {
                    id: uuidv4(),
                    text: 'Диета',
                    color: colors.purple[600]
                },
                {
                    id: uuidv4(),
                    text: 'Санчес',
                    color: colors.lightBlue[600]
                },
                {
                    id: uuidv4(),
                    text: 'Похудеть на 10 кг',
                    color: colors.yellow[600]
                },
                {
                    id: uuidv4(),
                    text: 'Убрать бока',
                    color: colors.blueGrey[600]
                },
                {
                    id: uuidv4(),
                    text: 'Денис Борисов',
                    color: colors.brown[600]
                }
            ],
            updated_at: moment().subtract(4, 'days')
        }
    ];

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.header}>
                <Typography
                    className={classes.title}
                    variant="h5"
                >
                    Активные планы
                </Typography>
                <Button
                    component={RouterLink}
                    to="/profile/user/projects"
                >
                    Посмотреть все
                    <KeyboardArrowRightIcon className={classes.arrowIcon}/>
                </Button>
            </div>
            {projectsMock.map(project => (
                <ProjectCard
                    className={classes.projectCard}
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    );
};

export default Projects;
