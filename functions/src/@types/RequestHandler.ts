import * as functions from 'firebase-functions';

type RequestHandler = (req: functions.https.Request, res: functions.Response<any>) => void;

export default RequestHandler;
