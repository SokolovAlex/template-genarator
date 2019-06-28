import { from } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { FETCH_PARTNERS } from './actions';
import { selectFilters } from '../../selectors';
import { fetchPartners } from '../../api/partners';
import { FetchPartnersSuccess, FetchPartners } from './actionsCreators';
import { SET_COUNTRY_FILTERS } from '../filters/actions';
import { cookieService } from '../../../services/cookie';

let initPartners = false;

const ListEpics = combineEpics(
  (action$, state$) =>
    action$.pipe(
      ofType(FETCH_PARTNERS),
      mergeMap(() => {
        const state = state$.value;
        return from(fetchPartners(selectFilters(state)));
      }),
      map(({ data }) => {
        return data.map((partner) => {
          const lat = partner.address.lat ? parseFloat(partner.address.lat.replace(',', '.')) : null;
          const lng = partner.address.lon ? parseFloat(partner.address.lon.replace(',', '.')) : null;

          return {
            ...partner,
            position:
              lat && lng
                ? {
                    lat,
                    lng,
                  }
                : null,
          };
        });
      }),
      map((partners) => new FetchPartnersSuccess(partners))
    ),
  (action$) =>
    action$.pipe(
      ofType(SET_COUNTRY_FILTERS),
      map(() => {
        if (!initPartners && cookieService.getCookie('country')) {
          initPartners = true;
          return new FetchPartners();
        }
        return { type: '' };
      })
    )
);

export default ListEpics;
