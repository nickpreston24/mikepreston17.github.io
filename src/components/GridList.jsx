import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { compose } from 'recompose';
import { Exception } from 'handlebars';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

// const asGridList = (items = []) => Component => {
//     if(!items.isArray)
//         throw new Exception("You must pass in an array of items to " + this.constructor.name);

//     return
//     <Component>
//         <GridList></GridList>
//     </Component>
//     //TODO: Stuff the items [] into a given Component, returning a GridList.
// }

// My awesome HOC:
// TODO: Needs testing!
export const asGridList = (items = [], props) => Component=> {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {items.map((item, index) => (
            <GridListTile key={index} cols={item.cols || 1}>
              <Component key={index} {...props}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

// export function ItemList(items = [], props) {
//     const { classes } = props;

//     return (
//       <div className={classes.root}>
//         <GridList cellHeight={160} className={classes.gridList} cols={3}>
//           {items.map((item, index) => (
//             <GridListTile key={index} cols={item.cols || 1}>
//                 {item}
//             </GridListTile>
//           ))}
//         </GridList>
//       </div>
//     );
// }

/** SAMPLE FROM MATERIAL UI DOCUMENTATION */
function ImageGridList(tiles = [], props) {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tiles.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
// module.exports = { compose(withStyles(styles)) (ImageGridList) }
// export {withStyles(styles)(ImageGridList)}