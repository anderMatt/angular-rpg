import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {RouterStoreModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {PowCoreModule} from '../game/pow-core/index';
import {GameModule} from '../game/game.module';
import {ROUTES} from './app.routes';
import {rootReducer} from './models/index';
import {PartyModule} from './components/party/index';
import {RpgModule} from './components/rpg/index';
import {WorldModule} from './routes/world/index';
import {CombatModule} from './routes/combat/index';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const APP_IMPORTS = [
  BrowserModule,
  CommonModule,
  FormsModule,
  HttpModule,
  CombatModule.forRoot(),
  WorldModule.forRoot(),
  RpgModule.forRoot(),
  PartyModule.forRoot(),
  MaterialModule.forRoot(),
  PowCoreModule.forRoot(),
  GameModule.forRoot(),
  // EffectsModule.run(ItemEffects),
  MaterialModule.forRoot(),
  ReactiveFormsModule,
  RouterModule.forRoot(ROUTES, {useHash: true}),
  StoreModule.provideStore(rootReducer),
  RouterStoreModule.connectRouter(),
  StoreDevtoolsModule.instrumentOnlyWithExtension()
  // StoreDevToolsModule
];
