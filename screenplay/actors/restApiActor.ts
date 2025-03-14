import { Actor, actorCalled } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { EActorNames } from "./eActors";

export class RestApiActor {
	private readonly _restApiActor: Actor;

	constructor(apiURL: URL) {
		this._restApiActor = actorCalled(EActorNames.RestApiActor).whoCan(
			CallAnApi.at(apiURL),
		);
	}

	public get actor() {
		return this._restApiActor;
	}
}
