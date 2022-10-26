/* eslint-disable no-unused-vars */
import { Fragment, useEffect } from 'react';
import useMemoCompare from '../../../shared/hooks/useMemoCompare';
import QuoteItem from './quote-item/QuoteItem';
import classes from './QuoteList.module.scss';


const QuoteList = (props) => {

  const display = sortQuotes(props.quotes, props.sortDir);

  return (
    <Fragment>

      <ul className={ classes.list }>
        {display.map((quote) => (
          <QuoteItem
            key={ quote.key }
            id={ quote.key }
            author={ quote.author }
            text={ quote.quote }
            date={ quote.date }
          />
        ))}
      </ul>

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