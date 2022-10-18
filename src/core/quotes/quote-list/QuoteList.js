import { Fragment } from 'react';
import QuoteItem from './quote-item/QuoteItem';
import classes from './QuoteList.module.scss';

const QuoteList = (props) => {

  return (
    <Fragment>
      <ul className={ classes.list }>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={ quote.key }
            id={ quote.key }
            author={ quote.author }
            text={ quote.quote }
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
