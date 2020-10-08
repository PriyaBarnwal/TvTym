import FavReducer from '../../reducers/FavReducer'

let dummyfavs = [
  {
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
  "days":[
  "Wednesday"
  ]
  },
  "rating":{
  "average":8.7
  },
  "weight":99,
  "network":{
  "id":118,
  "name":"History",
  "country":{
  "name":"Canada",
  "code":"CA",
  "timezone":"America/Halifax"
  }
  },
  "webChannel":null,
  "externals":{
  "tvrage":31136,
  "thetvdb":260449,
  "imdb":"tt2306299"
  },
  "image":{
  "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/214/536315.jpg",
  "original":"http://static.tvmaze.com/uploads/images/original_untouched/214/536315.jpg"
  },
  "summary":"<p><b>Vikings</b> transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.</p>",
  "updated":1601215523,
  "_links":{
  "self":{
  "href":"http://api.tvmaze.com/shows/29"
  },
  "previousepisode":{
  "href":"http://api.tvmaze.com/episodes/1782548"
  }
  }
  },
  {
  "id":19,
  "url":"http://www.tvmaze.com/shows/19/supernatural",
  "name":"Supernatural",
  "type":"Scripted",
  "language":"English",
  "genres":[
  "Drama",
  "Action",
  "Supernatural"
  ],
  "status":"Running",
  "runtime":60,
  "premiered":"2005-09-13",
  "officialSite":"http://www.cwtv.com/shows/supernatural",
  "schedule":{
  "time":"20:00",
  "days":[
  "Thursday"
  ]
  },
  "rating":{
  "average":8.4
  },
  "weight":99,
  "network":{
  "id":5,
  "name":"The CW",
  "country":{
  "name":"United States",
  "code":"US",
  "timezone":"America/New_York"
  }
  },
  "webChannel":null,
  "externals":{
  "tvrage":5410,
  "thetvdb":78901,
  "imdb":"tt0460681"
  },
  "image":{
  "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/268/672051.jpg",
  "original":"http://static.tvmaze.com/uploads/images/original_untouched/268/672051.jpg"
  },
  "summary":"<p>This haunting series follows the Winchester brothers as they crisscross the lonely and mysterious back roads of the country in their '67 Chevy Impala, hunting down every evil supernatural force they encounter along the way.</p>",
  "updated":1601617230,
  "_links":{
  "self":{
  "href":"http://api.tvmaze.com/shows/19"
  },
  "previousepisode":{
  "href":"http://api.tvmaze.com/episodes/1760506"
  },
  "nextepisode":{
  "href":"http://api.tvmaze.com/episodes/1797166"
  }
  }
  },
  {
  "id":11,
  "url":"http://www.tvmaze.com/shows/11/gotham",
  "name":"Gotham",
  "type":"Scripted",
  "language":"English",
  "genres":[
  "Drama",
  "Action",
  "Crime"
  ],
  "status":"Ended",
  "runtime":60,
  "premiered":"2014-09-22",
  "officialSite":"http://www.fox.com/gotham",
  "schedule":{
  "time":"20:00",
  "days":[
  "Thursday"
  ]
  },
  "rating":{
  "average":7.7
  },
  "weight":92,
  "network":{
  "id":4,
  "name":"FOX",
  "country":{
  "name":"United States",
  "code":"US",
  "timezone":"America/New_York"
  }
  },
  "webChannel":null,
  "externals":{
  "tvrage":38049,
  "thetvdb":274431,
  "imdb":"tt3749900"
  },
  "image":{
  "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/189/474715.jpg",
  "original":"http://static.tvmaze.com/uploads/images/original_untouched/189/474715.jpg"
  },
  "summary":"<p>The good. The evil. The beginning.</p><p>Everyone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker?</p><p><b>Gotham </b>is an origin story of the great DC Comics Super-Villains and vigilantes, revealing an entirely new chapter that has never been told. It follows one cop's rise through a dangerously corrupt city teetering between good and evil, and chronicles the birth of one of the most popular super heroes of our time.</p>",
  "updated":1576077598,
  "_links":{
  "self":{
  "href":"http://api.tvmaze.com/shows/11"
  },
  "previousepisode":{
  "href":"http://api.tvmaze.com/episodes/1616387"
  }
  }
  }
]
test('should setup default favorites', () => {
  const state = FavReducer(undefined, {ype: '@@INIT'})

  expect(state).toEqual({
    favs: localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')): []
  })
})

test('should remove favorite item by id', ()=> {
  let action = {
    type: 'REMOVE_FROM_FAVS',
    payload: dummyfavs[1].id
  }
  let {favs} = FavReducer({favs: dummyfavs}, action)

  expect(favs).toEqual([dummyfavs[0],dummyfavs[2]])
})

test('should not remove favorite item if id is not found', ()=> {
  let action = {
    type: 'REMOVE_FROM_FAVS',
    payload: 123
  }
  let {favs} = FavReducer({favs: dummyfavs}, action)

  expect(favs).toEqual(dummyfavs)
})

test('should add a new favorite item', ()=> {
  let newItem = {
    "id":5,
    "url":"http://www.tvmaze.com/shows/5/true-detective",
    "name":"True Detective",
    "type":"Scripted",
    "language":"English",
    "genres":[
    "Drama",
    "Crime",
    "Thriller"
    ],
    "status":"To Be Determined",
    "runtime":60,
    "premiered":"2014-01-12",
    "officialSite":"http://www.hbo.com/true-detective",
    "schedule":{
    "time":"21:00",
    "days":[
    "Sunday"
    ]
    },
    "rating":{
    "average":8.3
    },
    "weight":97,
    "network":{
    "id":8,
    "name":"HBO",
    "country":{
    "name":"United States",
    "code":"US",
    "timezone":"America/New_York"
    }
    },
    "webChannel":null,
    "externals":{
    "tvrage":31369,
    "thetvdb":270633,
    "imdb":"tt2356777"
    },
    "image":{
    "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg",
    "original":"http://static.tvmaze.com/uploads/images/original_untouched/178/445621.jpg"
    },
    "summary":"<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p>",
    "updated":1580056089,
    "_links":{
    "self":{
    "href":"http://api.tvmaze.com/shows/5"
    },
    "previousepisode":{
    "href":"http://api.tvmaze.com/episodes/1590271"
    }
  }},
    action = {
      type: 'ADD_TO_FAVS',
      payload: newItem
    }
  let {favs} = FavReducer({favs: dummyfavs}, action)

  expect(favs).toEqual([newItem, ...dummyfavs])
})