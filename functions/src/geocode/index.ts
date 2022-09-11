import HttpStatusCodes from '../@enumerations/HttpStatusCodes';
import RequestHandler from '../@types/RequestHandler';
import locations from '../@mocks/geoLocations';

export const geocodeRequest: RequestHandler = (req, res) => {
  const { city } = req.query as { city?: string };

  if (city) {
    const key = city.toLowerCase().trim();
    const data = locations[key];

    if (data) {
      res.status(HttpStatusCodes.Ok).json({
        status: 'ok',
        code: HttpStatusCodes.Ok,
        data,
      });
      return;
    }

    res.status(HttpStatusCodes.NotFound).json({
      status: 'error',
      code: HttpStatusCodes.NotFound,
      message: `we have no information for ${city}`,
    });
    return;
  }

  res.status(HttpStatusCodes.BadRequest).json({
    status: 'error',
    code: HttpStatusCodes.BadRequest,
    message: 'Missing query parameter `city`',
  });
};

export default geocodeRequest;
