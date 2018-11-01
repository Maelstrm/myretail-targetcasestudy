import React, { Component } from 'react';
import './App.css';
import ItemImages from '../ItemImages/ItemImages';
import ItemReviews from '../ItemReviews/ItemReviews';
import ItemPurchase from '../ItemPurchase/ItemPurchase';
import ItemHighlights from '../ItemHighlights/ItemHighlights';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';

// Importing the json object, which is stored in the App.js state.
// This object is divided into two parts so that it's contents can be divided into the appropriate components.
import item from '../../data/item-data.json';

// MaterialUI Styles
const styles = theme => ({
  masterGrid: {
    padding: '20px',
    maxWidth: '1440px',
  }
});
// Assigning JSON data to a variable
const itemData = item.CatalogEntryView[0];

class App extends Component {
  constructor() {
    super();
    // Parsing data and saving inside of state.
    this.state = {
      // Width of teh screen
      width: window.innerWidth,
      // Data contained in the ItemImages component
      ItemImagesData: {
        title: itemData.title,
        primaryImage: itemData.Images[0].PrimaryImage[0].image,
        secondaryImages: itemData.Images[0].AlternateImages
      },
      // Data contained in the ItemReviews component
      ItemReviewsData: {
        reviews: itemData.CustomerReview[0],
      },
      // Data contained in the ItemPurchase component
      ItemPurchaseData: {
        price: itemData.Offers[0].OfferPrice[0],
        promotions: itemData.Promotions
      },
      // Data contained in the ItemHighlights component
      ItemHighlightsData: {
        highlights: itemData.ItemDescription[0].features
      }
    }
  }

  // Code for handling conditional rendering using viewport size
  // Event listener attached to window
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  // Changes the state based on the event listener
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { classes } = this.props;
    const { width } = this.state;
    const isMobile = width <= 600;

    // conditonally rendered based on the device's screen width
    if (isMobile) {
      return (
        <Grid className={classes.masterGrid} item xs={12} sm={12} md={12} lg={12} >
            <ItemImages data={this.state.ItemImagesData}/>
            <ItemPurchase data={this.state.ItemPurchaseData}/>
            <ItemHighlights data={this.state.ItemHighlightsData}/>
            <ItemReviews data={this.state.ItemReviewsData}/>
        </Grid>
      );
    } else {
      return (
        <Grid className={classes.masterGrid} container item xs={12} sm={12} md={12} lg={12} >
          <Grid item xs={6} sm={6} md={6} lg={6} >
          <ItemImages data={this.state.ItemImagesData}/>
            <ItemReviews data={this.state.ItemReviewsData}/>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} >
            <ItemPurchase data={this.state.ItemPurchaseData}/>
            <ItemHighlights data={this.state.ItemHighlightsData}/>
          </Grid>
        </Grid>
      );
    }
  }
}

export default compose(withStyles(styles), withWidth())(App);
