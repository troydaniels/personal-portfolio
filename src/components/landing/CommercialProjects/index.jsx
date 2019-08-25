import React from 'react';
import YouTube from 'react-youtube';
import Container from '../../common/Container';
import Card from '../../common/Card';
import { Wrapper, Grid, Item, Content, Media } from './styles';
import projects from '../../../../data/projects';

const CommercialProjects = () => {
    return (
        <Wrapper as={Container} id="projects">
            <h2>Commercial Projects</h2>
            <Grid>
                {projects.map(project => (
                    <Item
                        key={project.id}
                        as="a"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card>
                            <Content>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p>Role: {project.role}</p>
                                <p>
                                    Technologies:{' '}
                                    {project.technologies.join(', ')}
                                </p>
                            </Content>
                            <Media>
                                {project.mediaType === 'video' && (
                                    <YouTube
                                        videoId={project.videoId}
                                        opts={{
                                            width: '100%',
                                        }}
                                    />
                                )}
                                {project.mediaType === 'image' && (
                                    <img
                                        alt={project.name}
                                        src={project.source}
                                    />
                                )}
                            </Media>
                        </Card>
                    </Item>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default CommercialProjects;
