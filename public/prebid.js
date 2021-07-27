var adUnits = [
  {
    code: '/19968336/header-bid-tag-1',
    mediaTypes: {
      banner: {
        sizes: [[728, 90], [970, 250]]
      }
    },
    bids: [{
      bidder: 'appnexus',
      params: {
        placementId: 13144370
      }
    }]
  }
];
console.log('here')
// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function () {
  googletag.pubads()
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function () {
  pbjs.addAdUnits(addUnits)
})