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
import {
  useAddCommentMutation,
  useGetAllFilmsQuery,
} from '../../features/comment/commentApiSlice';
import { Report, Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import { useSorterFilmById } from '../../hooks/useSorterFilmById';
import { MyComments } from '../MyComments/MyComments';

const Comments = () => {
  const isAuth = useSelector(state => state.auth.accessToken);
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  const { data, isLoading, isSuccess, isError, error } = useGetMovieReviewsQuery({
    info: name || 'movie',
    movieId: id,
  });

  const {
    data: idsFilms,
    isLoading: idFilmsLoading,
    isSuccess: idFilmsSuccess,
    error: idFilmsError,
  } = useGetAllFilmsQuery();

  const currentFilmsIds = useSorterFilmById(idsFilms, id);

  //fn Api
  const [addComment] = useAddCommentMutation();

  const sendComment = async e => {
    e.preventDefault();
    Loading.circle();

    if (isAuth) {
      await addComment({ filmApiId: id, text: e.target.elements.comments.value })
        .then(data => {
          Loading.remove();
          Report.success('Коментар відправлено', '');
        })
        .catch(error => {
          Loading.remove();
          Report.failure(error || 'Помилка', '');
        });
    } else {
      Report.info('Увійдіть до облікового запису', 'Щоб могти зберегти фільм');
      Loading.remove();
    }
  };

  return (
    <div className="comment_List">
      {isLoading || idFilmsLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error ||
        (idFilmsError &&
          (Report.failure('Error', `${error.data} || ${idFilmsError.data}`),
          Loading.remove()))}

      <h1 className="title" style={{ marginTop: '100px' }}>
        Коментарі
      </h1>
      <FormControl component="form" onSubmit={sendComment}>
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

      {idFilmsSuccess &&
        currentFilmsIds.length > 0 &&
        currentFilmsIds?.map(item => <MyComments id={item.id} />)}

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

              {/* <div className="icons">
                <ThumbUpAltIcon className="icon" />
                <ThumbDownIcon className="icon" />
                <SentimentVeryDissatisfiedIcon className="icon" />
                <MoodIcon className="icon" />
              </div> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
