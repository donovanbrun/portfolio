import React from 'react';
import './Projects.css';
import {Button, Card, CardActions, CardContent, CardHeader, Grid, Typography} from "@mui/material";

const Projects = () => {
    return (
        <div className="Projects container" id="Projects">
            <h1 className="Projects-Title">Projects</h1>
            <Grid className="Projects-Grid" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </Grid>
        </div>
    );
}

const Project = () => {
    return (
        <Card variant="outlined" className="Project">
            <CardHeader
                title="My Project"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    That's my project
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Projects;