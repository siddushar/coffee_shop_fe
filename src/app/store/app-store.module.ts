import { NgModule } from "@angular/core"
import { StoreModule } from "@ngrx/store"
// import { StoreDevtoolsModule } from "@ngrx/store-devtools"

import { AppState } from "./reducers"

@NgModule({
  imports: [
    StoreModule.forRoot(AppState),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: 'prod' }),
  ],
  exports: [StoreModule],
})
export class AppStoreModule {}
