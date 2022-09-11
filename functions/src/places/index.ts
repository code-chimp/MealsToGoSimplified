import HttpStatusCodes from '../@enumerations/HttpStatusCodes';
import RequestHandler from '../@types/RequestHandler';
import mockPlaces, { addMockImages } from '../@mocks/mockPlaces';

export const places: RequestHandler = (req, res) => {
  const { location } = req.query as { location?: string };

  if (location) {
    const data = mockPlaces[location];
    data.results = data.results.map(addMockImages);

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
      message: `we have no information for ${req.query.city}`,
    });
    return;
  }

  res.status(HttpStatusCodes.BadRequest).json({
    status: 'error',
    code: HttpStatusCodes.BadRequest,
    message: 'Missing query parameter `location`',
  });
};

export default places;
