import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {colors, Grid} from '@material-ui/core';

// import axios from 'utils/axios';

import moment from "moment";
import {v4 as uuidv4} from 'uuid';
import ProjectCard from "../../../../components/ProjectCard";
import clsx from "clsx";


const useStyles = makeStyles(() => ({
    root: {}
}));

const Plans = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    // const [projects, setProjects] = useState([]);
    //
    // useEffect(() => {
    //   let mounted = true;
    //
    //   const fetchProjects = () => {
    //     if (mounted) {
    //       axios
    //         .get('/api/users/1/projects')
    //         .then(response => setProjects(response.data.projects));
    //     }
    //   };
    //
    //   fetchProjects();
    //
    //   return () => {
    //     mounted = false;
    //   };
    // }, []);

    const plans = [
        {
            id: uuidv4(),
            title: 'Mella Full Screen Slider',
            author: {
                name: 'Anje Keizer',
                avatar: '/images/avatars/avatar_5.png'
            },
            price: '12,500',
            currency: '$',
            type: 'Full-Time',
            location: 'Europe',
            tags: [
                {
                    text: 'Angular JS',
                    color: colors.red[600]
                }
            ],
            updated_at: moment().subtract(24, 'minutes')
        },
        {
            id: uuidv4(),
            title: 'Dashboard Design',
            author: {
                name: 'Devias IO',
                avatar: ''
            },
            price: '15,750',
            currency: '$',
            type: 'Full-Time',
            location: 'Europe',
            tags: [
                {
                    text: 'React JS',
                    color: colors.indigo[600]
                }
            ],
            updated_at: moment().subtract(1, 'hour')
        },
        {
            id: uuidv4(),
            title: 'Ten80 Web Design',
            author: {
                name: 'Devias IO',
                avatar: ''
            },
            price: '15,750',
            currency: '$',
            type: 'Full-Time',
            location: 'Europe',
            tags: [
                {
                    text: 'Vue JS',
                    color: colors.green[600]
                }
            ],
            updated_at: moment().subtract(16, 'hour')
        }
    ];

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                container
                spacing={3}
            >
                {plans.map(project => (
                    <Grid
                        item
                        key={project.id}
                        lg={4}
                        lx={4}
                        md={6}
                        xs={12}
                    >
                        <ProjectCard project={project}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};


export default Plans;
