/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import {
  useParams, useHistory, useLocation
} from "react-router-dom";
import classes from './QuoteItem.module.scss';

const QuoteItem = (props) => {
  const location = useLocation();
  const userId = 'yqu';

  const quoteDetailLink = {
    pathname: `/quotes/${props.id}/${userId}`,
    search: location.search
  };


  return (
    <li className={ classes.item }>
      
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author} ({new Date(props.date).toString()}) </figcaption>
      </figure>

      <Link className='btn' to={ quoteDetailLink }>
        View Details
      </Link>

    </li>
  );
};

export default QuoteItem;
