import React, { createContext ,useState} from "react";
import axios from "axios";

const url='https://www.googleapis.com/customsearch/v1?key=AIzaSyCVxaYbuG83qNrA_ZY3335kMrT6F5ZQZ2s&cx=3457a841d725a4cc6&q=armaan'
export const GoogleDataContext=createContext()

export const GoogleState=({children})=>{
    const [Result, setResult] = useState('armaan');
    const [data, setdata] = useState({
        "kind": "customsearch#search",
        "url": {
          "type": "application/json",
          "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
        },
        "queries": {
          "request": [
            {
              "title": "Google Custom Search - armaan",
              "totalResults": "21700000",
              "searchTerms": "armaan",
              "count": 10,
              "startIndex": 1,
              "inputEncoding": "utf8",
              "outputEncoding": "utf8",
              "safe": "off",
              "cx": "3457a841d725a4cc6"
            }
          ],
          "nextPage": [
            {
              "title": "Google Custom Search - armaan",
              "totalResults": "21700000",
              "searchTerms": "armaan",
              "count": 10,
              "startIndex": 11,
              "inputEncoding": "utf8",
              "outputEncoding": "utf8",
              "safe": "off",
              "cx": "3457a841d725a4cc6"
            }
          ]
        },
        "context": {
          "title": "googli"
        },
        "searchInformation": {
          "searchTime": 0.514645,
          "formattedSearchTime": "0.51",
          "totalResults": "21700000",
          "formattedTotalResults": "21,700,000"
        },
        "items": [
          {
            "kind": "customsearch#result",
            "title": "Armaan (2003 film) - Wikipedia",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e (2003 film) - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Armaan_(2003_film)",
            "displayLink": "en.wikipedia.org",
            "snippet": "Armaan ( transl. Desire) is a 2003 Indian Hindi-language medical drama film that was co-written and directed by Honey Irani. Starring the ensemble cast of ...",
            "htmlSnippet": "\u003cb\u003eArmaan\u003c/b\u003e ( transl. Desire) is a 2003 Indian Hindi-language medical drama film that was co-written and directed by Honey Irani. Starring the ensemble cast of&nbsp;...",
            "cacheId": "yCj9AHxpedkJ",
            "formattedUrl": "https://en.wikipedia.org/wiki/Armaan_(2003_film)",
            "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eArmaan\u003c/b\u003e_(2003_film)",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdhv1hsF455jGg2bFzLK8vbfnmg1BV2YJsLogRxhLAu_fy2OomEDg8hbg",
                  "width": "188",
                  "height": "268"
                }
              ],
              "metatags": [
                {
                  "referrer": "origin",
                  "og:image": "https://upload.wikimedia.org/wikipedia/en/d/d0/Armaan.jpg",
                  "theme-color": "#eaecf0",
                  "og:image:width": "1200",
                  "og:type": "website",
                  "viewport": "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
                  "og:title": "Armaan (2003 film) - Wikipedia",
                  "og:image:height": "1707",
                  "format-detection": "telephone=no"
                }
              ],
              "cse_image": [
                {
                  "src": "https://upload.wikimedia.org/wikipedia/en/d/d0/Armaan.jpg"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "Armaan (2003) - IMDb",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e (2003) - IMDb",
            "link": "https://www.imdb.com/title/tt0331851/",
            "displayLink": "www.imdb.com",
            "snippet": "Armaan is a story woven around a hospital in a town called 'Chandipur' which I suspect has been the land of many other films. But what makes Armaan's 'Chandipur ...",
            "htmlSnippet": "\u003cb\u003eArmaan\u003c/b\u003e is a story woven around a hospital in a town called &#39;Chandipur&#39; which I suspect has been the land of many other films. But what makes \u003cb\u003eArmaan&#39;s\u003c/b\u003e &#39;Chandipur&nbsp;...",
            "cacheId": "0lYY7qtTgDEJ",
            "formattedUrl": "https://www.imdb.com/title/tt0331851/",
            "htmlFormattedUrl": "https://www.imdb.com/title/tt0331851/",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROOojjKn55ZJf0xW8uoYAeDXCjeuZ7PjPaJ8yo-RKiyynTId99sVxxYoI",
                  "width": "187",
                  "height": "270"
                }
              ],
              "metatags": [
                {
                  "og:image": "https://m.media-amazon.com/images/M/MV5BYmY4MGEzMTktZDI3OC00NzIzLWE1ZDItNjkxNTg0MmE3MmExXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
                  "og:type": "video.movie",
                  "og:image:width": "1000",
                  "twitter:title": "Armaan (2003) - IMDb",
                  "twitter:card": "summary_large_image",
                  "imdb:subpagetype": "main",
                  "og:site_name": "IMDb",
                  "og:title": "Armaan (2003) - IMDb",
                  "imdb:pageconst": "tt0331851",
                  "og:image:height": "1443.6958614051973",
                  "og:description": "Armaan: Directed by Honey Irani. With Amitabh Bachchan, Anil Kapoor, Preity Zinta, Gracy Singh. Dr. Siddharth Sinha is a dedicated selfless doctor who dreams of building a state-of-the-art hospital with all the modern instruments and amenities for patient care . His foster son Akash shares his dream . Akash falls in love with Neha Mathur , an anaesthetist in the same hospital . In a friend's party , Akash meets Sonia who is a spoilt daughter of a millionaire Gulshan Kapoor . Sonia develops an infatuation for Akash . Gulshan Kapoor proposes to Dr. Siddharth Sinha that he will donate a big sum of money to his hospital , on the condition that Akash marries Sonia . Dr. Siddharth Sinha declines but dies of a heart attack a few days later . Burdened with fulfilling his father's dream , Akash decides to marry Sonia sacrificing his own love . But even after marriage Sonia is jealous of Neha and constantly accuses Akash of infidelity which leaves him in a dilemma , torn between two women .",
                  "twitter:image": "https://m.media-amazon.com/images/M/MV5BYmY4MGEzMTktZDI3OC00NzIzLWE1ZDItNjkxNTg0MmE3MmExXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
                  "next-head-count": "36",
                  "twitter:image:alt": "Armaan: Directed by Honey Irani. With Amitabh Bachchan, Anil Kapoor, Preity Zinta, Gracy Singh. Dr. Siddharth Sinha is a dedicated selfless doctor who dreams of building a state-of-the-art hospital with all the modern instruments and amenities for patient care . His foster son Akash shares his dream . Akash falls in love with Neha Mathur , an anaesthetist in the same hospital . In a friend's party , Akash meets Sonia who is a spoilt daughter of a millionaire Gulshan Kapoor . Sonia develops an infatuation for Akash . Gulshan Kapoor proposes to Dr. Siddharth Sinha that he will donate a big sum of money to his hospital , on the condition that Akash marries Sonia . Dr. Siddharth Sinha declines but dies of a heart attack a few days later . Burdened with fulfilling his father's dream , Akash decides to marry Sonia sacrificing his own love . But even after marriage Sonia is jealous of Neha and constantly accuses Akash of infidelity which leaves him in a dilemma , torn between two women .",
                  "twitter:site": "@IMDb",
                  "og:locale:alternate": "es_ES",
                  "viewport": "width=device-width",
                  "twitter:description": "Armaan: Directed by Honey Irani. With Amitabh Bachchan, Anil Kapoor, Preity Zinta, Gracy Singh. Dr. Siddharth Sinha is a dedicated selfless doctor who dreams of building a state-of-the-art hospital with all the modern instruments and amenities for patient care . His foster son Akash shares his dream . Akash falls in love with Neha Mathur , an anaesthetist in the same hospital . In a friend's party , Akash meets Sonia who is a spoilt daughter of a millionaire Gulshan Kapoor . Sonia develops an infatuation for Akash . Gulshan Kapoor proposes to Dr. Siddharth Sinha that he will donate a big sum of money to his hospital , on the condition that Akash marries Sonia . Dr. Siddharth Sinha declines but dies of a heart attack a few days later . Burdened with fulfilling his father's dream , Akash decides to marry Sonia sacrificing his own love . But even after marriage Sonia is jealous of Neha and constantly accuses Akash of infidelity which leaves him in a dilemma , torn between two women .",
                  "og:locale": "en_US",
                  "og:url": "https://www.imdb.com/title/tt0331851/",
                  "imdb:pagetype": "title"
                }
              ],
              "cse_image": [
                {
                  "src": "https://m.media-amazon.com/images/M/MV5BYmY4MGEzMTktZDI3OC00NzIzLWE1ZDItNjkxNTg0MmE3MmExXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "ARMAAN MALIK (@armaanmalik) • Instagram photos and videos",
            "htmlTitle": "\u003cb\u003eARMAAN\u003c/b\u003e MALIK (@armaanmalik) • Instagram photos and videos",
            "link": "https://www.instagram.com/armaanmalik/?hl=en",
            "displayLink": "www.instagram.com",
            "snippet": "13.1m Followers, 606 Following, 618 Posts - See Instagram photos and videos from ARMAAN MALIK (@armaanmalik)",
            "htmlSnippet": "13.1m Followers, 606 Following, 618 Posts - See Instagram photos and videos from \u003cb\u003eARMAAN\u003c/b\u003e MALIK (@armaanmalik)",
            "formattedUrl": "https://www.instagram.com/armaanmalik/?hl=en",
            "htmlFormattedUrl": "https://www.instagram.com/\u003cb\u003earmaan\u003c/b\u003emalik/?hl=en",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT73tnWAdQf3qZ4lGpjtsORsaBkANft6QO7W6q7VVVh4qV7E5-fG7n63Ak",
                  "width": "201",
                  "height": "251"
                }
              ],
              "xfn": [
                {}
              ],
              "metatags": [
                {
                  "og:image": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/289677092_171498328621719_1569816291300625005_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=Ico1khzqe0QAX9hbO8Z&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AT8T9ZsrTXiOe44EdyvPmHa0DlKjK9jz5gDUri3R22P8Bg&oe=630810A0&_nc_sid=7bff83",
                  "theme-color": "#ffffff",
                  "og:type": "profile",
                  "al:ios:app_name": "Instagram",
                  "og:title": "ARMAAN MALIK 🧿's (@armaanmalik) Instagram profile • 618 photos and videos",
                  "al:android:package": "com.instagram.android",
                  "al:ios:url": "instagram://user?username=armaanmalik",
                  "og:description": "13.1m Followers, 606 Following, 618 Posts - See Instagram photos and videos from ARMAAN MALIK 🧿 (@armaanmalik)",
                  "al:ios:app_store_id": "389801252",
                  "al:android:url": "https://www.instagram.com/_u/armaanmalik/",
                  "apple-mobile-web-app-status-bar-style": "default",
                  "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
                  "mobile-web-app-capable": "yes",
                  "og:url": "https://www.instagram.com/armaanmalik/",
                  "al:android:app_name": "Instagram"
                }
              ],
              "cse_image": [
                {
                  "src": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2898664299489691294"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "Armaan Malik - Wikipedia",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e Malik - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/Armaan_Malik",
            "displayLink": "en.wikipedia.org",
            "snippet": "Armaan Malik (born 22 July 1995) is an Indian singer-songwriter, record producer, voice-over, performer, dancer and actor. ... He is known for his singing in ...",
            "htmlSnippet": "\u003cb\u003eArmaan\u003c/b\u003e Malik (born 22 July 1995) is an Indian singer-songwriter, record producer, voice-over, performer, dancer and actor. ... He is known for his singing in&nbsp;...",
            "cacheId": "VdfePHZoqQUJ",
            "formattedUrl": "https://en.wikipedia.org/wiki/Armaan_Malik",
            "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eArmaan\u003c/b\u003e_Malik",
            "pagemap": {
              "hcard": [
                {
                  "note": "VocalsGuitarFalsetto",
                  "role": "Playback Singer, Songwriter, Record Producer, Guitarist, Voice-over",
                  "bday": "1995-07-22",
                  "fn": "Armaan Malik"
                }
              ],
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHfC2rHXVoEWPW9tpBxEM4EkPKoxG0qMiOg7Rtoob_ef-F-dPMYaS2utB",
                  "width": "206",
                  "height": "245"
                }
              ],
              "person": [
                {
                  "role": "Playback Singer, Songwriter, Record Producer, Guitarist, Voice-over"
                }
              ],
              "metatags": [
                {
                  "referrer": "origin",
                  "og:image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Armaan_Malik_2016.jpg",
                  "theme-color": "#eaecf0",
                  "og:image:width": "1200",
                  "og:type": "website",
                  "viewport": "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
                  "og:title": "Armaan Malik - Wikipedia",
                  "og:image:height": "1422",
                  "format-detection": "telephone=no"
                }
              ],
              "cse_image": [
                {
                  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Armaan_Malik_2016.jpg/220px-Armaan_Malik_2016.jpg"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "ARMAAN MALIK (@ArmaanMalik22) / Twitter",
            "htmlTitle": "\u003cb\u003eARMAAN\u003c/b\u003e MALIK (@ArmaanMalik22) / Twitter",
            "link": "https://twitter.com/armaanmalik22",
            "displayLink": "twitter.com",
            "snippet": "to finally meeting him, talking about music and life and watching him live in concert. Thank you Ed for being so warm and humble, what a beautiful night ...",
            "htmlSnippet": "to finally meeting him, talking about music and life and watching him live in concert. Thank you Ed for being so warm and humble, what a beautiful night&nbsp;...",
            "cacheId": "JL6vGAgHDQsJ",
            "formattedUrl": "https://twitter.com/armaanmalik22",
            "htmlFormattedUrl": "https://twitter.com/\u003cb\u003earmaan\u003c/b\u003emalik22",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRnd9BeGBKsYJ9fd-a50P15RVcIMgvZPNSeXbDBtylGQUBHgIjmBACd",
                  "width": "48",
                  "height": "48"
                }
              ],
              "imageobject": [
                {
                  "contenturl": "https://pbs.twimg.com/media/FZdUzY0XkAAUGKP.jpg",
                  "width": "1440",
                  "caption": "Image",
                  "thumbnailurl": "https://pbs.twimg.com/media/FZdUzY0XkAAUGKP?format=jpg&name=thumb"
                },
                {
                  "contenturl": "https://pbs.twimg.com/media/FZdUzY5X0AAGvRI.jpg",
                  "width": "1440",
                  "caption": "Image",
                  "thumbnailurl": "https://pbs.twimg.com/media/FZdUzY5X0AAGvRI?format=jpg&name=thumb"
                },
                {
                  "contenturl": "https://pbs.twimg.com/media/FZdUzY2WIAAqzgX.jpg",
                  "width": "1440",
                  "caption": "Image",
                  "thumbnailurl": "https://pbs.twimg.com/media/FZdUzY2WIAAqzgX?format=jpg&name=thumb"
                },
                {
                  "contenturl": "https://pbs.twimg.com/media/FZdUzY4WIAEOOig.jpg",
                  "width": "1440",
                  "caption": "Image",
                  "thumbnailurl": "https://pbs.twimg.com/media/FZdUzY4WIAEOOig?format=jpg&name=thumb"
                },
                {
                  "contenturl": "https://pbs.twimg.com/media/FaiO90cUcAAJkXn.jpg",
                  "width": "1152",
                  "caption": "Image",
                  "thumbnailurl": "https://pbs.twimg.com/media/FaiO90cUcAAJkXn?format=jpg&name=thumb"
                }
              ],
              "person": [
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                },
                {
                  "identifier": "298917410",
                  "givenname": "ARMAAN MALIK 🦋",
                  "disambiguatingdescription": "verified",
                  "additionalname": "ArmaanMalik22"
                }
              ],
              "interactioncounter": [
                {
                  "userinteractioncount": "3330",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1555805443330609152/likes"
                },
                {
                  "userinteractioncount": "542",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1555805443330609152/retweets"
                },
                {
                  "userinteractioncount": "57",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1555805443330609152/retweets/with_comments"
                },
                {
                  "userinteractioncount": "275",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1555805443330609152"
                },
                {
                  "userinteractioncount": "533",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663462648262659/likes"
                },
                {
                  "userinteractioncount": "102",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663462648262659/retweets"
                },
                {
                  "userinteractioncount": "6",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663462648262659/retweets/with_comments"
                },
                {
                  "userinteractioncount": "131",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663462648262659"
                },
                {
                  "userinteractioncount": "285",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663288442040321/likes"
                },
                {
                  "userinteractioncount": "65",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663288442040321/retweets"
                },
                {
                  "userinteractioncount": "4",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663288442040321/retweets/with_comments"
                },
                {
                  "userinteractioncount": "77",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663288442040321"
                },
                {
                  "userinteractioncount": "329",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660731283943425/likes"
                },
                {
                  "userinteractioncount": "82",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660731283943425/retweets"
                },
                {
                  "userinteractioncount": "3",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660731283943425/retweets/with_comments"
                },
                {
                  "userinteractioncount": "361",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660731283943425"
                },
                {
                  "userinteractioncount": "308",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660251975684097/likes"
                },
                {
                  "userinteractioncount": "81",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660251975684097/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660251975684097/retweets/with_comments"
                },
                {
                  "userinteractioncount": "184",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660251975684097"
                },
                {
                  "userinteractioncount": "302",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659725905043456/likes"
                },
                {
                  "userinteractioncount": "84",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659725905043456/retweets"
                },
                {
                  "userinteractioncount": "3",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659725905043456/retweets/with_comments"
                },
                {
                  "userinteractioncount": "176",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659725905043456"
                },
                {
                  "userinteractioncount": "290",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659505855152133/likes"
                },
                {
                  "userinteractioncount": "81",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659505855152133/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659505855152133/retweets/with_comments"
                },
                {
                  "userinteractioncount": "101",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659505855152133"
                },
                {
                  "userinteractioncount": "327",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659054107566082/likes"
                },
                {
                  "userinteractioncount": "87",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659054107566082/retweets"
                },
                {
                  "userinteractioncount": "2",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659054107566082/retweets/with_comments"
                },
                {
                  "userinteractioncount": "172",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659054107566082"
                },
                {
                  "userinteractioncount": "278",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658787240775682/likes"
                },
                {
                  "userinteractioncount": "74",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658787240775682/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658787240775682/retweets/with_comments"
                },
                {
                  "userinteractioncount": "99",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658787240775682"
                },
                {
                  "userinteractioncount": "276",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658710136901633/likes"
                },
                {
                  "userinteractioncount": "68",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658710136901633/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658710136901633/retweets/with_comments"
                },
                {
                  "userinteractioncount": "63",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658710136901633"
                },
                {
                  "userinteractioncount": "291",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658449184092163/likes"
                },
                {
                  "userinteractioncount": "70",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658449184092163/retweets"
                },
                {
                  "userinteractioncount": "4",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658449184092163/retweets/with_comments"
                },
                {
                  "userinteractioncount": "133",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658449184092163"
                },
                {
                  "userinteractioncount": "263",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658347455434758/likes"
                },
                {
                  "userinteractioncount": "72",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658347455434758/retweets"
                },
                {
                  "userinteractioncount": "0",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658347455434758/retweets/with_comments"
                },
                {
                  "userinteractioncount": "53",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658347455434758"
                },
                {
                  "userinteractioncount": "280",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658095524589572/likes"
                },
                {
                  "userinteractioncount": "70",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658095524589572/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658095524589572/retweets/with_comments"
                },
                {
                  "userinteractioncount": "115",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658095524589572"
                },
                {
                  "userinteractioncount": "303",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560657784282050562/likes"
                },
                {
                  "userinteractioncount": "79",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560657784282050562/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560657784282050562/retweets/with_comments"
                },
                {
                  "userinteractioncount": "140",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560657784282050562"
                },
                {
                  "userinteractioncount": "320",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656658887426049/likes"
                },
                {
                  "userinteractioncount": "79",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656658887426049/retweets"
                },
                {
                  "userinteractioncount": "0",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656658887426049/retweets/with_comments"
                },
                {
                  "userinteractioncount": "249",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656658887426049"
                },
                {
                  "userinteractioncount": "359",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656441630810112/likes"
                },
                {
                  "userinteractioncount": "87",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656441630810112/retweets"
                },
                {
                  "userinteractioncount": "2",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656441630810112/retweets/with_comments"
                },
                {
                  "userinteractioncount": "157",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656441630810112"
                },
                {
                  "userinteractioncount": "296",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656272415793153/likes"
                },
                {
                  "userinteractioncount": "81",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656272415793153/retweets"
                },
                {
                  "userinteractioncount": "0",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656272415793153/retweets/with_comments"
                },
                {
                  "userinteractioncount": "91",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656272415793153"
                },
                {
                  "userinteractioncount": "295",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655923336454145/likes"
                },
                {
                  "userinteractioncount": "70",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655923336454145/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655923336454145/retweets/with_comments"
                },
                {
                  "userinteractioncount": "151",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655923336454145"
                },
                {
                  "userinteractioncount": "316",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655420997263362/likes"
                },
                {
                  "userinteractioncount": "94",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655420997263362/retweets"
                },
                {
                  "userinteractioncount": "6",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655420997263362/retweets/with_comments"
                },
                {
                  "userinteractioncount": "210",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655420997263362"
                },
                {
                  "userinteractioncount": "337",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654884239642625/likes"
                },
                {
                  "userinteractioncount": "84",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654884239642625/retweets"
                },
                {
                  "userinteractioncount": "4",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654884239642625/retweets/with_comments"
                },
                {
                  "userinteractioncount": "220",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654884239642625"
                },
                {
                  "userinteractioncount": "447",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654485231325185/likes"
                },
                {
                  "userinteractioncount": "120",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654485231325185/retweets"
                },
                {
                  "userinteractioncount": "18",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654485231325185/retweets/with_comments"
                },
                {
                  "userinteractioncount": "208",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654485231325185"
                },
                {
                  "userinteractioncount": "319",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653718416109568/likes"
                },
                {
                  "userinteractioncount": "83",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653718416109568/retweets"
                },
                {
                  "userinteractioncount": "2",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653718416109568/retweets/with_comments"
                },
                {
                  "userinteractioncount": "265",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653718416109568"
                },
                {
                  "userinteractioncount": "317",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653372763488256/likes"
                },
                {
                  "userinteractioncount": "87",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653372763488256/retweets"
                },
                {
                  "userinteractioncount": "4",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653372763488256/retweets/with_comments"
                },
                {
                  "userinteractioncount": "174",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653372763488256"
                },
                {
                  "userinteractioncount": "336",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652745689812994/likes"
                },
                {
                  "userinteractioncount": "84",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652745689812994/retweets"
                },
                {
                  "userinteractioncount": "2",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652745689812994/retweets/with_comments"
                },
                {
                  "userinteractioncount": "238",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652745689812994"
                },
                {
                  "userinteractioncount": "309",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652457851510790/likes"
                },
                {
                  "userinteractioncount": "85",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652457851510790/retweets"
                },
                {
                  "userinteractioncount": "0",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652457851510790/retweets/with_comments"
                },
                {
                  "userinteractioncount": "152",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652457851510790"
                },
                {
                  "userinteractioncount": "322",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652371411095552/likes"
                },
                {
                  "userinteractioncount": "85",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652371411095552/retweets"
                },
                {
                  "userinteractioncount": "0",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652371411095552/retweets/with_comments"
                },
                {
                  "userinteractioncount": "101",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652371411095552"
                },
                {
                  "userinteractioncount": "308",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651909706354688/likes"
                },
                {
                  "userinteractioncount": "86",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651909706354688/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651909706354688/retweets/with_comments"
                },
                {
                  "userinteractioncount": "170",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651909706354688"
                },
                {
                  "userinteractioncount": "320",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651834384982017/likes"
                },
                {
                  "userinteractioncount": "91",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651834384982017/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651834384982017/retweets/with_comments"
                },
                {
                  "userinteractioncount": "72",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651834384982017"
                },
                {
                  "userinteractioncount": "280",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651668152233990/likes"
                },
                {
                  "userinteractioncount": "75",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651668152233990/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651668152233990/retweets/with_comments"
                },
                {
                  "userinteractioncount": "83",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651668152233990"
                },
                {
                  "userinteractioncount": "315",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651615660429312/likes"
                },
                {
                  "userinteractioncount": "84",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651615660429312/retweets"
                },
                {
                  "userinteractioncount": "5",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651615660429312/retweets/with_comments"
                },
                {
                  "userinteractioncount": "82",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651615660429312"
                },
                {
                  "userinteractioncount": "309",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651123735703557/likes"
                },
                {
                  "userinteractioncount": "85",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651123735703557/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651123735703557/retweets/with_comments"
                },
                {
                  "userinteractioncount": "155",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651123735703557"
                },
                {
                  "userinteractioncount": "303",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650815013957632/likes"
                },
                {
                  "userinteractioncount": "85",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650815013957632/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650815013957632/retweets/with_comments"
                },
                {
                  "userinteractioncount": "99",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650815013957632"
                },
                {
                  "userinteractioncount": "610",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650562214850561/likes"
                },
                {
                  "userinteractioncount": "124",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650562214850561/retweets"
                },
                {
                  "userinteractioncount": "15",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650562214850561/retweets/with_comments"
                },
                {
                  "userinteractioncount": "470",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650562214850561"
                },
                {
                  "userinteractioncount": "589",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560637932909772801/likes"
                },
                {
                  "userinteractioncount": "115",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560637932909772801/retweets"
                },
                {
                  "userinteractioncount": "4",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560637932909772801/retweets/with_comments"
                },
                {
                  "userinteractioncount": "119",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560637932909772801"
                },
                {
                  "userinteractioncount": "1909",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560523779813822464/likes"
                },
                {
                  "userinteractioncount": "324",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560523779813822464/retweets"
                },
                {
                  "userinteractioncount": "21",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560523779813822464/retweets/with_comments"
                },
                {
                  "userinteractioncount": "238",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560523779813822464"
                },
                {
                  "userinteractioncount": "1325",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361453848145921/likes"
                },
                {
                  "userinteractioncount": "170",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361453848145921/retweets"
                },
                {
                  "userinteractioncount": "6",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361453848145921/retweets/with_comments"
                },
                {
                  "userinteractioncount": "125",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361453848145921"
                },
                {
                  "userinteractioncount": "446",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361048837763072/likes"
                },
                {
                  "userinteractioncount": "111",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361048837763072/retweets"
                },
                {
                  "userinteractioncount": "2",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361048837763072/retweets/with_comments"
                },
                {
                  "userinteractioncount": "19",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361048837763072"
                },
                {
                  "userinteractioncount": "446",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359964668858368/likes"
                },
                {
                  "userinteractioncount": "103",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359964668858368/retweets"
                },
                {
                  "userinteractioncount": "4",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359964668858368/retweets/with_comments"
                },
                {
                  "userinteractioncount": "68",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359964668858368"
                },
                {
                  "userinteractioncount": "443",
                  "interactiontype": "https://schema.org/LikeAction",
                  "name": "Likes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359819919298560/likes"
                },
                {
                  "userinteractioncount": "92",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Retweets",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359819919298560/retweets"
                },
                {
                  "userinteractioncount": "1",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Quotes",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359819919298560/retweets/with_comments"
                },
                {
                  "userinteractioncount": "16",
                  "interactiontype": "https://schema.org/InteractAction",
                  "name": "Replies",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359819919298560"
                }
              ],
              "metatags": [
                {
                  "og:image": "https://pbs.twimg.com/profile_images/1540220963245154304/hUN8xbHJ_normal.jpg",
                  "theme-color": "#ffffff",
                  "og:type": "profile",
                  "og:site_name": "Twitter",
                  "al:ios:app_name": "Twitter",
                  "apple-mobile-web-app-title": "Twitter",
                  "og:title": "ARMAAN MALIK 🦋 (@ArmaanMalik22) / Twitter",
                  "al:android:package": "com.twitter.android",
                  "al:ios:url": "twitter://user?screen_name=ArmaanMalik22",
                  "og:description": "Tu/You out now:",
                  "al:ios:app_store_id": "333903271",
                  "facebook-domain-verification": "x6sdcc8b5ju3bh8nbm59eswogvg6t1",
                  "al:android:url": "twitter://user?screen_name=ArmaanMalik22",
                  "fb:app_id": "2231777543",
                  "apple-mobile-web-app-status-bar-style": "white",
                  "viewport": "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover",
                  "mobile-web-app-capable": "yes",
                  "og:url": "https://twitter.com/ArmaanMalik22",
                  "al:android:app_name": "Twitter"
                }
              ],
              "collection": [
                {
                  "name": "Profile Tweets"
                }
              ],
              "creativework": [
                {
                  "name": "Expanded Tweet URLs",
                  "url": "https://t.co/x8chCRzTw2"
                },
                {
                  "name": "Expanded Tweet URLs",
                  "url": "https://t.co/eLRYgH5RoJ"
                }
              ],
              "cse_image": [
                {
                  "src": "https://pbs.twimg.com/profile_images/1540220963245154304/hUN8xbHJ_normal.jpg"
                }
              ],
              "socialmediaposting": [
                {
                  "identifier": "1555805443330609152",
                  "commentcount": "275",
                  "articlebody": "Truly an emotional evening for me. From doing a song with @EdSheeran to finally meeting him, talking about music and life and watching him live in concert. Thank you Ed for being so warm and...",
                  "position": "1",
                  "datecreated": "2022-08-06T06:38:17.000Z",
                  "datepublished": "2022-08-06T06:38:17.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1555805443330609152"
                },
                {
                  "identifier": "1560663462648262659",
                  "commentcount": "131",
                  "articlebody": "Okay guys gotta go have dinner w the fam! speak to y’all soon love you guys ❤️ #fridayswitharmaan",
                  "position": "2",
                  "datecreated": "2022-08-19T16:22:19.000Z",
                  "datepublished": "2022-08-19T16:22:19.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663462648262659"
                },
                {
                  "identifier": "1560663288442040321",
                  "commentcount": "77",
                  "articlebody": "Happy birthday Faiza ❤️❤️ #fridayswitharmaan",
                  "position": "3",
                  "datecreated": "2022-08-19T16:21:38.000Z",
                  "isbasedon": "https://twitter.com/AM_faizaaa/status/1560663182921703424",
                  "datepublished": "2022-08-19T16:21:38.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560663288442040321"
                },
                {
                  "identifier": "1560660731283943425",
                  "commentcount": "361",
                  "articlebody": "Paturi Maach and dal choler #fridayswitharmaan",
                  "position": "4",
                  "datecreated": "2022-08-19T16:11:28.000Z",
                  "isbasedon": "https://twitter.com/shaw11_ishita/status/1560660616674623488",
                  "datepublished": "2022-08-19T16:11:28.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660731283943425"
                },
                {
                  "identifier": "1560660251975684097",
                  "commentcount": "184",
                  "articlebody": "gongura rice w some extra neyi.. iykyk #fridayswitharmaan",
                  "position": "5",
                  "datecreated": "2022-08-19T16:09:34.000Z",
                  "isbasedon": "https://twitter.com/Armaan_Trends/status/1560660068970172416",
                  "datepublished": "2022-08-19T16:09:34.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560660251975684097"
                },
                {
                  "identifier": "1560659725905043456",
                  "commentcount": "176",
                  "articlebody": "TuYou even know what you’re asking me to choose between? #fridayswitharmaan",
                  "position": "6",
                  "datecreated": "2022-08-19T16:07:28.000Z",
                  "isbasedon": "https://twitter.com/ArmaaliansWorld/status/1560659502856544258",
                  "datepublished": "2022-08-19T16:07:28.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659725905043456"
                },
                {
                  "identifier": "1560659505855152133",
                  "commentcount": "101",
                  "articlebody": "Kaafi time se 🙊 @CocaCola_Ind #fridayswitharmaan",
                  "position": "7",
                  "datecreated": "2022-08-19T16:06:36.000Z",
                  "isbasedon": "https://twitter.com/rishika_AM/status/1560659197041479682",
                  "datepublished": "2022-08-19T16:06:36.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659505855152133"
                },
                {
                  "identifier": "1560659054107566082",
                  "commentcount": "172",
                  "articlebody": "your leap of faith made me put all my faith in you. #fridayswitharmaan",
                  "position": "8",
                  "datecreated": "2022-08-19T16:04:48.000Z",
                  "isbasedon": "https://twitter.com/hehepalak/status/1560658801740525572",
                  "datepublished": "2022-08-19T16:04:48.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560659054107566082"
                },
                {
                  "identifier": "1560658787240775682",
                  "commentcount": "99",
                  "articlebody": "Thank you ❤️ #fridayswitharmaan",
                  "position": "9",
                  "datecreated": "2022-08-19T16:03:45.000Z",
                  "isbasedon": "https://twitter.com/am_kumkum22/status/1560658408381898757",
                  "datepublished": "2022-08-19T16:03:45.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658787240775682"
                },
                {
                  "identifier": "1560658710136901633",
                  "commentcount": "63",
                  "articlebody": "I don’t know a lot of music theory well bro. I’m more of a natural musician, trained mostly by ear. #fridayswitharmaan",
                  "position": "10",
                  "datecreated": "2022-08-19T16:03:26.000Z",
                  "isbasedon": "https://twitter.com/farhan_akhtarrr/status/1560658396281327618",
                  "datepublished": "2022-08-19T16:03:26.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658710136901633"
                },
                {
                  "identifier": "1560658449184092163",
                  "commentcount": "133",
                  "articlebody": "Biodata ban raha hai kya ? #fridayswitharmaan",
                  "position": "11",
                  "datecreated": "2022-08-19T16:02:24.000Z",
                  "isbasedon": "https://twitter.com/unknown91822375/status/1560658086179655681",
                  "datepublished": "2022-08-19T16:02:24.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658449184092163"
                },
                {
                  "identifier": "1560658347455434758",
                  "commentcount": "53",
                  "articlebody": "My man bag 🙌🏼 #fridayswitharmaan",
                  "position": "12",
                  "datecreated": "2022-08-19T16:02:00.000Z",
                  "isbasedon": "https://twitter.com/shaw11_ishita/status/1560658081486237698",
                  "datepublished": "2022-08-19T16:02:00.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658347455434758"
                },
                {
                  "identifier": "1560658095524589572",
                  "commentcount": "115",
                  "articlebody": "Why chhupke chhupke ? #fridayswitharmaan",
                  "position": "13",
                  "datecreated": "2022-08-19T16:01:00.000Z",
                  "isbasedon": "https://twitter.com/Kajal_Bhagat17/status/1560657994441863170",
                  "datepublished": "2022-08-19T16:01:00.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560658095524589572"
                },
                {
                  "identifier": "1560657784282050562",
                  "commentcount": "140",
                  "articlebody": "When people go back on their word and are dishonest. #fridayswitharmaan",
                  "position": "14",
                  "datecreated": "2022-08-19T15:59:46.000Z",
                  "isbasedon": "https://twitter.com/always_heeseung/status/1560657562059415552",
                  "datepublished": "2022-08-19T15:59:46.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560657784282050562"
                },
                {
                  "identifier": "1560656658887426049",
                  "commentcount": "249",
                  "articlebody": "Radio hosting! 🗣📻#fridayswitharmaan",
                  "position": "15",
                  "datecreated": "2022-08-19T15:55:17.000Z",
                  "isbasedon": "https://twitter.com/RubiIslammm/status/1560655736924807168",
                  "datepublished": "2022-08-19T15:55:17.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656658887426049"
                },
                {
                  "identifier": "1560656441630810112",
                  "commentcount": "157",
                  "articlebody": "me and my dadi ❤️ #fridayswitharmaan",
                  "position": "16",
                  "datecreated": "2022-08-19T15:54:25.000Z",
                  "isbasedon": "https://twitter.com/actuallypreet/status/1560656242472759297",
                  "datepublished": "2022-08-19T15:54:25.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656441630810112"
                },
                {
                  "identifier": "1560656272415793153",
                  "commentcount": "91",
                  "articlebody": "Only if it’s super interesting to be part of it and like music is an integral part of the plot or something I guess. #fridayswitharmaan",
                  "position": "17",
                  "datecreated": "2022-08-19T15:53:45.000Z",
                  "isbasedon": "https://twitter.com/Sharanya1306/status/1560655801861038080",
                  "datepublished": "2022-08-19T15:53:45.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560656272415793153"
                },
                {
                  "identifier": "1560655923336454145",
                  "commentcount": "151",
                  "articlebody": "Best ever! 💯 #fridayswitharmaan",
                  "position": "18",
                  "datecreated": "2022-08-19T15:52:22.000Z",
                  "isbasedon": "https://twitter.com/_r_drdz_/status/1560655770273820672",
                  "datepublished": "2022-08-19T15:52:22.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655923336454145"
                },
                {
                  "identifier": "1560655420997263362",
                  "commentcount": "210",
                  "articlebody": "I only Goa-n chill and come back whenever I’m down there 🥲 never done a show. Chalo, I’ll try planning one 🤞🏻 #fridayswitharmaan",
                  "position": "19",
                  "datecreated": "2022-08-19T15:50:22.000Z",
                  "isbasedon": "https://twitter.com/ChawanRishita/status/1560655117380362240",
                  "datepublished": "2022-08-19T15:50:22.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560655420997263362"
                },
                {
                  "identifier": "1560654884239642625",
                  "commentcount": "220",
                  "articlebody": "Woh aap yaar khulta hi nahin hai. Aadat hi nahin hai. Idk what to do on that app lol. It’s become too confusing to use 🤦🏻\u200d♂️ #fridayswitharmaan",
                  "position": "20",
                  "datecreated": "2022-08-19T15:48:14.000Z",
                  "isbasedon": "https://twitter.com/Hafsaa_Armaals/status/1560654499949072384",
                  "datepublished": "2022-08-19T15:48:14.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654884239642625"
                },
                {
                  "identifier": "1560654485231325185",
                  "commentcount": "208",
                  "articlebody": "Yeh lo bunny waali eee 🐰 #fridayswitharmaan",
                  "position": "21",
                  "datecreated": "2022-08-19T15:46:39.000Z",
                  "isbasedon": "https://twitter.com/KeyaChakrabarty/status/1560653929729310722",
                  "datepublished": "2022-08-19T15:46:39.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560654485231325185"
                },
                {
                  "identifier": "1560653718416109568",
                  "commentcount": "265",
                  "articlebody": "I’ll make one soon! ❤️ #fridayswitharmaan",
                  "position": "22",
                  "datecreated": "2022-08-19T15:43:36.000Z",
                  "isbasedon": "https://twitter.com/jannatulMehveen/status/1560653290068901888",
                  "datepublished": "2022-08-19T15:43:36.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653718416109568"
                },
                {
                  "identifier": "1560653372763488256",
                  "commentcount": "174",
                  "articlebody": "Can’t both are my fav 🙈🙈 #fridayswitharmaan",
                  "position": "23",
                  "datecreated": "2022-08-19T15:42:14.000Z",
                  "isbasedon": "https://twitter.com/Shruti1334/status/1560652826400894977",
                  "datepublished": "2022-08-19T15:42:14.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560653372763488256"
                },
                {
                  "identifier": "1560652745689812994",
                  "commentcount": "238",
                  "articlebody": "I guess now. #fridayswitharmaan",
                  "position": "24",
                  "datecreated": "2022-08-19T15:39:44.000Z",
                  "isbasedon": "https://twitter.com/ArmaaniansWorld/status/1560652663426916352",
                  "datepublished": "2022-08-19T15:39:44.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652745689812994"
                },
                {
                  "identifier": "1560652457851510790",
                  "commentcount": "152",
                  "articlebody": "It’s one of my favs actually! #fridayswitharmaan",
                  "position": "25",
                  "datecreated": "2022-08-19T15:38:36.000Z",
                  "isbasedon": "https://twitter.com/AM_Smile22/status/1560652212283383808",
                  "datepublished": "2022-08-19T15:38:36.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652457851510790"
                },
                {
                  "identifier": "1560652371411095552",
                  "commentcount": "101",
                  "articlebody": "The best! He’s the sweetest person ever. Super humble 🦋🙏🏻 #fridayswitharmaan",
                  "position": "26",
                  "datecreated": "2022-08-19T15:38:15.000Z",
                  "isbasedon": "https://twitter.com/yourhappyymeal/status/1560652197024583681",
                  "datepublished": "2022-08-19T15:38:15.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560652371411095552"
                },
                {
                  "identifier": "1560651909706354688",
                  "commentcount": "170",
                  "articlebody": "Magical 🦋 #fridayswitharmaan",
                  "position": "27",
                  "datecreated": "2022-08-19T15:36:25.000Z",
                  "isbasedon": "https://twitter.com/Khushi_024/status/1560651669016571904",
                  "datepublished": "2022-08-19T15:36:25.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651909706354688"
                },
                {
                  "identifier": "1560651834384982017",
                  "commentcount": "72",
                  "articlebody": "Uss project mein thode delays hogaye hain 😅 #fridayswitharmaan",
                  "position": "28",
                  "datecreated": "2022-08-19T15:36:07.000Z",
                  "isbasedon": "https://twitter.com/Musmita_Haz/status/1560651655708024837",
                  "datepublished": "2022-08-19T15:36:07.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651834384982017"
                },
                {
                  "identifier": "1560651668152233990",
                  "commentcount": "83",
                  "articlebody": "After #fridayswitharmaan",
                  "position": "29",
                  "datecreated": "2022-08-19T15:35:27.000Z",
                  "isbasedon": "https://twitter.com/deepali___22/status/1560651613970186244",
                  "datepublished": "2022-08-19T15:35:27.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651668152233990"
                },
                {
                  "identifier": "1560651615660429312",
                  "commentcount": "82",
                  "articlebody": "na bhow na bhaw. he is only snore and khau. #fridayswitharmaan",
                  "position": "30",
                  "datecreated": "2022-08-19T15:35:15.000Z",
                  "isbasedon": "https://twitter.com/shaw11_ishita/status/1560651228803018752",
                  "datepublished": "2022-08-19T15:35:15.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651615660429312"
                },
                {
                  "identifier": "1560651123735703557",
                  "commentcount": "155",
                  "articlebody": "10-12 on a good day 🙃 #fridayswitharmaan",
                  "position": "31",
                  "datecreated": "2022-08-19T15:33:18.000Z",
                  "isbasedon": "https://twitter.com/OfficialAdil8/status/1560650973332193281",
                  "datepublished": "2022-08-19T15:33:18.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560651123735703557"
                },
                {
                  "identifier": "1560650815013957632",
                  "commentcount": "99",
                  "articlebody": "never better 🙌🏼❤️ #fridayswitharmaan",
                  "position": "32",
                  "datecreated": "2022-08-19T15:32:04.000Z",
                  "isbasedon": "https://twitter.com/itzzsuhani/status/1560650579516350466",
                  "datepublished": "2022-08-19T15:32:04.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650815013957632"
                },
                {
                  "identifier": "1560650562214850561",
                  "commentcount": "470",
                  "articlebody": "Hola! #FridaysWithArmaan",
                  "position": "33",
                  "datecreated": "2022-08-19T15:31:04.000Z",
                  "datepublished": "2022-08-19T15:31:04.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560650562214850561"
                },
                {
                  "identifier": "1560637932909772801",
                  "commentcount": "119",
                  "articlebody": "FWA 9pm IST.",
                  "position": "34",
                  "datecreated": "2022-08-19T14:40:53.000Z",
                  "datepublished": "2022-08-19T14:40:53.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560637932909772801"
                },
                {
                  "identifier": "1560523779813822464",
                  "commentcount": "238",
                  "articlebody": "Wishing everyone a very happy #Janmashtami! Love, health, prosperity & happiness to all ❤️🧿🙏🏻",
                  "position": "35",
                  "datecreated": "2022-08-19T07:07:16.000Z",
                  "datepublished": "2022-08-19T07:07:16.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560523779813822464"
                },
                {
                  "identifier": "1560361453848145921",
                  "commentcount": "125",
                  "articlebody": "Goodnight, lots of love and hugs to my fam x ❤️👼🏻",
                  "position": "36",
                  "datecreated": "2022-08-18T20:22:15.000Z",
                  "datepublished": "2022-08-18T20:22:15.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361453848145921"
                },
                {
                  "identifier": "1560361048837763072",
                  "commentcount": "19",
                  "articlebody": "Yup I’m aware. Gonna check it out soon!",
                  "position": "37",
                  "datecreated": "2022-08-18T20:20:38.000Z",
                  "isbasedon": "https://twitter.com/gayatriii26/status/1560360749129945088",
                  "datepublished": "2022-08-18T20:20:38.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560361048837763072"
                },
                {
                  "identifier": "1560359964668858368",
                  "commentcount": "68",
                  "articlebody": "Yess hoga 🤗",
                  "position": "38",
                  "datecreated": "2022-08-18T20:16:20.000Z",
                  "isbasedon": "https://twitter.com/armaanianjanhvi/status/1560359771429273601",
                  "datepublished": "2022-08-18T20:16:20.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359964668858368"
                },
                {
                  "identifier": "1560359819919298560",
                  "commentcount": "16",
                  "articlebody": "🧿❤️",
                  "position": "39",
                  "datecreated": "2022-08-18T20:15:45.000Z",
                  "isbasedon": "https://twitter.com/Amaalslays_16/status/1560359675165556741",
                  "datepublished": "2022-08-18T20:15:45.000Z",
                  "url": "https://twitter.com/ArmaanMalik22/status/1560359819919298560"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "Armaan Joshi – Forbes Advisor INDIA",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e Joshi – Forbes Advisor INDIA",
            "link": "https://www.forbes.com/advisor/in/author/armaan-joshi/",
            "displayLink": "www.forbes.com",
            "snippet": "Armaan Joshi. Editor Advisor. Armaan is the India Lead Editor for Forbes Advisor. He has more than a decade's experience working with media and publishing ...",
            "htmlSnippet": "\u003cb\u003eArmaan\u003c/b\u003e Joshi. Editor Advisor. \u003cb\u003eArmaan\u003c/b\u003e is the India Lead Editor for Forbes Advisor. He has more than a decade&#39;s experience working with media and publishing&nbsp;...",
            "cacheId": "AgE0fsD5AR8J",
            "formattedUrl": "https://www.forbes.com/advisor/in/author/armaan-joshi/",
            "htmlFormattedUrl": "https://www.forbes.com/advisor/in/author/\u003cb\u003earmaan\u003c/b\u003e-joshi/",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZ35W6AGAYgrov7XSD_ZfTYDAscOixLJBzpBQtJqV0kOLCGFe5Gzq4XYU",
                  "width": "225",
                  "height": "225"
                }
              ],
              "metatags": [
                {
                  "og:image": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/10/forbes_1200x1200.jpg",
                  "og:type": "article",
                  "twitter:title": "Armaan Joshi",
                  "twitter:card": "summary_large_image",
                  "og:site_name": "Forbes Advisor INDIA",
                  "og:image:url": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/10/forbes_1200x1200.jpg",
                  "twitter:url": "https://www.forbes.com/advisor/in/author/armaan-joshi/",
                  "og:title": "Armaan Joshi",
                  "og:description": "Armaan Joshi",
                  "og:image:secure_url": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/10/forbes_1200x1200.jpg",
                  "twitter:image": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/10/forbes_1200x1200.jpg",
                  "twitter:site": "@forbes",
                  "viewport": "width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=4",
                  "twitter:description": "Armaan Joshi",
                  "og:url": "https://www.forbes.com/advisor/in/author/armaan-joshi/"
                }
              ],
              "cse_image": [
                {
                  "src": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/10/forbes_1200x1200.jpg"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "ARMAAN",
            "htmlTitle": "\u003cb\u003eARMAAN\u003c/b\u003e",
            "link": "https://apps.mgov.gov.in/details?appid=1464",
            "displayLink": "apps.mgov.gov.in",
            "snippet": "Feb 12, 2018 ... ARMAAN is an umbrella application of Indian Army covering various facets of information & services concerning all ranks of Indian Army.",
            "htmlSnippet": "Feb 12, 2018 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eARMAAN\u003c/b\u003e is an umbrella application of Indian Army covering various facets of information &amp; services concerning all ranks of Indian Army.",
            "cacheId": "TXX8KtMhGA4J",
            "formattedUrl": "https://apps.mgov.gov.in/details?appid=1464",
            "htmlFormattedUrl": "https://apps.mgov.gov.in/details?appid=1464",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-3uR-86hYuQaNi81uXfIfqvB6hcsF_JrKfBr1n_TkWclSFFVFvJs6eo",
                  "width": "413",
                  "height": "122"
                }
              ],
              "cse_image": [
                {
                  "src": "https://apps.mgov.gov.in/images/footer-logo.png"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "Armaan Carrigan Shaikh DO | Cardiology | BayCare Clinic",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e Carrigan Shaikh DO | Cardiology | BayCare Clinic",
            "link": "https://www.baycare.net/doctor-or-provider/armaan-carrigan-shaikh-do/",
            "displayLink": "www.baycare.net",
            "snippet": "Armaan Carrigan Shaikh is an interventional cardiologist with Aurora BayCare Cardiology. He practices in Green Bay and Marinette, Wisconsin.",
            "htmlSnippet": "\u003cb\u003eArmaan\u003c/b\u003e Carrigan Shaikh is an interventional cardiologist with Aurora BayCare Cardiology. He practices in Green Bay and Marinette, Wisconsin.",
            "cacheId": "dwPZk42V06MJ",
            "formattedUrl": "https://www.baycare.net/doctor-or-provider/armaan-carrigan-shaikh-do/",
            "htmlFormattedUrl": "https://www.baycare.net/doctor-or-provider/\u003cb\u003earmaan\u003c/b\u003e-carrigan-shaikh-do/",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQB0yU6Lp4sVOEuREqa88spZMqmRTD1giNpg4N9l9Uxv7wUcEmawXMhuNCs",
                  "width": "197",
                  "height": "256"
                }
              ],
              "metatags": [
                {
                  "theme-color": "#1c3360",
                  "twitter:card": "summary_large_image",
                  "twitter:title": "Armaan Carrigan Shaikh DO",
                  "og:type": "article",
                  "geo.region": "US-WI",
                  "msvalidate.01": "3E88FA1F548C31A18B6E2208DB3F6C0A",
                  "og:title": "Armaan Carrigan Shaikh DO",
                  "geo.position": "44.483231;-87.937791",
                  "twitter:creator": "BayCare Clinic",
                  "og:description": "Armaan Carrigan Shaikh is an interventional cardiologist with Aurora BayCare Cardiology. He practices in Green Bay and Marinette, Wisconsin.",
                  "twitter:image": "https://www.baycare.net/media/2939/shaikh-armann.jpg",
                  "twitter:site": "@baycareclinic",
                  "icbm": "44.483231, -87.937791",
                  "viewport": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                  "geo.placename": "Green Bay",
                  "bitly-verification": "1b1d68b664a7"
                }
              ],
              "cse_image": [
                {
                  "src": "https://www.baycare.net/media/2939/shaikh-armann.jpg"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "Armaan Dhaliwal, MBBS | Department of Medicine",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e Dhaliwal, MBBS | Department of Medicine",
            "link": "https://deptmedicine.arizona.edu/profile/armaan-dhaliwal-mbbs",
            "displayLink": "deptmedicine.arizona.edu",
            "snippet": "Armaan Dhaliwal, MBBS. Internal Medicine Resident. Degrees. MBBS: Dayanand Medical College - India, 2019. armaand@arizona.edu. Office Location:.",
            "htmlSnippet": "\u003cb\u003eArmaan\u003c/b\u003e Dhaliwal, MBBS. Internal Medicine Resident. Degrees. MBBS: Dayanand Medical College - India, 2019. armaand@arizona.edu. Office Location:.",
            "cacheId": "3uq-s4Rjhd8J",
            "formattedUrl": "https://deptmedicine.arizona.edu/profile/armaan-dhaliwal-mbbs",
            "htmlFormattedUrl": "https://deptmedicine.arizona.edu/profile/\u003cb\u003earmaan\u003c/b\u003e-dhaliwal-mbbs",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTN_XxiQK5LpKoLhwzCa4t1yMOJP8ZavTP2C-IS2fUzIk9DhgaDQhWAPDkx",
                  "width": "183",
                  "height": "275"
                }
              ],
              "Item": [
                {
                  "title": "Armaan Dhaliwal, MBBS"
                }
              ],
              "metatags": [
                {
                  "viewport": "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
                }
              ],
              "cse_image": [
                {
                  "src": "https://deptmedicine.arizona.edu/sites/default/files/styles/1x_smartphone/public/202109149_internal_medicine_dhaliwal_armaan-5.jpg?itok=ryZX-SDa&timestamp=1659137479"
                }
              ]
            }
          },
          {
            "kind": "customsearch#result",
            "title": "Armaan Franklin Stats, News, Bio | ESPN",
            "htmlTitle": "\u003cb\u003eArmaan\u003c/b\u003e Franklin Stats, News, Bio | ESPN",
            "link": "https://www.espn.com/mens-college-basketball/player/_/id/4431744/armaan-franklin",
            "displayLink": "www.espn.com",
            "snippet": "Latest on Virginia Cavaliers guard Armaan Franklin including news, stats, videos, highlights and more on ESPN.",
            "htmlSnippet": "Latest on Virginia Cavaliers guard \u003cb\u003eArmaan\u003c/b\u003e Franklin including news, stats, videos, highlights and more on ESPN.",
            "cacheId": "fy6fdmPLmE0J",
            "formattedUrl": "https://www.espn.com/mens-college-basketball/.../_/id/.../armaan-franklin",
            "htmlFormattedUrl": "https://www.espn.com/mens-college-basketball/.../_/id/.../\u003cb\u003earmaan\u003c/b\u003e-franklin",
            "pagemap": {
              "cse_thumbnail": [
                {
                  "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3hgJNUaUxIuTGjR6fFiyfhVrcErYxmcT5BgjNBIZi-fvASZE_GT0ThrL",
                  "width": "263",
                  "height": "191"
                }
              ],
              "metatags": [
                {
                  "og:image": "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4431744.png",
                  "twitter:app:id:googleplay": "com.espn.score_center",
                  "og:image:width": "500",
                  "og:type": "athlete",
                  "twitter:title": "Armaan Franklin Stats, News, Bio | ESPN",
                  "twitter:card": "summary",
                  "og:site_name": "ESPN",
                  "twitter:url": "https://www.espn.com/mens-college-basketball/player/_/id/4431744/armaan-franklin",
                  "og:title": "Armaan Franklin Stats, News, Bio | ESPN",
                  "og:image:height": "500",
                  "twitter:app:name:googleplay": "ESPN",
                  "medium": "website",
                  "twitter:app:id:iphone": "317469184",
                  "title": "Armaan Franklin Stats, News, Bio | ESPN",
                  "og:description": "Latest on Virginia Cavaliers guard Armaan Franklin including news, stats, videos, highlights and more on ESPN",
                  "twitter:image": "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4431744.png",
                  "fb:app_id": "116656161708917",
                  "twitter:site": "espn",
                  "viewport": "initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                  "twitter:description": "Latest on Virginia Cavaliers guard Armaan Franklin including news, stats, videos, highlights and more on ESPN",
                  "og:locale": "en_US",
                  "og:url": "https://www.espn.com/mens-college-basketball/player/_/id/4431744/armaan-franklin",
                  "twitter:app:name:iphone": "ESPN"
                }
              ],
              "cse_image": [
                {
                  "src": "https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4431744.png"
                }
              ]
            }
          }
        ]
      })
    const [Search, setSearch] = useState('')
    const [Loading, setLoading] = useState(false)
const getData=async(type)=>{
setLoading(true)
await axios.get(url).then(async(res)=>{
    const GoogleData=await res.data
    // setdata(GoogleData)
    console.log(
        data
    )
    setLoading(false)
})
// const response= await fetch(`${url}`)
//     const searchdata =await response.json()
//     await setdata(searchdata)
//     setLoading(false)
//     console.log(searchdata)

}
    return(
        <GoogleDataContext.Provider value={{Result ,setResult,getData,data,setLoading,Loading,Search,setSearch,setdata}}>
{children}
        </GoogleDataContext.Provider>
    )
}

// params: {hl: 'en', q: 'Avengers+Endgame', gl: 'us'},
// headers: {
//   'X-RapidAPI-Key': 'a5b7dc09ddmshb18d68644d1a9f6p10ba0fjsn33eb270b5302',
//   'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
// }