import * as functions from 'firebase-functions';
import geocodeRequest from './geocode';
import places from './places';

export const geocode = functions.https.onRequest((req, resp) => {
  geocodeRequest(req, resp);
});

export const placesNearby = functions.https.onRequest((req, resp) => {
  places(req, resp);
});
