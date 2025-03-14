import { Actor } from "@serenity-js/core";
import { EActorNames } from "./eActors";

type ActorFactory = (name: string) => Actor;

export class BrowserActor {
	private readonly _browserActor: Actor;

	constructor(actorCalled: ActorFactory) {
		this._browserActor = actorCalled(EActorNames.BrowserActor);
	}

	public get actor() {
		return this._browserActor;
	}
}
