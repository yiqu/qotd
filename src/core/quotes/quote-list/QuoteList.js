/* eslint-disable no-unused-vars */
import { Fragment, useEffect } from 'react';
import useMemoCompare from '../../../shared/hooks/useMemoCompare';
import QuoteItem from './quote-item/QuoteItem';
import classes from './QuoteList.module.scss';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import List from '@mui/material/List';

const QuoteList = (props) => {

  const display = sortQuotes(props.quotes, props.sortDir);

  return (
    <Fragment>
      <Grid container lg={ 6 } alignContent="center" justifyContent={ 'center' }>

        <List dense={ true }>
          {display.map((quote) => (
            <QuoteItem
                key={ quote.key }
                id={ quote.key }
                author={ quote.author }
                text={ quote.quote }
                date={ quote.date }
              />
            ))}

        </List>
        
      </Grid>
    </Fragment>
  );
};

export default QuoteList;


const sortQuotes = (quotes, direction) => {
  return quotes.sort((quoteA, quoteB) => {
    if (direction.value === 'asc') {
      return quoteA.date > quoteB.date ? 1 : -1;
    } else {
      return quoteA.date < quoteB.date ? 1 : -1;
    }
  });
};