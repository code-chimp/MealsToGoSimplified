import HttpStatusCodes from '../@enumerations/HttpStatusCodes';

interface ICloudFunctionPayload {
  status: 'ok' | 'error';
  code: HttpStatusCodes;
  message?: string;
  data?: any;
}

export default ICloudFunctionPayload;
