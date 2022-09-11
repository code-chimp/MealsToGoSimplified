import * as functions from 'firebase-functions';

type AsyncRequestHandler = (
  req: functions.https.Request,
  res: functions.Response<any>,
) => Promise<void>;

export default AsyncRequestHandler;
