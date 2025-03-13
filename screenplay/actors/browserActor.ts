import { Actor, actorCalled } from '@serenity-js/core';
import { EActorNames } from './eActors';
import { Browser } from '@playwright/test';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

export class BrowserActor {
  private readonly _browserActor: Actor;

  constructor(browser: Browser) {
    this._browserActor = actorCalled(EActorNames.BrowserActor).whoCan(
      BrowseTheWebWithPlaywright.using(browser),
    );
  }

  public get actor() {
    return this._browserActor;
  }
}
