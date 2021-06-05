import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
// Car Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    root1: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    flipCardImg: {
        height: '60vh'
    },
    mediaImg: {
        width: (state) => state.cardWidth
    }
});


export default function MyCard(props) {

    const [flipped, setFlipped] = useState(false);
    const [cardWidth, setCardWidth] = useState(150);
    const [cardHeight, setCardHeight] = useState(500);
    var state = {cardWidth:cardWidth, cardHeight:cardHeight}
    const classes = useStyles( state );

    console.log(cardWidth)

    return (
        <div >
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">

                <Card 
                    className={classes.root1} 
                    id='frontFlipCard'
                    onClick={() => {
                        setCardWidth(document.getElementById("flipCardImg").width)
                        setCardHeight(document.getElementById("frontFlipCard").height)
                        setFlipped(!flipped)
                    }} 
                >
                    <CardContent>
                        <img src={ props.frontImg }  className={classes.flipCardImg} id="flipCardImg"/>
                    </CardContent>
                </Card>

                <Card className={classes.root} >
                    <CardContent onClick={() => setFlipped(!flipped)} >
                        <CardMedia
                            component="img"
                            alt="Project SS"
                            height="200"
                            image={ props.backImg }
                            title="Project SS"
                            className={classes.mediaImg} 
                        />
                        <br />
                        <h3>{ props.title }</h3>
                        <br />
                        <p><strong>Language: </strong> { props.language } </p>
                        <p><strong>Technologies: </strong> { props.technologies } </p>
                        <br />
                        <p>{ props.description } </p>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={ props.link } target='_blank'>Visit Github repo</Button>
                    </CardActions>
                </Card>
            </ReactCardFlip>
        </div>
    )
}



