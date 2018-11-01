import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './ItemHighlights.css'
const styles = theme => ({
    leftOverall: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    rightOverall: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end'
    }
});


class ItemHighlights extends Component {

    componentDidMount = () => {
        console.log('ItemHighlights data:', this.props.data);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid item xs={12} className={classes.root} style={{paddingLeft:'10px', paddingRight:'10px', marginTop:'30px', marginBottom:'30px'}}>
                <Grid item xs={12}>
                    <Typography variant="h4">product highlights</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul style={{paddingLeft:'20px'}}>
                        {this.props.data.highlights.map((item,i) => {
                            return (
                                <li key={i}>
                                    <Typography key={i} style={{fontSize:'.9em', fontWeight:'100'}} dangerouslySetInnerHTML={{__html: item}}>
                                    </Typography>
                                </li>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ItemHighlights);
