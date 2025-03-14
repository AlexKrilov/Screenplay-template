import { isPresent } from "@serenity-js/assertions";
import { Wait } from "@serenity-js/core";
import { describe, it } from "@serenity-js/playwright-test";
import { BrowserActor } from "../screenplay/actors";
import {
  checkPageTitle,
  clickButton,
  openBrowser,
  pressEnter,
  typeInField,
} from "../screenplay/tasks";
import { acceptButton, textArea } from '../screenplay/questions';

describe("Browser Testing", () => {
  it("should open Google and search for Screenplay", async ({
    actorCalled,
  }) => {
    const webUi = new BrowserActor(actorCalled);
    await webUi.actor.attemptsTo(
      openBrowser(),
      clickButton(acceptButton()),
      checkPageTitle("Google"),
      typeInField(textArea(), "screenplay"),
      pressEnter(textArea()),
      Wait.until(checkPageTitle("screenplay - Google Search"), isPresent()),
    );
  });
});
