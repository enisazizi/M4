import React, { Component } from "react";
import { Col, Container, Row ,Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

export default class ListMovies extends Component {
  state = {
    harrypoter: [],
    superman: [],
    batman: [],
    searchQuery: [],
    emptyQuery: [],
    loading:true,
  };

  myfetch = async (query) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=41290999&s=${query}`
      );

      let arraymovies = await response.json();
      let movies = arraymovies.Search;
      setTimeout(() => {
        if (query === "harry") {
          this.setState({ harrypoter: movies.slice(0, 6) , loading:false });
        }else if (query === "superman") {
          this.setState({ superman: movies.slice(0, 6) ,loading:false});
        } else if (query === "batman") {
          this.setState({ batman: movies.slice(0, 6) ,loading:false });
        } else if (movies) {
          this.setState({ searchQuery: movies });
        } else {
          this.setState({ searchQuery: this.state.emptyQuery ,loading:false});
        }
    }, 2000)
    
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = async () => {
    await this.myfetch("harry");
    await this.myfetch("superman");
    await this.myfetch("batman");
  };
  async componentDidUpdate(prevProp) {
    // Typical usage (don't forget to compare props):
    if (this.props.query !== prevProp.query) {
      this.myfetch(this.props.query);
    }
  }
  render() {
    return (
      <div>
        {this.state.loading ? <Spinner
              animation="grow"
              variant="danger"
             
            /> :
        <Container>
          <h3>{this.props.query}</h3>
          <Row style={{ marginBottom: "20px" }}>
            {this.state.searchQuery.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-5 px-1"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <h3>Trending now</h3>
          <Row style={{ marginBottom: "20px" }}>
            {this.state.harrypoter.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-5 px-1"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <h3>Watch it again</h3>
          <Row style={{ marginBottom: "20px" }}>
            {this.state.superman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-5 px-1"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
          <h3>New Releases</h3>
          <Row>
            {this.state.batman.map((movie) => (
              <Col
                xs={6}
                md={3}
                lg={2}
                key={`movieId${movie.imdbID}`}
                className="mb-3 px-1"
              >
                <SingleMovie obj={movie}></SingleMovie>
              </Col>
            ))}
          </Row>
        </Container>}
      </div>
    );
  }
}
