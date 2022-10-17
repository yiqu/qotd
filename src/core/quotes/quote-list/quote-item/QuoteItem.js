import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.scss';

const QuoteItem = (props) => {

  const userId = 'yqu';

  const quoteDetailLink = {
    pathname: `/quotes/${props.id}/${userId}`,
    search: "?a=b&c=d&a=bb",
    hash: "#hashy"
  };

  return (
    <li className={ classes.item }>
      
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>

      <Link className='btn' to={ quoteDetailLink }>
        View Details
      </Link>

    </li>
  );
};

export default QuoteItem;
