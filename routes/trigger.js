var express = require('express');
var router = express.Router();
var request = require('request');
var beautify = require("json-beautify");


/* GET home page. */
router.get('/', function(req, res, next) {

  // const bizSdk = require('facebook-nodejs-business-sdk');
  // const Ad = bizSdk.Ad;
  // const AdAccount = bizSdk.AdAccount;
  // const Business = bizSdk.Business;
  // const Campaign = bizSdk.Campaign;
  // const accountId = 'act_419982481666289';
  // const accessToken = 'EAADk9eCPSSEBACyU8BU4fqjywuZBTTMLgwletu1Jfzw3HkcQrApN3n79SNKUcRkqUaIMYroWYS8Xkiprdorv9pt6FxdZBNwTVZBMbyeEmNfVZBXZBmPpxclPQGQE7BQeLxFkdOgnujgxpkZBZBZBeyvZAR5LFQrE8EidF8ZAwFWbXyJgZDZD';
  // const bussinessId = ''; // ADD business ID here.
  // const campaignId = '23842786803700588'; // ADD Campaign ID Here
  // const api = bizSdk.FacebookAdsApi.init(accessToken);
  // const account = new AdAccount(accountId);
  // const showDebugingInfo = true;
  // if (showDebugingInfo) {
  //   api.setDebug(true);
  // }

  var url ='act_419982481666289/campaigns?fields=name,configured_status,effective_status,id,objective,adsets{daily_budget,insights{cost_per_total_action},effective_status},start_time&access_token=EAADk9eCPSSEBAJACTybjL7ZCCHmjqTeM5VCIsZAhJcLXhEnU4ZAsc5aRfaAKkuBCS8eMsIsB1ZBkgArY73T7dZANJH0ll9T1SL9NinZCn9dHKnKSQZCEHpUKKZAvDpyPXlwCA2IOaoBMkGlnwTqY7ZAvlJC5XD3dhZA2g1Ko0NonlS8QZDZD';

  var urlPath = 'https://graph.facebook.com/v3.0';
  var accountId = 'act_419982481666289';
  var query = 'act_419982481666289/campaigns?fields=name,configured_status,effective_status,id,objective,adsets{daily_budget,insights{cost_per_total_action},effective_status},start_time&access_token=EEAADk9eCPSSEBAJACTybjL7ZCCHmjqTeM5VCIsZAhJcLXhEnU4ZAsc5aRfaAKkuBCS8eMsIsB1ZBkgArY73T7dZANJH0ll9T1SL9NinZCn9dHKnKSQZCEHpUKKZAvDpyPXlwCA2IOaoBMkGlnwTqY7ZAvlJC5XD3dhZA2g1Ko0NonlS8QZDZD';
      //
      // request(urlPath + '/' + accountId + '/' + query , function(error, response, body) {
      //   console.log('body', beautify(body, null, 2, 100));
      // });

        var firstUrl = urlPath + '/' + url;
        function getParce(urlPath) {

          request(urlPath, (err, res, body) => {
            // console.log(body);

            var jsonObj = JSON.parse(body);

          console.log(jsonObj);
          for (var key in jsonObj.data) {
            if (jsonObj.data[key].effective_status == 'PAUSED') {
              continue;
            }
          if (jsonObj.data.hasOwnProperty(key)) {
            console.log(jsonObj.data[key].name);

            for (var adset in jsonObj.data[key].adsets.data) {
              if (jsonObj.data[key].adsets.data[adset].effective_status == 'PAUSED') {
                continue;
              }
              console.log(jsonObj.data[key].adsets.data[adset].id);
            }
            // alert(json[key].msg);
            //
            // for (var key in jsonObj.data) {
            //   if (jsonObj.data.hasOwnProperty(key)) {
            //     if (jsonObj.data[key].adsets.effective_status != 'PAUSED') {
            //       continue;
            //     }
            //     console.log(jsonObj.data[key].adsets);
              // }
            }
          }

          if (jsonObj.paging.next != null) {
            return jsonObj.paging.next;

          }
        });
      }

      var token = getParce(firstUrl);
      console.log('token : ', token);



  res.render('index', { title: 'Express' });
  });



module.exports = router;


  //
  //
  // const errorFunction = (scenarioName) => {
  //   let returnFunction = (error) => {
  //     console.log('An error occurred while processing, ' + scenarioName);
  //     console.log('Error Message:' + error);
  //     console.log('Error Stack:' + error.stack);
  //   };
  //   return returnFunction;
  // };
  //
  // const logPassedTest = (testName, data) => {
  //   console.log(testName);
  //   if (showDebugingInfo) {
  //     console.log('Data:' + JSON.stringify(data));
  //   }
  // };
  //
  // var campaignsInfo = new Map();
  // void async function () {
  //     let campaigns = await account.getCampaigns([Campaign.Fields.name], {});
  //     campaigns.forEach(c => {
  //       // console.log(c.name); console.log(c.id);
  //       campaignsInfo.set(c.name, c.id);
  //     });
  //
  //     while (campaigns.hasNext()) {
  //         campaigns = await campaigns.next();
  //         campaigns.forEach(c => {
  //           // console.log(c.name); console.log(c.id);
  //           campaignsInfo.set(c.name, c.id);
  //         });
  //     }
  //
  //     console.log(campaignsInfo);
  //

      // let test3 = 'Node.js getInsights Edge';
      // const insightsFields =
      //   ['impressions', 'frequency', 'unique_clicks', 'actions', 'spend', 'cpc', 'ctr'];
      //   for (var [key, value] of campaignsInfo) {
      //     new Campaign(value)
      //       .getInsights(insightsFields, {})
      //       .then((insight) => { logPassedTest(test3 + ':Pass', insight);
      //         console.log(insight);
      //      })
      //       .catch(errorFunction(test3));
      //   }



  //



// let test1 = 'Node.js read';
// account
//   .read([AdAccount.Fields.name, AdAccount.Fields.age])
//   .then((account) => {
//     logPassedTest(test1 + ':Pass', account);
//   })
  // .catch(errorFunction(test1));
//
// let test2 = 'Node.js get active ads';
// account
//   .getAds(
//     [],
//   {
//     [Ad.Fields.effective_status]: [Ad.EffectiveStatus.active]
//   })
//   .then((ad) => {
//     logPassedTest(test2 + ':Pass', ad);
//   })
//   .catch(errorFunction(test2));
//
// let test3 = 'Node.js getInsights Edge';
// const insightsFields =
//   ['impressions', 'frequency', 'unique_clicks', 'actions', 'spend', 'cpc', 'ctr'];
// new Campaign(campaignId)
//   .getInsights(insightsFields, {})
//   .then((insight) => { logPassedTest(test3 + ':Pass', insight);
//     console.log(insight);
//  })
//   .catch(errorFunction(test3));
//
// let test3a = 'Node.js getCampaigns Edge';
// const campaignFields =
//     [Campaign.Fields.objective];
// account.getCampaigns(campaignFields, { limit: 1 })
//     .then((campaign) => {
//       campaign.forEach((campaign) => {
//       });
//       logPassedTest(test3a + '-GetCampaigns:Pass', campaign);
//     })
//     .catch(errorFunction(test3a));
//
// var test3b = 'Node.js getAssignedPages Edge';
// new Business(bussinessId, { limit: 2 }).getAssignedPages([
//   Business.Fields.name
// ], {}, true).then((result) => {
//   if (result) {
//     result.forEach((page) => {
//     });
//     logPassedTest(test3b + '-GetAssignedPages:Pass', result);
//   }
// }).catch(errorFunction(test3b));
//
// let test4 = 'Node.js nestedCalls';
// account.read([AdAccount.Fields.name])
// .then((account) => {
//   logPassedTest(test4 + '-GetAdAcccount:Pass', account);
//   return account.getCampaigns([Campaign.Fields.name], { limit: 10 });
// })
// .then((result) => {
//   logPassedTest(test4 + '-GetCampaigns:Pass', result);
//   const campaignIds = result.map((campaign) => {
//     return campaign.id;
//   });
//   const campaignAdsInsightsParams = Object.assign({
//     level: 'campaign',
//     filtering: [{ field: 'campaign.id', operator: 'IN', value: campaignIds }]
//   }, {});
//   const campaigsAdsInsightsFields = insightsFields.concat('campaign_id');
//   return account
//     .getInsights(campaigsAdsInsightsFields, campaignAdsInsightsParams);
// })
// .then((insights) =>
//   logPassedTest(test4 + '-GetCampaignInsights:Pass', insights)
// )
// .catch(errorFunction(test4));
//
// let test5 = 'Create Edge';
// account
//   .createCampaign(
//     [],
//   {
//     [Campaign.Fields.name]: 'Test Campaign - Delete',
//     [Campaign.Fields.status]: Campaign.Status.paused,
//     [Campaign.Fields.objective]: Campaign.Objective.page_likes
//   }
//   )
//   .then((campaign) => {
//     logPassedTest(test5 + ':Pass', account);
//   })
//   .catch(errorFunction(test5));
//
// let test6 = 'Delete Image Edge';
// account
//   .createAdImage(
//     [],
//   {
//     'bytes': 'iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAAAOVBMVEX///87WZg7WZg7WZg7WZg7WZg7WZg7WZg7WZg7WZg7WZhMeMJEaa5Xi9tKdb0+Xp5Wi9tXjNxThNH+wk/7AAAACnRSTlMAsHIoaM7g/fx9Zr/g5QAAAGlJREFUeNplkFsOwCAIBPGJrtbX/Q/bqm1qwnxuJrBAE6OVD15pQy/WYePsDiIjp9FGyuC4DK7l6pOrVH4s41D6R4EzpJGXsa0MTQqp/yQo8hhHMuApoB1JQ5COnCN3yT6ys7xL3i7/cwMYsAveYa+MxAAAAABJRU5ErkJggg=='
//   }
//   )
//   .then((result) => {
//     logPassedTest(test6 + ':Pass', account);
//     return account.deleteAdImages(
//       {
//         'hash': result.images.bytes.hash
//       }
//     );
//   })
//   .catch(errorFunction(test6));
//
// let test7 = 'CRUD Campaign';
// let campaignIdToDelete;
// account
//   .createCampaign(
//     [Campaign.Fields.status],
//   {
//     [Campaign.Fields.name]: 'Test Campaign - Delete',
//     [Campaign.Fields.status]: Campaign.Status.paused,
//     [Campaign.Fields.objective]: Campaign.Objective.page_likes
//   }
//   )
// .then((campaign) => {
//   logPassedTest(test7 + '-Create:Pass', campaign);
//   campaignIdToDelete = campaign.id;
//   return new Campaign(campaign.id)
//   .read([Campaign.Fields.id, Campaign.Fields.name, Campaign.Fields.objective]);
// })
// .then((campaign) => {
//   logPassedTest(test7 + '-Read:Pass', campaign);
//   return new Campaign(campaign.id, {
//     [Campaign.Fields.id]: campaign.id,
//     [Campaign.Fields.name]: 'Test Campaign - Updated' })
//     .update();
// })
// .then((campaign) => {
//   logPassedTest(test7 + '-Update:Pass', campaign);
//   return new Campaign(campaignIdToDelete)
//   .delete();
// })
// .then((result) => {
//   logPassedTest(test7 + '-Delete:Pass', result);
// })
// .catch(errorFunction(test7));
//
// let test8 = 'Pagination Campaign';
// account.getCampaigns([Campaign.Fields.name], { limit: 2 })
// .then((campaigns) => {
//   logPassedTest(test8 + '-GetCampaign:Pass', campaigns);
//   if (campaigns.length === 2 && campaigns.hasNext()) {
//     return campaigns.next();
//   } else {
//     Promise.reject(
//       new Error('campaigns length != 2 or not enough campaigns')
//     );
//   }
// })
// .then((campaigns) => {
//   logPassedTest(test8 + '-NextCampaign:Pass', campaigns);
//   if (campaigns.hasNext() && campaigns.hasPrevious()) {
//     return campaigns.previous();
//   } else {
//     Promise.reject(
//       new Error('previous or next is not true')
//     );
//   }
//   return campaigns.previous();
// })
// .then((campaigns) => {
//   logPassedTest(test8 + '-PreviousCampaign:Pass', campaigns);
// })
// .catch(errorFunction(test8));
