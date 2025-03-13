import { Actor, actorCalled } from '@serenity-js/core';
import { EActorNames } from './eActors';

export class DbActor {
  private readonly _dbActor: Actor;

  constructor() {
    this._dbActor = actorCalled(EActorNames.DbActor);
  }

  public get actor() {
    return this._dbActor;
  }
}
