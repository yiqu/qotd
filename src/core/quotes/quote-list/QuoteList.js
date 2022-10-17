import { Fragment } from 'react';
import QuoteItem from './quote-item/QuoteItem';
import classes from './QuoteList.module.scss';

const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={ classes.list }>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={ quote.id }
            id={ quote.id }
            author={ quote.author }
            text={ quote.text }
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
