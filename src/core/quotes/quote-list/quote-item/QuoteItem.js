/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import {
  useParams, useLocation
} from "react-router-dom";
import classes from './QuoteItem.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FormatQuote, ArticleOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';



const QuoteItem = (props) => {
  const location = useLocation();
  const userId = 'yqu';

  const quoteDetailLink = {
    pathname: `${props.id}/${userId}`,
    search: location.search
  };


  return (
    <ListItem className={ classes.item } sx={ {mb:2} } secondaryAction={
      <div>
        <IconButton edge="end" aria-label="delete">
          <ArticleOutlined />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <ArticleOutlined />
        </IconButton>
      </div>
      
      
    }>
      
      <ListItemAvatar>
        <Avatar>
          <FormatQuote />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={ props.text } secondary={ 
        `${props.author} (${new Date(props.date).toString()})` } secondaryTypographyProps={ {style: {whiteSpace: 'normal'}} }>
      </ListItemText>

      {/* <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author} ({new Date(props.date).toString()}) </figcaption>
      </figure>

      <Link className='btn' to={ quoteDetailLink }>
        View Details
      </Link> */}

    </ListItem>
  );
};

export default QuoteItem;
