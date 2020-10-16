import React from "react";
import {
    Card,
    CardImg,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Col
  } from "reactstrap";
  
  const CharacterCard = ({character}) => {
      console.log(character, "props");
    // const film = props.film;
    // const { film } = props;
    // console.log("film", film);
    // return (
    //   <div>
    //     <h2>Film title: {film.title}</h2>
    //     <p>{film.description}</p>
    //     <div>
    //       <p>Director: {film.director}</p>
    //       <p>Release Date: {film.release_date}</p>
    //     </div>
    //   </div>
    // );
    return (
      <Col xs="6" md="4" xl="3">
        <Card>
            <img className="card--image"  src={character[1].image}/>
          <CardHeader>{character[1].name} </CardHeader>
          <CardBody>
            <CardText>Species: {character[1].species}</CardText>
            <CardText>Origin: {character[1].origin.name} </CardText>
            <CardText>Status: {character[1].status} </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };
  export default CharacterCard;
  