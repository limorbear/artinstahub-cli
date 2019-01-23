import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function ArtistCard({name, working_image, tags, description, portfolio, portfolio_url}){
    return(

        <Card>
            <Image src={working_image} />

            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    {tags.map((tag, index) => {
                        return <span key={index}><a href='http://www.google.com'>{tag}</a></span>
                    })}
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>

            <Card.Content extra>
                <a href={portfolio_url} target='_blank' rel="noopener noreferrer">
                    <Icon name='user' />
                    {portfolio}
                </a>
            </Card.Content>
        </Card>

    )
}

export default ArtistCard;