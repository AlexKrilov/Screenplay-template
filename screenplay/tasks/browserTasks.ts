import { Answerable, Task, the } from "@serenity-js/core";
import {
	Click,
	Enter,
	Key,
	Navigate,
	Page,
	PageElement,
	Press,
} from "@serenity-js/web";
import { Ensure, equals } from "@serenity-js/assertions";

export const openBrowser = (): Task =>
	Task.where(the`#actor opens baseURL`, Navigate.to("/"));

export const typeInField = (
	item: Answerable<PageElement>,
	searchTerm: string,
): Task =>
	Task.where(
		the`#actor types search term ${searchTerm}`,
		Enter.theValue(searchTerm).into(item),
	);

export const pressEnter = (item: Answerable<PageElement>): Task =>
	Task.where(the`#actor presses enter`, Press.the(Key.Enter).in(item));

export const checkPageTitle = (pageTitle: string): Task =>
	Task.where(
		the`#actor checks page title`,
		Ensure.that(
			Page.current().title().describedAs("website title"),
			equals(pageTitle),
		),
	);

export const clickButton = (button: Answerable<PageElement>): Task =>
	Task.where(the`#actor presses button`, Click.on(button));
