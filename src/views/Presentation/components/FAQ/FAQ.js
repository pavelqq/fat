import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Grid
} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';

const useStyles = makeStyles(theme => ({
    root: {},
    inner: {
        paddingTop: theme.spacing(6),
        maxWidth: '90%',
        margin: '0 auto'
    },
    content: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(12),
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    }
}));

const FAQ = () => {

    const classes = useStyles();

    const faqs = [
        {
            title: 'Как мы помогаем привести себя в форму нашим пользователям?',
            description:
                'Очень просто, наш сервис имеет огромный функционал, который позволяет вам отслеживать результаты не ' +
                'только в сантиметрах на животе, но и подогревает соревновательную жилку, отслеживайте свои успехи и ' +
                'сравнивайте их со звездами ютуба, друзьями, профессиональными спортсменами'
        },
        {
            title:
                'Это бесплатно?',
            description:
                'Совершенно бесплатно, никаких ограничений по функционалу, платный контент касается только ' +
                'персональных рекомендаций и тренировок с тренерским составом платформы'
        },
        {
            title: 'А могу ли я не только похудеть, но и накачаться?',
            description:
                'Конечно, на нашем сервисе есть даже система достижений за спортивные успехи, соберите их всех!'
        }
    ];

    return (
        <div>
            <div
                className={classes.inner}
            >
                <Typography
                    align="center"
                    variant="h4"
                >
                    Ответы на частые вопросы
                </Typography>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    className={classes.content}
                >
                    <List disablePadding>
                        {faqs.map(faq => (
                            <Grid item>
                                <ListItem>
                                    <ListItemIcon>
                                        <ContactSupportIcon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={faq.title}
                                        primaryTypographyProps={{variant: 'h5'}}
                                        secondary={faq.description}
                                        secondaryTypographyProps={{variant: 'subtitle2'}}
                                    />
                                </ListItem>
                            </Grid>
                        ))}
                    </List>
                </Grid>
            </div>
        </div>
    );
};

export default FAQ;
