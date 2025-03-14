import { By, PageElement } from "@serenity-js/web";

export class browserQuestions {
	static get textArea() {
		return PageElement.located(By.css("textarea#APjFqb")).describedAs(
			"text area",
		);
	}
	static get acceptButton() {
		return PageElement.located(
			By.cssContainingText("button", "Piekrist visiem"),
		).describedAs("accept button by text");
	}
}
