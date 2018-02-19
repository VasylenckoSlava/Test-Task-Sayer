var mockApiData = [
  {
    id:1,
    name: 'Find earth'
  },
  {
    id:2,
    name: 'We will find life at universe'
  },
  {
    id:3,
    name: 'we make our life better'
  },
  {
    id:4,
    name: 'We made it)'
  },
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
      console.log('I got news');
      dispatch({type: 'FETCH_TRACKS_SUCCES',payload: mockApiData });
    },2000)
  }
