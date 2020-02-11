import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromAgencyStaff from './agency-staff.reducer';
import * as AgencyStaffActions from './agency-staff.actions';

@Injectable()
export class AgencyStaffEffects {
  loadAgencyStaff$ = createEffect(() =>
    this.dataPersistence.fetch(AgencyStaffActions.loadAgencyStaff, {
      run: (
        _action: ReturnType<typeof AgencyStaffActions.loadAgencyStaff>,
        _state: fromAgencyStaff.AgencyStaffPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return AgencyStaffActions.loadAgencyStaffSuccess({ agencyStaff: [] });
      },

      onError: (
        _action: ReturnType<typeof AgencyStaffActions.loadAgencyStaff>,
        error
      ) => {
        console.error('Error', error);
        return AgencyStaffActions.loadAgencyStaffFailure({ error });
      },
    })
  );

  constructor(
    // private actions$: Actions,
    private dataPersistence: DataPersistence<
      fromAgencyStaff.AgencyStaffPartialState
    >
  ) {}
}