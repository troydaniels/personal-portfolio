import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import starIcon from '../../../../static/icons/star.svg';
import forkIcon from '../../../../static/icons/fork.svg';
import Container from '../../common/Container';
import Card from '../../common/Card';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

const PersonalProjects = () => {
    const {
        github: {
            repositoryOwner: {
                repositories: { edges },
            },
        },
    } = useStaticQuery(graphql`
        {
            github {
                repositoryOwner(login: "troydaniels") {
                    repositories(
                        first: 8
                        orderBy: { field: STARGAZERS, direction: DESC }
                    ) {
                        edges {
                            node {
                                id
                                name
                                url
                                description
                                stargazers {
                                    totalCount
                                }
                                forkCount
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Wrapper as={Container}>
            <h2>Personal Projects</h2>
            <Grid>
                {edges.map(({ node }) => (
                    <Item
                        key={node.id}
                        as="a"
                        href={node.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card>
                            <Content>
                                <h4>{node.name}</h4>
                                <p>{node.description}</p>
                            </Content>
                            <Stats>
                                <div>
                                    <img src={starIcon} alt="stars" />
                                    <span>{node.stargazers.totalCount}</span>
                                </div>
                                <div>
                                    <img src={forkIcon} alt="forks" />
                                    <span>{node.forkCount}</span>
                                </div>
                            </Stats>
                        </Card>
                    </Item>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default PersonalProjects;
