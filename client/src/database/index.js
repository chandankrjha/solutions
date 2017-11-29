import {getJson, postJson, putJson, deleteJson} from "./fetchWrapper";

const TRUECALLER_REQUEST_URL = "https://api4.truecaller.com/v1/apps/requests";

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const truecallerRequest = (phoneNumber) => 
  postJson(TRUECALLER_REQUEST_URL, 
    { body: JSON.stringify({

    }),
    headers: headers 
  });




