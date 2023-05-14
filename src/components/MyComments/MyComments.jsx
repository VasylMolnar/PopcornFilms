import React from 'react';
import { useGetCommentQuery } from '../../features/comment/commentApiSlice';
import { Report, Loading } from 'notiflix';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import MoodIcon from '@mui/icons-material/Mood';
import { useDeleteCurrentCommentMutation } from '../../features/comment/commentApiSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const MyComments = ({ id }) => {
  var currentDate = new Date();
  var date = currentDate.toLocaleDateString();

  const { data, isLoading, isSuccess, isError, error } = useGetCommentQuery({
    filmApiId: id,
  });

  const [deleteCurrentComment] = useDeleteCurrentCommentMutation();

  const deleteComment = async filmApiId => {
    Loading.circle();

    await deleteCurrentComment({ filmApiId })
      .then(data => {
        Loading.remove();
        Report.success('Видалено', '');
      })
      .catch(error => {
        Loading.remove();
        Report.failure(error || 'Помилка', '');
      });
  };

  return (
    <>
      {isSuccess &&
        data?.map((comment, index) => (
          <div className="comment" key={index} style={{ marginTop: '30px' }}>
            <div className="wrapper">
              <img
                alt="example"
                src={require('../../img/avatar.jpg')}
                className="card_img"
              />
            </div>

            <div className="content">
              <p>Автор: {comment.author}</p>
              <p>Опубліковано: {date}</p>
              <p>{comment.text}</p>

              {/* <div className="icons">
                <ThumbUpAltIcon className="icon" />
                <ThumbDownIcon className="icon" />
                <SentimentVeryDissatisfiedIcon className="icon" />
                <MoodIcon className="icon" />
              </div> */}
            </div>

            <button
              className="btn btn-outline-danger"
              onClick={() => deleteComment(comment.id)}
              style={{ width: '50px', height: '50px' }}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        ))}
    </>
  );
};
