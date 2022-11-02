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
import Divider from '@mui/material/Divider';


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
        <IconButton edge="end" LinkComponent={ Link } to={ quoteDetailLink }>
          <ArticleOutlined />
        </IconButton>
      </div>
    }>
      
      <ListItemAvatar>
        <Avatar>
          <FormatQuote />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={ props.text } 
        secondary={ 
          <span>{props.author} | {new Date(props.date).toString()}</span> 
        }>
      </ListItemText>

    </ListItem>
  );
};

export default QuoteItem;
