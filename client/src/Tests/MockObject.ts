import { TopTracks } from "../Interfaces/topTracks.interface.ts"

export const object = {
  "album_type": "album",
  "artists": [
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca"
          },
          "href": "https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca",
          "id": "13ubrt8QOOCPljQ2FL1Kca",
          "name": "A$AP Rocky",
          "type": "artist",
          "uri": "spotify:artist:13ubrt8QOOCPljQ2FL1Kca"
      }
  ],
  "external_urls": {
      "spotify": "https://open.spotify.com/album/6rzMufuu8sLkIizM4q9c7J"
  },
  "href": "https://api.spotify.com/v1/albums/6rzMufuu8sLkIizM4q9c7J",
  "id": "6rzMufuu8sLkIizM4q9c7J",
  "images": [
      {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2732ae92030b51fb8135d694af9",
          "width": 640
      },
      {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e022ae92030b51fb8135d694af9",
          "width": 300
      },
      {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048512ae92030b51fb8135d694af9",
          "width": 64
      }
  ],
  "is_playable": true,
  "name": "LONG.LIVE.A$AP (Deluxe Version)",
  "release_date": "2013",
  "release_date_precision": "year",
  "total_tracks": 17,
  "type": "album",
  "uri": "spotify:album:6rzMufuu8sLkIizM4q9c7J"
}

export const MockObject : TopTracks[] = [
  {
    "_id": "65aff9ded6fd888b4c686e6a",
    "tracks": [
      {
        "external_ids": {
          "isrc": "USWD12111601"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1NgkiQCZtk0Hnb5ocnUe04"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e6c"
          },
          {
            "_id": "65aff9ded6fd888b4c686e6d"
          }
        ],
        "disc_number": 1,
        "duration_ms": 220806,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1NgkiQCZtk0Hnb5ocnUe04",
        "id": "1NgkiQCZtk0Hnb5ocnUe04",
        "is_local": false,
        "is_playable": true,
        "name": "Let It Go",
        "popularity": 57,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1NgkiQCZtk0Hnb5ocnUe04",
        "_id": "65aff9ded6fd888b4c686e6b"
      },
      {
        "external_ids": {
          "isrc": "USWD12096548"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1KmzKvDdiKdcVoxxILTDdz"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e6f"
          },
          {
            "_id": "65aff9ded6fd888b4c686e70"
          }
        ],
        "disc_number": 1,
        "duration_ms": 122334,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1KmzKvDdiKdcVoxxILTDdz",
        "id": "1KmzKvDdiKdcVoxxILTDdz",
        "is_local": false,
        "is_playable": true,
        "name": "It's a Small World",
        "popularity": 60,
        "preview_url": null,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:1KmzKvDdiKdcVoxxILTDdz",
        "_id": "65aff9ded6fd888b4c686e6e"
      },
      {
        "external_ids": {
          "isrc": "USWD12096553"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4BU9s6QLGFCaxlgaPWWuFY"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e72"
          },
          {
            "_id": "65aff9ded6fd888b4c686e73"
          }
        ],
        "disc_number": 1,
        "duration_ms": 166781,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/4BU9s6QLGFCaxlgaPWWuFY",
        "id": "4BU9s6QLGFCaxlgaPWWuFY",
        "is_local": false,
        "is_playable": true,
        "name": "Baby Mine",
        "popularity": 64,
        "preview_url": null,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:4BU9s6QLGFCaxlgaPWWuFY",
        "_id": "65aff9ded6fd888b4c686e71"
      },
      {
        "external_ids": {
          "isrc": "USWD12096716"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3n1DCR84wibN1QdQ76juzz"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e75"
          },
          {
            "_id": "65aff9ded6fd888b4c686e76"
          }
        ],
        "disc_number": 1,
        "duration_ms": 222004,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/3n1DCR84wibN1QdQ76juzz",
        "id": "3n1DCR84wibN1QdQ76juzz",
        "is_local": false,
        "is_playable": true,
        "name": "Do You Want to Build a Snowman?",
        "popularity": 58,
        "preview_url": null,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:3n1DCR84wibN1QdQ76juzz",
        "_id": "65aff9ded6fd888b4c686e74"
      },
      {
        "external_ids": {
          "isrc": "USWD12096547"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1jHNQodYIGvk187xrISw1i"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e78"
          },
          {
            "_id": "65aff9ded6fd888b4c686e79"
          }
        ],
        "disc_number": 1,
        "duration_ms": 109895,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1jHNQodYIGvk187xrISw1i",
        "id": "1jHNQodYIGvk187xrISw1i",
        "is_local": false,
        "is_playable": true,
        "name": "Once Upon a Dream",
        "popularity": 63,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1jHNQodYIGvk187xrISw1i",
        "_id": "65aff9ded6fd888b4c686e77"
      },
      {
        "external_ids": {
          "isrc": "USWD12096546"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5UewWG58QFgJXV36lH6kY8"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e7b"
          },
          {
            "_id": "65aff9ded6fd888b4c686e7c"
          }
        ],
        "disc_number": 1,
        "duration_ms": 247801,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/5UewWG58QFgJXV36lH6kY8",
        "id": "5UewWG58QFgJXV36lH6kY8",
        "is_local": false,
        "is_playable": true,
        "name": "You'll Be in My Heart",
        "popularity": 62,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5UewWG58QFgJXV36lH6kY8",
        "_id": "65aff9ded6fd888b4c686e7a"
      },
      {
        "external_ids": {
          "isrc": "USWD11890619"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5t4Ysd832UYYBZL92258tn"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e7e"
          },
          {
            "_id": "65aff9ded6fd888b4c686e7f"
          }
        ],
        "disc_number": 1,
        "duration_ms": 197519,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/5t4Ysd832UYYBZL92258tn",
        "id": "5t4Ysd832UYYBZL92258tn",
        "is_local": false,
        "is_playable": true,
        "name": "Once Upon a Dream",
        "popularity": 63,
        "preview_url": null,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:5t4Ysd832UYYBZL92258tn",
        "_id": "65aff9ded6fd888b4c686e7d"
      },
      {
        "external_ids": {
          "isrc": "USWD11890624"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3TeDrql1cmJPIoo7fE39Hj"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e81"
          },
          {
            "_id": "65aff9ded6fd888b4c686e82"
          }
        ],
        "disc_number": 1,
        "duration_ms": 189449,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/3TeDrql1cmJPIoo7fE39Hj",
        "id": "3TeDrql1cmJPIoo7fE39Hj",
        "is_local": false,
        "is_playable": true,
        "name": "How Far I'll Go",
        "popularity": 59,
        "preview_url": null,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:3TeDrql1cmJPIoo7fE39Hj",
        "_id": "65aff9ded6fd888b4c686e80"
      },
      {
        "external_ids": {
          "isrc": "USWD11890618"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0dRJyiEdzeHyX06nifP0jI"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e84"
          },
          {
            "_id": "65aff9ded6fd888b4c686e85"
          }
        ],
        "disc_number": 1,
        "duration_ms": 250255,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/0dRJyiEdzeHyX06nifP0jI",
        "id": "0dRJyiEdzeHyX06nifP0jI",
        "is_local": false,
        "is_playable": true,
        "name": "Part of Your World",
        "popularity": 64,
        "preview_url": null,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:0dRJyiEdzeHyX06nifP0jI",
        "_id": "65aff9ded6fd888b4c686e83"
      },
      {
        "external_ids": {
          "isrc": "USWD11890125"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/61rwlSKGf9nB2A0eWalrHA"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e87"
          },
          {
            "_id": "65aff9ded6fd888b4c686e88"
          }
        ],
        "disc_number": 1,
        "duration_ms": 144734,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/61rwlSKGf9nB2A0eWalrHA",
        "id": "61rwlSKGf9nB2A0eWalrHA",
        "is_local": false,
        "is_playable": true,
        "name": "Love Is an Open Door",
        "popularity": 52,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:61rwlSKGf9nB2A0eWalrHA",
        "_id": "65aff9ded6fd888b4c686e86"
      },
      {
        "external_ids": {
          "isrc": "USWD12097224"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7q3qsU8mNnr1pANByJoQWK"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e8a"
          },
          {
            "_id": "65aff9ded6fd888b4c686e8b"
          }
        ],
        "disc_number": 1,
        "duration_ms": 158806,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/7q3qsU8mNnr1pANByJoQWK",
        "id": "7q3qsU8mNnr1pANByJoQWK",
        "is_local": false,
        "is_playable": true,
        "name": "All Is Found",
        "popularity": 61,
        "preview_url": null,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:7q3qsU8mNnr1pANByJoQWK",
        "_id": "65aff9ded6fd888b4c686e89"
      },
      {
        "external_ids": {
          "isrc": "USWD11890617"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7gKHQy915DlMWd1xuF11BO"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e8d"
          },
          {
            "_id": "65aff9ded6fd888b4c686e8e"
          }
        ],
        "disc_number": 1,
        "duration_ms": 174882,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/7gKHQy915DlMWd1xuF11BO",
        "id": "7gKHQy915DlMWd1xuF11BO",
        "is_local": false,
        "is_playable": true,
        "name": "Winnie the Pooh",
        "popularity": 61,
        "preview_url": null,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:7gKHQy915DlMWd1xuF11BO",
        "_id": "65aff9ded6fd888b4c686e8c"
      },
      {
        "external_ids": {
          "isrc": "USWD10220269"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/61tnA1xJXS6SUJSXAS0mAN"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e90"
          }
        ],
        "disc_number": 1,
        "duration_ms": 197040,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/61tnA1xJXS6SUJSXAS0mAN",
        "id": "61tnA1xJXS6SUJSXAS0mAN",
        "is_local": false,
        "is_playable": true,
        "name": "Beauty And The Beast",
        "popularity": 56,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:61tnA1xJXS6SUJSXAS0mAN",
        "_id": "65aff9ded6fd888b4c686e8f"
      },
      {
        "external_ids": {
          "isrc": "USWD10423766"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7GfYosS1lGRgC0mqqzcAE1"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e92"
          }
        ],
        "disc_number": 1,
        "duration_ms": 210493,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/7GfYosS1lGRgC0mqqzcAE1",
        "id": "7GfYosS1lGRgC0mqqzcAE1",
        "is_local": false,
        "is_playable": true,
        "name": "Rainbow Connection - Instrumental",
        "popularity": 45,
        "preview_url": null,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7GfYosS1lGRgC0mqqzcAE1",
        "_id": "65aff9ded6fd888b4c686e91"
      },
      {
        "external_ids": {
          "isrc": "USWD10525582"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3wI9eq7AaOYGnaO3kKoA8o"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e94"
          }
        ],
        "disc_number": 1,
        "duration_ms": 84961,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/3wI9eq7AaOYGnaO3kKoA8o",
        "id": "3wI9eq7AaOYGnaO3kKoA8o",
        "is_local": false,
        "is_playable": true,
        "name": "It's a Small World - Instrumental",
        "popularity": 57,
        "preview_url": null,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:3wI9eq7AaOYGnaO3kKoA8o",
        "_id": "65aff9ded6fd888b4c686e93"
      },
      {
        "external_ids": {
          "isrc": "USWD10525598"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3hSUUyu64UofrhKKg5zAOQ"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e96"
          }
        ],
        "disc_number": 1,
        "duration_ms": 83057,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/3hSUUyu64UofrhKKg5zAOQ",
        "id": "3hSUUyu64UofrhKKg5zAOQ",
        "is_local": false,
        "is_playable": true,
        "name": "Bibbidi Bobbidi Boo - Instrumental",
        "popularity": 57,
        "preview_url": null,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:3hSUUyu64UofrhKKg5zAOQ",
        "_id": "65aff9ded6fd888b4c686e95"
      },
      {
        "external_ids": {
          "isrc": "USWD10220276"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0d2jEkvq1aUlQlpin2slC8"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e98"
          }
        ],
        "disc_number": 1,
        "duration_ms": 200906,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/0d2jEkvq1aUlQlpin2slC8",
        "id": "0d2jEkvq1aUlQlpin2slC8",
        "is_local": false,
        "is_playable": true,
        "name": "I'm Wishing/One Song",
        "popularity": 60,
        "preview_url": null,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:0d2jEkvq1aUlQlpin2slC8",
        "_id": "65aff9ded6fd888b4c686e97"
      },
      {
        "external_ids": {
          "isrc": "USWD10525604"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/62kKo1gIWTfZEyAks2NV7F"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e9a"
          }
        ],
        "disc_number": 1,
        "duration_ms": 90026,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/62kKo1gIWTfZEyAks2NV7F",
        "id": "62kKo1gIWTfZEyAks2NV7F",
        "is_local": false,
        "is_playable": true,
        "name": "You'll Be In My Heart - Instrumental",
        "popularity": 57,
        "preview_url": null,
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:62kKo1gIWTfZEyAks2NV7F",
        "_id": "65aff9ded6fd888b4c686e99"
      },
      {
        "external_ids": {
          "isrc": "USWD10525581"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1eOkJKTffWqoM7pQmO8gKA"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e9c"
          }
        ],
        "disc_number": 1,
        "duration_ms": 84160,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1eOkJKTffWqoM7pQmO8gKA",
        "id": "1eOkJKTffWqoM7pQmO8gKA",
        "is_local": false,
        "is_playable": true,
        "name": "Can You Feel the Love Tonight - Instrumental",
        "popularity": 58,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1eOkJKTffWqoM7pQmO8gKA",
        "_id": "65aff9ded6fd888b4c686e9b"
      },
      {
        "external_ids": {
          "isrc": "USWD11993393"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1KB9t6oaVG99L1DIkMfyrx"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686e9e"
          },
          {
            "_id": "65aff9ded6fd888b4c686e9f"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea0"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea1"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea2"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea3"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea4"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea5"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea6"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea7"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea8"
          },
          {
            "_id": "65aff9ded6fd888b4c686ea9"
          },
          {
            "_id": "65aff9ded6fd888b4c686eaa"
          }
        ],
        "disc_number": 1,
        "duration_ms": 209628,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1KB9t6oaVG99L1DIkMfyrx",
        "id": "1KB9t6oaVG99L1DIkMfyrx",
        "is_local": false,
        "is_playable": true,
        "name": "Break This Down",
        "popularity": 59,
        "preview_url": null,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:1KB9t6oaVG99L1DIkMfyrx",
        "_id": "65aff9ded6fd888b4c686e9d"
      },
      {
        "external_ids": {
          "isrc": "USWD11993390"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3doNvO8zrwzcM0PJrcn8Rb"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686eac"
          },
          {
            "_id": "65aff9ded6fd888b4c686ead"
          },
          {
            "_id": "65aff9ded6fd888b4c686eae"
          },
          {
            "_id": "65aff9ded6fd888b4c686eaf"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb0"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb1"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb2"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb3"
          }
        ],
        "disc_number": 1,
        "duration_ms": 188217,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/3doNvO8zrwzcM0PJrcn8Rb",
        "id": "3doNvO8zrwzcM0PJrcn8Rb",
        "is_local": false,
        "is_playable": true,
        "name": "Night Falls",
        "popularity": 65,
        "preview_url": null,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:3doNvO8zrwzcM0PJrcn8Rb",
        "_id": "65aff9ded6fd888b4c686eab"
      },
      {
        "external_ids": {
          "isrc": "USWD11779702"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2ziVTVizQdVNC2QhQhNGvg"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686eb5"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb6"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb7"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb8"
          },
          {
            "_id": "65aff9ded6fd888b4c686eb9"
          }
        ],
        "disc_number": 1,
        "duration_ms": 218005,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/2ziVTVizQdVNC2QhQhNGvg",
        "id": "2ziVTVizQdVNC2QhQhNGvg",
        "is_local": false,
        "is_playable": true,
        "name": "Ways to Be Wicked",
        "popularity": 65,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2ziVTVizQdVNC2QhQhNGvg",
        "_id": "65aff9ded6fd888b4c686eb4"
      },
      {
        "external_ids": {
          "isrc": "USWD11571326"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7I80zTBTDNnbOiJQ0JLjZr"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ebb"
          },
          {
            "_id": "65aff9ded6fd888b4c686ebc"
          },
          {
            "_id": "65aff9ded6fd888b4c686ebd"
          },
          {
            "_id": "65aff9ded6fd888b4c686ebe"
          },
          {
            "_id": "65aff9ded6fd888b4c686ebf"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec0"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec1"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec2"
          }
        ],
        "disc_number": 1,
        "duration_ms": 174173,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/7I80zTBTDNnbOiJQ0JLjZr",
        "id": "7I80zTBTDNnbOiJQ0JLjZr",
        "is_local": false,
        "is_playable": true,
        "name": "Set it Off",
        "popularity": 58,
        "preview_url": null,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:7I80zTBTDNnbOiJQ0JLjZr",
        "_id": "65aff9ded6fd888b4c686eba"
      },
      {
        "external_ids": {
          "isrc": "USWD11779697"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5AiD2doxfh5xlfkNc63WPV"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ec4"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec5"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec6"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec7"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec8"
          },
          {
            "_id": "65aff9ded6fd888b4c686ec9"
          },
          {
            "_id": "65aff9ded6fd888b4c686eca"
          }
        ],
        "disc_number": 1,
        "duration_ms": 212352,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/5AiD2doxfh5xlfkNc63WPV",
        "id": "5AiD2doxfh5xlfkNc63WPV",
        "is_local": false,
        "is_playable": true,
        "name": "You and Me",
        "popularity": 62,
        "preview_url": null,
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:5AiD2doxfh5xlfkNc63WPV",
        "_id": "65aff9ded6fd888b4c686ec3"
      },
      {
        "external_ids": {
          "isrc": "USWD12096141"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1LAZLRBcK45jRCATsOxBr4"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ecc"
          },
          {
            "_id": "65aff9ded6fd888b4c686ecd"
          },
          {
            "_id": "65aff9ded6fd888b4c686ece"
          },
          {
            "_id": "65aff9ded6fd888b4c686ecf"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed0"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed1"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed2"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed3"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed4"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed5"
          }
        ],
        "disc_number": 1,
        "duration_ms": 142609,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1LAZLRBcK45jRCATsOxBr4",
        "id": "1LAZLRBcK45jRCATsOxBr4",
        "is_local": false,
        "is_playable": true,
        "name": "We Own the Night/Night Falls Mashup",
        "popularity": 50,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1LAZLRBcK45jRCATsOxBr4",
        "_id": "65aff9ded6fd888b4c686ecb"
      },
      {
        "external_ids": {
          "isrc": "USWD11995703"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1u6EFa4RLVRYH23FUsKe6B"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ed7"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed8"
          },
          {
            "_id": "65aff9ded6fd888b4c686ed9"
          },
          {
            "_id": "65aff9ded6fd888b4c686eda"
          },
          {
            "_id": "65aff9ded6fd888b4c686edb"
          }
        ],
        "disc_number": 1,
        "duration_ms": 156843,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/1u6EFa4RLVRYH23FUsKe6B",
        "id": "1u6EFa4RLVRYH23FUsKe6B",
        "is_local": false,
        "is_playable": true,
        "name": "Call to the Wild",
        "popularity": 59,
        "preview_url": null,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:1u6EFa4RLVRYH23FUsKe6B",
        "_id": "65aff9ded6fd888b4c686ed6"
      },
      {
        "external_ids": {
          "isrc": "USWD11995705"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/72SvoAUIQnaPJIzEspcgW6"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686edd"
          },
          {
            "_id": "65aff9ded6fd888b4c686ede"
          },
          {
            "_id": "65aff9ded6fd888b4c686edf"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee0"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee1"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee2"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee3"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee4"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee5"
          }
        ],
        "disc_number": 1,
        "duration_ms": 213983,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/72SvoAUIQnaPJIzEspcgW6",
        "id": "72SvoAUIQnaPJIzEspcgW6",
        "is_local": false,
        "is_playable": true,
        "name": "Flesh & Bone",
        "popularity": 60,
        "preview_url": null,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:72SvoAUIQnaPJIzEspcgW6",
        "_id": "65aff9ded6fd888b4c686edc"
      },
      {
        "external_ids": {
          "isrc": "USWD12214268"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5MF6bAKq8VbYQuNw7vuvb7"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ee7"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee8"
          },
          {
            "_id": "65aff9ded6fd888b4c686ee9"
          },
          {
            "_id": "65aff9ded6fd888b4c686eea"
          }
        ],
        "disc_number": 1,
        "duration_ms": 170458,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/5MF6bAKq8VbYQuNw7vuvb7",
        "id": "5MF6bAKq8VbYQuNw7vuvb7",
        "is_local": false,
        "is_playable": true,
        "name": "Ain't No Doubt About It",
        "popularity": 58,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5MF6bAKq8VbYQuNw7vuvb7",
        "_id": "65aff9ded6fd888b4c686ee6"
      },
      {
        "external_ids": {
          "isrc": "USWD11785002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2d1AiZExnhYoauaSWkB1Fm"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686eec"
          },
          {
            "_id": "65aff9ded6fd888b4c686eed"
          },
          {
            "_id": "65aff9ded6fd888b4c686eee"
          },
          {
            "_id": "65aff9ded6fd888b4c686eef"
          }
        ],
        "disc_number": 1,
        "duration_ms": 183799,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/2d1AiZExnhYoauaSWkB1Fm",
        "id": "2d1AiZExnhYoauaSWkB1Fm",
        "is_local": false,
        "is_playable": true,
        "name": "Someday",
        "popularity": 66,
        "preview_url": null,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:2d1AiZExnhYoauaSWkB1Fm",
        "_id": "65aff9ded6fd888b4c686eeb"
      },
      {
        "external_ids": {
          "isrc": "USWD12214267"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0pNzaDt5Bey6LWbCZZzUYK"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ef1"
          },
          {
            "_id": "65aff9ded6fd888b4c686ef2"
          }
        ],
        "disc_number": 1,
        "duration_ms": 240984,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/0pNzaDt5Bey6LWbCZZzUYK",
        "id": "0pNzaDt5Bey6LWbCZZzUYK",
        "is_local": false,
        "is_playable": true,
        "name": "Alien Invasion",
        "popularity": 58,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0pNzaDt5Bey6LWbCZZzUYK",
        "_id": "65aff9ded6fd888b4c686ef0"
      },
      {
        "external_ids": {
          "isrc": "USWD11995701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6PSN0NJHzkCmNWGpF6yDsj"
        },
        "artists": [
          {
            "_id": "65aff9ded6fd888b4c686ef4"
          },
          {
            "_id": "65aff9ded6fd888b4c686ef5"
          },
          {
            "_id": "65aff9ded6fd888b4c686ef6"
          },
          {
            "_id": "65aff9ded6fd888b4c686ef7"
          },
          {
            "_id": "65aff9ded6fd888b4c686ef8"
          },
          {
            "_id": "65aff9ded6fd888b4c686ef9"
          }
        ],
        "disc_number": 1,
        "duration_ms": 123411,
        "explicit": false,
        "href": "https://api.spotify.com/v1/tracks/6PSN0NJHzkCmNWGpF6yDsj",
        "id": "6PSN0NJHzkCmNWGpF6yDsj",
        "is_local": false,
        "is_playable": true,
        "name": "Like the Zombies Do",
        "popularity": 59,
        "preview_url": null,
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:6PSN0NJHzkCmNWGpF6yDsj",
        "_id": "65aff9ded6fd888b4c686ef3"
      }
    ],
    "__v": 0
  }
]