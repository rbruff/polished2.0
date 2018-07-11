import React, { Component } from 'react'
import { Container, Header, Button, Card, Image } from 'semantic-ui-react'
import API from "../utils/API"
import Wrapper from "../components/Wrapper/Wrapper"
import "../../src/Collection.css"
import {Redirect} from 'react-router-dom';

class Collection extends Component {
  //declare state
  state = {
    products: [],
    isLoggedIn: true,
    username: ""
  }

  componentDidMount() {
    this.getProds();
    this.loginCheck()
  }

  getProds = () => {
    API.getProducts()
      .then(res =>{
        console.log(res)
        this.setState({
          products: res.data
        })
      })
      .catch(err => console.log(err));
  };

  updateProd = id => {
    API.updateProduct(id)
    //get updated product
      .then (res => this.getProds())
      .catch (err => console.log(err));
  }
    // Check login status
    loginCheck = () => {
      API
        .loginCheck()
        .then(res => this.setState({
          isLoggedIn: res.data.isLoggedIn, username: res.data.username
        }))
        .catch(err => {
          console.log(err);
          this.setState({isLoggedIn: false})
        })
    }

  deleteProduct = id => {
    API.deleteProduct(id)
    //get the newly updated list
      .then(res => this.getProds())
      .catch(err => console.log(err));
  };

  render() {

     // If user isn't logged in, don't let them see this page
     if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <Container>
        <Header className="title">Your Collection</Header>
        <Wrapper>
          {this.state.products.map(product => (
            <Card raised='true'>

              <Card.Content>
                <Image src={product.photo} />

                <Card.Meta>{product.color}</Card.Meta>
                <Card.Description>
                  {product.brand}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='teal' onClick={() => this.updateProd(product._id)}>
                    Edit
          </Button>
                  <Button basic color='pink' onClick={() => this.deleteProduct(product._id)}>
                    Delete
          </Button>
                </div>
              </Card.Content>
            </Card>

          ))}
        </Wrapper>
      </Container>

    )
  };
};

export default Collection;