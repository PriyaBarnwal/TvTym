import { addItem, removeItem } from '../../actions/FavActions'

test('should setup remove an item from favorites action object', () => {
  const action = removeItem('123')
  expect(action).toEqual({
    type: 'REMOVE_FROM_FAVS',
    payload: '123'
  })
})


test('should setup add an item to favorites action object', () => {
  const data = {
    "id":29,
    "url":"http://www.tvmaze.com/shows/29/vikings",
    "name":"Vikings",
    "type":"Scripted",
    "language":"English",
    "genres":[
      "Drama",
      "Action",
      "History"
    ],
    "status":"Running",
    "runtime":60,
    "premiered":"2013-03-03",
    "officialSite":"https://www.history.ca/shows/vikings/",
    "schedule":{
      "time":"22:00",
      "days":["Wednesday"]
    },
    "rating":{
      "average":8.7
    },
    "weight":99,
    "webChannel":null,
    "image":{
      "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/214/536315.jpg",
      "original":"http://static.tvmaze.com/uploads/images/original_untouched/214/536315.jpg"
    },
    "summary":"<p><b>Vikings</b> transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.</p>",
    "updated":1601215523
  }
  const action = addItem(data)

  expect(action).toEqual({
    type: 'ADD_TO_FAVS',
    payload: data
  })
})