import moment from 'moment';
import getContest, { APIGetAthleteRequest, APIGetAthleteResponse } from 'api/athlete';
import { TableItem, AthleteItem } from './types';

interface GetAthleteResponse {
  items: TableItem[];
  athlete: AthleteItem;
  isNextPageAvailable: boolean;
}

export async function apiGetAthlete(request: APIGetAthleteRequest) {
  const result: APIGetAthleteResponse = await getContest(request);
  const resp: GetAthleteResponse = {
    athlete: result.athlete,
    items: result.items.map(item => {
      const tableItem: TableItem = {
        date: moment.unix(item.date).format('DD/MM/YYYY'),
        disciplines: item.disciplines,
        id: item.id,
        location: `${item.city}, ${item.country}`,
        name: item.name,
        prize: item.prize,
        profileUrl: item.profileUrl,
        size: item.size,
        country: item.country,
        discipline: item.discipline,
        rank: item.rank,
      };
      return tableItem;
    }),
    isNextPageAvailable: result.isNextPageAvailable,
  };
  return resp;
}

export { GetAthleteResponse, APIGetAthleteRequest };
