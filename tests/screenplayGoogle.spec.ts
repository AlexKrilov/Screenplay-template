import { describe, it } from '@serenity-js/playwright-test';
import {
  checkPageTitle, clickButton,
  openBrowser,
  pressEnter,
  typeInField,
} from '../screenplay/tasks';
import { browserQuestions } from '../screenplay/questions';
import { Wait } from '@serenity-js/core';
import { isPresent } from '@serenity-js/assertions';
import { BrowserActor } from '../screenplay/actors';

describe('Browser Testing', () => {
  it('should open Google and search for Screenplay', async ({ browser }) => {
    const webUi = new BrowserActor(browser);
    await webUi.actor.attemptsTo(
      openBrowser(),
      clickButton(browserQuestions.acceptButton),
      checkPageTitle('Google'),
      typeInField(browserQuestions.textArea, 'screenplay'),
      pressEnter(browserQuestions.textArea),
      Wait.until(checkPageTitle('screenplay - Google Search'), isPresent())
    );
  });
});
