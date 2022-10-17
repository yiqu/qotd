import QuoteList from './quote-list/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'K', text: 'Learning React is fun!' },
  { id: 'q2', author: 'KQ', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={ DUMMY_QUOTES } />;
};

export default AllQuotes;