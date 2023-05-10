import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import MoodIcon from '@mui/icons-material/Mood';
import { useParams, useLocation, useNavigate } from 'react-router';
import { useGetMovieReviewsQuery } from '../../features/films/filmsApiSlice';

const Comments = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  const { data, isLoading, isSuccess, isError, error } = useGetMovieReviewsQuery({
    info: name || 'movie',
    movieId: id,
  });

  const handleComment = e => {
    e.preventDefault();
    console.log(e.target.elements.comments.value);
  };

  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //test only

  return (
    <div className="comment_List">
      <h1 className="title" style={{ marginTop: '100px' }}>
        Коментарі
      </h1>
      <FormControl component="form" onSubmit={handleComment}>
        <Textarea
          name="comments"
          placeholder="Ваш коментарь..."
          minRows={3}
          endDecorator={
            <Box
              sx={{
                display: 'flex',
                gap: 'var(--Textarea-paddingBlock)',
                pt: 'var(--Textarea-paddingBlock)',
                borderTop: '1px solid',
                borderColor: 'divider',
                flex: 'auto',
              }}
            >
              <Button sx={{ ml: 'auto' }} type="submit">
                Надіслати
              </Button>
            </Box>
          }
        />
      </FormControl>

      {/* {a.map((comment, index) => (
        <div className="comment" key={index} style={{ marginTop: '30px' }}>
          <div className="wrapper">
            <img
              alt="example"
              src={require('../../img/team/Igor-480.jpg')}
              className="card_img"
            />
          </div>

          <div className="content">
            <p>
              COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST
              COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST
              COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST
              COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST COMMENTS TEST
            </p>

            <div className="icons">
              <ThumbUpAltIcon className="icon" />
              <ThumbDownIcon className="icon" />
              <SentimentVeryDissatisfiedIcon className="icon" />
              <MoodIcon className="icon" />
            </div>
          </div>
        </div>
      ))} */}

      {isSuccess &&
        !isError &&
        data?.results?.map((comment, index) => (
          <div className="comment" key={index} style={{ marginTop: '30px' }}>
            <div className="wrapper">
              <img
                alt="example"
                src={`https://image.tmdb.org/t/p/w300${comment.author_details.avatar_path}`}
                className="card_img"
              />
            </div>

            <div className="content">
              <p>Автор: {comment.author}</p>
              <p>Опубліковано: {comment.created_at}</p>
              <p>{comment.content}</p>

              <div className="icons">
                <ThumbUpAltIcon className="icon" />
                <ThumbDownIcon className="icon" />
                <SentimentVeryDissatisfiedIcon className="icon" />
                <MoodIcon className="icon" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
