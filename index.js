const axios = require('axios');

const skyscanner = axios.create({
  baseURL: 'http://partners.api.skyscanner.net/apiservices'
});

const key = 'Samplekey'

const apiKey = `?apikey=${key}`

let queryApi = (queryString) => {
  tv.get(queryString)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

function buildUrl(query){
  let url = `/v1.0/${query.country}/${query.currency}/${query.locale}/${query.originPlace}/${query.destinationPlace}/${query.outboundPartialDate}`;

    if(query.inboundPartialDate){
      url += `/${query.inboundPartialDate}`
    }
    url += apiKey;
    return url;
}

module.exports = {
  
  browseQuotes: (query) => {
    let tail = buildUrl(query);
    let url = `/browsequotes${tail}`;
    queryApi(url);

  },

  browseRoutes: (query) => {
    let tail = buildUrl(query);
    let url = `/browseroutes${tail}`;
    queryApi(url);
  },

  browseDates: (query) => {
    let tail = buildUrl(query);
    let url = `/browsedates${tail}`;
    queryApi(url);
  },

  browseDatesGrid: (query) => {
    let tail = buildUrl(query);
    let url = `/browsegrid${tail}`;
    queryApi(url);
  }

}
