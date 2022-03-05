import React from 'react';
import {ListGroup,Stack} from 'react-bootstrap'
const Commits=(props)=>{
    return (
        <ListGroup>
            {props.commits.map((commit,index)=>{
                return(
                    <ListGroup.Item key={index}>
                        <Stack>
                        <b>{commit.name}</b>
                        <p>{commit.message}</p>
                        <em>date: {commit.date}</em>
                        <a href={commit.url} target='_blank'>url : {commit.url}</a>
                        </Stack>
                    </ListGroup.Item>
                )
            }
            )}
        </ListGroup>

    );
};
export default Commits;